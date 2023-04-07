
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
    // console.log("utility.js: translateRight" + element.direction);

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

// //todo: pass just the element!!
// function translate(el){
//     console.log("utility.js: translateRight " + el.direction);

//     switch(el.direction){
//         case 'right': {
//             const currentPosition = parseInt(el.style.left, 10) || 0;
//             const newPosition = currentPosition + CELL_SIZE;
//             element.style.left = `${newPosition}px`;
//         } break;
//     }


//     this.element.style.left = (this.x * CELL_SIZE) + "px";
//     this.element.style.top = (this.y * CELL_SIZE) + "px";
// }