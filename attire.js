// Filename: attire.js
document.addEventListener("DOMContentLoaded", () => {

    // Fade in content
    const content = document.getElementById("content-area");
    content.style.opacity = 0;
    setTimeout(() => {
        content.style.transition = "opacity 0.8s ease";
        content.style.opacity = 1;
    }, 200);

    // Select all <li>
    const items = document.querySelectorAll("#content-area li");
    items.forEach(item => {
        item.style.display = "flex";              // horizontal layout
        item.style.alignItems = "center";     	  // align center
        item.style.marginBottom = "20px";         // space between items
        item.style.gap = "15px";                  // space between image and text

        // Hover effect
        item.addEventListener("mouseenter", () => {
            item.style.transform = "translateX(5px)";
            item.style.transition = "0.3s ease";
        });
        item.addEventListener("mouseleave", () => {
            item.style.transform = "translateX(0)";
        });
        
    });
 
    
    // Images for each <li> in order
    const liImages = [
        "images/tshirt.png",
        "images/shorts.png",
        "images/shoes.png",
        "images/kneepads.png",
        "images/water.png",
        "images/volleyball.png",
        "images/armsleeves.jpg",
        "images/ankleguards.jpg"
    ];

    // Prepend images to each <li>
    items.forEach((li, index) => {
        const img = document.createElement("img");
        img.src = liImages[index];
        img.alt = li.innerText;
        img.width = 100;               // bigger image
        img.height = 100;
        img.style.flexShrink = "0";    // prevent shrinking

        li.prepend(img);               // add image at the start of <li>
    });

});

