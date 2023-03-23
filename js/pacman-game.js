
var game_on = false;
var pause_on = false;
document.addEventListener('keydown', keyPressed);

function keyPressed(e){
    if(game_on){
        if(!pause_on){
            if(e.keyCode == 32 || e.keyCode == 27)         //pause
                pause(e);
            else move(e);
        }
        else{
            if(e.keyCode == 32)
                start();
            else handlePauseMenu(e);
        }
    }
    else{
        game_on = true;
        pause_on = false;
        start();
    }
}

function start(){
    document.getElementById("pause-menu-container").style.visibility = "hidden";
    document.getElementById("startinfo").style.visibility = "hidden";
    
    game_on = true;
    pause_on = false;
}
function resume(){
    document.getElementById("pause-menu-container").style.visibility = "hidden";
    
    game_on = true;
    pause_on = false;
}
function pause(e){
    document.getElementById("pause-menu-container").style.visibility = "visible";

    pause_on = true;
    // handlePauseMenu(e);
}

function handlePauseMenu(e){
    document.getElementById("demo3").innerHTML = e.keyCode;

    switch(e.keyCode){
        case 27: start(); break;        //resume [ESC]
    }
}


//  moving functions
function move(e) {
    
    var posLeft = document.getElementById("pacman").offsetLeft;
    var posTop = document.getElementById("pacman").offsetTop;
    e = e || window.event;

    //!not working
    // switch(e.keyCode){
    //     case '37': document.getElementById("pacman").style.marginLeft  = (posLeft-25)+"px"; break;
    //     case '38': document.getElementById("pacman").style.marginTop  = (posTop-25)+"px"; break;
    //     case '39': document.getElementById("pacman").style.marginLeft  = (posLeft+25)+"px"; break;
    //     case '40': document.getElementById("pacman").style.marginTop  = (posTop+25)+"px"; break;
    // }

    if (e.keyCode == '38') {
        // up arrows
        document.getElementById("pacman").style.marginTop  = (posTop-25)+"px";
    }
    else if (e.keyCode == '40') {
        // down arrow
        document.getElementById("pacman").style.marginTop  = (posTop+25)+"px";
    }
    else if (e.keyCode == '37') {
       // left arrow
        document.getElementById("pacman").style.marginLeft  = (posLeft-25)+"px";
    }
    else if (e.keyCode == '39') {
       // right arrow
        document.getElementById("pacman").style.marginLeft  = (posLeft+25)+"px";
    }
}


function init(){
    document.getElementById("demo1").innerHTML = "init()";
    Pacman = new Pacman();
    // startgame();
}

var intervalId; // to keep track of the interval ID

// function to move the element
function moveElement() {
  var element = document.getElementById("pacman");
  var currentLeft = parseInt(element.style.left || 0, 10);
  var newLeft = currentLeft + 5; // move 5 pixels to the right
  element.style.left = newLeft + "px";
}

// start moving the element
intervalId = setInterval(moveElement, 50); // move every 50 milliseconds

// stop moving when a key is pressed
document.addEventListener("keydown", function(event) {
  clearInterval(intervalId); // stop the interval
});
