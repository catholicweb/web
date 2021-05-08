<?php

$to = 'arrietaeguren@gmail.com';
$from = 'seminario@iglesianavarra.org';
$name = $_REQUEST['name'] or '';
//$reply_to= $_REQUEST['reply_to'];
$subject = 'Petición web: ' . $name;
$message = $_REQUEST['message'];
$email = $_REQUEST['email'] or '';
$text = 'Nombre: ' . $name . "\r\n\r\nPeticion: " . $message. "\r\n\r\nEmail: " . $email;

$headers = 'From: ' . $name . ' <' . $from . ">\r\n" . 'X-Mailer: PHP/' . phpversion();
//'Reply-To: <' . $reply_to . ">\r\n" .

echo mail($to, $subject, $text, $headers);

//mail("arrietaeguren.es", "Fake mail enviado", $message, $headers);
echo 'Gracias ' . $name . '! Cuenta con nuestras oraciones!';
?>
