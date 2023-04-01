

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
                translateRight(this.element)
                break;
            }
            else{
                this.changeDirection();
                break;
            }
        };
        case "up": {
            if(element.offsetTop> playground.offsetTop){   
                // this.translateUp();
                translateUp(this.element)
                break;
            }
            else{
                this.changeDirection();
                break;
            }
        };
        case "left": {
            if(element.offsetLeft > playground.offsetLeft){   
                // this.translateLeft();
                translateLeft(this.element)
                break;
            }
            else{
                this.changeDirection();
                break;
            }
        };
        case "down": {
            if(element.offsetTop + element.offsetHeight < playground.offsetTop + playground.offsetHeight){ 
                // this.translateDown();
                translateDown(this.element)
                break;
            }
            else{
                this.changeDirection();
                break;
            }
        };
    }
}