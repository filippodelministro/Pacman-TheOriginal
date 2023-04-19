class Ghost {
    constructor(name, x, y) {
        this.id = name;
        this.startingX = x * CELL_SIZE;
        this.startingY = y * CELL_SIZE;
        this.moving = false;
        this.direction;
        this.speed = 30;
        this.init();
    }
}


Ghost.prototype.init = function(){
    this.element = document.createElement("div");
    this.element.setAttribute("id", this.id);
    this.element.classList.add(this.id);
    this.element.classList.add("movable");
    this.element.classList.add("ghost");
    playground.appendChild(this.element);

    this.initPosition();
    this.element.style.left = (this.x) + "px";
    this.element.style.top = (this.y) + "px";
    this.moving = false;
    this.direction = {x:1, y:0};
    // this.changeDirection();
}

Ghost.prototype.initPosition = function(){
    this.x = this.startingX;
    this.y = this.startingY;
}

Ghost.prototype.startMoving = function(){
    if (!this.moving) {
        this.moveInterval = setInterval(this.moveGhost1.bind(this), this.speed);
        this.moving = true;
    }
}
Ghost.prototype.stopMoving = function(){
    clearInterval(this.moveInterval);
    this.moving = false;
}

Ghost.prototype.moveGhost = function(){
    
    //check if the ghost is the spawn:
    let on = game.getCell(this.x, this.y);

    //FIX
    if(on == SPWN){
        setTimeout(this.leaveSpawn(), 5000);
        // return;
    }

    if(on == CRSS)
        this.randomDirection();

    
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
        }
        case CRSS: {
            this.x = posX;
            this.y = posY;
            moveElement(this, this.x, this.y);
        }
        case EMPTY:{
            this.x = posX;
            this.y = posY;
            moveElement(this, this.x, this.y);
        }
        case BIGF: {
            this.x = posX;
            this.y = posY;
            moveElement(this, this.x, this.y);
        }
        default: this.changeDirection();
    }   
}    

Ghost.prototype.randomDirection = function(direction){
    const randomIndex = Math.floor(Math.random() * 10); 
    if(randomIndex < 4)         //30% to change direction
        this.changeDirection();
}

Ghost.prototype.changeDirection = function(){
    const directions = [UP, DOWN, RIGHT, LEFT];
    const randomIndex = Math.floor(Math.random() * 4); 
    var dir  = directions[randomIndex];

    switch(dir){
        case LEFT: this.direction.x = -1; this.direction.y = 0; break;    //left
        case UP: this.direction.x = 0; this.direction.y = -1; break;    //top
        case RIGHT: this.direction.x = 1; this.direction.y = 0; break;     //right
        case DOWN: this.direction.x = 0; this.direction.y = 1; break;     //down
    }
}

Ghost.prototype.leaveSpawn = function(){
    moveElement(this, this.x, this.y - 1);
    moveElement(this, this.x, this.y - 1);
    this.randomDirection();
}




Ghost.prototype.moveGhost1 = function(){
    var next = over = null;
    var coord = (this.direction.x == 0) ? this.y : this.x;      //use just the X or Y direction

    //for each new cell check the over cell and the next one
    if(coord % CELL_SIZE == 0){    
        console.log("CELLLL");             
        // this.checkDirectionPacman();
        // over = checkCell(this);
        next = checkNextCell(this);
    }

    //add points if the element pass over the food      //todo: make a switch
    // if(over == BIGF || over == FOOD || over == CRSS){
    //     game.remove(over, this.x, this.y);
    //     game.addPoints(FOOD);
    //     if(over == BIGF){
    //         game.GhostVulnerable();
    //     }
    // }

    console.log("moveGhost1: id: ", this.id, "x: ", this.x, "y: ", this.y, "next:" + next);

    switch(next){
        //Element always move except if it hits the WALL or the SPWAN element
        case SPWN:
        case WALL: this.changeDirection();
        default : moveElement1(this);
    }
}    
