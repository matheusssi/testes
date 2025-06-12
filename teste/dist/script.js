document.getElementById('start-btn').addEventListener('click', function () {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('counter-screen').style.display = 'block';
    updateDatingTime();
    startImageRotation();
});

function updateDatingTime() {
    const startDate = new Date("2023-06-01"); // Substitua com a sua data de início
    const now = new Date();
    const diff = now - startDate;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById('dating-time').innerText = `${days} dias juntos! 💕`;
}

const images = [
    { src: "img/foto1.jpg", text: "Nosso primeiro encontro!" },
    { src: "img/foto2.jpg", text: "O dia em que dissemos 'eu te amo'!" },
    { src: "img/foto3.jpg", text: "A nossa viagem inesquecível!" }
];

let currentIndex = 0;

function startImageRotation() {
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        document.getElementById('moment-img').src = images[currentIndex].src;
        document.getElementById('moment-text').innerText = images[currentIndex].text;
    }, 4000);
}