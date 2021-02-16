<?php

	$to      = 'arrietaeguren@gmail.com';
	$from    = 'arrietaeguren@gmail.com';
	$fromName= $_REQUEST['fromName'] or '';
	//$reply_to= $_REQUEST['reply_to'];
	$subject = $_REQUEST['subject'] or 'Titulo del mensaje';
	$message = $_REQUEST['message'] or 'Contenido del mensaje';

	$headers = 'From: '. $fromName .' <' . $from . ">\r\n" . 
	    //'Reply-To: <' . $reply_to . ">\r\n" .
	    'X-Mailer: PHP/' . phpversion();

	echo mail($to, $subject, $message, $headers);

	//mail("arrietaeguren.es", "Fake mail enviado", $message, $headers);
	echo "Gracias por email! Cuenta con nuestras oraciones!";
?>
