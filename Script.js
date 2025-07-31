// Floating Hearts
const container = document.getElementById('hearts-container');
for (let i = 0; i < 30; i++) {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + '%';
  heart.style.animationDelay = Math.random() * 8 + 's';
  container.appendChild(heart);
}

// Surprise Popup
function showSurprise() {
  alert("🌹 You are my sunshine, my moonlight, and my heartbeat. Happy Girlfriend Day! 💖");
}
