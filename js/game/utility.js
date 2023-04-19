
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


function checkNextDirection(el){
    //check if in the next direction is it possibile to change direction
    const actX = Math.floor(el.x/CELL_SIZE);
    const actY = Math.floor(el.y/CELL_SIZE);
    console.log("checkNextDirection>  ", "actX :"+ actX + "  actY: " + actY);

    const nextX = Math.floor(el.x) + el.direction.x * CELL_SIZE;
    const nextY = Math.floor(el.y) + el.direction.y * CELL_SIZE;


    console.log("checkNextDirection>  ", "nextX :"+ Math.floor(nextX/CELL_SIZE) + "  nextY" + Math.floor(nextY/CELL_SIZE));
    console.log("checkNextDirection> ", "dir.x: " + el.direction.x + "  dir.y: " + el.direction.y);
    console.log("checkNextDirection>  ", "dirNext.x: "+ el.nextDirection.x + "  dirNext.y: " + el.nextDirection.y);
    

    console.log(game.getCell(Math.floor(nextX/CELL_SIZE) + el.nextDirection.x, Math.floor(nextY/CELL_SIZE) + el.nextDirection.y));
    // return  (game.getCell(Math.floor(nextX/CELL_SIZE), Math.floor(nextY/CELL_SIZE)));
    return  (game.getCell(Math.floor(nextX/CELL_SIZE) + el.nextDirection.x, Math.floor(nextY/CELL_SIZE) + el.nextDirection.y));


}

// function stampaRoba(el){
//     game.map.getDirectionsAvailable(el.x/CELL_SIZE, el.y/CELL_SIZE, el.direction);
// }