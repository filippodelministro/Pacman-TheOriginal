document.addEventListener('keydown', keyPressed);

function keyPressed(e) {
    if (e.keyCode == 8) // backspace
        window.location = './home.html';

    else{
        init();
    }
}

function init(){
    document.getElementById("pause-menu-container").style.visibility = "hidden";
    document.getElementById("startinfo").style.visibility = "hidden";

    document.removeEventListener('keydown', keyPressed);
 
    game = new Game();
}


function Game(){
    this.pause_on = false;

    this.score = 0;
    this.map = new Map();

    this.pacman = new Pacman();
    this.ghosts = [
        new Ghost('blue-ghost', 7, 8),
        new Ghost('pink-ghost', 9, 8),
        new Ghost('orange-ghost', 8, 8),
        new Ghost('red-ghost', 8, 6)
    ];
    document.addEventListener('keydown', this.keyPressedonGame.bind(this));
    this.pacman.startMoving();
    this.startMovingGhosts();
}

Game.prototype.keyPressedonGame = function(e){
    
    if(!this.pause_on){
        //in game
        if(e.keyCode == 32 || e.keyCode == 27)            
            this.pause(e);
        else{
            this.pacman.changeDirection(e);
        }
    }
    else{
        //in pause
        if(e.keyCode == 32 || e.keyCode == 27)
            this.resume();
        else
            this.handlePauseMenu(e);    //todo
    }
}


//* ------------ PAUSE FUNCTIONS ------------
Game.prototype.pause = function(e){
    this.pause_on = true;

    document.getElementById("pause-menu-container").style.visibility = "visible";
    this.pacman.stopMoving();
    this.stopMovingGhosts();
}
Game.prototype.resume = function(e){
    this.pause_on = false;

    document.getElementById("pause-menu-container").style.visibility = "hidden";

    this.pacman.startMoving();
    this.startMovingGhosts();
}
Game.prototype.startMovingGhosts = function(){
    for (let i = 0; i < this.ghosts.length; i++) {
        this.ghosts[i].startMoving();
    } 
}    
Game.prototype.stopMovingGhosts = function(){
    for (let i = 0; i < this.ghosts.length; i++) {
        this.ghosts[i].stopMoving();
    } 
}    

Game.prototype.handlePauseMenu = function(e){
    console.log("TODO: handle pause menu");
}

//* ------------ POINTS FUNCTIONS ------------
Game.prototype.addPoints = function(type){
    let points = (type == FOOD ) ? FOOD_POINTS : GHOST_POINTS;
    this.score += points;

    points = document.getElementById("score");
    points.textContent = this.score;

    this.foodElements--;

    if(type == FOOD){
        this.map.foodElements--;
    }
    if(!this.map.foodElements){
        game.gameOver("win");
    }
    
}


//* ------------ GAME FUNCTIONS ------------
Game.prototype.gameOver = function(type){
    if(type == "win"){
        this.pause();
    }
}


Game.prototype.getCell = function(x, y){
    //return cell number if position passed is valid
    if(x < 0 || x >= MAP_DIM || y < 0 || y >= MAP_DIM){
        return null;
    }

    return this.map.cells[y * MAP_DIM + x];
}

Game.prototype.removeFood = function(x, y){
    this.map.cells[y * MAP_DIM + x] = EMPTY;

    //remove food from HTML
    const grid = document.querySelector('.map');
    const cells = grid.querySelectorAll('.cell');
    cells[y * MAP_DIM + x].classList.remove('food');
}

Game.prototype.checkPacmanCollision = function(){
    if(this.pacman.x == this.ghosts[0].x && this.pacman.y == this.ghosts[0].y) return true;
    if(this.pacman.x == this.ghosts[1].x && this.pacman.y == this.ghosts[1].y) return true;
    if(this.pacman.x == this.ghosts[2].x && this.pacman.y == this.ghosts[2].y) return true;
    if(this.pacman.x == this.ghosts[3].x && this.pacman.y == this.ghosts[3].y) return true;
    
    return false;   
}