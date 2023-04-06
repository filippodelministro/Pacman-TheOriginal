

//fix this

// function  translateRight(element){
//     const currentPosition = parseInt(element.style.left, 10) || 0;
//     const newPosition = currentPosition + 2;
//     element.style.left = `${newPosition}px`;
// }

// function translateLeft(element){
//     const currentPosition = parseInt(element.style.left, 10) || 0;
//     const newPosition = currentPosition - 2;
//     element.style.left = `${newPosition}px`;
// }


// function translateUp(element){
//     const currentPosition = parseInt(element.style.top, 10) || 0;
//     const newPosition = currentPosition - 2;
//     element.style.top = `${newPosition}px`;
// }


// function translateDown(element){
//     const currentPosition = parseInt(element.style.top, 10) || 0;
//     const newPosition = currentPosition + 2;
//     element.style.top = `${newPosition}px`;
// }



//todo: unify this for Pacman and Ghost
function move(element){    
    switch(element.direction){
        case 'up': translateUp(element); break;
        case 'down': translateDown(element); break;
        case 'left': translateLeft(element); break;
        case 'right': translateRight(element); break;
        default: break;
    }
}



//BOHHH

function checkPosition(element){
    console.log("checkPosition> " + element.id + "\tcol: " + element.col);


    var nextCol = element.col + 1;
    if(map1[nextCol] !=0){
        return false;
    }

    return true;
}

function translateRight1(element){
    const currentPosition = parseInt(element.style.left, 10) || 0;
 
    const newPosition = currentPosition + CELL_SIZE;
    // const newPosition = currentPosition + CELL_SIZE;
    // console.log("translateRight1> " + element.id + "\tcurrent: " + currentPosition);
    // console.log("translateRight1> " + element.id + "\tnew: " + newPosition);

    element.style.left = `${newPosition}px`;
}







function movePacman(dx, dy) {
    console.log("movePacman> dx: " + dx + "\tdy: " + dy);

    // calcola la nuova posizione di Pacman
    const pacman = document.getElementById("pacman");
    const newPosition = { x: pacman.x + dx, y: pacman.y + dy };
    
    //fix: dont work here!!
    console.log("movePacman> pacman.x: " + pacman.x + "\tpacman.y: " + pacman.y);

    // verifica se la nuova posizione è valida (non è una parete o al di fuori della griglia)
    const newCell = getCell(newPosition.x, newPosition.y);
    if (!newCell || newCell.classList.contains('wall')) {
        // la nuova posizione non è valida, non fare nulla
        console.log("!NEW CELL");

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
    const grid = document.querySelector('.map');
    const cells = grid.querySelectorAll('.cell');
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
