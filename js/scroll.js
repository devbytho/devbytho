document.addEventListener("DOMContentLoaded", () => {
  const scrollDiv = document.createElement("div");
  scrollDiv.className = "scroll-indicator";

  // Add letters in reverse so they stack bottom-to-top visually
  "scroll".split("").reverse().forEach(letter => {
    const span = document.createElement("span");
    span.textContent = letter;
    scrollDiv.appendChild(span);
  });

  // Add arrow at the bottom
  const arrow = document.createElement("span");
  arrow.classList.add("arrow");
  arrow.textContent = "↓";
  scrollDiv.appendChild(arrow);

  // Add to body
  document.body.appendChild(scrollDiv);

  // Fade effect on scroll
  window.addEventListener("scroll", () => {
    const fadeStart = 0;
    const fadeEnd = 300;
    const scrollY = window.scrollY;

    let opacity = 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);
    opacity = Math.max(0, Math.min(1, opacity));

    scrollDiv.style.opacity = opacity;
  });
});
