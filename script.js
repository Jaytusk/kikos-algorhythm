document.addEventListener("DOMContentLoaded", () => {
  const terminalText = document.getElementById("terminal-text");
  const inputArea = document.getElementById("input-area");
  const continueBtn = document.getElementById("continue-btn");
  const nicknameInput = document.getElementById("nickname");


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

function typeWriter(text, elementId, callback) {
  const el = document.getElementById(elementId);
  let i = 0;
  el.textContent = "";
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
