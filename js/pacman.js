

function Pacman(){
    this.id = "pacman";
    this.element = document.getElementById(this.id);

    this.pause = false;
    this.moving = false;

    this.direction = "right";     //? cambiare in meglio?
    this.speed = 15;
    this.moveInterval;
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
        this.moveInterval = setInterval(this.move.bind(this), this.speed);
        this.moving = true;
    }
}

Pacman.prototype.stopMoving = function(){
    clearInterval(this.moveInterval);
    this.moving = false;
}

Pacman.prototype.move = function(){    
    var map = document.getElementById("map");
    translate(this);

    //fix: padding problem
    const pacmanPaddingRight = parseFloat(getComputedStyle(pacman).paddingRight);

    //todo: add the padding 
    switch(this.direction){
        case "right": {
            if(this.element.offsetLeft + this.element.offsetWidth  < map.offsetLeft + map.offsetWidth)
                translateRight(this.element) 
            else
                this.stopMoving();
            break;
        };
        case "up": {
            if(this.element.offsetTop > map.offsetTop)   
                translateUp(this.element);
            else
                this.stopMoving();
            break;
        };
        case "left": {
            if(this.element.offsetLeft > map.offsetLeft)
                translateLeft(this.element);
            else
                this.stopMoving();
            break;
        };
        case "down": {
            if(this.element.offsetTop + this.element.offsetHeight < map.offsetTop + map.offsetHeight)
                translateDown(this.element);
            else
                this.stopMoving();
            break;
        };
    }
}