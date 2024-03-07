const homeButton = document.querySelector("#home-button");
const portfolioButton= document.querySelector("#portfolio-button");
const projectsButton= document.querySelector("#projects-button");

homeButton.addEventListener("click", toHome);
portfolioButton.addEventListener("click", toPortfolio);
projectsButton.addEventListener("click", toProjects);

function toHome() { window.location.href = "home.html"; }
function toPortfolio() { window.location.href = "portfolio.html"; }
function toProjects() { window.location.href = "projects.html"; }