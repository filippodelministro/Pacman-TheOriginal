
var game_on = false;
var pause_on = false;
document.addEventListener('keyup', keyPressed);

function keyPressed(e){
    if(game_on){
        if(!pause_on){
            if(e.keyCode == 32)         //pause
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
    document.getElementById("demo1").innerHTML = "GAME ON"
    document.getElementById("startinfo").innerHTML = "[running] press space to pause the game";
    document.getElementById("demo2").style.display = "block";

    document.getElementById("pause-menu").style.display = "none";
    document.getElementById("pause-menu-overlay").style.display = "none";
    game_on = true;
    pause_on = false;
}
function pause(e){
    document.getElementById("demo1").innerHTML = "GAME PAUSED"
    document.getElementById("startinfo").innerHTML = "press space to start the game";
    document.getElementById("demo2").style.display = "none";

    document.getElementById("pause-menu").style.display = "block";
    document.getElementById("pause-menu-overlay").style.display = "block";
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
    pm = document.getElementById("pacman");
    pm.style.left = parseInt(pm.style.left) - 5 + "px";
}

