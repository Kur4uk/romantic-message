document.addEventListener("DOMContentLoaded", function () {
    createFallingHearts();
});

// Функція для створення падаючих сердечок
function createFallingHearts() {
    const heartsContainer = document.getElementById("hearts-container");
    if (!heartsContainer) return; // Якщо контейнера немає – вихід з функції

    for (let i = 0; i < 40; i++) {
        let heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "❤";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.animationDuration = Math.random() * 5 + 3 + "s";
        heart.style.fontSize = Math.random() * 10 + 20 + "px"; // Варіативний розмір
        heartsContainer.appendChild(heart);
    }
}

// Натискання на текст "Натисни на мене"
document.getElementById("click-text").addEventListener("click", function () {
    this.style.opacity = "0";
    setTimeout(() => {
        document.getElementById("form").style.display = "block";
    }, 500);
});

// Перевірка введених даних
document.getElementById("submit-btn").addEventListener("click", function () {
    const name = document.getElementById("name").value.trim();
    const date = document.getElementById("date").value.trim();

    if (name === "Йорданка" && date === "25.02.2025") {
        document.body.style.animation = "wave 2s forwards";
        setTimeout(() => {
            window.location.href = "message.html";
        }, 2000);
    } else {
        alert("Помилка! Введи правильні дані 😊");
    }
});

