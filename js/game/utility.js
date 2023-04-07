
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


function getCell(x, y){
    //return cell number if position passed is valid
    const grid = document.querySelector('.map');
    const cells = grid.querySelectorAll('.cell');
    if (x < 0 || x >= MAP_DIM || y < 0 || y >= MAP_DIM) {
        return null;
    }
    return cells[y * MAP_DIM + x];
}


//* ------------ MOVING ELEMENTS ------------
//trnslate element by one CELL_SIZE
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
