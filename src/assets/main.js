import "./style.css";
import navbar from "../components/header/header.html?raw";
import footer from "../components/footer/footer.html?raw";

document.querySelector("#header").innerHTML = navbar;
document.querySelector("#footer").innerHTML = footer;

// ToDo:
// Fix Build config
// Fix nested URLS
// Change color in menu for active section
// Init slider
