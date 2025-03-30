document.addEventListener("DOMContentLoaded", () => {
  const confirmText = document.getElementById("confirmText");
  const enterBtn = document.getElementById("enterBtn");

  const nickname = localStorage.getItem("nickname") || "guest";
  const message = `${nickname} promises to behave at the party`;

  typeWriter(message, confirmText, 50);

  // Show enter button after 3s
  setTimeout(() => {
    enterBtn.classList.remove("hidden");
  }, 3000);
});

// 🧠 Same typewriter engine
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
