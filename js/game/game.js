
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
    window.location = './home.php';
    
    else{
        game.startGame();
    }
}

Game.prototype.startGame = function(e){
    this.hydeMenu("pause-container");

    document.getElementById("startinfo").style.visibility = "hidden";
    document.removeEventListener('keydown', keyPressed);
    document.addEventListener('keydown', this.keyPressedonGame.bind(this));
    this.pacman.startMoving();
    this.startMovingGhosts();
    this.timer.start();
}

function Game(){
    this.pause_on = false;
    this.gameover = false;
    this.score = 0;
    this.ghostsKilled = 0;
    this.level = 0;         //todo
    this.vulnerability = false;
    this.coins = 0;

    this.timer = new Timer;
    this.map = new Map();
    this.foodRemaining = this.map.foodElements;
    
    this.pacman = new Pacman();
    // this.ghosts = [
    //     new Ghost('blue-ghost', 7, 9),
    //     new Ghost('orange-ghost', 8, 9),
    //     new Ghost('pink-ghost', 9, 9),
    //     new Ghost('red-ghost', 8, 6)
    // ];  
    this.ghosts = [
        new Ghost('ghost1', 7, 9),
        new Ghost('ghost2', 8, 9),
        new Ghost('ghost3', 9, 9),
        new Ghost('ghost4', 8, 6)
    ];  
}

Game.prototype.keyPressedonGame = function(e){    
//handle gaming commands
    if(!this.gameover){
        if(!this.pause_on){     //in game
            if(e.keyCode == 32 || e.keyCode == 27)            
                this.pause(e);
            else
                this.pacman.changeDirection(e);
        }
        else if(e.keyCode == 32 || e.keyCode == 27) 
            this.resume();
    }
}


//* ------------ PAUSE FUNCTIONS ------------
Game.prototype.pause = function(e){
    this.pause_on = true;

    this.showMenu("pause-container");
    this.pacman.stopMoving();
    this.stopMovingGhosts();
    this.timer.stop();
}
Game.prototype.resume = function(e){
    this.pause_on = false;
    this.hydeMenu("pause-container");
    this.pacman.startMoving();
    this.startMovingGhosts();
    this.timer.start();
}
Game.prototype.startMovingGhosts = function(){
    for (let i = 0; i < this.ghosts.length; i++) {
        this.ghosts[i].startMoving();
    } 
}    
Game.prototype.stopMovingGhosts = function(){
    for (let i = 0; i < this.ghosts.length; i++) {
        if(this.GhostVulnerable)
            this.GhostVulnerableOff

        this.ghosts[i].stopMoving();
    } 
}    

//* ------------ POINTS FUNCTIONS ------------
Game.prototype.addPoints = function(type){
    let points = (type == FOOD ) ? FOOD_POINTS : GHOST_POINTS;
    this.score += points;

    points = document.getElementById("score");
    points.textContent = "score: " + this.score;

    if(type == FOOD){
        this.foodRemaining--;
        
        // if(!this.foodRemaining){
        if(this.foodRemaining == this.map.foodElements - 5){     //!levare: è per testare
            this.level++;
            this.gameOver(true);
        }
    }
    else if(type == GHOST_POINTS){
        this.ghostsKilled++;
        ghostK = document.getElementById("ghostK");
        ghostK.textContent = "ghost-killed: " + this.ghostsKilled;
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
    
    var x = this.pacman.x;
    var y = this.pacman.y;

    if((x >= this.ghosts[0].x - MOVABLE_DIM && x <= this.ghosts[0].x + MOVABLE_DIM) && (y >= this.ghosts[0].y - MOVABLE_DIM && y <= this.ghosts[0].y + MOVABLE_DIM)) ghostHit = 0;
    if((x >= this.ghosts[1].x - MOVABLE_DIM && x <= this.ghosts[1].x + MOVABLE_DIM) && (y >= this.ghosts[1].y - MOVABLE_DIM && y <= this.ghosts[1].y + MOVABLE_DIM)) ghostHit = 1;
    if((x >= this.ghosts[2].x - MOVABLE_DIM && x <= this.ghosts[2].x + MOVABLE_DIM) && (y >= this.ghosts[2].y - MOVABLE_DIM && y <= this.ghosts[2].y + MOVABLE_DIM)) ghostHit = 2;
    if((x >= this.ghosts[3].x - MOVABLE_DIM && x <= this.ghosts[3].x + MOVABLE_DIM) && (y >= this.ghosts[3].y - MOVABLE_DIM && y <= this.ghosts[3].y + MOVABLE_DIM)) ghostHit = 3;
        
    //check if vulnerability (of ghost) is active or not 
    if(ghostHit != -1){   
        if(this.vulnerability){
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
Game.prototype.gameOver = function(result){

    this.gameover = true;
    this.clearPlayground();
    this.coinsEarned(result);
    this.showStatistics();
    this.showMenu("endGame-container");
    
    var text = (result) ? 'YOU WIN!' : 'GAME OVER!';
    var color = (result) ? 'win' : 'lose';
    var res = document.createElement("h3");
    res.classList.add('blink');
    res.classList.add('end-message');
    res.classList.add(color);    

    res.textContent = text;
    document.body.appendChild(res);


    //todo: call AJAX function to update database
    updateMatches(this.score, this.ghostsKilled, this.timer.time, result);
    // updateWallet(this.coins);

}

Game.prototype.clearPlayground = function(){
    this.pacman.stopMoving();
    this.stopMovingGhosts();
    this.timer.stop();
    playground.remove();
}

Game.prototype.showStatistics = function() {
    //create statistics: score | ghost killed | level passed | timer
    var section = document.createElement("div");
    section.classList.add("game-stats");
    
    //statistics list
    var ul = document.createElement("ul");
    var scoreLi = document.createElement("li");
    scoreLi.textContent = `Score:................ ${this.score} `;
    ul.appendChild(scoreLi);
    
    var timerLi = document.createElement("li");
    var minutes = Math.floor(this.timer.time / 60);
    var seconds = this.timer.time % 60;
    var timeString = minutes.toString() + "'" + ('0' + seconds.toString()).slice(-2) + "''";
    timerLi.textContent = `Timer:................ ` + timeString;
    ul.appendChild(timerLi);
    
    var ghostKilledLi = document.createElement("li");
    ghostKilledLi.textContent = `Ghosts killed:........ ${this.ghostsKilled}`;
    ul.appendChild(ghostKilledLi);

    var coinsLi = document.createElement("li");
    coinsLi.classList.add("coins");
    coinsLi.textContent = `Coins earned:.........  +${this.coins}`;
    ul.appendChild(coinsLi);

    //add section to document
    section.appendChild(ul);
    document.body.appendChild(section);
}

Game.prototype.showMenu = function(type){
    menu = document.getElementById(type);

    menu.classList.remove('hidden');
    menu.classList.add('appear');
}

Game.prototype.hydeMenu = function(type){
    var menu = document.getElementById(type);

    menu.classList.add('hidden');
    menu.classList.remove('appear');
}

Game.prototype.coinsEarned = function(res){
    // more points more coins
    this.coins = Math.floor(this.score / 100);
    
    if(res){
        this.coins += 300 - this.timer.time;         //average game take 5 minutes to finish
    } //if win add coins: less time more coins 
}