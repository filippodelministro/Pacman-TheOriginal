/*
var level = 0;

function start(level){
    playground = document.getElementById("playground");
    playground.style.cursor = "none";
    pacmanInit()
    game = new Game(level);
}

function Game(level){
    document.addEventListener("keyup", this.key)
}


function pacmanInit() {
    pm = document.getElementById("pacman");
    pm.style.position = "relative";
    pm.style.left = "0px";
    pm.style.top = "0px";
}




*/


var game_on = false;
document.addEventListener('keydown', keyPressed);

function keyPressed(e) {

    
    
    if(game_on == true){
        document.getElementById("demo2").innerHTML = e.keyCode;
        if(e.keyCode == 32){     //pause
            pause();
        }
        else{
            move(e);
        }
    }
    else{
        if(e.keyCode == 32){     //pause
            start();
        }
    }
}

function start(){
    document.getElementById("demo1").innerHTML = "GAME ON"
    document.getElementById("startinfo").innerHTML = "[running] press space to pause the game";
    document.getElementById("demo2").style.display = "block";
    game_on = true;
}


function pause(){
    document.getElementById("demo1").innerHTML = "GAME PAUSED"
    document.getElementById("startinfo").innerHTML = "press space to start the game";
    document.getElementById("demo2").style.display = "none";
    game_on = false; 
}

//  moving functions

function move(e) {
    pm = document.getElementById("pacman");
    // pm.style.position = "relative";
    // pm.style.left = "0px";
    // pm.style.top = "0px";


    var key_code = e.which || e.keyCode;
    switch (key_code) {
        case 37: moveLeft(pm); break;
        case 38: moveUp(pm); break;
        case 39: moveRight(pm); break;
        case 40: moveDown(pm); break;
    
            // case 37: pm.style.left = parseInt(pm.style.left) - 5 + "px"; break;
            // case 38: pm.style.top = parseInt(pm.style.top) - 5 + "px"; break;
            // case 39: pm.style.left = parseInt(pm.style.left) + 5 + "px"; break;
            // case 40: pm.style.top = parseInt(pm.style.top) + 5 + "px"; break;
    }
}
//todo: capire ParseInt
function moveLeft(pm) {
    pm.style.left = pm.style.left - 5 + "px";

    // pm.style.left = parseInt(pm.style.left) - 5 + "px";
}
function moveUp(pm) {
    pm.style.top = pm.style.left - 5 + "px";

    // pm.style.top = parseInt(pm.style.top) - 5 + "px";
}
function moveRight(pm) {
    pm.style.left = pm.style.left + 5 + "px";

    // pm.style.left = parseInt(pm.style.left) + 5 + "px";
}
function moveDown(pm) {
    pm.style.top = pm.style.left+ 5 + "px";

    // pm.style.top = parseInt(pm.style.top) + 5 + "px";
}

