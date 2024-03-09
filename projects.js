const homeButton = document.querySelector("#home-button");
const porfolioButton= document.querySelector("#portfolio-button");
const prevWorkButton= document.querySelector("#previous-work-button");

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
porfolioButton.addEventListener("click", toPortfolio);
prevWorkButton.addEventListener("click", toPrevWork);

function toHome() { window.location.href = "home.html"; }
function toPortfolio() { window.location.href = "portfolio.html"; }
function toPrevWork() { window.location.href = "previous-work.html"; }
function changeStyleSheet() { styleSheetBase.innerHTML = `<link id="style-base" rel="stylesheet" href="${styleSheetArray[Math.floor(Math.random() * styleSheetArray.length)]}"></link>`; }