

function Pacman(){
    this.pacman = document.getElementById("pacman");


    this.pause = false;
    this.moving = false;
    
    this.x = 0;
    this.y = 0;
    
    this.direction = "right";     //? cambiare in meglio?
    this.speed = 10;
    this.interval;
}

Pacman.prototype.changeDirection = function(e){
    e = e || window.event;

    if(!this.moving)           //when Pacman collide whit something
        this.startMoving();

    switch(e.keyCode){
        case 37 : this.direction = "left"; break;
        case 38 : this.direction = "up"; break;
        case 39 : this.direction = "right"; break;
        case 40 : this.direction = "down"; break;
        case 83 : {
            this.speed -= 5;
            this.refresh();
            break;
        }
    }
    document.getElementById("pacmanDirection").innerHTML = "Direction: " + this.direction;
}

Pacman.prototype.refresh = function(){
    this.stopMoving();
    this.startMoving();
}


Pacman.prototype.startMoving = function(){
    document.getElementById("demo3").innerHTML = "PACMAN: startMoving()";

    if (!this.moving) {
        this.interval = setInterval(this.move.bind(this), this.speed);
        // this.interval = setInterval(this.moveT.bind(this), this.speed);
        this.moving = true;
    }

    document.getElementById("pacmanSpeed").innerHTML = "Speed: " + this.speed;
}

Pacman.prototype.stopMoving = function(){
    document.getElementById("demo3").innerHTML = "PACMAN: stopMoving()";

    clearInterval(this.interval); // stop the interval
    this.moving = false;
}

Pacman.prototype.move = function(){

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
                // this.translateRight();
                translateRight(this.pacman)  //make this work in utility.js
                break;
            }
            else{
                this.stopMoving();
                break;
            }
        };
        case "up": {
            if(pacman.offsetTop> playground.offsetTop){   
                // this.translateUp();
                translateUp(this.pacman);

                break;
            }
            else{
                this.stopMoving();
                break;
            }
        };
        case "left": {
            if(pacman.offsetLeft > playground.offsetLeft){   
                // this.translateLeft();
                translateLeft(this.pacman);
                break;
            }
            else{
                this.stopMoving();
                break;
            }
        };
        case "down": {
            if(pacman.offsetTop + pacman.offsetHeight < playground.offsetTop + playground.offsetHeight){ 
                // this.translateDown();
                translateDown(this.pacman);
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


// Pacman.prototype.translateRight = function(){
//     this.pacman = document.getElementById("pacman");

//     this.x += 1;
//     this.pacman.style.left = `${this.x}px`;
// }

// Pacman.prototype.translateLeft = function(){
//     this.pacman = document.getElementById("pacman");

//     this.x -= 1;
//     this.pacman.style.left = `${this.x}px`;
// }


// Pacman.prototype.translateUp = function(){
//     this.pacman = document.getElementById("pacman");

//     this.y -= 1;
//     this.pacman.style.top = `${this.y}px`;
// }

// Pacman.prototype.translateDown = function(){
//     this.pacman = document.getElementById("pacman");

//     this.y += 1;
//     this.pacman.style.top = `${this.y}px`;
// }
