document.addEventListener("DOMContentLoaded", () => {
  const heroSection = document.querySelector(".hero-section"); // place inside hero

  // Create scroll indicator container
  const scrollDiv = document.createElement("div");
  scrollDiv.className = "scroll-indicator";

  // Style container (absolute inside hero-section)
  Object.assign(scrollDiv.style, {
    position: "absolute",
    bottom: "20px",
    left: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none",
    color: "#cfcfcf",
    zIndex: "9999",
  });

  // Rotated text
  const rotWrap = document.createElement("div");
  Object.assign(rotWrap.style, {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "80px",
    height: "24px",
    overflow: "visible",
  });

  const text = document.createElement("span");
  text.textContent = "Scroll";
  Object.assign(text.style, {
    display: "inline-block",
    transform: "rotate(-90deg)",
    transformOrigin: "center center",
    whiteSpace: "nowrap",
    fontSize: "20px",
    letterSpacing: "1px",
    textTransform: "capitalize",
    opacity: "0.9",
    textAlign: "center",
  });

  rotWrap.appendChild(text);
  scrollDiv.appendChild(rotWrap);

  // Arrow SVG
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("viewBox", "0 0 24 48");
  Object.assign(svg.style, {
    width: "28px",
    height: "56px",
    marginTop: "20px",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    opacity: "0.9",
    animation: "arrowBounce 1.4s infinite ease-in-out",
  });

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

  // Arrow bounce keyframes (CSS in JS)
  const styleSheet = document.createElement("style");
  styleSheet.textContent = `
    @keyframes arrowBounce {
      0%,100% { transform: translateY(0); }
      50% { transform: translateY(18px); }
    }
  `;
  document.head.appendChild(styleSheet);
});