document.addEventListener('keydown', keyPressed);

function keyPressed(e) {
    if (e.keyCode == 8) // backspace
        window.location = './materialPacman.html';

    else{
        document.getElementById("demo1").innerHTML = "keyPressed()"
        init();
    }
}


function init(){
    document.getElementById("demo1").innerHTML = "game.js: init()"

    document.getElementById("pause-menu-container").style.visibility = "hidden";
    document.getElementById("startinfo").style.visibility = "hidden";

    document.removeEventListener('keydown', keyPressed);
    game = new Game();
}

function Game(){
    this.pause_on = false;
    this.pacman = new Pacman();
    // this.ghost = new Ghost();
    // const playground = new Playground();
    // const food = new Food();
    // const ghost = new Ghost();
    
    document.addEventListener('keydown', this.keyPressedonGame.bind(this));
    this.pacman.startMoving();
    this.ghost.startMoving();

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
    document.getElementById("demo1").innerHTML = "game.js: pause()";
    this.pause_on = true;

    document.getElementById("pause-menu-container").style.visibility = "visible";
    this.pacman.stopMoving();
    this.ghost.stopMoving();
}


Game.prototype.resume = function(e){
    document.getElementById("demo1").innerHTML = "game.js: resume()";
    this.pause_on = false;

    document.getElementById("pause-menu-container").style.visibility = "hidden";

    this.pacman.startMoving();
    this.ghost.startMoving();
}


Game.prototype.handlePauseMenu = function(e){
    //todo: handle this case
    document.getElementById("demo2").innerHTML = "game.js: handlePauseMenu()";

}
