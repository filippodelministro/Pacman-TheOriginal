class Ghost {
    constructor(name) {
        this.id = name;
        this.element = document.getElementById(this.id);
      
        this.x = 7;
        this.y = 8;
        this.speed = 200;
        this.direction = "up";
        this.initPosition();
    }
}


Ghost.prototype.initPosition = function(){
    this.element.style.left = (this.x * CELL_SIZE) + "px";
    this.element.style.top = (this.y * CELL_SIZE) + "px";
    // this.direction = this.randomDirection();
}

Ghost.prototype.startMoving = function(){
    if (!this.moving) {
        this.moveInterval = setInterval(this.move.bind(this), this.speed);
        this.moving = true;
    }
}


Ghost.prototype.stopMoving = function(){
    clearInterval(this.moveInterval);
    this.moving = false;
}


Ghost.prototype.move = function(){
    let hit = checkAndMove(this);

    switch(hit){
        case HIT_WALL: this.randomDirection(); break;
        default: break;
    };
}

Ghost.prototype.randomDirection = function(){
    const directions = ['up', 'down', 'right', 'left'];
    const randomIndex = Math.floor(Math.random() * directions.length);
    this.direction = directions[randomIndex];
}