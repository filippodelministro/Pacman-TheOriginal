

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
        case 37: this.nextDirection.x = -1; this.nextDirection.y = 0; break;    //left
        case 38: this.nextDirection.x = 0; this.nextDirection.y = -1; break;    //top
        case 39: this.nextDirection.x = 1; this.nextDirection.y = 0; break;     //right
        case 40: this.nextDirection.x = 0; this.nextDirection.y = 1; break;     //down
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

Pacman.prototype.movePacman = function(){
    //check if Pacman can change direction
    var next = null;
    var coord = (this.direction.x == 0) ? this.y : this.x;
    if(coord % CELL_SIZE == 0){
        this.checkDirectionPacman();
        next = checkNextCell(this);   
    }

    switch(next){
        //BigFood, Croos & Food are handled in the same way
        case BIGF:
        case CRSS:
        case FOOD:{
            moveElement1(this);                 //todo: change in moveElement
            //todo: cambiare game.remove
            // game.remove("food", this.x/CELL_SIZE, this.y/CELL_SIZE);
            //fix: addPoints each pixel
            game.addPoints(FOOD);
            break;
        }
        case TUNN: {
            tunnel(this);
            // moveElement1(this);
            break;
        }
        case SPWN:
        case WALL: break;
        case EMPTY:
        default : moveElement1(this);
    }
}    

Pacman.prototype.checkDirectionPacman = function(){
    this.direction.x = this.nextDirection.x;
    this.direction.y = this.nextDirection.y
}   