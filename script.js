document.addEventListener("DOMContentLoaded", () => {
  const promptArea = document.getElementById("promptArea");
  const nextBtn = document.getElementById("nextBtn");
  const nicknameInput = document.getElementById("nicknameInput");
  const typewriterText = document.getElementById("typewriterText");

  // ✅ Start prompt after 3s
  setTimeout(() => {
    promptArea.classList.remove("hidden");
    runTypewriter("Terminal: what should I call you?", typewriterText);
  }, 3000);

  nextBtn.addEventListener("click", () => {
    const name = nicknameInput.value.trim();
    if (!name) return;
    localStorage.setItem("nickname", name);
    window.location.href = "confirm.html";
  });
});

// ✅ JS-based typewriter (100% reliable)
function runTypewriter(text, element, speed = 50) {
  element.textContent = "";
  let i = 0;
  const interval = setInterval(() => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(interval);
    }
  }, speed);
}
