<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Email address where you want to receive the form submissions
    $to = "your_email@example.com";
    
    $subject = "New Form Submission from $name";
    
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();
    
    $mailBody = "Name: $name\n" .
                "Email: $email\n\n" .
                "Message:\n$message";
    
    // Send the email
    if (mail($to, $subject, $mailBody, $headers)) {
        // Redirect the user to another page
        header("Location: thank_you.html");
        exit(); // Make sure to exit to prevent further execution of the script
    } else {
        // Optionally, you can handle errors here or simply redirect to an error page
        header("Location: error.html");
        exit();
    }
}
?>



<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // SMTP Configuration
    $smtpServer = "your_smtp_server"; // Replace with your SMTP server hostname
    $smtpPort = 587; // Replace with the correct port number (e.g., 587 for TLS)
    $smtpEncryption = "tls"; // Replace with "ssl" or "tls" as needed
    $email = "your_email@example.com"; // Replace with your email address
    $password = "your_email_password"; // Replace with your email password
    
    // Email address where you want to receive the form submissions
    $to = "recipient_email@example.com"; // Replace with the recipient's email
    
    $subject = "New Form Submission from $name";
    
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();
    
    $mailBody = "Name: $name\n" .
                "Email: $email\n\n" .
                "Message:\n$message";
    
    // Configure SMTP settings
    ini_set("SMTP", $smtpServer);
    ini_set("smtp_port", $smtpPort);
    ini_set("sendmail_from", $email);
    
    // Send the email using the SMTP server
    if (mail($to, $subject, $mailBody, $headers)) {
        // Redirect the user to another page
        header("Location: thank_you.html");
        exit(); // Make sure to exit to prevent further execution of the script
    } else {
        // Optionally, you can handle errors here or simply redirect to an error page
        header("Location: error.html");
        exit();
    }
}
?>
