// Filename: register.js
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Stop default form submission

        let fullname = document.getElementById("fullname").value.trim();
        let studentid = document.getElementById("studentid").value.trim();
        let password = document.getElementById("password").value;
        let nationality = document.getElementById("nationality").value.trim();
        let program = document.getElementById("program").value;
        let experience = document.getElementById("experience").value;
        let reason = document.getElementById("reason").value.trim();

        let isValid = true;  // Flag for validation

        // Clear previous error messages
        document.querySelectorAll(".error-message").forEach(function (msg) {
            msg.remove();
        });

        // Check empty fields and show error message next to input
        if (!fullname || !studentid || !password || !nationality || !program || !experience || !reason) {
            alert("Please fill in all required fields.");
            isValid = false;
        }

        // Student ID format
        let idPattern = /^TP\d{6}$/;
        if (!idPattern.test(studentid)) {
            alert("Student ID must be TP followed by 6 numbers.");
            isValid = false;
        }

        // Password validation
        let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d).{6,16}$/;
        if (!passwordPattern.test(password)) {
            alert("Password must be 6–16 characters and include letters and numbers.");
            isValid = false;
        }

        // Photo validation
        let photoInput = document.querySelector('input[type="file"]');
        if (photoInput && photoInput.value && !photoInput.value.match(/\.(jpg|jpeg|png)$/i)) {
            alert("Only JPG or PNG image files are allowed.");
            isValid = false;
        }

        // If everything is valid, submit the form
        if (isValid) {
            alert("Registration successful!");
            form.submit(); // Submit the form
        }
    });
});

// Function for Back to Homepage button
function goToHomepage() {
    window.location.href = "index.html";  // Redirects to the index.html page
}
