const homeButton = document.querySelector("#home-button");
const portfolioButton= document.querySelector("#portfolio-button");
const projectsButton= document.querySelector("#projects-button");

let styleSheetBase = document.querySelector("#style-base");
const styleSheetArray = [];

// List of css stylesheets
styleSheetArray.push(
    "style-1.css",
    "style-2.css",
    "style-3.css"
);

document.body.onload = changeStyleSheet;

homeButton.addEventListener("click", toHome);
portfolioButton.addEventListener("click", toPortfolio);
projectsButton.addEventListener("click", toProjects);

function toHome() { window.location.href = "home.html"; }
function toPortfolio() { window.location.href = "portfolio.html"; }
function toProjects() { window.location.href = "projects.html"; }
function changeStyleSheet() { styleSheetBase.innerHTML = `<link id="style-base" rel="stylesheet" href="${styleSheetArray[Math.floor(Math.random() * styleSheetArray.length)]}"></link>`; }