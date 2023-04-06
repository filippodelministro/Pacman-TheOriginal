
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

    // document.addEventListener('keydown', this.keyPressedonGame.bind(this));

}

Game.prototype.keyPressedonGame = function(e){
    if(!this.pause_on){
        //in game
        if(e.keyCode == 32 || e.keyCode == 27)            
            this.pause(e);
        // else
        //     this.pacman.changeDirection(e);
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
    // this.pacman.stopMoving();
    // this.stopMovingGhosts();
}


Game.prototype.resume = function(e){
    this.pause_on = false;

    document.getElementById("pause-menu-container").style.visibility = "hidden";

    // this.pacman.startMoving();
    // this.startMovingGhosts();
}

let grid;
let cells;
let pacman;
let pacmanPosition;
window.onload = function(){

    grid = document.querySelector('.grid');
    cells = grid.querySelectorAll('.cell');
    pacman = document.getElementById("pacman");
    
    pacmanPosition = { x: 0, y: 0 }; // posizione iniziale di Pacman
}

// gestire gli input utente per muovere Pacman
document.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp') {
        // muovi Pacman verso l'alto
        if(movePacman(0, -1))
            translateUp("pacman");
    } else if (event.key === 'ArrowDown') {
        // muovi Pacman verso il basso
        if(movePacman(0, 1))
            translateDown("pacman");
    } else if (event.key === 'ArrowLeft') {
        // muovi Pacman verso sinistra
        if(movePacman(-1, 0))
            translateLeft("pacman");
    } else if (event.key === 'ArrowRight') {
        // muovi Pacman verso destra
        if(movePacman(1, 0))
            translateRight("pacman");
    }
});

function movePacman(dx, dy) {
    // calcola la nuova posizione di Pacman
    const newPosition = { x: pacmanPosition.x + dx, y: pacmanPosition.y + dy };
    
    // verifica se la nuova posizione è valida (non è una parete o al di fuori della griglia)
    const newCell = getCell(newPosition.x, newPosition.y);
    if (!newCell || newCell.classList.contains('wall')) {
        // la nuova posizione non è valida, non fare nulla
        return false;
    }
    
    // sposta Pacman alla nuova posizione
    pacman.style.gridColumn = newPosition.x + 1; // le colonne sono numerate a partire da 1, non da 0
    pacman.style.gridRow = newPosition.y + 1; // le righe sono numerate a partire da 1, non da 0
    
    // gestisci le interazioni di Pacman con gli elementi della griglia
    if (newCell.classList.contains('food')) {
        // Pacman ha mangiato del cibo
        newCell.classList.remove('food');
        // newCell.classList.add('empty');

        // gestisci il comportamento di Pacman dopo aver mangiato del cibo
    } else {
        // Pacman si è mosso su una cella vuota
        // gestisci il comportamento di Pacman quando si muove su una cella vuota
    }
    
    // aggiorna la posizione di Pacman
    pacmanPosition = newPosition;
    return true;
}

function getCell(x, y) {
    // restituisce la cella della griglia corrispondente alla posizione (x, y)
    if (x < 0 || x >= MAP_DIM || y < 0 || y >= MAP_DIM) {
        // la posizione è al di fuori della griglia, non restituire alcuna cella
        return null;
    }
    return cells[y * MAP_DIM + x];
}

function translateRight(id){
    const element= document.getElementById(id);

    const currentPosition = parseInt(element.style.left, 10) || 0;
    const newPosition = currentPosition + CELL_SIZE;
    element.style.left = `${newPosition}px`;
}

function translateLeft(id){
    const element= document.getElementById(id);

    const currentPosition = parseInt(element.style.left, 10) || 0;
    const newPosition = currentPosition - CELL_SIZE;
    element.style.left = `${newPosition}px`;
}

function translateUp(id){
    const element= document.getElementById(id);

    const currentPosition = parseInt(element.style.top, 10) || 0;
    const newPosition = currentPosition - CELL_SIZE;
    element.style.top = `${newPosition}px`;
}

function translateDown(id){
    const element= document.getElementById(id);

    const currentPosition = parseInt(element.style.top, 10) || 0;
    const newPosition = currentPosition + CELL_SIZE;
    element.style.top = `${newPosition}px`;
}
