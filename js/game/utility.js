
function moveElement(el, dx, dy){
    const currLeft = parseInt(el.element.style.left, 10) || 0;
    const currTop = parseInt(el.element.style.top, 10) || 0;
    const newLeft = dx * CELL_SIZE;
    const newTop = dy * CELL_SIZE;
    el.element.style.top = `${newTop}px`;
    el.element.style.left = `${newLeft}px`;
}


function moveElement1(el) {
    el.x = el.x + el.direction.x * MOVING_PIXELS;
    el.y = el.y + el.direction.y * MOVING_PIXELS;
    
    const currLeft = parseInt(el.element.style.left, 10) || 0;
    const currTop = parseInt(el.element.style.top, 10) || 0;
    el.element.style.left = currLeft + el.direction.x * MOVING_PIXELS + 'px';
    el.element.style.top = currTop + el.direction.y * MOVING_PIXELS + 'px';
}

//todo: make it easier
function tunnel(el) {
    const currLeft = parseInt(el.element.style.left, 10) || 0;
    if(el.x == CELL_SIZE){
        el.element.style.left = currLeft +  15 * CELL_SIZE + 'px';
        el.x = el.x + 15 * CELL_SIZE;
    }
    else {
        el.element.style.left = currLeft - 15 * CELL_SIZE + 'px';
        el.x = el.x - 15 * CELL_SIZE;
    }
}

function checkNextCell(el){
    const nextX = el.x + el.direction.x * CELL_SIZE;
    const nextY = el.y + el.direction.y * CELL_SIZE;

    return game.getCell(nextX/CELL_SIZE, nextY/CELL_SIZE);
}
