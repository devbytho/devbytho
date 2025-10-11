document.addEventListener("DOMContentLoaded", () => {
  // Typing effect
  const text = "My name is Thomas.";
  const typedText = document.getElementById("typed-text");
  let index = 0;
  let started = false;

  function typeEffect() {
    if (index < text.length) {
      typedText.textContent += text.charAt(index);
      index++;
      setTimeout(typeEffect, 100);
    }
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        started = true;
        typeEffect();
      }
    });
  }, { threshold: 0.6 });

  observer.observe(document.getElementById("intro"));

  // Font cycling for Hello, World!
  const hello = document.getElementById("hello");
  const fonts = [
    "'Poppins', sans-serif",
    "'Fira Code', monospace",
    "'Comic Sans MS', cursive",
    "'Georgia', serif",
    "'Courier New', monospace",
    "'Impact', sans-serif",
    "'Brush Script MT', cursive",
    "'Lucida Console', monospace",
    "'Papyrus', fantasy",
    "'Trebuchet MS', sans-serif",
    "'Times New Roman', serif",
    "'Rock Salt', cursive",
    "'Chiller', cursive",
    "'Verdana', sans-serif"
  ];

  let lastIndex = -1;
  setInterval(() => {
    let index;
    do {
      index = Math.floor(Math.random() * fonts.length);
    } while (index === lastIndex);
    hello.style.fontFamily = fonts[index];
    lastIndex = index;
  }, 500);
});
