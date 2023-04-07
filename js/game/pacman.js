

class Pacman{
    constructor(){
        this.id = "pacman"  ;
        this.element = document.getElementById(this.id);

        this.x = 8;
        this.y = 9;
        this.direction = "right";
        this.speed = 1000;
        this.initPosition();
    }    
}

Pacman.prototype.initPosition = function(){
    this.element.style.left = (this.x * CELL_SIZE) + "px";
    this.element.style.top = (this.y * CELL_SIZE) + "px";
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

Pacman.prototype.changeDirection = function(e){
    switch(e.keyCode){
        case 37: this.direction = "left"; break;
        case 38: this.direction = "up"; break;
        case 39: this.direction = "right"; break;
        case 40: this.direction = "down"; break;
    }
}

Pacman.prototype.move = function(){
    // translate(this);


    switch(this.direction){
        case 'left':{
            if(this.checkPosition(-1, 0))
                translateLeft("pacman");
                // translate(this);

        } break;
        case 'up':{
            if(this.checkPosition(0, -1))
                translateUp("pacman");
        } break;
        case 'right':{
            if(this.checkPosition(1, 0))
                translateRight("pacman");
                // translate(this);
        } break;
        case 'down':{
            if(this.checkPosition(0, 1))
                translateDown("pacman");
        } break;
    }
}

Pacman.prototype.checkPosition = function(dx, dy){
    const newX = this.x + dx;
    const newY = this.y + dy;

    console.log("CHECKPOSITION: this.x: " + this.x + " this.y: " + this.y);

    pacman.style.gridColumn = newX + 1; 
    pacman.style.gridRow = newY + 1; 

    const newCell = getCell(newX, newY);
    if (!newCell || newCell.classList.contains('wall')) {
        //position is not valid!
        console.log("pacman.js CHECKPOSITION> falsee");
        return false;
    }

    //pacman interacts whit other elements of the grid
    if (newCell.classList.contains('food')) {
        newCell.classList.remove('food');

        //todo: handle Pacman eating food
    }

    // todo: handle Pacman touching ghosts

    
    //if here we can move pacman
    this.x = newX;
    this.y = newY;
    return true;
}