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

    console.log("foodElements: "+ this.map.foodElements)

    this.pacman = new Pacman();
    this.ghosts = [
        new Ghost('blue-ghost'),
        new Ghost('red-ghost'),
        new Ghost('pink-ghost'),
        new Ghost('orange-ghost')
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

    console.log("PAUSE> pacmanx: " + this.pacman.x + " pacmany: " + this.pacman.y);

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


//* ------------ POINTS FUNCTIONS ------------
Game.prototype.addPoints = function(type){
    console.log("game.js> ADDPOINTS> this.pacman.score: " + this.score);

    let points = (type == "food" ) ? FOOD_POINTS : GHOST_POINTS;
   

    this.score += points;

    points = document.getElementById("score");
    points.textContent = this.score;

    this.foodElements--;
    console.log("game.js> ADDPOINTS> foodElements: " + this.map.foodElements);

    if(type == "food"){
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
