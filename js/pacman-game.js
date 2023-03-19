
var level = 0;

function start(level){
    playground = document.getElementById("playground");
    playground.style.cursor = "none";
    pacmanInit()
    // game = new Game(level);
}

// function Game(level){
//     document.addEventListener("keyup", this.key)
// }


function pacmanInit() {
    pm = document.getElementById("pacman");
    pm.style.position = "relative";
    pm.style.left = "0px";
    pm.style.top = "0px";
}

function getKeyAndMove(e) {
    var key_code = e.which || e.keyCode;
    switch (key_code) {
        case 37: moveLeft(); break;
        case 38: moveUp(); break;
        case 39: moveRight(); break;
        case 40: moveDown(); break;
    }
}


//todo: capire ParseInt
function moveLeft() {
    pm.style.left = parseInt(pm.style.left) - 5 + "px";
}
function moveUp() {
    pm.style.top = parseInt(pm.style.top) - 5 + "px";
}
function moveRight() {
    pm.style.left = parseInt(pm.style.left) + 5 + "px";
}
function moveDown() {
    pm.style.top = parseInt(pm.style.top) + 5 + "px";
}


window.onload = start;

