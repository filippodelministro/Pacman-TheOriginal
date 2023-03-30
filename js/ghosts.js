

function Ghost(){
    // this.ghost = document.getElementById("ghost");


    this.pause = false;
    this.moving = false;
    
    this.x = 0;
    this.y = 0;
    
    // this.direction = this.changeDirection();
    this.changeDirection();
    this.speed = 5;
    this.interval;
}

Ghost.prototype.changeDirection = function(){

    // if(!this.moving)          
    //     this.startMoving();
   
    var ran = Math.floor(Math.random() * DIRECTIONS.length);
    this.direction = DIRECTIONS[ran];   

    // document.getElementById("demo4").innerHTML = "GHOST: diretion = " + this.direction;

}


Ghost.prototype.startMoving = function(){
    document.getElementById("demo3").innerHTML = "GHOST: startMoving()";

    if (!this.moving) {
        this.interval = setInterval(this.move.bind(this), this.speed);
        // this.interval = setInterval(this.moveT.bind(this), this.speed);
        this.moving = true;
    }

    document.getElementById("pacmanSpeed").innerHTML = "Speed: " + this.speed;
}

Ghost.prototype.stopMoving = function(){
    document.getElementById("demo3").innerHTML = "GHOST: stopMoving()";

    clearInterval(this.interval); // stop the interval
    this.moving = false;
}

Ghost.prototype.move = function(){

    document.getElementById("demo1").innerHTML = "GHOST: move()";
    document.getElementById("demo2").innerHTML = "move():" + this.direction;

    
    var element = document.getElementById("blue-ghost");
    var playground = document.getElementById("playground");
    
    // document.getElementById("pacmanLeft").innerHTML = "Left: " + element.offsetLeft;
    // document.getElementById("pacmanTop").innerHTML = "Top: " + element.offsetTop;
    // document.getElementById("demo1").innerHTML = "Speed: " + this.speed;

    switch(this.direction){
        case "right": {
            if(element.offsetLeft + element.offsetWidth < playground.offsetLeft + playground.offsetWidth){   
                this.translateRight();
                //fix: translateRight(this.element)  //make this work in utility.js
                break;
            }
            else{
                // this.stopMoving();
                this.changeDirection();
                break;
            }
        };
        case "up": {
            if(element.offsetTop> playground.offsetTop){   
                this.translateUp();
                break;
            }
            else{
                this.changeDirection();
                break;
            }
        };
        case "left": {
            if(element.offsetLeft > playground.offsetLeft){   
                this.translateLeft();
                break;
            }
            else{
                this.changeDirection();
                break;
            }
        };
        case "down": {
            if(element.offsetTop + element.offsetHeight < playground.offsetTop + playground.offsetHeight){ 
                this.translateDown();
                break;
            }
            else{
                this.changeDirection();
                break;
            }
        };
        default : document.getElementById("demo2").innerHTML = "ERROR IN DIRECTION";
    }
}


Ghost.prototype.translateRight = function(){
    this.element = document.getElementById("blue-ghost");

    this.x += 1;
    this.element.style.left = `${this.x}px`;
}

Ghost.prototype.translateLeft = function(){
    this.element = document.getElementById("blue-ghost");

    this.x -= 1;
    this.element.style.left = `${this.x}px`;
}


Ghost.prototype.translateUp = function(){
    this.element = document.getElementById("blue-ghost");

    this.y -= 1;
    this.element.style.top = `${this.y}px`;
}

Ghost.prototype.translateDown = function(){
    this.element = document.getElementById("blue-ghost");

    this.y += 1;
    this.element.style.top = `${this.y}px`;
}
