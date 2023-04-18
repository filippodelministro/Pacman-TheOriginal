

class Pacman{
    constructor(){
        this.x;
        this.y;
        this.nextDirection = null;
        this.direction;
        this.checkDirectionInterval = null;
        this.moveInterval = null;
        this.life;
        this.speed = 20;
        this.element = null;
        this.init();
    }    
}

Pacman.prototype.init = function(){
    this.element = document.createElement("div");
    this.element.setAttribute("id", "pacman");
    this.element.classList.add("movable");
    playground.appendChild(this.element);

    this.initPosition();
    this.element.style.left = (this.x * CELL_SIZE) + "px";
    this.element.style.top = (this.y * CELL_SIZE) + "px";
    this.direction = {x:1, y:0};
    this.nextDirection = {x:1, y:0};
    this.life = MAX_LIFE;
    this.x = this.x * CELL_SIZE;
    this.y = this.y * CELL_SIZE;

}

Pacman.prototype.initPosition = function(){
    this.x = PACMAN_X;
    this.y = PACMAN_Y;
}

Pacman.prototype.startMoving = function(){
    if (!this.moving) {
        console.log("startMoving");
        this.moveInterval = setInterval(this.movePacman1.bind(this), this.speed);
        // this.checkDirectionInterval = setInterval(this.checkDirectionPacman.bind(this), CHECK_DIRECTION_CLOCK);
        // this.moveInterval = setInterval(this.movePacman.bind(this), this.speed);
        this.moving = true;
    }
}

Pacman.prototype.stopMoving = function(){
    clearInterval(this.moveInterval);
    this.moving = false;
}

Pacman.prototype.changeDirection = function(e){
    switch(e.keyCode){
        case 37: this.nextDirection.x = -1; this.nextDirection.y = 0; break;    //left
        case 38: this.nextDirection.x = 0; this.nextDirection.y = -1; break;    //
        case 39: this.nextDirection.x = 1; this.nextDirection.y = 0; break;
        case 40: this.nextDirection.x = 0; this.nextDirection.y = 1; break;
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
            game.remove("food", this.x, this.y);
            game.addPoints(FOOD);
            break;
        }
        case CRSS:{
            this.x = posX;
            this.y = posY;
            moveElement(this, this.x, this.y);
            game.remove("food", this.x, this.y);
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
        case BIGF: {
            this.x = posX;
            this.y = posY;
            moveElement(this, this.x, this.y);
            game.remove("bigFood", this.x, this.y);
            game.GhostVulnerable();
        }
        default: break;
    }
}    

Pacman.prototype.PacmanHit = function(){
    this.life -= 1;
    life = document.getElementById("life");
    life.textContent = this.life;

    if(!this.life) 
        game.lose();
        // game.gameOver("lose");

    this.initPosition();
}


Pacman.prototype.movePacman1 = function(){
    var nextCell;

    //check just the right coordination (using direction) to keep Pacman in column/rows of the grid
    var coord = (this.direction.x == 0) ? this.y : this.x;
    
    console.log("x: ",  this.x, " y: ", this.y);
    if(coord % CELL_SIZE == 0){
        console.log("!!");
        this.checkDirectionPacman();
        // next = checkNextCell(this, signX, signY);
    }


    moveElement1(this);
}    

function checkNextCell(el, sign){
    const nextX = this.x + sign * CELL_SIZE;
    const nextY = this.y + sign * CELL_SIZE;

    return game.getCell(nextX, nextY);
}


Pacman.prototype.checkDirectionPacman = function(){
    this.direction.x = this.nextDirection.x;
    this.direction.y = this.nextDirection.y
}   