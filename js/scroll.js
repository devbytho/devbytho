document.addEventListener("DOMContentLoaded", () => {
  const scrollDiv = document.createElement("div");
  scrollDiv.className = "scroll-indicator";

  const text = document.createElement("span");
  text.classList.add("scroll-text");
  text.textContent = "scroll";

  const arrow = document.createElement("span");
  arrow.classList.add("arrow");
  arrow.textContent = "↓";

  scrollDiv.appendChild(text);
  scrollDiv.appendChild(arrow);
  document.body.appendChild(scrollDiv);

  // Fade effect when scrolling
  window.addEventListener("scroll", () => {
    const fadeStart = 0;
    const fadeEnd = 300;
    const scrollY = window.scrollY;

    let opacity = 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);
    opacity = Math.max(0, Math.min(1, opacity));

    scrollDiv.style.opacity = opacity;
  });
});