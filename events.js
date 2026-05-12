// Filename: events.js
// --- 1. SLIDESHOW LOGIC ---
let slideIndex = 1;

// Initialize slideshow
document.addEventListener("DOMContentLoaded", () => {
    showSlides(slideIndex);
    // Start auto-slide
    setInterval(() => { moveSlide(1); }, 5000);
});

function moveSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    if (slides.length > 0) {
        slides[slideIndex - 1].style.display = "block";
        if (dots.length > 0) {
            dots[slideIndex - 1].className += " active";
        }
    }
}

// --- 2. TABLE INTERACTION LOGIC ---

// UPCOMING: This function MUST be outside the DOMContentLoaded to work with onclick="..."
function showUpcoming(name, info) {
    const box = document.getElementById("upcoming-detail-display");
    const nameEl = document.getElementById("upcoming-name");
    const infoEl = document.getElementById("upcoming-info");

    if (box && nameEl && infoEl) {
        nameEl.innerText = name;
        infoEl.innerHTML = info; 
        box.style.display = "block";
        box.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// PAST: Automatic Listener for the pastTable ID
document.addEventListener("DOMContentLoaded", () => {
    const pastTable = document.getElementById("pastTable");
    const pastBox = document.getElementById("past-detail-display");
    const pastName = document.getElementById("past-name");
    const pastInfo = document.getElementById("past-info");

    if (pastTable) {
        const rows = pastTable.querySelectorAll("tbody tr");
        rows.forEach(row => {
            row.addEventListener("click", function() {
                // cells[1] is Name, cells[0] is Date, cells[2] is Location, cells[4] is Hidden Detail
                pastName.innerText = this.cells[1].innerText;
                pastInfo.innerHTML = `
                    <strong>When:</strong> ${this.cells[0].innerText} <br>
                    <strong>Where:</strong> ${this.cells[2].innerText} <br>
                    <strong>Description:</strong> ${this.cells[3].innerText} <br>
                    <hr style="margin:10px 0; border:0; border-top:1px solid #ccc;">
                    <strong>Details:</strong> ${this.cells[4].innerHTML}
                `;
                
                pastBox.style.display = "block";
                pastBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
            });
        });
    }
});

// Helper function to close boxes (Universal)
function closeBox(id) {
    const element = document.getElementById(id);
    if (element) {
        element.style.display = 'none';
    }
}