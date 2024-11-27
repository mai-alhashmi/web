let myRect = document.getElementById("rect");
var l = 150;
var t = 150;
var step = 30;
myRect.style.setProperty("left", l + "px");


myRect.style.setProperty("top", t + "px");

function moveLeft() {
    l-= step;
    myRect.style.setProperty("left", l + "px")
    myRect.style.setProperty("width", "250px");
    myRect.style.setProperty("height", "250px");
    myRect.style.setProperty("background-color","green");
}

function moveRight() {
    l += step;
    myRect.style.setProperty("left", l + "px")
    myRect.style.setProperty("width", "250px");
    myRect.style.setProperty("height", "250px");
    myRect.style.setProperty("background-color","yellow");
}
function moveUp() {
    t -= step;
    myRect.style.setProperty("top", t + "px")
    myRect.style.setProperty("width", "250px");
    myRect.style.setProperty("height", "250px");
    myRect.style.setProperty("background-color","red");
}
function moveDown() {
    t += step;
    myRect.style.setProperty("top", t + "px")
    myRect.style.setProperty("width", "250px");
    myRect.style.setProperty("height", "250px");
    myRect.style.setProperty("background-color","blue");
}