<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method Not Allowed"]);
    exit();
}

$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!$data) {
    $data = $_POST;
}

$name    = isset($data['name']) ? strip_tags(trim($data['name'])) : '';
$email   = isset($data['email']) ? filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL) : '';
$phone   = isset($data['phone']) ? strip_tags(trim($data['phone'])) : '';
$subject = isset($data['subject']) && !empty($data['subject']) ? strip_tags(trim($data['subject'])) : (isset($data['_subject']) ? strip_tags(trim($data['_subject'])) : 'Website Inquiry');
$message = isset($data['message']) ? strip_tags(trim($data['message'])) : '';

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Please fill in all required fields."]);
    exit();
}

// Zoho SMTP Configuration
$smtpConfig = [
    'hosts'    => ['ssl://smtppro.zoho.in', 'ssl://smtp.zoho.in', 'ssl://smtp.zoho.com', 'ssl://smtppro.zoho.com'],
    'port'     => 465,
    'username' => 'info@acmebricks.in',
    'password' => 'ry9PCbjck7c8',
    'from'     => 'info@acmebricks.in',
    'fromName' => 'ACME Bricks Website',
    'to'       => 'info@acmebricks.in',
    'timeout'  => 12
];

$email_subject = "New Inquiry from " . $name . " - " . $subject;

$body = "<html><body style='font-family: Arial, sans-serif; line-height: 1.6; color: #333;'>";
$body .= "<div style='max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; background: #ffffff;'>";
$body .= "<div style='background: #7ca13a; color: #ffffff; padding: 20px; text-align: center;'><h2 style='margin: 0; font-size: 22px;'>New Website Inquiry</h2><p style='margin: 5px 0 0 0; font-size: 14px; opacity: 0.95;'>ACME Bricks &amp; Blocks Website</p></div>";
$body .= "<div style='padding: 24px;'>";
$body .= "<table style='width: 100%; border-collapse: collapse;'>";
$body .= "<tr><td style='padding: 8px 0; width: 140px; font-weight: bold; color: #64748b;'>Full Name:</td><td style='padding: 8px 0; color: #0f172a;'><strong>" . htmlspecialchars($name) . "</strong></td></tr>";
$body .= "<tr><td style='padding: 8px 0; font-weight: bold; color: #64748b;'>Email:</td><td style='padding: 8px 0;'><a href='mailto:" . htmlspecialchars($email) . "' style='color: #7ca13a; text-decoration: none; font-weight: 600;'>" . htmlspecialchars($email) . "</a></td></tr>";
$body .= "<tr><td style='padding: 8px 0; font-weight: bold; color: #64748b;'>Phone:</td><td style='padding: 8px 0; color: #0f172a;'>" . htmlspecialchars($phone ?: 'Not provided') . "</td></tr>";
$body .= "<tr><td style='padding: 8px 0; font-weight: bold; color: #64748b;'>Product / Subject:</td><td style='padding: 8px 0; color: #0f172a; font-weight: 600;'>" . htmlspecialchars($subject) . "</td></tr>";
$body .= "</table>";
$body .= "<div style='margin-top: 20px; padding: 16px; background: #f8fafc; border-left: 4px solid #7ca13a; border-radius: 4px;'>";
$body .= "<p style='margin: 0 0 8px 0; font-weight: bold; color: #475569;'>Message / Requirements:</p>";
$body .= "<p style='margin: 0; color: #1e293b; white-space: pre-line;'>" . nl2br(htmlspecialchars($message)) . "</p>";
$body .= "</div>";
$body .= "</div>";
$body .= "<div style='background: #f1f5f9; padding: 12px; text-align: center; font-size: 12px; color: #64748b;'>Received via ACME Bricks contact form &bull; " . date('d M Y, h:i A') . "</div>";
$body .= "</div></body></html>";

