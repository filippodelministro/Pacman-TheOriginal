

function Ghost(){
    // this.ghost = document.getElementById("ghost");


    this.pause = false;
    this.moving = false;
    
    this.x = 0;
    this.y = 0;
    
    this.direction = this.changeDirection();
    this.speed = 20;
    this.interval;
}

Ghost.prototype.changeDirection = function(){

    if(!this.moving)           //when Ghost collide whit something
        this.startMoving();
   
    var ran = Math.floor(Math.random() * DIRECTIONS.length);
    this.direction = DIRECTIONS(ran);
    
    document.getElementById("pacmanDirection").innerHTML = "Direction: " + this.direction;
}


Ghost.prototype.startMoving = function(){
    document.getElementById("demo3").innerHTML = "PACMAN: startMoving()";

    if (!this.moving) {
        this.interval = setInterval(this.move.bind(this), this.speed);
        // this.interval = setInterval(this.moveT.bind(this), this.speed);
        this.moving = true;
    }

    document.getElementById("pacmanSpeed").innerHTML = "Speed: " + this.speed;
}

Ghost.prototype.stopMoving = function(){
    document.getElementById("demo3").innerHTML = "PACMAN: stopMoving()";

    clearInterval(this.interval); // stop the interval
    this.moving = false;
}

Ghost.prototype.move = function(){

    document.getElementById("demo1").innerHTML = "PACMAN: move()";
    document.getElementById("demo2").innerHTML = "move():" + this.direction;

    
    var pacman = document.getElementById("pacman");
    var playground = document.getElementById("playground");
    
    // document.getElementById("pacmanLeft").innerHTML = "Left: " + pacman.offsetLeft;
    // document.getElementById("pacmanTop").innerHTML = "Top: " + pacman.offsetTop;
    // document.getElementById("demo1").innerHTML = "Speed: " + this.speed;

    switch(this.direction){
        case "right": {
            if(pacman.offsetLeft + pacman.offsetWidth < playground.offsetLeft + playground.offsetWidth){   
                this.translateRight();
                //fix: translateRight(this.pacman)  //make this work in utility.js
                break;
            }
            else{
                this.stopMoving();
                break;
            }
        };
        case "up": {
            if(pacman.offsetTop> playground.offsetTop){   
                this.translateUp();
                break;
            }
            else{
                this.stopMoving();
                break;
            }
        };
        case "left": {
            if(pacman.offsetLeft > playground.offsetLeft){   
                this.translateLeft();
                break;
            }
            else{
                this.stopMoving();
                break;
            }
        };
        case "down": {
            if(pacman.offsetTop + pacman.offsetHeight < playground.offsetTop + playground.offsetHeight){ 
                this.translateDown();
                break;
            }
            else{
                this.stopMoving();
                break;
            }
        };
        default : document.getElementById("demo2").innerHTML = "ERROR IN DIRECTION";
    }
}


Ghost.prototype.translateRight = function(){
    this.pacman = document.getElementById("pacman");

    this.x += 1;
    this.pacman.style.left = `${this.x}px`;
}

Ghost.prototype.translateLeft = function(){
    this.pacman = document.getElementById("pacman");

    this.x -= 1;
    this.pacman.style.left = `${this.x}px`;
}


Ghost.prototype.translateUp = function(){
    this.pacman = document.getElementById("pacman");

    this.y -= 1;
    this.pacman.style.top = `${this.y}px`;
}

Ghost.prototype.translateDown = function(){
    this.pacman = document.getElementById("pacman");

    this.y += 1;
    this.pacman.style.top = `${this.y}px`;
}
