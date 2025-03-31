document.addEventListener("DOMContentLoaded", () => {
  const confirmText = document.getElementById("confirmText");
  const enterBtn = document.getElementById("enterBtn");

  const nickname = localStorage.getItem("nickname") || "USER";
  const message = `${nickname} IS STILL IN THE MATRIX`;

  scrambleText(message, confirmText, 30);

  // Show ENTER button after animation
 setTimeout(() => {
  enterBtn.classList.remove("hidden");
}, 3000); 

  // ✅ Redirect on click
  enterBtn.addEventListener("click", () => {
    window.location.href = "https://www.ticketmelon.com/kikos/algorhythm";
  });
});

function scrambleText(text, el, interval = 50) {
  const chars = "!<>-_\\/[]{}—=+*^?#________";
  let output = "";
  let progress = 0;

  function randomChar() {
    return chars[Math.floor(Math.random() * chars.length)];
  }

  const scrambleInterval = setInterval(() => {
    output = "";

    for (let i = 0; i < text.length; i++) {
      if (i < progress) {
        output += text[i];
      } else {
        output += randomChar();
      }
    }

    el.textContent = output;

    if (progress >= text.length) {
      clearInterval(scrambleInterval);
    }

    progress++;
  }, interval);
}
  typing();
}
