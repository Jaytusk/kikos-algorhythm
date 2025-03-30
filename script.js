document.addEventListener("DOMContentLoaded", () => {
  const promptArea = document.getElementById("promptArea");
  const nextBtn = document.getElementById("nextBtn");
  const nicknameInput = document.getElementById("nicknameInput");
  const typewriterText = document.getElementById("typewriterText");

  // Wait for video to load
  setTimeout(() => {
    promptArea.classList.remove("hidden");
    typeWriter("Terminal: what should I call you?", typewriterText, 40);
  }, 3000);

  nextBtn.addEventListener("click", () => {
    const name = nicknameInput.value.trim();
    if (!name) return;
    localStorage.setItem("nickname", name);
    window.location.href = "confirm.html";
  });
});

enterBtn.addEventListener("click", () => {
    window.location.href = "https://www.ticketmelon.com/kikos/algorhythm";
  });
});

// ✅ Fully working dynamic typewriter
function typeWriter(text, el, speed = 50) {
  let i = 0;
  el.textContent = "";

  function typing() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }

  typing();
}
