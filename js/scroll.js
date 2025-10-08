document.addEventListener("DOMContentLoaded", () => {
  // Root container
  const scrollDiv = document.createElement("div");
  scrollDiv.className = "scroll-indicator";

  // Wrapper for rotated text
  const rotWrap = document.createElement("div");
  rotWrap.className = "rot-wrapper";

  const text = document.createElement("span");
  text.className = "rotated-text";
  text.textContent = "Scroll";

  rotWrap.appendChild(text);
  scrollDiv.appendChild(rotWrap);

  // SVG arrow
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("viewBox", "0 0 24 48");
  svg.classList.add("arrow-svg");
  svg.setAttribute("aria-hidden", "true");

  const line = document.createElementNS(svgNS, "line");
  line.setAttribute("x1", "12");
  line.setAttribute("y1", "2");
  line.setAttribute("x2", "12");
  line.setAttribute("y2", "34");

  const poly = document.createElementNS(svgNS, "polyline");
  poly.setAttribute("points", "6,30 12,36 18,30");

  svg.appendChild(line);
  svg.appendChild(poly);
  scrollDiv.appendChild(svg);

  document.body.appendChild(scrollDiv);

  // Fade effect while scrolling
  window.addEventListener("scroll", () => {
    const fadeStart = 0;
    const fadeEnd = 300;
    const scrollY = window.scrollY || window.pageYOffset;
    let opacity = 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);
    opacity = Math.max(0, Math.min(1, opacity));
    scrollDiv.style.opacity = opacity;
  });
});