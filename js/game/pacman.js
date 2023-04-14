

class Pacman{
    constructor(){
        this.id = "pacman"  ;
        this.element = document.getElementById(this.id);

        this.x;
        this.y;
        this.direction;
        this.life;
        this.speed = 300;
        this.init();
    }    
}

Pacman.prototype.init = function(){
    this.initPosition();
    this.element.style.left = (this.x * CELL_SIZE) + "px";
    this.element.style.top = (this.y * CELL_SIZE) + "px";
    this.direction = RIGHT;
    this.life = MAX_LIFE;
}

Pacman.prototype.initPosition = function(){
    this.x = PACMAN_X;
    this.y = PACMAN_Y;
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
        case 37: this.direction = LEFT; break;
        case 38: this.direction = UP; break;
        case 39: this.direction = RIGHT; break;
        case 40: this.direction = DOWN; break;
    }
}

Pacman.prototype.movePacman = function(){

    if(game.checkPacmanCollision()){
        this.PacmanHit();
    }


    let posX = this.x;
    let posY = this.y;

    switch(this.direction){
        case LEFT : posX -= 1; break;
        case UP : posY -= 1; break;
        case RIGHT : posX += 1; break;
        case DOWN : posY += 1; break;
    }

    let next = game.getCell(posX, posY);

    switch(next){
        case FOOD: {
            this.x = posX;
            this.y = posY;
            moveElement(this, this.x, this.y);
            game.removeFood(this.x, this.y);
            game.addPoints(FOOD);
            break;
        }
        case CRSS:{
            this.x = posX;
            this.y = posY;
            moveElement(this, this.x, this.y);
            game.removeFood(this.x, this.y);
            game.addPoints(FOOD);
            break;
        }
        case EMPTY: {
            this.x = posX;
            this.y = posY;
            moveElement(this, this.x, this.y);
            break;
        }
        case TUNN: {
            if(this.x == 1)
                this.x = MAP_DIM - 1;
            else this.x = 0;
            moveElement(this, this.x, this.y);
            break;
        }
        default: break;
    }
}    

Pacman.prototype.PacmanHit = function(){
    this.life -= 1;
    life = document.getElementById("life");
    life.textContent = this.life;

    if(!this.life) 
        game.gameOver("lose");

    this.initPosition();
}