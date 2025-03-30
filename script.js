document.addEventListener("DOMContentLoaded", () => {
  const typewriterText = document.getElementById("typewriterText");
  const promptArea = document.getElementById("promptArea");
  const nextBtn = document.getElementById("nextBtn");
  const nicknameInput = document.getElementById("nicknameInput");

  // Show prompt after 3s
  setTimeout(() => {
    promptArea.classList.remove("hidden");
    typewriterText.textContent = "Terminal: what should I call you?";
  }, 3000);

  // Handle continue
  nextBtn.addEventListener("click", () => {
    const name = nicknameInput.value.trim();
    if (!name) return;
    localStorage.setItem("nickname", name);
    window.location.href = "confirm.html";
  });
});
