

class Pacman{
    constructor(){
        this.x;
        this.y;
        this.nextDirection = null;
        this.direction;
        this.checkDirectionInterval = null;         //?
        this.moveInterval = null;
        this.life;
        this.speed = 30;
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
    this.life = MAX_LIFE;
}

Pacman.prototype.initPosition = function(){
    this.x = PACMAN_X * CELL_SIZE;
    this.y = PACMAN_Y * CELL_SIZE;
    this.element.style.left = (this.x) + "px";
    this.element.style.top = (this.y) + "px";
    this.direction = {x:1, y:0};
    this.nextDirection = {x:1, y:0};
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
    
    if(!this.life){
        game.gameOver(false);
        return;
    }   
}

Pacman.prototype.movePacman = function(){
    if(game.checkPacmanCollision())
        this.PacmanHit();

    var next = over = null;

    //for each new cell check the over cell and the next one (check just the intereset diredction)
    var coord = (this.direction.x == 0) ? this.y : this.x;
    if(coord % CELL_SIZE == 0){                 
        this.checkDirectionPacman();
        over = checkCell(this);
        next = checkNextCell(this);
    }

    //handle Pacman based on the element it passes over
    switch(over){
        //BIFG, CRSS & FOOD are handled in the same way (`break` at FOOD)
        case BIGF: game.GhostVulnerable();
        case CRSS:
        case FOOD: {
            game.remove(over, this.x, this.y);
            game.addPoints(FOOD);
            break;
        }
        case TUNN: tunnel(this); return;
    }

    switch(next){
        //Pacman always move except if it hits the WALL or the SPWAN
        case SPWN:
        case WALL: break;
        default : moveElement(this);
    }
}    

Pacman.prototype.checkDirectionPacman = function(){
    this.direction.x = this.nextDirection.x;
    this.direction.y = this.nextDirection.y
}   