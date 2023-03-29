// import Playground from './playground.js';
// import Pacman from './pacman.js';
// import Food from './food.js';
// import Ghost from './ghost.js';

document.addEventListener('keydown', keyPressed);

// var pause_on;


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

    game = new Game();
    document.removeEventListener('keydown', keyPressed);
}

function Game(){
    this.pause_on = false;
    this.pacman = new Pacman();
    // const playground = new Playground();
        // const food = new Food();
        // const ghost = new Ghost();
    
    document.addEventListener('keydown', this.keyPressedonGame.bind(this));        
}

Game.prototype.keyPressedonGame = function(e){
    document.getElementById("demo1").innerHTML = "game.js: keyPressedonGame(e)";

    if(!this.pause_on){
        //in game
        if(e.keyCode == 32 || e.keyCode == 27){
            
            this.pause(e);
        }
        // else{
        //     changeDirection(e);
        // }
    }
    else{
        //in pause
        if(e.keyCode == 32 || e.keyCode == 27)
            this.resume();
        else{
            this.handlePauseMenu(e);
        }
    }

}

Game.prototype.pause = function(e){
    document.getElementById("demo1").innerHTML = "game.js: pause()";
        this.pause_on = true;
    
        document.getElementById("pause-menu-container").style.visibility = "visible";
    
        this.pacman.pause();
}


Game.prototype.resume = function(e){
    document.getElementById("demo1").innerHTML = "game.js: resume()";
        this.pause_on = false;
    
        document.getElementById("pause-menu-container").style.visibility = "hidden";
    
        // this.pacman.pause();
}
