

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
}

Pacman.prototype.refresh = function(){
    this.stopMoving();
    this.startMoving();
}


Pacman.prototype.startMoving = function(){
    if (!this.moving) {
        this.interval = setInterval(this.move.bind(this), this.speed);
        // this.interval = setInterval(this.moveT.bind(this), this.speed);
        this.moving = true;
    }
}

Pacman.prototype.stopMoving = function(){
    clearInterval(this.interval); // stop the interval
    this.moving = false;
}

Pacman.prototype.move = function(){    
    var pacman = document.getElementById("pacman");
    var map = document.getElementById("map");

    //todo: add the padding 
    switch(this.direction){
        case "right": {
            if(pacman.offsetLeft + pacman.offsetWidth < map.offsetLeft + map.offsetWidth){   
                // this.translateRight();
                translateRight(this.pacman) 
                break;
            }
            else{
                this.stopMoving();
                break;
            }
        };
        case "up": {
            if(pacman.offsetTop> map.offsetTop){   
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
            if(pacman.offsetLeft > map.offsetLeft){   
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
            if(pacman.offsetTop + pacman.offsetHeight < map.offsetTop + map.offsetHeight){ 
                // this.translateDown();
                translateDown(this.pacman);
                break;
            }
            else{
                this.stopMoving();
                break;
            }
        };
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
