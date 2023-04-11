

class Pacman{
    constructor(){
        this.id = "pacman"  ;
        this.element = document.getElementById(this.id);

        this.x = 8;
        this.y = 9;
        this.direction;
        this.speed = 300;
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

    let posX = this.x;
    let posY = this.y;

    switch(this.direction){
        case "left" : posX -= 1; break;
        case "up" : posY -= 1; break;
        case "right" : posX += 1; break;
        case "down" : posY += 1; break;
    }

    let next = game.getCell(posX, posY);

    switch(next){
        case WALL: console.log("wall"); break;
        case FOOD: {
            console.log("food");
            // game.map[posX][posY] = 0;
            moveElement(this, posX, posY);
            this.x = posX;
            this.y = posY;
            game.map[[this.x, this.y]] = EMPTY;
            
            //remove food from HTML
            const grid = document.querySelector('.map');
            const cells = grid.querySelectorAll('.cell');
            cells[this.y * MAP_DIM + this.x].classList.remove('food');
            break;
        }    
        case CROSS: console.log("cross"); break;
        case TUNN: console.log("tunnel"); break;
    }
    // let hit = checkAndMove(this);

    // switch(hit){
    //     case HIT_FOOD: {
    //         const newCell = getCell(this.x, this.y);
    //         newCell.classList.remove('food');

    //         game.addPoints('food');
    //     } break;
    //     default: break;
    // };

}    