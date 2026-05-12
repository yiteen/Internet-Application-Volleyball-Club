// Filename: enquiry.js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("enquiryForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Stop default form submission

        let fullname = document.getElementById("fullname").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let message = document.getElementById("message").value.trim();

        let isValid = true;  // Flag for validation

        // Clear previous error messages
        document.querySelectorAll(".error-message").forEach(function (msg) {
            msg.remove();
        });

        // Check empty fields and show error message next to input
        if (!fullname || !email || !phone || !message) {
            alert("Please fill in all required fields.");
            isValid = false;
        }

        // Email validation
        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/i;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            isValid = false;
        }

        // Phone validation
        let phonePattern = /^\+?60[1-9][0-9]{7,9}$/;
        if (!phonePattern.test(phone)) {
            alert("Please enter a valid Malaysian number starting with 60 or +60, e.g., 60123456789 or +60123456789.");
            isValid = false;
        }

        // If everything is valid, submit the form
        if (isValid) {
            alert("Thank you! Your enquiry has been successfully submitted.");
            form.submit(); // Submit the form
        }
    });
});

// Function for Back to Homepage button
function goToHomepage() {
    window.location.href = "index.html";  // Redirects to the index.html page
}
