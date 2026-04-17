document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, i) => {
        card.style.opacity = 0;
        card.style.transform = "translateY(30px)";
        setTimeout(() => {
            card.style.transition = "all 0.6s ease";
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
        }, i * 200);
    });

    if (document.title.includes("Blog Android Studio")) {
        setTimeout(() => {
            alert("Bienvenido al Blog del Equipo 2 sobre Android Studio 👻👅");
        }, 500);
    }
});

const cards = document.querySelectorAll(".card");
cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.boxShadow = "0 0 20px #399c4f";
    });
    card.addEventListener("mouseleave", () => {
        card.style.boxShadow = "0 0 15px rgba(0,0,0,0.5)";
    });
});

const frases = [
    "ANDROID NEXUS: Blog sobre Android Studio 🔥",
    "Explora ventajas, historia y más 👀",
    "Evidencia etapa 3"
];
let i = 0;
setInterval(() => {
    document.querySelector("header h1").textContent = frases[i];
    i = (i + 1) % frases.length;
}, 4000);

const imgs = document.querySelectorAll(".content-img");
imgs.forEach(img => {
    img.style.opacity = 0;
    img.onload = () => {
        img.style.transition = "opacity 1s ease";
        img.style.opacity = 1;
    };
});

