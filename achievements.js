// Filename: achievements.js

let achieveIndex = 1;

// Initialize the slideshow when the page loads
document.addEventListener("DOMContentLoaded", () => {
    showAchieveSlides(achieveIndex);
    
    // Auto-advance every 5 seconds
    setInterval(() => {
        plusAchieveSlides(1);
    }, 5000);
});

// Next/previous controls
function plusAchieveSlides(n) {
    showAchieveSlides(achieveIndex += n);
}

// Thumbnail/Dot controls
function currentAchieveSlide(n) {
    showAchieveSlides(achieveIndex = n);
}

function showAchieveSlides(n) {
    let i;
    let slides = document.getElementsByClassName("achieve-slide");
    let dots = document.getElementsByClassName("achieve-dot");

    // Loop back to start
    if (n > slides.length) { achieveIndex = 1; }
    // Loop to end
    if (n < 1) { achieveIndex = slides.length; }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Deactivate all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-dot", "");
    }

    // Show the active slide and dot
    if (slides.length > 0) {
        slides[achieveIndex - 1].style.display = "block";
        dots[achieveIndex - 1].className += " active-dot";
    }
}