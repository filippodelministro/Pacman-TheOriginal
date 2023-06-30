class Pacman{
    constructor(){
        this.x;
        this.y;
        this.nextDirection = null;
        this.direction;
        this.moveInterval = null;
        this.checkInterval = null;  
        this.life;
        this.speed = 30;
        this.element = null;
        this.init();
    }

    init(){
        this.element = document.createElement("div");
        this.element.setAttribute("id", "pacman");
        this.element.classList.add("movable");
        playground.appendChild(this.element);
        
        this.initPosition();
        this.life = MAX_LIFE;
    }

    initPosition(){
        this.x = PACMAN_X * CELL_SIZE;
        this.y = PACMAN_Y * CELL_SIZE;
        this.element.style.left = (this.x) + "px";
        this.element.style.top = (this.y) + "px";
        this.direction = {x:1, y:0};
        this.nextDirection = {x:1, y:0};
    }

    startMoving(){
        if (!this.moving) {
            this.moveInterval = setInterval(this.movePacman.bind(this), this.speed);
            this.checkInterval = setInterval(game.checkPacmanCollision(), 5);
            this.moving = true;
        }
    }

    stopMoving(){
        clearInterval(this.moveInterval);
        clearInterval(this.checkInterval);
        this.moving = false;
    }

    changeDirection(e){
        switch(e.keyCode){
            case 37: this.nextDirection.x = -1; this.nextDirection.y = 0; break;    //left
            case 38: this.nextDirection.x = 0; this.nextDirection.y = -1; break;    //top
            case 39: this.nextDirection.x = 1; this.nextDirection.y = 0; break;     //right
            case 40: this.nextDirection.x = 0; this.nextDirection.y = 1; break;     //down
        }
    }

    PacmanHit(){
        this.life -= 1;
        let life = document.getElementById("life");
        life.textContent = "life:" + this.life;
        
        if(!this.life){
            game.gameOver(false);
            return;
        }   
        this.initPosition();
    }

    movePacman(){
        let next = null;
        let over = null
        game.checkPacmanCollision();

        //for each new cell check the over cell and the next one (check just the intereset diredction)
        let coord = (this.direction.x == 0) ? this.y : this.x;
        if(coord % CELL_SIZE == 0){       
            this.checkDirectionPacman();
            over = checkCell(this);
            next = checkNextCell(this);
        }

        //handle Pacman based on the element it passes over
        switch(over){
            //BIFG and FOOD are handled in the same way (`break` at FOOD)
            case BIGF: game.GhostVulnerable();
            case FOOD: {
                game.remove(over, this.x, this.y);
                game.addPoints(FOOD);
                break;
            }
            case CRSS: game.remove(over, this.x, this.y); break;
            case TUNN: tunnel(this); return;
        }

        switch(next){
            //Pacman always move except if it hits the WALL or the SPWAN
            case SPWN:
            case WALL: break;
            default : moveElement(this);
        }
    }

    checkDirectionPacman(){
        this.direction.x = this.nextDirection.x;
        this.direction.y = this.nextDirection.y
    }
}
