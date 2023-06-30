class Ghost {
    constructor(name, x, y) {
        this.id = name;
        this.startingX = x * CELL_SIZE;
        this.startingY = y * CELL_SIZE;
        this.moving = false;
        this.moveInterval = null;
        this.vulnerabilityInterval = null;
        this.direction;
        this.speed = 30;
        this.init();
    }

    init(){
        this.element = document.createElement("div");
        this.element.setAttribute("id", this.id);
        this.element.classList.add(this.id);
        this.element.classList.add("movable");
        this.element.classList.add("ghost");
        playground.appendChild(this.element);
    
        this.initPosition();
        this.moving = false;
    }

    initPosition(){
        this.x = this.startingX;
        this.y = this.startingY;
        this.element.style.left = (this.x) + "px";
        this.element.style.top = (this.y) + "px";
        this.direction = {x:-1, y:0};
    }

    startMoving(){
        if (!this.moving) {
            this.moveInterval = setInterval(this.moveGhost.bind(this), this.speed);
            this.moving = true;
        }
    }

    stopMoving(){
        clearInterval(this.moveInterval);
        this.moving = false;
    }

    randomDirection(){
        const randomIndex = Math.floor(Math.random() * 10); 
        if(randomIndex < 4)         //30% to change direction
            this.changeDirection();
    }

    changeDirection(){
        const directions = [LEFT, UP, RIGHT, DOWN];
        const randomIndex = Math.floor(Math.random() * 4); 
        let dir  = directions[randomIndex];

        switch(dir){
            case LEFT: this.direction.x = -1; this.direction.y = 0; break;    
            case UP: this.direction.x = 0; this.direction.y = -1; break;    
            case RIGHT: this.direction.x = 1; this.direction.y = 0; break;     
            case DOWN: this.direction.x = 0; this.direction.y = 1; break;     
        }
    }

    moveGhost(){
        let next = null;
        let over = null;
        let coord = (this.direction.x == 0) ? this.y : this.x;      //use just the X or Y direction

        //for each new cell check the over cell and the next one
        if(coord % CELL_SIZE == 0){                 
            over = checkCell(this);
            next = checkNextCell(this);
        
            //if thorough the tunnel move the element and return
            if(over == TUNN){
                tunnel(this);
                return;
            }

            //using CRSS to make ghost move randomly
            if(over == CRSS){
                this.randomDirection();
                next = checkNextCell(this);                 //recheck next cell to avoid walking over the wall
                while (next == WALL || next == SPWN) {
                    this.changeDirection()
                    next = checkNextCell(this);
                }
            }

            //in any case check teh next cell to avoid walking over the wall
            if(next == WALL || next == SPWN){
                while (next == WALL || next == SPWN) {
                    this.changeDirection()
                    next = checkNextCell(this);
                }
            }
        }
        moveElement(this);
    }
}
