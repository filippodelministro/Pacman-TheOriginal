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
    this.cellsWithWalls = map1;
    this.fillMap();


    this.pause_on = false;
    this.pacman = new Pacman();

    console.log("pacmanx: " + this.pacman.x + " pacmany: " + this.pacman.y);

    document.addEventListener('keydown', this.keyPressedonGame.bind(this));
}


Game.prototype.fillMap = function(){
    const gridContainer = document.querySelector('.map');
    for (let i = 0; i < MAP_DIM * MAP_DIM; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');

        if (this.cellsWithWalls.includes(i)) {
            cell.classList.add('wall');
        } else {
            cell.classList.add('food');
        }
        gridContainer.appendChild(cell);
        this.count++;
    }
}

Game.prototype.getCells = function(x, y){
    const grid = document.querySelector('.map');
    const cells = grid.querySelectorAll('.cell');
    // restituisce la cella della griglia corrispondente alla posizione (x, y)
    if (x < 0 || x >= MAP_DIM || y < 0 || y >= MAP_DIM) {
        // la posizione è al di fuori della griglia, non restituire alcuna cella
        return null;
    }
    return cells[y * MAP_DIM + x];
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


Game.prototype.changeDirection = function(e){
    console.log("CHANGEDIRECTION> " + e.keyCode);


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

Game.prototype.movePacman = function(dx, dy){

    // calcola la nuova posizione di Pacman
    // const newPosition = { x: pacmanPosition.x + dx, y: pacmanPosition.y + dy };
    const newX = this.pacman.x + dx;
    const newY = this.pacman.y + dy;

    console.log("MOVEPACMAN> pacmanx: " + this.pacman.x + " pacmany: " + this.pacman.y);
    console.log("MOVEPACMAN> newX: " + newX + " newY: " + newY);


    // verifica se la nuova posizione è valida (non è una parete o al di fuori della griglia)
    const newCell = getCell(newX, newY);
    if (!newCell || newCell.classList.contains('wall')) {
        // la nuova posizione non è valida, non fare nulla
        return false;
    }
    
    // sposta Pacman alla nuova posizione
    pacman.style.gridColumn = newX + 1; // le colonne sono numerate a partire da 1, non da 0
    pacman.style.gridRow = newY + 1; // le righe sono numerate a partire da 1, non da 0
    
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
    this.pacman.x = newX;
    this.pacman.y = newY;
    return true;
}