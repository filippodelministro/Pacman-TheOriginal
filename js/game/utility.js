
function getCell(x, y){
    //return cell number if position passed is valid
    const grid = document.querySelector('.map');
    const cells = grid.querySelectorAll('.cell');
    if (x < 0 || x >= MAP_DIM || y < 0 || y >= MAP_DIM) {
        return null;
    }
    return cells[y * MAP_DIM + x];
}

function moveElement(el, dx, dy){
    const currLeft = parseInt(el.element.style.left, 10) || 0;
    const currTop = parseInt(el.element.style.top, 10) || 0;
    const newLeft = currLeft + dx * CELL_SIZE;
    const newTop = currTop + dy * CELL_SIZE;
    el.element.style.top = `${newTop}px`;
    el.element.style.left = `${newLeft}px`;
}

function checkAndMove(el){
    let dx = 0;
    let dy = 0;

    switch(el.direction){
        case 'left' : dx = -1; dy = 0; break;
        case 'right': dx = 1; dy = 0; break;
        case 'up' : dx = 0; dy = -1; break;
        case 'down': dx = 0; dy = 1; break; 
    }

    switch(checkNext(el, dx, dy)){
        case HIT_WALL: return;
        case HIT_FOOD: {
        
                //todo: handle Pacman eating food
                break;
            }
        default: return;
    };

    console.log("utility.js: checkAndMove: hit food ");
    //hitted food
    el.x += dx;
    el.y += dy; 

    moveElement(el, dx, dy);
}

function checkNext(el, dx, dy){
    const newX = el.x + dx;
    const newY = el.y + dy;

    const newCell = getCell(newX, newY);
    if (!newCell || newCell.classList.contains('wall')) {
        //position is not valid!
        return HIT_WALL;
    }

    if (newCell.classList.contains('food')) {
        newCell.classList.remove('food');

        //todo: handle Pacman eating food
    }
    
    return HIT_FOOD;
}