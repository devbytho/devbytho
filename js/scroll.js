document.addEventListener("DOMContentLoaded", () => {
  const heroSection = document.querySelector(".hero-section");

  // Create scroll indicator container
  const scrollDiv = document.createElement("div");
  scrollDiv.className = "scroll-indicator";

  // Rotated text
  const rotWrap = document.createElement("div");
  rotWrap.style.display = "flex";
  rotWrap.style.alignItems = "center";
  rotWrap.style.justifyContent = "center";
  rotWrap.style.width = "80px";
  rotWrap.style.height = "24px";

  const text = document.createElement("span");
  text.textContent = "Scroll";
  text.style.display = "inline-block";
  text.style.transform = "rotate(-90deg)";
  text.style.transformOrigin = "center center";
  text.style.whiteSpace = "nowrap";
  text.style.fontSize = "20px";
  text.style.letterSpacing = "1px";
  text.style.textTransform = "capitalize";
  text.style.opacity = "0.9";
  text.style.textAlign = "center";

  rotWrap.appendChild(text);
  scrollDiv.appendChild(rotWrap);

  // Arrow SVG
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("viewBox", "0 0 24 48");
  svg.style.width = "28px";
  svg.style.height = "56px";
  svg.style.marginTop = "20px";
  svg.style.fill = "none";
  svg.style.stroke = "currentColor";
  svg.style.strokeWidth = "2";
  svg.style.strokeLinecap = "round";
  svg.style.strokeLinejoin = "round";
  svg.style.opacity = "0.9";
  svg.style.animation = "arrowBounce 1.4s infinite ease-in-out";

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

  heroSection.appendChild(scrollDiv);

  // Arrow bounce keyframes
  const styleSheet = document.createElement("style");
  styleSheet.textContent = `
    @keyframes arrowBounce {
      0%,100% { transform: translateY(0); }
      50% { transform: translateY(18px); }
    }
  `;
  document.head.appendChild(styleSheet);

  // Fade on scroll
  window.addEventListener("scroll", () => {
    const fadeStart = 0;
    const fadeEnd = 300;
    const scrollY = window.scrollY || window.pageYOffset;
    let opacity = 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);
    opacity = Math.max(0, Math.min(1, opacity));
    scrollDiv.style.opacity = opacity;
  });
});