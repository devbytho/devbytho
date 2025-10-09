document.addEventListener("DOMContentLoaded", () => {
  const text = "Welcome to my first website, my name is thomas and im going to help you create awsom projects!";
  const typedText = document.getElementById("typed-text");
  let index = 0;
  let started = false;

  function typeEffect() {
    if (index < text.length) {
      typedText.textContent += text.charAt(index);
      index++;
      setTimeout(typeEffect, 100); // speed of typing
    }
  }

  // Observe when the intro section becomes visible
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        started = true;
        typeEffect();
      }
    });
  }, { threshold: 0.6 });

  observer.observe(document.getElementById("intro"));
});
