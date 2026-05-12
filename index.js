// Filename: index.js

document.addEventListener("DOMContentLoaded", function () {
    const learnBtn = document.querySelector('.btn-primary');
    if (learnBtn) {
        learnBtn.addEventListener("click", function (e) {
            e.preventDefault();
            const aboutSection = document.querySelector('#about');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});
