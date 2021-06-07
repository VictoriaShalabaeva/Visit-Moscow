//The following code sends emails from the form

//The code is written following the Code Institute tutorials and EmailJS documentation

function sendMail(contactForm) {
    emailjs.send("service_jr9gthn","template_id_contact_form",{
        "from_name": contactForm.name.value,
        "from_email": contactForm.email_address.value,
        "message": contactForm.your-message.value,
    })
    .then(
        function(response) {
            document.getElementById('contact-form').innerHTML = `<p>Your message has been sent successfully, we will be in touch with you within two working days.</p>`;
        },
        function(error) {
            document.getElementById('contact-form').innerHTML = `<p>Your message was not sent, please try again.</p>`;
        }
    );
    
    return false;  // To block from loading a new page

    console.log("hello");
}