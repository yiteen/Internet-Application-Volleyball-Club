// Filename: rules.js

document.addEventListener("DOMContentLoaded", function () {

    document.querySelector(".modern-rules").addEventListener("click", function (e) {

        // Find the closest rule-item that was clicked
        const clickedItem = e.target.closest(".rule-item");

        // If click was not inside a rule-item, do nothing
        if (!clickedItem) return;

        // Close all other rule items
        document.querySelectorAll(".rule-item").forEach(item => {
            if (item !== clickedItem) {
                item.classList.remove("active");
            }
        });

        // Toggle only the clicked rule
        clickedItem.classList.toggle("active");
    });

});
