

class Pacman{
    pause;
    moving;
    speed;
    direction;

    constructor(){
        document.getElementById("demo2").innerHTML = "pascman.js: construcor()"


        this.pause = false;
        this.moving = true;
        this.speed = 50;
        this.direction = "right";
    }

}

Pacman.prototype.pause = function(){
    this.pause = true;
        
    document.getElementById("demo3").innerHTML = "pacman.js: pause()"

}