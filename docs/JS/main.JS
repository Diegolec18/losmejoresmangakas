

document.addEventListener("DOMContentLoaded", function() {
    const mangakaItems = document.querySelectorAll("#mangakas-destacados li");

    mangakaItems.forEach(item => {
        item.addEventListener("click", function() {
            const mangakaId = item.getAttribute("data-mangaka");
            toggleMangakaInfo(mangakaId);
        });
    });
});

function toggleMangakaInfo(mangakaId) {
    const allInfoDivs = document.querySelectorAll(".mangaka-info");
    allInfoDivs.forEach(div => div.style.display = 'none');  // Oculta todos los divs
    
    const infoDiv = document.querySelector(`#info-${mangakaId}`);
    if (infoDiv.style.display === 'none' || infoDiv.style.display === '') {
        infoDiv.style.display = 'block';  // Muestra el div correspondiente
    } else {
        infoDiv.style.display = 'none';  // Oculta el div correspondiente
    }
}

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

