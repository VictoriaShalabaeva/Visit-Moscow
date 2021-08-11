/**
 * The following code sends emails from the form.
 * Code credit: the code is written following the Code Institute tutorials and EmailJS documentation (https://www.emailjs.com/docs/)
 */

 function sendMail(contactForm) {
	emailjs.send("service_ixuhdf9", "template_id_contact_form", {
		"from_name": contactForm.name.value,
		"from_email": contactForm.email_address.value,
		"message": contactForm.your_message.value
	}).then(function(response) { // message displayed if form submission is successful
		document.getElementById('contact-form').innerHTML = `
            <p class="response">Your message has been sent successfully!</p>
            <p class="response">We will be in touch with you within two working days.</p>`;
	}, function(error) { // message displayed if form submission failed
		document.getElementById('contact-form').innerHTML = `
            <p class="response">Your message was not sent, please try again.</p>`;
	});
	return false; // To block from loading a new page
}