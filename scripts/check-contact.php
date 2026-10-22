<?php
declare(strict_types=1);
require __DIR__ . '/../public/api/contact.php';

function check_contact(bool $condition, string $message): void
{
    if (!$condition) throw new RuntimeException($message);
}

$request = ['REQUEST_METHOD' => 'POST', 'HTTP_ORIGIN' => 'https://myselfiebooth-paris.fr', 'REMOTE_ADDR' => 'test'];
$input = ['name' => 'Émilie Test', 'email' => 'emilie@example.com', 'message' => 'Une question pour notre mariage.', 'event_date' => '2027-06-12', 'city' => 'Melun'];
$sent = [];
$sender = static function ($to, $subject, $body, $headers) use (&$sent): bool {
    $sent[] = compact('to', 'subject', 'body', 'headers');
    return true;
};
$allow = static function (): bool { return true; };
$deny = static function (): bool { return false; };

$result = contact_handle($request, $input, $sender, $allow);
check_contact($result['ok'] && count($sent) === 1, 'Valid request did not reach the transport.');
check_contact($sent[0]['to'] === 'contact@myselfiebooth-paris.fr', 'Recipient must be fixed.');
check_contact($sent[0]['headers']['From'] === 'MySelfieBooth <contact@myselfiebooth-paris.fr>', 'Sender must be fixed.');
check_contact($sent[0]['headers']['Reply-To'] === $input['email'], 'Reply-To must point to the validated visitor.');
check_contact(strpos($sent[0]['body'], $input['message']) !== false && strpos($sent[0]['body'], $input['name']) !== false, 'Message content lost.');

$cases = [
    [['REQUEST_METHOD' => 'GET'] + $request, $input, 405, $allow],
    [$request, [], 400, $allow],
    [$request, ['email' => "visitor@example.com\r\nBcc: other@example.com"] + $input, 400, $allow],
    [$request, ['email' => ['visitor@example.com']] + $input, 400, $allow],
    [$request, ['name' => '  '] + $input, 400, $allow],
    [$request, ['website' => 'https://spam.example'] + $input, 400, $allow],
    [$request, ['event_date' => '2027-02-30'] + $input, 400, $allow],
    [$request, ['message' => str_repeat('a', 20001)] + $input, 400, $allow],
    [['CONTENT_LENGTH' => 20001] + $request, $input, 413, $allow],
    [['HTTP_ORIGIN' => 'https://other.example'] + $request, $input, 403, $allow],
    [['HTTP_SEC_FETCH_SITE' => 'cross-site'] + $request, $input, 403, $allow],
    [$request, $input, 429, $deny],
];
foreach ($cases as [$server, $fields, $expected, $limiter]) {
    $result = contact_handle($server, $fields, $sender, $limiter);
    check_contact($result['status'] === $expected && !$result['ok'], 'Invalid request returned an unexpected status.');
}
check_contact(count($sent) === 1, 'Rejected requests must never send mail.');
$failed = contact_handle($request, $input, static function (): bool { return false; }, $allow);
check_contact($failed['status'] === 503 && !$failed['ok'], 'Transport failure must never claim success.');
$exception = contact_handle($request, $input, static function (): bool { throw new RuntimeException('mail unavailable'); }, $allow);
check_contact($exception['status'] === 503 && !$exception['ok'], 'Transport exception must never claim success.');
$minimal = contact_handle($request, ['name' => 'Test', 'email' => 'test@example.com', 'message' => 'Bonjour'], $sender, $allow);
check_contact($minimal['ok'], 'Optional fields must remain optional.');

$ip = 'test-' . bin2hex(random_bytes(12));
try {
    check_contact(contact_rate_limit($ip), 'First attempt should be allowed.');
    check_contact(!contact_rate_limit($ip), 'An immediate second attempt should be blocked.');
} finally {
    @unlink(sys_get_temp_dir() . '/myselfiebooth-contact/' . hash('sha256', $ip) . '.json');
}
echo "Contact checks OK: validation, header injection, rate limit, optional fields and transport failures. No email sent.\n";
