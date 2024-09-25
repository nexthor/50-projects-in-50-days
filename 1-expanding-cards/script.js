const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeAcctiveClasses();

        panel.classList.add("active");
    });
});

function removeAcctiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    });
}