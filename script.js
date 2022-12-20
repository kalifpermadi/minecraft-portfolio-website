// When lever is flicked
const lever = document.getElementById("lever");
const cover = document.getElementById("cover");
const lamp = document.querySelectorAll(".lamp");
const activate = document.getElementById("activate");
const deactivate = document.getElementById("deactivate");
const flick = document.getElementById("rotate");
lever.onclick = function() {leverFlick()};
var x = 0;
function leverFlick() {
    x++;
    if (x % 2 == 1) {
        activate.play();
        lever.style.transform = "rotate(180deg)";
        cover.style.display = "none";
        for (let i = 0; i < lamp.length; i++) {
            lamp[i].src = "assets/image/redstone_lamp_on.png";
        }
    }
    else {
        deactivate.play();
        lever.style.transform = "rotate(0deg)";
        cover.style.display = "block";
        for (let i = 0; i < lamp.length; i++) {
            lamp[i].src = "assets/image/redstone_lamp.png";
        }
    }
};

// When "About" text is clicked
const page = document.getElementById("page");
const about = document.querySelector(".about");
const aboutText = document.getElementById("about");
aboutText.onclick = function() {showAbout()};
function showAbout() {
    flick.style.display = "none";
    page.style.display = "flex";
    about.style.display = "flex";
}

// When "Projects" text is clicked
const work = document.querySelector(".work");
const workText = document.getElementById("work");
workText.onclick = function() {showWork()};
function showWork() {
    flick.style.display = "none";
    page.style.display = "flex";
    work.style.display = "flex";
}

// When "Contact" text is clicked
const contact = document.querySelector(".contact");
const contactText = document.getElementById("contact");
contactText.onclick = function() {showContact()};
function showContact() {
    flick.style.display = "none";
    page.style.display = "flex";
    contact.style.display = "flex";
}

// When "Done" button is clicked
const done = document.getElementById("done");
done.onclick = function() {hideAbout()};
function hideAbout() {
    flick.style.display = "block";
    page.style.display = "none";
    about.style.display = "none";
    work.style.display = "none";
    contact.style.display = "none";
}

var pageIndex = 1;
showPage(pageIndex);

function plusPage(n){
    showPage(pageIndex += n);
}

function showPage(n) {
    var i;
    var pages = document.getElementsByClassName("work-slides");
    if (n > pages.length) {pageIndex = 1;}
    if (n < 1) {pageIndex = pages.length;}
    for (i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }
    pages[pageIndex-1].style.display = "block";
}