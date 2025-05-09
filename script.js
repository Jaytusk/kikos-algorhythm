document.addEventListener("DOMContentLoaded", () => {
  const promptArea = document.getElementById("promptArea");
  const typewriterText = document.getElementById("typewriterText");
  const nextBtn = document.getElementById("nextBtn");
  const nicknameInput = document.getElementById("nicknameInput");

  // ✅ HARD delay — does not wait for video
  setTimeout(() => {
    promptArea.classList.remove("hidden");
    typeWriter("TERMINAL: WHAT IS YOUR NAME?", typewriterText, 40);
  }, 3000);

  nextBtn.addEventListener("click", () => {
    const name = nicknameInput.value.trim().toUpperCase();
    if (!name) return;
    localStorage.setItem("nickname", name);
    window.location.href = "confirm.html";
  });
});

function typeWriter(text, el, speed = 70) {
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
