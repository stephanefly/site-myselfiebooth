<?php
declare(strict_types=1);

function contact_response(int $status, string $code, string $message): array
{
    return ['status' => $status, 'ok' => $status === 200, 'code' => $code, 'message' => $message];
}

function contact_rate_limit(string $ip): bool
{
    $directory = sys_get_temp_dir() . '/myselfiebooth-contact';
    if (!is_dir($directory) && !@mkdir($directory, 0700, true) && !is_dir($directory)) {
        throw new RuntimeException('Contact storage unavailable');
    }
    $file = @fopen($directory . '/' . hash('sha256', $ip) . '.json', 'c+');
    if (!$file || !flock($file, LOCK_EX)) {
        if ($file) fclose($file);
        throw new RuntimeException('Contact lock unavailable');
    }
    $now = time();
    $previous = json_decode(stream_get_contents($file) ?: '[]', true);
    $times = array_values(array_filter(is_array($previous) ? $previous : [], static function ($time) use ($now) { return is_int($time) && $time > $now - 3600; }));
    $allowed = count($times) < 5 && (!$times || $now - max($times) >= 60);
    if ($allowed) {
        $times[] = $now;
        rewind($file);
        ftruncate($file, 0);
        fwrite($file, json_encode($times));
        fflush($file);
    }
    flock($file, LOCK_UN);
    fclose($file);
    return $allowed;
}

function contact_handle(array $server, array $input, ?callable $send = null, ?callable $rateLimit = null): array
{
    if (($server['REQUEST_METHOD'] ?? '') !== 'POST') {
        return contact_response(405, 'method_not_allowed', 'Utilisez le formulaire de contact pour envoyer votre message.');
    }
    if ((int)($server['CONTENT_LENGTH'] ?? 0) > 20000) {
        return contact_response(413, 'too_large', 'Votre message est trop long.');
    }
    $origin = $server['HTTP_ORIGIN'] ?? '';
    if (($origin !== '' && !in_array($origin, ['https://myselfiebooth-paris.fr', 'https://www.myselfiebooth-paris.fr'], true)) || ($server['HTTP_SEC_FETCH_SITE'] ?? '') === 'cross-site') {
        return contact_response(403, 'invalid_origin', 'Envoyez votre message depuis le formulaire de notre site.');
    }
    $fields = [];
    foreach (['name' => 400, 'email' => 254, 'phone' => 160, 'event_date' => 10, 'city' => 480, 'message' => 20000, 'website' => 1000] as $name => $limit) {
        $value = $input[$name] ?? '';
        if (!is_string($value) || strlen($value) > $limit || preg_match('//u', $value) !== 1) {
            return contact_response(400, 'invalid_fields', 'Vérifiez les champs du formulaire et la longueur de votre message.');
        }
        $fields[$name] = trim($value);
    }
    if ($fields['website'] !== '' || $fields['name'] === '' || $fields['message'] === '' || !filter_var($fields['email'], FILTER_VALIDATE_EMAIL) || preg_match('/[\r\n]/', $fields['email'])) {
        return contact_response(400, 'invalid_fields', 'Indiquez votre nom, une adresse e-mail valide et votre message.');
    }
    if ($fields['event_date'] !== '') {
        $date = DateTimeImmutable::createFromFormat('!Y-m-d', $fields['event_date']);
        if (!$date || $date->format('Y-m-d') !== $fields['event_date']) {
            return contact_response(400, 'invalid_date', 'Vérifiez la date de votre événement.');
        }
    }
    try {
        $allowed = $rateLimit ? $rateLimit($server['REMOTE_ADDR'] ?? 'unknown') : contact_rate_limit($server['REMOTE_ADDR'] ?? 'unknown');
        if (!$allowed) return contact_response(429, 'rate_limited', 'Un message a déjà été envoyé récemment. Patientez une minute avant de réessayer.');
        $recipient = 'contact@myselfiebooth-paris.fr';
        $subject = '=?UTF-8?B?' . base64_encode('Nouveau message depuis le site MySelfieBooth') . '?=';
        $body = "Nouveau message du formulaire de contact\n\nNom : " . $fields['name'] . "\nE-mail : " . $fields['email'] . "\nTéléphone : " . ($fields['phone'] ?: 'Non renseigné') . "\nDate : " . ($fields['event_date'] ?: 'Non renseignée') . "\nLieu : " . ($fields['city'] ?: 'Non renseigné') . "\n\nMessage :\n" . $fields['message'];
        $headers = ['From' => 'MySelfieBooth <contact@myselfiebooth-paris.fr>', 'Reply-To' => $fields['email'], 'MIME-Version' => '1.0', 'Content-Type' => 'text/plain; charset=UTF-8'];
        $sender = $send ?? 'mail';
        if (!is_callable($sender) || !$sender($recipient, $subject, $body, $headers)) {
            return contact_response(503, 'send_failed', 'L’envoi n’a pas abouti. Réessayez ou contactez-nous par e-mail ou téléphone.');
        }
        return contact_response(200, 'sent', 'Votre message a bien été transmis.');
    } catch (Throwable $error) {
        error_log('MySelfieBooth contact: delivery unavailable');
        return contact_response(503, 'send_failed', 'L’envoi est momentanément indisponible. Contactez-nous par e-mail ou téléphone.');
    }
}

if (PHP_SAPI !== 'cli') {
    header('Cache-Control: no-store');
    header('X-Robots-Tag: noindex, nofollow');
    header('X-Content-Type-Options: nosniff');
    $result = contact_handle($_SERVER, $_POST);
    if ($result['status'] === 405) header('Allow: POST');
    if ($result['status'] === 429) header('Retry-After: 60');
    if (strpos($_SERVER['HTTP_ACCEPT'] ?? '', 'application/json') !== false) {
        http_response_code($result['status']);
        header('Content-Type: application/json; charset=UTF-8');
        echo json_encode(['ok' => $result['ok'], 'code' => $result['code'], 'message' => $result['message']], JSON_UNESCAPED_UNICODE);
    } elseif ($result['ok']) {
        header('Location: /contact/merci/', true, 303);
    } else {
        http_response_code($result['status']);
        header('Content-Type: text/html; charset=UTF-8');
        echo '<!doctype html><html lang="fr"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Votre message | MySelfieBooth</title><main><h1>Votre message n’a pas été envoyé</h1><p>' . htmlspecialchars($result['message'], ENT_QUOTES, 'UTF-8') . '</p><p><a href="/contact/">Revenir au formulaire</a> · <a href="mailto:contact@myselfiebooth-paris.fr">Nous écrire par e-mail</a> · <a href="tel:0699733998">06 99 73 39 98</a></p></main></html>';
    }
}