function sendZohoSmtp($config, $subject, $htmlBody, $replyToEmail, $replyToName) {
    $lastError = '';

    foreach ($config['hosts'] as $host) {
        $socket = @stream_socket_client(
            $host . ':' . $config['port'],
            $errno,
            $errstr,
            $config['timeout'],
            STREAM_CLIENT_CONNECT,
            stream_context_create([
                'ssl' => [
                    'verify_peer' => false,
                    'verify_peer_name' => false,
                    'allow_self_signed' => true
                ]
            ])
        );

        if (!$socket) {
            $lastError = "Connection to $host failed: $errstr ($errno)";
            continue;
        }

        stream_set_timeout($socket, $config['timeout']);

        $getResponse = function() use ($socket) {
            $response = '';
            while (($line = fgets($socket, 512)) !== false) {
                $response .= $line;
                if (substr($line, 3, 1) === ' ') {
                    break;
                }
            }
            return $response;
        };

        $sendCommand = function($cmd) use ($socket, $getResponse) {
            fputs($socket, $cmd . "\r\n");
            return $getResponse();
        };

        $init = $getResponse();
        if (substr($init, 0, 3) !== '220') {
            fclose($socket);
            $lastError = "Initial greeting failed on $host: " . trim($init);
            continue;
        }

        $ehlo = $sendCommand("EHLO " . ($_SERVER['SERVER_NAME'] ?? 'localhost'));
        if (substr($ehlo, 0, 3) !== '250') {
            fclose($socket);
            $lastError = "EHLO failed: " . trim($ehlo);
            continue;
        }

        $auth = $sendCommand("AUTH LOGIN");
        if (substr($auth, 0, 3) !== '334') {
            fclose($socket);
            $lastError = "AUTH LOGIN failed: " . trim($auth);
            continue;
        }

        $userRes = $sendCommand(base64_encode($config['username']));
        if (substr($userRes, 0, 3) !== '334') {
            fclose($socket);
            $lastError = "Username rejected: " . trim($userRes);
            continue;
        }

        $passRes = $sendCommand(base64_encode($config['password']));
        if (substr($passRes, 0, 3) !== '235') {
            fclose($socket);
            $lastError = "Authentication failed: " . trim($passRes);
            continue;
        }

        $mailFrom = $sendCommand("MAIL FROM:<" . $config['from'] . ">");
        if (substr($mailFrom, 0, 3) !== '250') {
            fclose($socket);
            $lastError = "MAIL FROM failed: " . trim($mailFrom);
            continue;
        }

        $rcptTo = $sendCommand("RCPT TO:<" . $config['to'] . ">");
        if (substr($rcptTo, 0, 3) !== '250') {
            fclose($socket);
            $lastError = "RCPT TO failed: " . trim($rcptTo);
            continue;
        }

        $data = $sendCommand("DATA");
        if (substr($data, 0, 3) !== '354') {
            fclose($socket);
            $lastError = "DATA command failed: " . trim($data);
            continue;
        }

        $mimeHeaders = [
            "MIME-Version: 1.0",
            "Content-Type: text/html; charset=UTF-8",
            "From: =?UTF-8?B?" . base64_encode($config['fromName']) . "?= <" . $config['from'] . ">",
            "To: <" . $config['to'] . ">",
            "Reply-To: =?UTF-8?B?" . base64_encode($replyToName) . "?= <" . $replyToEmail . ">",
            "Subject: =?UTF-8?B?" . base64_encode($subject) . "?=",
            "Date: " . date('r'),
            "X-Mailer: ACME-Zoho-Mailer/1.0"
        ];

        $emailContent = implode("\r\n", $mimeHeaders) . "\r\n\r\n" . $htmlBody . "\r\n.";
        $sendRes = $sendCommand($emailContent);

        $sendCommand("QUIT");
        fclose($socket);

        if (substr($sendRes, 0, 3) === '250') {
            return ["success" => true, "message" => "Email sent successfully via Zoho SMTP!"];
        } else {
            $lastError = "Sending data failed: " . trim($sendRes);
        }
    }

    return ["success" => false, "error" => $lastError];
}

$smtpResult = sendZohoSmtp($smtpConfig, $email_subject, $body, $email, $name);

if ($smtpResult['success']) {
    echo json_encode(["success" => true, "message" => "Message sent successfully!"]);
} else {
    // Fallback to standard mail() if socket SMTP encountered issue
    $fallbackHeaders  = "MIME-Version: 1.0\r\n";
    $fallbackHeaders .= "Content-type: text/html; charset=UTF-8\r\n";
    $fallbackHeaders .= "From: ACME Bricks Website <" . $smtpConfig['from'] . ">\r\n";
    $fallbackHeaders .= "Reply-To: " . $email . "\r\n";
    $fallbackHeaders .= "X-Mailer: PHP/" . phpversion();

    $mailSent = @mail($smtpConfig['to'], $email_subject, $body, $fallbackHeaders);
    if ($mailSent) {
        echo json_encode(["success" => true, "message" => "Message sent successfully!"]);
    } else {
        echo json_encode([
            "success" => false, 
            "message" => "Failed to send email. " . ($smtpResult['error'] ?? '')
        ]);
    }
}
?>
