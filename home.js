// Fun facts
const funFactButton = document.querySelector("#fun-fact-button");
let funFactDisplay = document.querySelector("#display-fun-fact");
const funFactArray = [];

// Stylesheets
const styleSheetButton = document.querySelector("#style-sheet-button");
let styleSheetBase = document.querySelector("#style-base");
const styleSheetArray = [];

// Icons
let iconBase = document.querySelector('link[rel="icon"]');
const iconArray = [];

// Other pages
const portfolioButton = document.querySelector("#portfolio-button");
const prevWorkButton= document.querySelector("#previous-work-button");
const projectsButton= document.querySelector("#projects-button");

// List of fun facts
funFactArray.push(
    "I am a big Vtuber fan, with my oshis (my favorites) being Gavis Bettel, Banzoin Hakka, Goldbullet, and my kamioshi (my favorite vtuber) being Josuiji Shinri from Holostars EN (POP POP POP!)",
    "I am a recovering picky eater and I will try anything once. Yes, I will try balut when I have the chance.",
    "I love ice skating and have taken lessons when I was younger, but I still can not spin.",
    "I love the horror genre, but only when it is static (Books and comics). I currently cannot handle horror that moves (Video games and movies)",
    "I love tattoos, but I am still waiting to get my first one.",
    "I casually collect rubber ducks and they are my children.",
    "I am a true plushie lover until the sun fizzles out.",
    "My favorite video game series of all time is Yakuza / Like a Dragon / Ryu Ga Gotoku, and my favorite video game of all time is Yakuza: Like a Dragon (<= HIGHLY RECCOMEND)",
    "I love visual novel puzzle games such as Ace Attorney, Professor Layton, and Ghost Trick: Phantom Dective (<= HIGHLY RECCOMEND)",
    "My favorite animes are Jojo's Bizarre Adventure, Sk8 the Infinity, Lupin the Third, Castlevania, and Golden Kamuy (<= HIGHLY RECCOMEND)",
    "I am a big Webtoon reader, with my favorites being Not So Shoujo Love Story, Castle Swimmer, Daybreak, Cursed Princess Club, The Doctors are Out, Mage & Demon Queen, Stagtown, TACIT, Bastard, Lavender Jack, and Gourmet Hound (<= HIGHLY RECCOMEND)"
);

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
funFactButton.addEventListener("click", getFunFact);               
styleSheetButton.addEventListener("click", changeStyleSheet);
portfolioButton.addEventListener("click", toPortfolio);
prevWorkButton.addEventListener("click", toPrevWork);
projectsButton.addEventListener("click", toProjects);

// Random number generator
function randomNumber(array) { return array[Math.floor(Math.random() * array.length)]; }

// Randomizes and displays fun fact from list
function getFunFact() { funFactDisplay.innerHTML = randomNumber(funFactArray); }

// Randomizes and displays css stylesheet from list
function changeStyleSheet() 
{ 
    let randNum = Math.floor(Math.random() * styleSheetArray.length);
    styleSheetBase.innerHTML = `<link id="style-base" rel="stylesheet" href="${styleSheetArray[randNum]}"></link>`;
    iconBase.href = iconArray[randNum];
}

// Goes to different pages
function toPortfolio() { window.location.href = "portfolio.html"; }
function toPrevWork() { window.location.href = "previous-work.html"; }
function toProjects() { window.location.href = "projects.html"; }