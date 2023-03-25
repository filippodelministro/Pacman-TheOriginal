var game_on = false;
document.addEventListener('keydown', keyPressed);


function keyPressed(e){
    document.getElementById("demo1").innerHTML = "keyPressed(e)";

    if(game_on)
        keyPressedonGame(e);
    else
        begin();
}

function keyPressedonGame(e){
    document.getElementById("demo1").innerHTML = "keyPressedonGame(e)";

    if(!pause_on){
        //in game
        if(e.keyCode == 32 || e.keyCode == 27)
            pause(e);
        else{
            this.changeDirection(e);
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


function begin(){
    document.getElementById("demo1").innerHTML = "begin()";


    document.getElementById("pause-menu-container").style.visibility = "hidden";
    document.getElementById("startinfo").style.visibility = "hidden";

    playground.style.cursor = "none";
    game_on = true;

    pacman = new Pacman();

    // pause_on = false;
    
    // direction = "right";
    // speed = 50;
   
}


function Pacman() {
    document.getElementById("demo2").innerHTML = "Pacman constructor";


    this.pause_on = false;
    this.intervalId;
    this.direction = "right";
    this.isMoving = false; 
    this.speed = 50;

    this.showStaticInfo();
    this.startMoving();

    // aggiornaPunteggio(0);
    // this.selezionaLivello();
    // this.timer = new Timer;
    // document.addEventListener('mousemove', this.mouseMove.bind(this));
    // document.addEventListener('mousedown', this.mouseDown.bind(this));
    // document.addEventListener('keydown', this.keyDown.bind(this));
}


Pacman.prototype.showStaticInfo = 
    function(){
        var playground = document.getElementById("playground");
        document.getElementById("playgroundLeft").innerHTML = "Left: " + playground.offsetLeft;
        document.getElementById("playgroundTop").innerHTML = "Top: " + playground.offsetTop;
        document.getElementById("playgroundWidth").innerHTML = "Width: " + playground.offsetWidth;
        document.getElementById("playgroundHeight").innerHTML = "Height: " + playground.offsetHeight;
    
    
        var playground = document.getElementById("pacman");
        document.getElementById("pacmanWidth").innerHTML = "Width: " + pacman.offsetWidth;
        document.getElementById("pacmanHeight").innerHTML = "Height: " + pacman.offsetHeight;
    }

Pacman.prototype.startMoving = 
    function(){
        document.getElementById("demo3").innerHTML = "startMoving()";
        if (!this.isMoving) {
            this.intervalId = setInterval(this.move , speed); 
            this.isMoving = true;
        }

        document.getElementById("pacmanSpeed").innerHTML = "Speed: " + speed;
    }


// function startMoving() {
//     document.getElementById("demo3").innerHTML = "startMoving()";
//     if (!isMoving) {
//         intervalId = setInterval(move, speed); 
//         isMoving = true;
//     }

//     document.getElementById("pacmanSpeed").innerHTML = "Speed: " + speed;

// }
Pacman.prototype.stopMoving = 
    function() {
        document.getElementById("demo3").innerHTML = "stopMoving()";

        clearInterval(intervalId); // stop the interval
        isMoving = false;
    }



Pacman.prototype.changeDirection = 
    function(e) {
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

Pacman.prototype.move = 
    function() {
        document.getElementById("demo1").innerHTML = "move()";

        var pacman = document.getElementById("pacman");
        var playground = document.getElementById("playground");

        document.getElementById("pacmanLeft").innerHTML = "Left: " + pacman.offsetLeft;
        document.getElementById("pacmanTop").innerHTML = "Top: " + pacman.offsetTop;


        var playgroundLeft = playground.offsetLeft;
        var playgroundRight = playgroundLeft + playground.offsetWidth;
        var playgroundTop = playground.offsetTop;
        var playgroundBottom = playgroundTop + playground.offsetHeight;

        var pacmanLeft = pacman.offsetLeft;
        var pacmanTop = pacman.offsetTop;

        switch(direction){
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