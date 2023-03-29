

function Pacman(){
    this.pause = false;
    this.moving = false;
    this.direction = "right";

    this.speed = 50;
    this.interval;
}

Pacman.prototype.changeDirection = function(e){
    document.getElementById("demo3").innerHTML = "PACMAN: changeDirection(e)";

    e = e || window.event;

    if(!this.moving)           //when Pacman collide whit something
        this.startMoving();

    //todo use swicth
    // switch(e.keyCode){
    //     case '38'
    // }
    
    if (e.keyCode == '38') {
        this.direction = "up";
    }
    else if (e.keyCode == '40') {
        this.direction = "down";
    }
    else if (e.keyCode == '37') {
        this.direction = "left";

    }
    else if (e.keyCode == '39') {
        this.direction = "right";
    }
}


Pacman.prototype.startMoving = function(){
    document.getElementById("demo3").innerHTML = "PACMAN: startMoving()";


    if (!this.moving) {
        this.interval = setInterval(this.move, this.speed);

        this.moving = true;
    }

    document.getElementById("pacmanSpeed").innerHTML = "Speed: " + this.speed;
}

Pacman.prototype.stopMoving = function(){
    document.getElementById("demo3").innerHTML = "PACMAN: stopMoving()";

    clearInterval(this.interval); // stop the interval
    this.moving = false;
}

Pacman.prototype.move = function(e){

    document.getElementById("demo2").innerHTML = "move()";
    /*

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
                this.stopMoving();
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
                this.stopMoving();
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
                this.stopMoving();
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
                this.stopMoving();
                break;
            }
        };
    }
    */
}