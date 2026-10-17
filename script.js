const startScreen = document.getElementById("startScreen");
const startBtn = document.getElementById("startBtn");
const blowBtn = document.getElementById("blowBtn");
const message = document.getElementById("message");
const flame = document.querySelector(".flame");
const confettiContainer = document.getElementById("confetti-container");
const birthdaySong = document.getElementById("birthdaySong");
const photos = Array.from(document.querySelectorAll(".photo-card img"));
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentPhoto = 0;
let slideshowInterval;

function createConfetti() {
  const colors = ["#ff7eb6", "#ffffff", "#d4af37", "#ffd6e7", "#f8e7a1"];
  for (let i = 0; i < 100; i++) {
    const piece = document.createElement("div");
    piece.classList.add("confetti");
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = (2.5 + Math.random() * 3) + "s";
    piece.style.animationDelay = Math.random() * 0.4 + "s";
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    piece.style.width = (6 + Math.random() * 8) + "px";
    piece.style.height = (10 + Math.random() * 10) + "px";
    confettiContainer.appendChild(piece);
    setTimeout(() => piece.remove(), 6500);
  }
}

function showPhoto(index) {
  photos.forEach((img, i) => {
    img.style.display = i === index ? "block" : "none";
  });
}

function nextPhoto() {
  currentPhoto = (currentPhoto + 1) % photos.length;
  showPhoto(currentPhoto);
}

function prevPhoto() {
  currentPhoto = (currentPhoto - 1 + photos.length) % photos.length;
  showPhoto(currentPhoto);
}

function startSlideshow() {
  if (slideshowInterval) return;
  slideshowInterval = setInterval(nextPhoto, 2500);
}

startBtn.addEventListener("click", () => {
  startScreen.style.display = "none";
  showPhoto(currentPhoto);
  startSlideshow();
  if (birthdaySong) {
    birthdaySong.volume = 0.4;
    birthdaySong.play().catch(() => {});
  }
});

blowBtn.addEventListener("click", () => {
  flame.style.display = "none";
  message.classList.remove("hidden");
  message.textContent = "* NI HAO HAPPY BIRTHDAY SONIKA *";
  createConfetti();
});

nextBtn.addEventListener("click", () => {
  nextPhoto();
  createConfetti();
});

prevBtn.addEventListener("click", () => {
  prevPhoto();
  createConfetti();
});
