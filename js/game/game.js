
//init game to load elements, then wait for Keypress to start moving
onload = init;
var playground;
function init(){
    playground = document.getElementById("playground");
    game = new Game();
    document.addEventListener('keydown', keyPressed);
}
function keyPressed(e) {
    if (e.keyCode == 8) // backspace
    window.location = './home.html';
    
    else{
        game.startGame();
    }
}

Game.prototype.startGame = function(e){
    document.getElementById("pause-menu-container").style.visibility = "hidden";
    document.getElementById("startinfo").style.visibility = "hidden";

    document.removeEventListener('keydown', keyPressed);

    document.addEventListener('keydown', this.keyPressedonGame.bind(this));
    this.pacman.startMoving();
    this.startMovingGhosts();
}

function Game(){
    this.pause_on = false;
    this.gameover = false;
    this.score = 0;
    this.ghostsKilled = 0;

    this.vulnerability = false;
    this.map = new Map();
    this.foodRemaining = this.map.foodElements;
    this.pacman = new Pacman();
    this.ghosts = [
        new Ghost('blue-ghost', 7, 9),
        new Ghost('orange-ghost', 8, 9),
        new Ghost('pink-ghost', 9, 9),
        new Ghost('red-ghost', 8, 6)
    ];  
}

Game.prototype.keyPressedonGame = function(e){    
//handle gaming commands
    if(!this.gameover){
        if(!this.pause_on){     //in game
            if(e.keyCode == 32 || e.keyCode == 27)            
                this.pause(e);
            else{
                this.pacman.changeDirection(e);
            }
        }
        else{                   //in pause
            if(e.keyCode == 32 || e.keyCode == 27)
                this.resume();
            else
                this.handlePauseMenu(e);    //todo
        }
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
        //todo: handle vulnerabilities              //??
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

    if(type == FOOD){
        this.foodRemaining--;
        
        if(!this.foodRemaining){
        // if(this.foodRemaining == this.map.foodElements - 20){     //!levare: è per testare
            this.gameOver(true);
        }
    }
    else if(type == GHOST_POINTS){
        this.ghostsKilled++;
    }
}


//* ------------ GAME FUNCTIONS ------------

Game.prototype.getCell = function(x, y){
    //return cell number if position passed is valid
    if(x < 0 || x >= MAP_DIM || y < 0 || y >= MAP_DIM){
        return WALL;
    }

    return this.map.cells[y * MAP_DIM + x];
}

Game.prototype.remove = function(type, x, y){
    var t;
    switch(type){
        case CRSS:
        case FOOD: t = "food"; break;
        case BIGF: t = "bigFood"; break;
        default: return;
    }

    //remove food from HTML
    const grid = document.querySelector('.map');
    const cells = grid.querySelectorAll('.cell');
    cells[y/CELL_SIZE * MAP_DIM + x/CELL_SIZE].classList.remove(t);
    this.map.cells[y/CELL_SIZE * MAP_DIM + x/CELL_SIZE] = EMPTY;
}

Game.prototype.checkPacmanCollision = function(){
    var ghostHit = -1;  //not a valid ID ghost
    //check for collision between Pacman and ghosts

    if(this.pacman.x/CELL_SIZE == this.ghosts[0].x/CELL_SIZE && this.pacman.y/CELL_SIZE == this.ghosts[0].y/CELL_SIZE) ghostHit = 0
    if(this.pacman.x/CELL_SIZE == this.ghosts[1].x/CELL_SIZE && this.pacman.y/CELL_SIZE == this.ghosts[1].y/CELL_SIZE) ghostHit = 1
    if(this.pacman.x/CELL_SIZE == this.ghosts[2].x/CELL_SIZE && this.pacman.y/CELL_SIZE == this.ghosts[2].y/CELL_SIZE) ghostHit = 2
    if(this.pacman.x/CELL_SIZE == this.ghosts[3].x/CELL_SIZE && this.pacman.y/CELL_SIZE == this.ghosts[3].y/CELL_SIZE) ghostHit = 3

        
    //check if vulnerability (of ghost) is active or not 
    if(ghostHit != -1){   
        if(this.vulnerability){
            console.log("VULNERABILITY");
            this.addPoints(GHOST_POINTS);
            this.ghosts[ghostHit].initPosition();
        }
        else{
            //todo: add animation   
            this.pacman.PacmanHit();
            for(let i = 0; i < this.ghosts.length; i++)
                this.ghosts[i].initPosition();
    
        }
    }
}


//* ------------ VULNERABILITY FUNCTIONS ------------

Game.prototype.GhostVulnerable = function(){
    this.vulnerability = true;
    for(let i = 0; i < this.ghosts.length; i++){
        const ghost = document.getElementById(this.ghosts[i].id);
        ghost.classList.add('vulnerable');
        ghost.classList.remove(this.ghosts[i].id);
        this.ghosts[i].vulnerabilityInterval = setTimeout(this.GhostVulnerableOff.bind(this), VULNERABILITY_TIME);
    }
}

Game.prototype.GhostVulnerableOff = function(){
    this.vulnerability = false;
    for(let i = 0; i < this.ghosts.length; i++){
        const ghost = document.getElementById(this.ghosts[i].id);
        ghost.classList.remove('vulnerable');
        ghost.classList.add(this.ghosts[i].id);
    }
}


//* ------------ GAMEOVER FUNCTIONS ------------
Game.prototype.gameOver = function(win){
    
    this.gameover = true;
    this.clearPlayground();
    this.showStatistics();

    var menu = document.getElementById("end-game-menu");
    menu.style.visibility = "visible";

    if(win){
        //handle menu
    }
    else{
        //handle other menu
    }
}
Game.prototype.clearPlayground = function(){
    this.pacman.stopMoving();
    this.stopMovingGhosts();
    playground.remove();
}

Game.prototype.showStatistics = function() {
    var section = document.createElement("div");
    section.classList.add("game-stats");
    
    var ul = document.createElement("ul");
    
    var scoreLi = document.createElement("li");
    scoreLi.textContent = `Score: ${this.score}`;
    ul.appendChild(scoreLi);
    
    var ghostKilledLi = document.createElement("li");
    ghostKilledLi.textContent = `Ghosts killed: ${this.ghostsKilled}`;
    ul.appendChild(ghostKilledLi);

    var levelLi = document.createElement("li");
    levelLi.textContent = `Livel passed: ${this.level}`;
    ul.appendChild(levelLi);
    
    section.appendChild(ul);
    
    document.body.appendChild(section);
  }