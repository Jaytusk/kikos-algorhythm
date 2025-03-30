document.addEventListener("DOMContentLoaded", () => {
  const confirmText = document.getElementById("confirmText");
  const enterBtn = document.getElementById("enterBtn");

  const nickname = localStorage.getItem("nickname") || "Guest";
  const message = `${nickname} promises to behave at the party`;

  typeWriter(message, confirmText, 30);

  // Show ENTER button after animation
  setTimeout(() => {
    enterBtn.classList.remove("hidden");
  }, message.length * 30 + 500);

  // ✅ Redirect on click
  enterBtn.addEventListener("click", () => {
    window.location.href = "https://www.ticketmelon.com/kikos/algorhythm";
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
