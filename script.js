const typewriterText = document.getElementById('typewriterText');
const terminalPrompt = document.getElementById('terminalPrompt');
const continueBtn = document.getElementById('continueBtn');

function typeWriter(text, element, delay = 50) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, delay);
    }
  }
  typing();
}

setTimeout(() => {
  terminalPrompt.classList.remove('hidden');
  typeWriter("Terminal: What should I call you?", typewriterText);
}, 3000);

continueBtn.addEventListener('click', () => {
  const name = document.getElementById('nameInput').value.trim();
  if (name) {
    localStorage.setItem('guestName', name);
    window.location.href = "black.html";
  }
});

