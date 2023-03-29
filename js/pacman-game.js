
var game_on = false;
var pause_on = false;
var PacmanMoving;
var BlueGhostMoving;

var Pacmandirection;
var BlueGhostdirection;
var isMoving = false; 
var speed;

document.addEventListener('keydown', keyPressed);



//* HANDLE KEYBOARD FUNCTIONS


function showStaticInfo(){
    var playground = document.getElementById("playground");
    document.getElementById("playgroundLeft").innerHTML = "Left: " + playground.offsetLeft;
    document.getElementById("playgroundTop").innerHTML = "Top: " + playground.offsetTop;
    document.getElementById("playgroundWidth").innerHTML = "Width: " + playground.offsetWidth;
    document.getElementById("playgroundHeight").innerHTML = "Height: " + playground.offsetHeight;


    var playground = document.getElementById("pacman");
    document.getElementById("pacmanWidth").innerHTML = "Width: " + pacman.offsetWidth;
    document.getElementById("pacmanHeight").innerHTML = "Height: " + pacman.offsetHeight;

    
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

//todo
function handlePauseMenu(e){
    document.getElementById("demo3").innerHTML = "handelPauseMenu()";

    //todo: handle menu con arrow
    switch(e.keyCode){
        case 27: start(); break;        //resume [ESC]
    }
}


function move() {
    document.getElementById("demo1").innerHTML = "move()";

    var pacman = document.getElementById("pacman");
    var playground = document.getElementById("playground");

    document.getElementById("pacmanLeft").innerHTML = "Left: " + pacman.offsetLeft;
    document.getElementById("pacmanTop").innerHTML = "Top: " + pacman.offsetTop;

    switch(Pacmandirection){
        case "right": {
            if(pacman.offsetLeft + pacman.offsetWidth < playground.offsetLeft + playground.offsetWidth){   
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
            if(pacman.offsetTop> playground.offsetTop){   
                document.getElementById("demo2").innerHTML = "move> up";
                var currentTop = parseInt(pacman.style.top || 0, 10);
                var newTop = currentTop - 5; // move 5 pixels to the right
                pacman.style.top = newTop + "px";
                break;
            }
            else{
                stopMoving();
                break;
            }
        };
        case "left": {
            if(pacman.offsetLeft > playground.offsetLeft){   
                document.getElementById("demo2").innerHTML = "move> left";
                var currentLeft = parseInt(pacman.style.left || 0, 10);
                var newLeft = currentLeft - 5; // move 5 pixels to the right
                pacman.style.left = newLeft + "px";
                break;
            }
            else{
                stopMoving();
                break;
            }
        };
        case "down": {
            if(pacman.offsetTop + pacman.offsetHeight < playground.offsetTop + playground.offsetHeight){ 
                document.getElementById("demo2").innerHTML = "move> down";
                var currentTop = parseInt(pacman.style.top || 0, 10);
                var newTop = currentTop + 5; // move 5 pixels to the right
                pacman.style.top = newTop + "px";
                break;
            }
            else{
                stopMoving();
                break;
            }
        };
    }
}

function startMoving() {
    document.getElementById("demo3").innerHTML = "startMoving()";
    if (!isMoving) {
        PacmanMoving = setInterval(move, speed);
        BlueGhostMoving = setInterval(moveGhosts, speed); 

        isMoving = true;
    }

    document.getElementById("pacmanSpeed").innerHTML = "Speed: " + speed;

}

function stopMoving() {
    document.getElementById("demo3").innerHTML = "stopMoving()";

    clearInterval(PacmanMoving); // stop the interval
    isMoving = false;

    clearInterval(BlueGhostMoving); // stop the interval

}



function moveGhosts(){
    document.getElementById("demo1").innerHTML = "moveGhosts()";

    var ghost = document.getElementById("blue-ghost");
    var playground = document.getElementById("playground");

    // document.getElementById("ghostLeft").innerHTML = "Left: " + ghost.offsetLeft;
    // document.getElementById("ghostTop").innerHTML = "Top: " + ghost.offsetTop;

    switch(BlueGhostdirection){
        case "right": {
            if(ghost.offsetLeft + ghost.offsetWidth < playground.offsetLeft + playground.offsetWidth){   
                document.getElementById("demo2").innerHTML = "move> right";
                var currentLeft = parseInt(ghost.style.left || 0, 10);
                var newLeft = currentLeft + 5; // move 5 pixels to the right
                ghost.style.left = newLeft + "px";
                break;
            }
            else{
                changeDirectionGhost();
                // break;
            }
        };
        case "up": {
            if(ghost.offsetTop> playground.offsetTop){   
                document.getElementById("demo2").innerHTML = "move> up";
                var currentTop = parseInt(ghost.style.top || 0, 10);
                var newTop = currentTop - 5; // move 5 pixels to the right
                ghost.style.top = newTop + "px";
                break;
            }
            else{
                changeDirectionGhost();
                // break;
            }
        };
        case "left": {
            if(ghost.offsetLeft > playground.offsetLeft){   
                document.getElementById("demo2").innerHTML = "move> left";
                var currentLeft = parseInt(ghost.style.left || 0, 10);
                var newLeft = currentLeft - 5; // move 5 pixels to the right
                ghost.style.left = newLeft + "px";
                break;
            }
            else{
                changeDirectionGhost();
                // break;
            }
        };
        case "down": {
            if(ghost.offsetTop + ghost.offsetHeight < playground.offsetTop + playground.offsetHeight){ 
                document.getElementById("demo2").innerHTML = "move> down";
                var currentTop = parseInt(ghost.style.top || 0, 10);
                var newTop = currentTop + 5; // move 5 pixels to the right
                ghost.style.top = newTop + "px";
                break;
            }
            else{
                changeDirectionGhost();
                // break;s
            }
        };
    }
}

function changeDirectionGhost() {
    const options = ["right", "left", "up", "down"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }






//* GAME ---------------------------------------------------


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

    showStaticInfo();
    
    game_on = true;
    pause_on = false;

    Pacmandirection = "right";
    BlueGhostdirection = changeDirectionGhost();

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




//*  PACMAN ---------------------------------------------------
function changeDirection(e) {
    e = e || window.event;

    if(!isMoving)           //when Pacman collide whit something
        startMoving();

    if (e.keyCode == '38') {
        Pacmandirection = "up";
    }
    else if (e.keyCode == '40') {
        Pacmandirection = "down";
    }
    else if (e.keyCode == '37') {
        Pacmandirection = "left";

    }
    else if (e.keyCode == '39') {
        Pacmandirection = "right";
    }
}
