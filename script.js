const body = document.getElementsByTagName("body");
const doneButton = document.getElementById("done");
const blocks = document.getElementById("blocks");
const page = document.getElementById("page");
const pageImage = page.querySelector("img:first-child");
window.addEventListener("resize", function() {
    var width = window.innerWidth;
    if (width < "640") {
        blocks.style.maxWidth = "384px";
        doneButton.src = "assets/image/done_resized.png";
        page.style.width = "300px";
        pageImage.style.left = "4px";
    }
    else {
        blocks.style.maxWidth = "640px";
        doneButton.src = "assets/image/done.png";
        page.style.width = "400px";
        pageImage.style.left = "54px";
    }
});

window.addEventListener("load", function() {
    var width = window.innerWidth;
    if (width < "640") {
        blocks.style.maxWidth = "384px";
        doneButton.src = "assets/image/done_resized.png";
        page.style.width = "300px";
        pageImage.style.left = "4px";
    }
    else {
        blocks.style.maxWidth = "640px";
        doneButton.src = "assets/image/done.png";
        page.style.width = "400px";
        pageImage.style.left = "54px";
    }
});



const leverFlick = document.getElementById("leverFlick");
const lamps = document.querySelectorAll(".redstoneLamp");
var x = 0;
function flick() {
    x++;
    if(x % 2 != 0) {
        for(var i = 0; i < 4; i++) {
            lamps[i].src = "assets/image/redstone_lamp_on.png";
        }
        leverFlick.style.transform = "translate(-50%, -50%) rotate(180deg)";
        body[0].style.filter = "brightness(100%)";
        body[0].style.backgroundImage = "url(assets/image/spruce_planks.png)";
        return;
    }
    for(var i = 0; i < 4; i++) {
        lamps[i].src = "assets/image/redstone_lamp.png";
    }
    leverFlick.style.transform = "translate(-50%, -50%)";
    body[0].style.filter = "brightness(20%)";
    body[0].style.backgroundImage = "url(assets/image/spruce_planks_dark.png)";
}



const about = document.getElementById("about");
function showAbout() {
    about.style.display = "block";
    achievements.style.display = "none";
    coolThings.style.display = "none";
    page.style.display = "block";
}


const achievements = document.getElementById("achievements");
function showAchievements() {
    about.style.display = "none";
    achievements.style.display = "block";
    coolThings.style.display = "none";
    page.style.display = "block";
}


const coolThings = document.getElementById("coolThings");
function showCoolThings() {
    about.style.display = "none";
    achievements.style.display = "none";
    coolThings.style.display = "block";
    page.style.display = "block";
}


const contact = document.getElementById("contact");
function showContact() {
    about.style.display = "none";
    achievements.style.display = "none";
    coolThings.style.display = "none";
    contact.style.display = "block";
    page.style.display = "block";
}


function hidePage() {
    about.style.display = "none";
    achievements.style.display = "none";
    coolThings.style.display = "none";
    contact.style.display = "none";
    page.style.display = "none";
}


const achievementsSlide = document.querySelectorAll(".achievementsSlide");
var achievementsIndex = 0;
function nextAchievements() {
    achievementsIndex++;
    if (achievementsIndex == achievementsSlide.length) {
        achievementsIndex = achievementsSlide.length - 1;
    }
    for (var i = 0; i < achievementsSlide.length; i++) {
        if (i == achievementsIndex % achievementsSlide.length) {
            achievementsSlide[i].style.display = "block";
        }
        else {
            achievementsSlide[i].style.display = "none";
        }
    }
}
function previousAchievements() {
    achievementsIndex--;
    if (achievementsIndex < 0) {
        achievementsIndex = 0;
    }
    for (var i = 0; i < achievementsSlide.length; i++) {
        if (i == achievementsIndex % achievementsSlide.length) {
            achievementsSlide[i].style.display = "block";
        }
        else {
            achievementsSlide[i].style.display = "none";
        }
    }
}


const coolThingsSlide = document.querySelectorAll(".coolThingsSlide");
var coolThingsIndex = 0;
function nextCoolThings() {
    coolThingsIndex++;
    if (coolThingsIndex == coolThingsSlide.length) {
        coolThingsIndex = coolThingsSlide.length - 1;
    }
    for (var i = 0; i < coolThingsSlide.length; i++) {
        if (i == coolThingsIndex % coolThingsSlide.length) {
            coolThingsSlide[i].style.display = "block";
        }
        else {
            coolThingsSlide[i].style.display = "none";
        }
    }
}
function previousCoolThings() {
    coolThingsIndex--;
    if (coolThingsIndex < 0) {
        coolThingsIndex = 0;
    }
    for (var i = 0; i < coolThingsSlide.length; i++) {
        if (i == coolThingsIndex % coolThingsSlide.length) {
            coolThingsSlide[i].style.display = "block";
        }
        else {
            coolThingsSlide[i].style.display = "none";
        }
    }
}