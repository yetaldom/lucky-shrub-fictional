// Stick the navbar at the top of the page
window.onscroll = function () {
    var navbar = document.getElementById("navbar");
    var content = document.getElementById("content");
    var header = document.getElementById("header");
    var headerOffset = header.offsetHeight;

    if (window.scrollY > headerOffset) {
        navbar.classList.add("fixedNavbar");
        content.classList.add("contentMain");
    } else {
        navbar.classList.remove("fixedNavbar");
        content.classList.remove("contentMain");
    }
};

// Transparency Dynamics
var transparencyCounter = 0;
setInterval(changeTransparency, 200); // Change transparency every 0.2 second

function changeTransparency() {
    var transparencyValue = transparencyCounter % 11 / 10; // Regular values between 0 and 1
    transparencyCounter++;
    document.documentElement.style.setProperty("--logo-opacity", transparencyValue);
}

