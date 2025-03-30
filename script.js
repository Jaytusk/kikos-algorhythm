document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("introVideo");
  const promptArea = document.getElementById("promptArea");
  const typewriterText = document.getElementById("typewriterText");
  const nextBtn = document.getElementById("nextBtn");
  const nicknameInput = document.getElementById("nicknameInput");

  // 🛡️ Safe fallback if autoplay fails
  video.play().catch(() => {
    fallbackStart();
  });

  // ✅ Trigger once the video is ready to play through
  video.addEventListener("canplaythrough", () => {
    setTimeout(() => {
      promptArea.classList.remove("hidden");
      typeWriter("Terminal: what should I call you?", typewriterText, 40);
    }, 3000);
  });

  function fallbackStart() {
    setTimeout(() => {
      promptArea.classList.remove("hidden");
      typeWriter("Terminal: what should I call you?", typewriterText, 40);
    }, 3000);
  }

  nextBtn.addEventListener("click", () => {
    const name = nicknameInput.value.trim();
    if (!name) return;
    localStorage.setItem("nickname", name);
    window.location.href = "confirm.html";
  });
});

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
