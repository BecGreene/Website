const ffbutton = document.querySelector("#fun-fact-button");
let ffdisplay = document.querySelector("#display-fun-fact");
const funFactArray = [];

const ssbutton = document.querySelector("#style-sheet-button");
let ssBase = document.querySelector("#style-base")
const styleSheetArray = [];
console.log(ssbutton);

funFactArray.push(
    "I am a big Vtuber fan, with my oshis (my favorites) being Gavis Bettel, Banzoin Hakka, Goldbullet, and my kamioshi (my favorite vtuber) being Josuiji Shinri from Holostars EN (POP POP POP!)",
    "I am a recovering picky eater and I will try anything once. Yes, I will try balut when I have the chance",
    "I love ice skating and have taken lessons when I was younger, but I still can't spin",
    "I love the horror genre, but only when it's static (Books and comics). I currently cannot handle horror that moves (Video games and movies)",
    "I love tattoos, but I am still waiting to get my first one",
    "My favorite game series of all time is Yakuza / Like a Dragon / Ryu Ga Gotoku, and my favorite game of all time is Yakuza: Like a Dragon (<= HIGHLY RECCOMEND)",
    "I love visual novel puzzle games such as Ace Attorney, Professor Layton, and Ghost Trick: Phantom Dective (<= HIGHLY RECCOMEND)",
    "My favorite animes are Jojo's Bizarre Adventure, Sk8 the Infinity, Lupin the Third, and Golden Kamuy (<= HIGHLY RECCOMEND)",
    "I am a big Webtoon reader, with my favorites being Not So Shoujo Love Story, Castle Swimmer, Daybreak, Cursed Princess Club, The Doctors are Out, Mage & Demon Queen, Stagtown, TACIT, Bastard, Lavender Jack, and Gourmet Hound (<= HIGHLY RECCOMEND)"
);

styleSheetArray.push(
    "style-1.css",
    "style-2.css",
    "style-3.css"
);

ffbutton.addEventListener("click", getFunFact);               
ssbutton.addEventListener("click", changeStyleSheet);

function getFunFact() { ffdisplay.innerHTML = funFactArray[Math.floor(Math.random() * funFactArray.length)]; }

function changeStyleSheet() 
{
    ssBase.innerHTML = `<link id="style-base" rel="stylesheet" href="${styleSheetArray[Math.floor(Math.random() * styleSheetArray.length)]}"></link>`;
}