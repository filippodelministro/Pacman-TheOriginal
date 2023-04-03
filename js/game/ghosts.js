class Ghost {
    constructor(id) {
        this.id = id;
        this.element = document.getElementById(id);
        this.speed = 2;
        this.changeDirection();       //random direction
        this.moveInterval = null;
        this.moving = false;
    }
}

Ghost.prototype.startMoving = function(){
    if (!this.moving) {
        this.moveInterval = setInterval(this.move.bind(this), this.speed);
        this.moving = true;
    }
}


Ghost.prototype.stopMoving = function(){
    clearInterval(this.moveInterval);
    this.moving = false;
}


Ghost.prototype.move = function(){
    var map = document.getElementById("map");

    switch(this.direction){
        case "right" :{
            if(this.element.offsetLeft + this.element.offsetWidth  < map.offsetLeft + map.offsetWidth){   
                translateRight(this.element) 
                break;
            }
            else{
                this.changeDirection();
                break;
            }
        };
        case "up" :{
            if(this.element.offsetTop > map.offsetTop ){   
                translateUp(this.element) 
                break;
            }
            else{
                this.changeDirection();
                break;
            }
        };
        case "left" :{
            if(this.element.offsetLeft > map.offsetLeft ){   
                translateLeft(this.element) 
                break;
            }
            else{
                this.changeDirection();
                break;
            }
        };
        case "down" :{
            if(this.element.offsetTop + this.element.offsetHeight < map.offsetLeft + map.offsetHeight ){   
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

Ghost.prototype.changeDirection = function(){
    const directions = ['up', 'down', 'right', 'left'];
    const randomIndex = Math.floor(Math.random() * directions.length);
    this.direction = directions[randomIndex];
}