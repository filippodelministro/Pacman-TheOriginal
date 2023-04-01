

function Ghost(){
    this.pause = false;
    this.moving = false;
    
    this.x = 0;
    this.y = 0;
    
    // this.direction = this.changeDirection();
    // this.changeDirection();
    this.direction = "right";
    this.speed = 20;
    this.interval;
}

Ghost.prototype.changeDirection = function(){

    // if(!this.moving)          
    //     this.startMoving();
   
    var ran = Math.floor(Math.random() * DIRECTIONS.length);
    this.direction = DIRECTIONS[ran];   
}


Ghost.prototype.startMoving = function(){
    if (!this.moving) {
        this.interval = setInterval(this.move.bind(this), this.speed);
        // this.interval = setInterval(this.moveT.bind(this), this.speed);
        this.moving = true;
    }
}

Ghost.prototype.stopMoving = function(){
    clearInterval(this.interval); // stop the interval
    this.moving = false;
}

Ghost.prototype.move = function(){
    var element = document.querySelectorAll('.ghost');
    element.forEach((element) )
    var playground = document.getElementById("playground");
    switch(this.direction){
        case "right": {
            if(element.offsetLeft + element.offsetWidth < playground.offsetLeft + playground.offsetWidth){   
                // this.translateRight();
                translateRight(this.element)  //make this work in utility.js
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
