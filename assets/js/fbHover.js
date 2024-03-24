document.addEventListener("DOMContentLoaded", () => {
    const svgElement = document.querySelector(".hoverSvg");

    svgElement.addEventListener("mouseenter", () => {
        svgElement.style.fill = "#F0145A";
    });

    svgElement.addEventListener("mouseleave", () => {
        svgElement.style.fill = "";
    });
});
