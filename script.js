const lever = document.getElementById("lever");
const cover = document.getElementById("cover");
const lamp = document.querySelectorAll(".lamp");
const activate = document.getElementById("activate");
const deactivate = document.getElementById("deactivate");
const about = document.querySelector(".about");
const aboutText = document.getElementById("about");
const work = document.querySelector(".work");
const workText = document.getElementById("work");
const contact = document.querySelector(".contact");
const contactText = document.getElementById("contact");
const page = document.getElementById("page");
const done = document.getElementById("done");

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

aboutText.onclick = function() {showAbout()};
function showAbout() {
    page.style.display = "flex";
    about.style.display = "flex";
}

workText.onclick = function() {showWork()};
function showWork() {
    page.style.display = "flex";
    work.style.display = "flex";
}

contactText.onclick = function() {showContact()};
function showContact() {
    page.style.display = "flex";
    contact.style.display = "flex";
}

done.onclick = function() {hideAbout()};
function hideAbout() {
    page.style.display = "none";
    about.style.display = "none";
    work.style.display = "none";
    contact.style.display = "none";
}