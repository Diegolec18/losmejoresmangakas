

document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleTheme");

    toggleButton.addEventListener("click", function() {
        toggleDarkMode();
    });
});

function toggleDarkMode() {
    const body = document.body;
    
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        document.getElementById("toggleTheme").innerText = "Modo Oscuro";
    } else {
        body.classList.add("dark-mode");
        document.getElementById("toggleTheme").innerText = "Modo Claro";
    }
}

