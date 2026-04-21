function showMessage() {
    alert("Hello! You clicked the button 🎉");
}

document.querySelectorAll(".socials a").forEach(icon => {
    icon.addEventListener("click", () => {
        alert("Opening social link 🚀");
    });
});