
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
    // let pm = document.getElementById("pacman");
    document.getElementById("demo2").innerHTML = e.keyCode;

    // var key_code = e.which || e.keyCode;
    switch (e.keyCode) {
        case 37: moveLeft(); break;
        case 38: moveUp(); break;
        case 39: moveRight(); break;
        case 40: moveDown(); break;
    }
}


function moveLeft() {
    document.getElementById("demo3").innerHTML = "moveLeft()";

    // document.getElementById("pacman").style.left = "5px";
    pm = document.getElementById("pacman");
    pm.style.left = parseInt(pm.style.left) -5 + "px";
}

