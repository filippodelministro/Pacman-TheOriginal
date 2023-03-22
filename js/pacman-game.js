
var game_on = false;
var pause_on = false;
document.addEventListener('keyup', keyPressed);

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
        move(e);
    }
}

function start(){
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
    if (e.keyCode == '38') {
        // up arrow
        document.getElementById("pacman").style.marginTop  = (posTop-5)+"px";
    }
    else if (e.keyCode == '40') {
        // down arrow
        document.getElementById("pacman").style.marginTop  = (posTop+5)+"px";
    }
    else if (e.keyCode == '37') {
       // left arrow
        document.getElementById("pacman").style.marginLeft  = (posLeft-5)+"px";
    }
    else if (e.keyCode == '39') {
       // right arrow
        document.getElementById("pacman").style.marginLeft  = (posLeft+5)+"px";
    }
}


function moveLeft() {
    document.getElementById("demo3").innerHTML = "moveLeft()";

    // document.getElementById("pacman").style.left = "5px";
    pm = document.getElementById("pacman");
    pm.style.left = parseInt(pm.style.left) -5 + "px";
}

