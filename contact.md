---
layout: default
title: Contact
permalink: /contact/
---

You can contact me using the form below. I commit to get back to you as soon as I am available and answer any questions you may have.

<h3>Also, to save both of us some time, you should know that:</h3>
<ul>
<li>Currently, I am not available for freelance projects.</li>
<li>I do not publish guest posts here, unless perhaps you have a cool front-end technique you'd like to share.</li>
</ul>

<form action="/sendemail.php" method="POST" onsubmit="return checkForm(this)">
<div id="contact-form">
	<div id="contact-inputs">
		<div><label for="name"><b>Your name</b></label><br>
		<input id="name" name="name" type="text" placeholder="John Doe" required></div>			
		<div><label for="email"><b>Your email address</b></label><br>
		<input id="email" name="email" type="email" placeholder="mail@example.com" required></div>
                <label for="humans" class="humans">Human check: Leave this field empty</label>
                <input type="text" name="humans" id="humans" class="humans" />       
	</div>	
	<div><label for="comments"><b>Comments</b></label></div>
	<div><textarea id="comments" name="comments" rows="7" required></textarea></div>	
	<div id="contact-submit"><input type="submit" value="Send Message"></div>
</div>
</form>

<p id="contact-submitted">Your message has been successfully sent!</p>