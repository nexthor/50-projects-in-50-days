const progress = document.getElementById("progress");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
    currentActive++;

    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    
    if (currentActive > 1) {
        prev.disabled = false;
    }

    update();
});

prev.addEventListener("click", () => {
    currentActive--;

    if (currentActive < 1) {
        currentActive = 1;
    }

    update();
});


function update() {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add("active");
        }
        else{
            circle.classList.remove("active");
        }
    });

    const activeCircles = document.querySelectorAll(".active");
    const percent = ((activeCircles.length - 1) / (circles.length - 1)) * 100;

    progress.style.width = `${percent}%`;

    prev.disabled = currentActive === 1;
    next.disabled = circles.length === activeCircles.length;
}