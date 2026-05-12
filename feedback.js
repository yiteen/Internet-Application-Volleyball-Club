//Filename: feedback.js
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("feedbackForm"); 

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Stop the default form submission

        let fullname = document.getElementById("fullname").value.trim();
        let email = document.getElementById("email").value.trim();
        let comments = document.getElementById("comments").value.trim();

        let emailPattern = /^[^ ]+@[^ ]+\.com$/i;

        // Check empty fields
        if (fullname === "" || email === "" || comments === "") {
            alert("Please fill in all required fields.");
            return;
        }

        // Validate email
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Check rating selection
        let ratingSelected = document.querySelector('input[name="rating"]:checked');
        if (!ratingSelected) {
            alert("Please select a rating.");
            return;
        }

        // All good
        alert("Thank you! Your feedback has been successfully submitted.");
        form.submit(); // submit the form to submit_feedback.html
    });
});

// Function for Back to Homepage button
function goToHomepage() {
    window.location.href = "index.html";  // Redirects to the index.html page
}

