// Filename: safety.js

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".safety-card").forEach(card => {
        card.addEventListener("click", function () {
            // Close others
            document.querySelectorAll(".safety-card").forEach(c => {
                if (c !== card) c.classList.remove("active");
            });
            // Toggle clicked card
            card.classList.toggle("active");
        });
    });
});
