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
    map = new Map();
    map.fillMap();

    game = new Game();
    // map.addFood();
    // map.addWallsToCells([0, 1, 2, 16, 17, 18]); // place walls in cells with indexes 0, 1, 2, 16, 17, 18

}

function Game(){
    this.pause_on = false;


    // this.map.addWallsToCells(3, 5, 6);

    this.pacman = new Pacman();
    this.ghosts = [
        new Ghost('blue-ghost'),
        new Ghost('red-ghost'),
        new Ghost('pink-ghost'),
        new Ghost('orange-ghost')
    ];

    // const food = new Food();
    // const ghost = new Ghost();
    
    document.addEventListener('keydown', this.keyPressedonGame.bind(this));
    this.pacman.startMoving();
    this.startMovingGhosts();
}

Game.prototype.keyPressedonGame = function(e){
    
    if(!this.pause_on){
        //in game
        if(e.keyCode == 32 || e.keyCode == 27)            
            this.pause(e);
        else
            this.pacman.changeDirection(e);
    }
    else{
        //in pause
        if(e.keyCode == 32 || e.keyCode == 27)
            this.resume();
        else
            this.handlePauseMenu(e);    //todo
    }
}

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
    //todo: handle this case

}
