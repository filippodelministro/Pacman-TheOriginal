
var game_on = false;
var pause_on = false;
var intervalId;
var direction;
var isMoving = false; 
var speed;

document.addEventListener('keydown', keyPressed);



//* HANDLE KEYBOARD FUNCTIONS

function keyPressed(e){
    document.getElementById("demo1").innerHTML = "keyPressed(e)";

    if(game_on)
        keyPressedonGame(e);
    else
        begin();
}

function begin(){
    document.getElementById("demo1").innerHTML = "begin()";

    document.getElementById("pause-menu-container").style.visibility = "hidden";
    document.getElementById("startinfo").style.visibility = "hidden";
    
    game_on = true;
    pause_on = false;

    direction = "right";
    speed = 50;
    startMoving();
}

function keyPressedonGame(e){
    document.getElementById("demo1").innerHTML = "keyPressedonGame(e)";

    if(!pause_on){
        //in game
        if(e.keyCode == 32 || e.keyCode == 27)
            pause(e);
        else{
            changeDirection(e);
        }
    }
    else{
        //in pause
        if(e.keyCode == 32 || e.keyCode == 27)
            resume();
        else{
            handlePauseMenu(e);
        }
    }
}

function resume(){
    document.getElementById("demo2").innerHTML = "resume()";


    document.getElementById("pause-menu-container").style.visibility = "hidden";
    
    // game_on = true;
    pause_on = false;
    startMoving();
}
function pause(e){
    stopMoving();
    document.getElementById("demo2").innerHTML = "pause()";

    document.getElementById("pause-menu-container").style.visibility = "visible";

    pause_on = true;
}

function handlePauseMenu(e){
    document.getElementById("demo3").innerHTML = "handelPauseMenu()";

    //todo: handle menu con arrow
    switch(e.keyCode){
        case 27: start(); break;        //resume [ESC]
    }
}


//*  MOVING FUNCTIONS
function changeDirection(e) {
    e = e || window.event;

    if(!isMoving)           //when Pacman collide whit something
        startMoving();

    if (e.keyCode == '38') {
        direction = "up";
    }
    else if (e.keyCode == '40') {
        direction = "down";
    }
    else if (e.keyCode == '37') {
        direction = "left";

    }
    else if (e.keyCode == '39') {
        direction = "right";
    }
}

function move() {
    document.getElementById("demo1").innerHTML = "move()";

    var pacman = document.getElementById("pacman");
    var playground = document.getElementById("playground");


    var playgroundLeft = playground.offsetLeft;
    var playgroundRight = playgroundLeft + playground.offsetWidth;
    var playgroundTop = playground.offsetTop;
    var playgroundBottom = playgroundTop + playground.offsetHeight;

    var pacmanLeft = pacman.offsetLeft;
    var pacmanTop = pacman.offsetTop;

    switch(direction){
        case "right": {
            if(pacman.offsetLeft < playground.offsetLeft){   
                document.getElementById("demo2").innerHTML = "move> right";
                var currentLeft = parseInt(pacman.style.left || 0, 10);
                var newLeft = currentLeft + 5; // move 5 pixels to the right
                pacman.style.left = newLeft + "px";
                break;
            }
            else{
                stopMoving();
                break;
            }
        };
        case "up": {
            document.getElementById("demo2").innerHTML = "move> up";
            var currentTop = parseInt(pacman.style.top || 0, 10);
            var newTop = currentTop - 5; // move 5 pixels to the right
            pacman.style.top = newTop + "px";
            break;
        };
        case "left": {
            document.getElementById("demo2").innerHTML = "move> left";
            var currentLeft = parseInt(pacman.style.left || 0, 10);
            var newLeft = currentLeft - 5; // move 5 pixels to the right
            pacman.style.left = newLeft + "px";
            break;
        };
        case "down": {
            document.getElementById("demo2").innerHTML = "move> down";
            var currentTop = parseInt(pacman.style.top || 0, 10);
            var newTop = currentTop + 5; // move 5 pixels to the right
            pacman.style.top = newTop + "px";
            break;
        };
  
        
    }
}

function startMoving() {
    document.getElementById("demo3").innerHTML = "startMoving()";
    if (!isMoving) {
        intervalId = setInterval(move, speed); 
        isMoving = true;
    }
}

function stopMoving() {
    document.getElementById("demo3").innerHTML = "stopMoving()";

    clearInterval(intervalId); // stop the interval
    isMoving = false;
}




var playground = document.getElementById("playground");
var Pacman = document.getElementById("pacman");

var playgroundLeft = playground.offsetLeft;
var playgroundRight = playgroundLeft + playground.offsetWidth;
var playgroundTop = playground.offsetTop;
var playgroundBottom = playgroundTop + playground.offsetHeight;

var PacmanLeft = Pacman.offsetLeft;
var PacmanTop = Pacman.offsetTop;
