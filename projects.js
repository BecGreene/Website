// Stylesheets
let styleSheetBase = document.querySelector("#style-base");
const styleSheetArray = [];

// Icons
let iconBase = document.querySelector('link[rel="icon"]');
const iconArray = [];

// Other pages
const homeButton = document.querySelector("#home-button");
const porfolioButton= document.querySelector("#portfolio-button");
const prevWorkButton= document.querySelector("#previous-work-button");

// List of css stylesheets
styleSheetArray.push(
    "style-1.css",
    "style-2.css",
    "style-3.css"
);

// List of icons
iconArray.push(
    "icon_pink.png",
    "icon_purple.png",
    "icon_yellow.png"
)

// When first opening page / refreshing, change aesthetic of website
document.body.onload = changeStyleSheet;

// Event listeners for buttons
homeButton.addEventListener("click", toHome);
porfolioButton.addEventListener("click", toPortfolio);
prevWorkButton.addEventListener("click", toPrevWork);

// Randomizes and displays css stylesheet from list
function changeStyleSheet() 
{ 
    let randNum = Math.floor(Math.random() * styleSheetArray.length);
    styleSheetBase.innerHTML = `<link id="style-base" rel="stylesheet" href="${styleSheetArray[randNum]}"></link>`;
    iconBase.href = iconArray[randNum];
}

// Goes to different pages
function toHome() { window.location.href = "home.html"; }
function toPortfolio() { window.location.href = "portfolio.html"; }
function toPrevWork() { window.location.href = "previous-work.html"; }