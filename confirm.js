document.addEventListener("DOMContentLoaded", () => {
  const confirmText = document.getElementById("confirmText");
  const enterBtn = document.getElementById("enterBtn");

  const nickname = localStorage.getItem("nickname") || "USER";
  const message = `${nickname} IS STILL IN THE MATRIX`;

  typeWriter(message, confirmText, 60);

  // Show ENTER button after animation
 setTimeout(() => {
  enterBtn.classList.remove("hidden");
}, 3000); 

  // ✅ Redirect on click
  enterBtn.addEventListener("click", () => {
    window.location.href = "https://www.ticketmelon.com/kikos/algorhythm";
  });
});

function typeWriter(text, el, speed = 20) {
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
