

class Pacman{
    constructor(){
        this.x;
        this.y;
        this.nextDirection = null;
        this.direction;
        this.checkDirectionInterval = null;
        this.moveInterval = null;
        this.life;
        this.speed = 15;
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
    this.direction = RIGHT;
    this.nextDirection = RIGHT;
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
        case 37: this.nextDirection = LEFT; break;
        case 38: this.nextDirection = UP; break;
        case 39: this.nextDirection = RIGHT; break;
        case 40: this.nextDirection = DOWN; break;
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
    console.log("movePacman1 x: " + this.x + ", y " + this.y);
    switch(this.direction){
        case LEFT: {if(this.x % CELL_SIZE === 0) this.checkDirectionPacman(); break;}
        case RIGHT: {if(this.x % CELL_SIZE === 0) this.checkDirectionPacman(); break;}
        case UP: {if(this.y % CELL_SIZE === 0) this.checkDirectionPacman(); break;}
        case DOWN: {if(this.y % CELL_SIZE === 0) this.checkDirectionPacman(); break;}

    }
    moveElement1(this);
}    


Pacman.prototype.checkDirectionPacman = function(){
    console.log("checkDirectionPacman> x: " + this.x + ", y: " + this.y);
    console.log("checkDirectionPacman> dir = " + this.direction);
    this.direction = this.nextDirection;
}   