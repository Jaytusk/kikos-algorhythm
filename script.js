document.addEventListener("DOMContentLoaded", () => {
  const terminalText = document.getElementById("terminal-text");
  const inputArea = document.getElementById("input-area");
  const continueBtn = document.getElementById("continue-btn");
  const nicknameInput = document.getElementById("nickname");

  // ⏳ Delay 3s then type terminal prompt
  setTimeout(() => {
    terminalText.classList.remove("hidden");
    typeWriter("Terminal: what should I call you?", "terminal-text", () => {
      inputArea.classList.remove("hidden");
    });
  }, 3000);

  continueBtn.addEventListener("click", () => {
    const nickname = nicknameInput.value.trim();
    if (!nickname) return;

    document.getElementById("entry-screen").classList.add("hidden");
    document.getElementById("second-screen").classList.remove("hidden");

    const message = `${nickname} promises to behave at the party`;
    typeWriter(message, "second-text");

    setTimeout(() => {
      document.getElementById("enter-btn").classList.remove("hidden");
    }, 3000);
  });
});

// 🎞️ Typewriter effect
function typeWriter(text, elementId, callback) {
  const el = document.getElementById(elementId);
  el.textContent = "";
  let i = 0;
  const interval = setInterval(() => {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(interval);
      if (callback) callback();
    }
  }, 50);
}
