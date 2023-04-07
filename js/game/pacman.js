

class Pacman{
    constructor(){
        this.id = "pacman"  ;
        this.element = document.getElementById(this.id);

        this.x = 8;
        this.y = 9;
        this.direction = "right";
        this.speed = 800;
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
        this.moveInterval = setInterval(this.movePacman.bind(this), this.speed);
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


Pacman.prototype.movePacman = function(){
    let hit = checkAndMove(this);

    switch(hit){
        case HIT_FOOD: {
            const newCell = getCell(this.x, this.y);
            newCell.classList.remove('food');
        } break;
        default: break;
    };

}    