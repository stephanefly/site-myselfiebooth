<?php
// Runs on IONOS PHP hosting alongside the static Next.js export.
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function respond(int $status, array $payload): void {
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, ['success' => false, 'error' => 'Utilisez le formulaire pour envoyer votre demande.']);
}

// JSON-only requests cannot be posted by an ordinary cross-site form.
// Do not enable CORS: the form and this endpoint share the same origin.
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '' && $origin !== 'https://myselfiebooth-paris.fr') {
    respond(403, ['success' => false, 'error' => 'Veuillez envoyer votre demande depuis notre site.']);
}
if (($_SERVER['HTTP_SEC_FETCH_SITE'] ?? '') === 'cross-site') {
    respond(403, ['success' => false, 'error' => 'Veuillez envoyer votre demande depuis notre site.']);
}
if (strtolower(trim(explode(';', $_SERVER['CONTENT_TYPE'] ?? '')[0])) !== 'application/json') {
    respond(415, ['success' => false, 'error' => 'Veuillez utiliser le formulaire du site.']);
}
if ((int) ($_SERVER['CONTENT_LENGTH'] ?? 0) > 65536) {
    respond(413, ['success' => false, 'error' => 'Votre message est trop long.']);
}
$raw = file_get_contents('php://input', false, null, 0, 65537);
if ($raw === false || strlen($raw) > 65536) {
    respond(413, ['success' => false, 'error' => 'Votre message est trop long.']);
}
$data = json_decode($raw, true);
if (!is_array($data)) {
    respond(400, ['success' => false, 'error' => 'Le formulaire est incomplet.']);
}
foreach (['name', 'email', 'company', 'message', 'website', 'page'] as $key) {
    if (isset($data[$key]) && !is_string($data[$key])) {
        respond(422, ['success' => false, 'error' => 'Vérifiez les champs du formulaire.']);
    }
}
if (trim($data['website'] ?? '') !== '') {
    respond(422, ['success' => false, 'error' => 'L’envoi n’a pas abouti. Veuillez réessayer.']);
}
$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$company = trim($data['company'] ?? '');
$message = trim($data['message'] ?? '');
$page = trim($data['page'] ?? '/');
// UTF-8 lengths without requiring the optional mbstring extension.
function textLength(string $value): int {
    $count = preg_match_all('/./us', $value);
    return $count === false ? PHP_INT_MAX : $count;
}
if ($name === '' || textLength($name) > 120 || strlen($email) > 254
    || !filter_var($email, FILTER_VALIDATE_EMAIL) || preg_match('/[\r\n]/', $email)
    || textLength($company) > 180 || textLength($message) < 10 || textLength($message) > 5000) {
    respond(422, ['success' => false, 'error' => 'Vérifiez votre nom, votre adresse e-mail et votre message (10 à 5 000 caractères).']);
}
if (!preg_match('~^/[a-zA-Z0-9/_-]*$~D', $page) || strlen($page) > 200) {
    $page = '/';
}

// Five submissions per IP every 15 minutes. No message or raw IP is stored.
// Keep state outside the public directory; flock makes concurrent requests safe.
$ratePath = sys_get_temp_dir() . '/myselfiebooth-contact-' . hash('sha256', __DIR__ . ($_SERVER['REMOTE_ADDR'] ?? 'unknown'));
$rateFile = @fopen($ratePath, 'c+');
if (!$rateFile || !flock($rateFile, LOCK_EX)) {
    if (is_resource($rateFile)) fclose($rateFile);
    respond(503, ['success' => false, 'error' => 'L’envoi est momentanément indisponible. Réessayez plus tard.']);
}
@chmod($ratePath, 0600);
$rate = json_decode(stream_get_contents($rateFile), true);
$now = time();
if (!is_array($rate) || ($rate['until'] ?? 0) <= $now) {
    $rate = ['until' => $now + 900, 'count' => 0];
}
if ($rate['count'] >= 5) {
    header('Retry-After: ' . max(1, $rate['until'] - $now));
    flock($rateFile, LOCK_UN);
    fclose($rateFile);
    respond(429, ['success' => false, 'error' => 'Plusieurs demandes ont déjà été envoyées. Patientez quelques minutes avant de réessayer.']);
}
$rate['count']++;
rewind($rateFile);
ftruncate($rateFile, 0);
$saved = fwrite($rateFile, json_encode($rate));
fflush($rateFile);
flock($rateFile, LOCK_UN);
fclose($rateFile);
if ($saved === false) {
    respond(503, ['success' => false, 'error' => 'L’envoi est momentanément indisponible. Réessayez plus tard.']);
}

$recipient = 'contact@myselfiebooth-paris.fr';
$subject = '=?UTF-8?B?' . base64_encode('MySelfieBooth — Demande spécifique depuis le site') . '?=';
$body = "Nouvelle demande spécifique depuis le site MySelfieBooth\n\n"
    . "Nom et prénom : " . $name . "\n"
    . "E-mail : " . $email . "\n"
    . "Raison sociale : " . ($company !== '' ? $company : 'Non renseignée') . "\n"
    . "Page d’origine : https://myselfiebooth-paris.fr" . $page . "\n\n"
    . "Message du visiteur :\n" . $message . "\n";
$headers = [
    'From' => 'MySelfieBooth <contact@myselfiebooth-paris.fr>',
    'Reply-To' => $email,
    'MIME-Version' => '1.0',
    'Content-Type' => 'text/plain; charset=UTF-8',
    'Content-Transfer-Encoding' => 'base64',
];
if (!function_exists('mail') || !@mail($recipient, $subject, chunk_split(base64_encode($body)), $headers)) {
    respond(503, ['success' => false, 'error' => 'Votre message n’a pas pu être envoyé. Réessayez plus tard ou contactez-nous directement.']);
}
respond(200, ['success' => true]);
