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

    this.map = new Map();
    this.pacman = new Pacman();
    document.addEventListener('keydown', this.keyPressedonGame.bind(this));
}

Game.prototype.keyPressedonGame = function(e){
    
    if(!this.pause_on){
        //in game
        if(e.keyCode == 32 || e.keyCode == 27)            
            this.pause(e);
        else{
            this.changeDirection(e);
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


//* ------------ MOVING PACMAN ------------

Game.prototype.changeDirection = function(e){

    if (e.keyCode === 38) {
        // muovi Pacman verso l'alto
        if(this.movePacman(0, -1))
            translateUp("pacman");
    } else if (e.keyCode === 40) {
        // muovi Pacman verso il basso
        if(this.movePacman(0, 1))
            translateDown("pacman");
    } else if (e.keyCode === 37) {
        // muovi Pacman verso sinistra
        if(this.movePacman(-1, 0))
            translateLeft("pacman");
    } else if (e.keyCode === 39) {
        // muovi Pacman verso destra
        if(this.movePacman(1, 0))
            translateRight("pacman");
    }

}

Game.prototype.movePacman = function(dx, dy){
    const newX = this.pacman.x + dx;
    const newY = this.pacman.y + dy;

    const newCell = getCell(newX, newY);
    if (!newCell || newCell.classList.contains('wall')) {
        //position is not valid!
        return false;
    }
    
    pacman.style.gridColumn = newX + 1; 
    pacman.style.gridRow = newY + 1; 
    
    //pacman interacts whit other elements of the grid
    if (newCell.classList.contains('food')) {
        newCell.classList.remove('food');

        //todo: handle Pacman eating food
    }

    // todo: handle Pacman touching ghosts

    
    //if here we can move pacman
    this.pacman.x = newX;
    this.pacman.y = newY;
    return true;
}



//* ------------ PAUSE FUNCTIONS ------------
Game.prototype.pause = function(e){
    this.pause_on = true;

    document.getElementById("pause-menu-container").style.visibility = "visible";
    // this.pacman.stopMoving();
    // this.stopMovingGhosts();

    console.log("PAUSE> pacmanx: " + this.pacman.x + " pacmany: " + this.pacman.y);

}
Game.prototype.resume = function(e){
    this.pause_on = false;

    document.getElementById("pause-menu-container").style.visibility = "hidden";

    // this.pacman.startMoving();
    // this.startMovingGhosts();
}