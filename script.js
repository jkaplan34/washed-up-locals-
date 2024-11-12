// Simple script to handle form submission
function submitForm(event) {
    event.preventDefault(); // Prevent page refresh
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Form response message
    const responseElement = document.getElementById("formResponse");
    responseElement.textContent = `Thanks for reaching out, ${name}! We'll get back to you at ${email}.`;
    responseElement.style.color = "green";

    // Clear form fields
    document.getElementById("contactForm").reset();
