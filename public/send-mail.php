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
$subject = isset($data['subject']) ? strip_tags(trim($data['subject'])) : 'Website Inquiry';
$message = isset($data['message']) ? strip_tags(trim($data['message'])) : '';

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Please fill in all required fields."]);
    exit();
}

$to = "info@acmebricks.in";
$email_subject = "New Inquiry from " . $name . " - ACME Bricks Website (" . $subject . ")";

$body = "<h2>New Website Inquiry - ACME Bricks</h2>\n";
$body .= "<p><strong>Name:</strong> " . htmlspecialchars($name) . "</p>\n";
$body .= "<p><strong>Email:</strong> " . htmlspecialchars($email) . "</p>\n";
$body .= "<p><strong>Phone:</strong> " . htmlspecialchars($phone) . "</p>\n";
$body .= "<p><strong>Subject / Product:</strong> " . htmlspecialchars($subject) . "</p>\n";
$body .= "<p><strong>Message:</strong><br/>" . nl2br(htmlspecialchars($message)) . "</p>\n";
$body .= "<hr><p><small>Sent from ACME Bricks Website Contact Form</small></p>";

$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: ACME Bricks Website <no-reply@acmebricks.in>\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$mailSent = @mail($to, $email_subject, $body, $headers);

if ($mailSent) {
    echo json_encode(["success" => true, "message" => "Message sent successfully!"]);
} else {
    // If local PHP mail fails or not configured, return status
    echo json_encode(["success" => false, "message" => "Unable to send mail via local server."]);
}
?>
