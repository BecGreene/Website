const homeButton = document.querySelector("#home-button");
const prevWorkButton= document.querySelector("#previous-work-button");
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
prevWorkButton.addEventListener("click", toPrevWork);
projectsButton.addEventListener("click", toProjects);

function toHome() { window.location.href = "home.html"; }
function toPrevWork() { window.location.href = "previous-work.html"; }
function toProjects() { window.location.href = "projects.html"; }
function changeStyleSheet() { styleSheetBase.innerHTML = `<link id="style-base" rel="stylesheet" href="${styleSheetArray[Math.floor(Math.random() * styleSheetArray.length)]}"></link>`; }