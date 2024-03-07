const homeButton = document.querySelector("#home-button");
const porfolioButton= document.querySelector("#portfolio-button");
const prevWorkButton= document.querySelector("#previous-work-button");

homeButton.addEventListener("click", toHome);
porfolioButton.addEventListener("click", toPortfolio);
prevWorkButton.addEventListener("click", toPrevWork);

function toHome() { window.location.href = "home.html"; }
function toPortfolio() { window.location.href = "portfolio.html"; }
function toPrevWork() { window.location.href = "previous-work.html"; }