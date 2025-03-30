document.addEventListener("DOMContentLoaded", () => {
  const terminalText = document.getElementById("terminal-text");
  const inputArea = document.getElementById("input-area");
  const continueBtn = document.getElementById("continue-btn");
  const nicknameInput = document.getElementById("nickname");

  // Show typewriter prompt after 3 seconds
  setTimeout(() => {
    typeWriter("Terminal: what should I call you?", terminalText, () => {
      inputArea.classList.remove("hidden");
      continueBtn.classList.remove("hidden");
    });
  }, 3000);

  continueBtn.addEventListener("click", () => {
    const nickname = nicknameInput.value.trim();
    if (!nickname) return;

    document.getElementById("entry-screen").classList.add("hidden");
    document.getElementById("second-screen").classList.remove("hidden");

    const secondText = document.getElementById("second-text");
    typeWriter(`${nickname} promises to behave at the party`, secondText, () => {
      document.getElementById("enter-btn").classList.remove("hidden");
    });
  });
});

function typeWriter(text, element, callback) {
  element.classList.remove("hidden");
  element.textContent = "";
  let i = 0;
  const interval = setInterval(() => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(interval);
      if (callback) callback();
    }
  }, 50);
}

