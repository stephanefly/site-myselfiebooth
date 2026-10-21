"""Exercise the real PHP handler with a local mail capture; no email is sent.

Run: python3 scripts/test-contact.py --php /path/to/php
"""
import argparse
import email
import email.header
import json
from pathlib import Path
import shutil
import socket
import subprocess
import tempfile
import time
import unittest
import urllib.error
import urllib.request

parser = argparse.ArgumentParser()
parser.add_argument("--php", default="php")
args, remaining = parser.parse_known_args()
PHP = shutil.which(args.php) or args.php
ROOT = Path(__file__).resolve().parents[1]


class ContactHandlerTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.temp = tempfile.TemporaryDirectory(prefix="msb-contact-test-")
        cls.directory = Path(cls.temp.name)
        cls.capture = cls.directory / "mail.eml"
        cls.failure = cls.directory / "fail-mail"
        transport = cls.directory / "capture.py"
        transport.write_text(
            "import sys\nfrom pathlib import Path\n"
            f"Path({str(cls.capture)!r}).write_bytes(sys.stdin.buffer.read())\n"
            f"sys.exit(1 if Path({str(cls.failure)!r}).exists() else 0)\n"
        )
        with socket.socket() as sock:
            sock.bind(("127.0.0.1", 0))
            port = sock.getsockname()[1]
        cls.url = f"http://127.0.0.1:{port}/contact.php"
        cls.server = subprocess.Popen([
            PHP, "-n", "-d", f"sys_temp_dir={cls.directory}",
            "-d", f"sendmail_path=/usr/bin/python3 {transport}",
            "-S", f"127.0.0.1:{port}", "-t", str(ROOT / "public"),
        ], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        for _ in range(100):
            try:
                urllib.request.urlopen(cls.url, timeout=.2)
            except urllib.error.HTTPError:
                return
            except OSError:
                time.sleep(.05)
        cls.tearDownClass()
        raise RuntimeError("PHP test server did not start")

    @classmethod
    def tearDownClass(cls):
        cls.server.terminate()
        cls.server.wait(timeout=5)
        cls.temp.cleanup()

    def setUp(self):
        self.capture.unlink(missing_ok=True)
        self.failure.unlink(missing_ok=True)
        for path in self.directory.glob("myselfiebooth-contact-*"):
            path.unlink()
        self.payload = dict(name="Élodie Exemple", email="elodie@example.test",
                            company="Société de test", message="Bonjour, une demande sur mesure pour notre soirée.",
                            website="", page="/evenements/corporates")

    def request(self, payload=None, *, origin="https://myselfiebooth-paris.fr", method="POST", content_type="application/json", raw=None):
        data = raw if raw is not None else json.dumps(self.payload if payload is None else payload).encode()
        request = urllib.request.Request(self.url, data=data if method == "POST" else None, method=method,
                                        headers={"Content-Type": content_type, "Origin": origin})
        try:
            response = urllib.request.urlopen(request, timeout=3)
        except urllib.error.HTTPError as error:
            response = error
        with response:
            return response.status, json.loads(response.read()), response.headers

    def test_mail_contents_and_reply_to(self):
        status, result, headers = self.request()
        self.assertEqual(status, 200)
        self.assertTrue(result["success"])
        self.assertEqual(headers["Cache-Control"], "no-store")
        message = email.message_from_bytes(self.capture.read_bytes())
        self.assertEqual(message["To"], "contact@myselfiebooth-paris.fr")
        self.assertEqual(message["Reply-To"], "elodie@example.test")
        self.assertIn("contact@myselfiebooth-paris.fr", message["From"])
        body = message.get_payload(decode=True).decode("utf-8")
        for value in [self.payload["name"], self.payload["company"], self.payload["message"],
                      "https://myselfiebooth-paris.fr/evenements/corporates"]:
            self.assertIn(value, body)

    def test_company_is_optional(self):
        del self.payload["company"]
        self.assertEqual(self.request()[0], 200)

    def test_validation_rejects_invalid_fields_and_injection(self):
        for field, value in [("name", ""), ("name", ["bad"]), ("email", "bad"),
                             ("email", "a@example.test\r\nBcc: victim@example.test"),
                             ("message", "short"), ("message", "a" * 5001),
                             ("company", "a" * 181), ("website", "spam")]:
            with self.subTest(field=field, value=str(value)[:30]):
                self.assertEqual(self.request({**self.payload, field: value})[0], 422)
        self.assertFalse(self.capture.exists())

    def test_multibyte_limits(self):
        self.payload["name"] = "é" * 120
        self.payload["message"] = "é" * 5000
        self.assertEqual(self.request()[0], 200)
        self.payload["name"] += "é"
        self.assertEqual(self.request()[0], 422)

    def test_cross_site_and_wrong_content_type(self):
        self.assertEqual(self.request(origin="https://example.test")[0], 403)
        self.assertEqual(self.request(content_type="application/x-www-form-urlencoded")[0], 415)
        self.assertFalse(self.capture.exists())

    def test_method_malformed_and_oversized_input(self):
        self.assertEqual(self.request(method="GET")[0], 405)
        self.assertEqual(self.request(raw=b"{invalid")[0], 400)
        self.assertEqual(self.request(raw=b"x" * 66000)[0], 413)

    def test_rate_limit(self):
        for _ in range(5):
            self.assertEqual(self.request()[0], 200)
        status, result, headers = self.request()
        self.assertEqual(status, 429)
        self.assertFalse(result["success"])
        self.assertGreater(int(headers["Retry-After"]), 0)

    def test_expired_rate_limit(self):
        self.request()
        rate_file = next(self.directory.glob("myselfiebooth-contact-*"))
        rate_file.write_text(json.dumps({"count": 5, "until": int(time.time()) - 1}))
        self.assertEqual(self.request()[0], 200)

    def test_transport_failure_is_not_success(self):
        self.failure.touch()
        status, result, _ = self.request()
        self.assertEqual(status, 503)
        self.assertFalse(result["success"])

    def test_untrusted_source_page_is_discarded(self):
        self.payload["page"] = "https://example.test/?secret=private"
        self.assertEqual(self.request()[0], 200)
        body = email.message_from_bytes(self.capture.read_bytes()).get_payload(decode=True).decode()
        self.assertNotIn("secret=private", body)


if __name__ == "__main__":
    unittest.main(argv=[__file__, *remaining])
