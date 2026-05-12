// Filename: history.js

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("milestone-slide");
  let dots = document.getElementsByClassName("history-dot");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// --- AUTO-PLAY LOGIC ---
let autoPlayTimer = setInterval(() => {
    plusSlides(1); 
}, 3000); 

// Optional: Stop auto-play when user clicks a button to prevent "jumping"
function plusSlides(n) {
    clearInterval(autoPlayTimer); // Stops the timer
    showSlides(slideIndex += n);
    
    // Restart timer after user interaction
    autoPlayTimer = setInterval(() => {
        plusSlides(1);
    }, 5000);
}

function currentSlide(n) {
    clearInterval(autoPlayTimer); // Stops the timer
    showSlides(slideIndex = n);
    
    // Restart timer after user interaction
    autoPlayTimer = setInterval(() => {
        plusSlides(1);
    }, 5000);
}