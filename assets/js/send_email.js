function sendMail(contactForm) {
    emailjs.send("service_jr9gthn","template_id_contact_form",{
        "from_name": contactForm.name.value,
        "from_email": contactForm.email_address.value,
        "message": contactForm.your-message.value,
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    console.log("hello");
    // return false;  // To block from loading a new page
}