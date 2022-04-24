<?php

function send_mail($to, $body, $subject)
{
	//require '../PHPMailer/PHPMailerAutoload.php';
    require '../../../PHPMailer/PHPMailerAutoload.php';
	
	$mail = new PHPMailer;
	$mail->isSMTP();
	$mail->Mailer = "smtp";
	$mail->Host = 'smtp.gmail.com';
	$mail->SMTPAuth = true;
	$mail->Username = 'mail.lab387@gmail.com';
	$mail->Password = 'Gmail.26022021.Web.Admin.Lab387.02!';
	$mail->Priority = 1;
	$mail->SMTPSecure = 'StartTLS';
	$mail->Port = 587;
	$mail->From = 'Lab387@labmail.me';
	$mail->FromName = 'Lab387';
	$mail->addAddress($to);
	$mail->addReplyTo('mail.lab387@gmail.com', 'Reply');
	//$mail->SMTPDebug  = 3;
	//$mail->Debugoutput = function($str, $level) {echo "debug level $level; message: $str";}; 
	//$mail->Debugoutput = 'echo';
	$mail->isHTML(true);
	
	$mail->Subject = $subject;
	$mail->Body    = $body;
	$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
	
	if(!$mail->send())
	{
		echo 'Message could not be sent.';
		echo 'Mailer Error: ' . $mail->ErrorInfo;
	} 
	else 
	{
	return true;
	}
}
 
?>