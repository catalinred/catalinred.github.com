<?php
   // from the form
   $name = trim(strip_tags($_POST['name']));
   $email = trim(strip_tags($_POST['email']));
   $comments = htmlentities($_POST['comments']);

   // set here
   $subject = "RTD - Contact form submitted!";
   $to = 'redmaniack@gmail.com';

   $body = <<<HTML
$comments
HTML;

   $headers = "From: $email\r\n";
   $headers .= "Content-type: text/html\r\n";
   
	if(!empty($_POST['humans'])) {
		// it's spam
	} else {
		// it's human
		
	   // send the email
	   mail($to, $subject, $body, $headers);
	   
	   // redirect afterwords, if needed
	   header('Location: /contact#submitted');			
	}
?>