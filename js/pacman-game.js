
var game_on = false;
var pause_on = false;
var intervalId;
var direction;
document.addEventListener('keydown', keyPressed);


var intervalId; // to keep track of the interval ID
var isMoving = false; // to keep track of whether the element is currently moving

// start moving the element
// intervalId = setInterval(move, 50);


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


//  moving functions
function changeDirection(e) {
    
    var posLeft = document.getElementById("pacman").offsetLeft;
    var posTop = document.getElementById("pacman").offsetTop;
    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrows
        // document.getElementById("pacman").style.marginTop  = (posTop-25)+"px";
        direction = "up";
    }
    else if (e.keyCode == '40') {
        // down arrow
        // document.getElementById("pacman").style.marginTop  = (posTop+25)+"px";
        direction = "down";

    }
    else if (e.keyCode == '37') {
       // left arrow
        // document.getElementById("pacman").style.marginLeft  = (posLeft-25)+"px";
        direction = "left";

    }
    else if (e.keyCode == '39') {
       // right arrow
        // document.getElementById("pacman").style.marginLeft  = (posLeft+25)+"px";
        direction = "right";

    }
}


// function init(){
//     document.getElementById("demo1").innerHTML = "init()";
//     // Pacman = new Pacman();
//     // startgame();
// }


// start moving the element
// intervalId = setInterval(move, 50); // move every 50 milliseconds
function move() {
    document.getElementById("demo1").innerHTML = "move()";
    var element = document.getElementById("pacman");

    switch(direction){
        case "right": {
            document.getElementById("demo2").innerHTML = "move> right";
            var currentLeft = parseInt(element.style.left || 0, 10);
            var newLeft = currentLeft + 5; // move 5 pixels to the right
            element.style.left = newLeft + "px";
            break;
        };
        case "up": {
            document.getElementById("demo2").innerHTML = "move> up";
            var currentTop = parseInt(element.style.top || 0, 10);
            var newTop = currentTop - 5; // move 5 pixels to the right
            element.style.top = newTop + "px";
            break;
        };
        case "left": {
            document.getElementById("demo2").innerHTML = "move> left";
            var currentLeft = parseInt(element.style.left || 0, 10);
            var newLeft = currentLeft - 5; // move 5 pixels to the right
            element.style.left = newLeft + "px";
            break;
        };
        case "down": {
            document.getElementById("demo2").innerHTML = "move> down";
            var currentTop = parseInt(element.style.top || 0, 10);
            var newTop = currentTop + 5; // move 5 pixels to the right
            element.style.top = newTop + "px";
            break;
        };
  
        
    }
}
// // stop moving when a key is pressed

// document.addEventListener("keydown", function(event) {
//     clearInterval(intervalId); // stop the interval
// });


function startMoving() {
    document.getElementById("demo3").innerHTML = "startMoving()";
    if (!isMoving) {
        intervalId = setInterval(move, 50); // move every 50 milliseconds
        isMoving = true;
    }
}

// stop moving the element
function stopMoving() {
    document.getElementById("demo3").innerHTML = "stopMoving()";

    clearInterval(intervalId); // stop the interval
    isMoving = false;
}

// listen for keyboard input
// document.addEventListener("keydown", function(event) {
//   if (event.code === "ArrowRight") { // start moving when right arrow is pressed
//     startMoving();
//   } else if (event.code === "Space") { // stop moving when spacebar is pressed
//     stopMoving();
//   }
// });



