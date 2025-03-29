// 🕒 Wait 3 seconds, show terminal prompt
window.onload = () => {
  setTimeout(() => {
    typeWriter("Terminal: what should I call you?", "terminal-text", () => {
      document.getElementById("input-area").classList.remove("hidden");
    });
    document.getElementById("terminal-text").classList.remove("hidden");
  }, 3000);
};

function typeWriter(text, elementId, callback) {
  const el = document.getElementById(elementId);
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

document.getElementById("continue-btn").addEventListener("click", () => {
  const nickname = document.getElementById("nickname").value.trim();
  if (!nickname) return;

  document.getElementById("entry-screen").classList.add("hidden");
  document.getElementById("second-screen").classList.remove("hidden");

  const message = `${nickname} promises to behave at the party`;
  typeWriter(message, "second-text");

  setTimeout(() => {
    document.getElementById("enter-btn").classList.remove("hidden");
  }, 3000);
});
