const homeButton = document.querySelector("#home-button");
const prevWorkButton= document.querySelector("#previous-work-button");
const projectsButton= document.querySelector("#projects-button");

homeButton.addEventListener("click", toHome);
prevWorkButton.addEventListener("click", toPrevWork);
projectsButton.addEventListener("click", toProjects);

function toHome() { window.location.href = "home.html"; }
function toPrevWork() { window.location.href = "previous-work.html"; }
function toProjects() { window.location.href = "projects.html"; }