
function moveElement(el, dx, dy){
    const currLeft = parseInt(el.element.style.left, 10) || 0;
    const currTop = parseInt(el.element.style.top, 10) || 0;
    const newLeft = dx * CELL_SIZE;
    const newTop = dy * CELL_SIZE;
    el.element.style.top = `${newTop}px`;
    el.element.style.left = `${newLeft}px`;
}


function moveElement1(el) {
    // const currLeft = parseInt(el.element.style.left, 10) || 0;
    // const currTop = parseInt(el.element.style.top, 10) || 0;
    // el.element.style.transform = `translate(${currLeft + 1}px`;
    console.log("moveElement1");
    el.x = el.x + el.direction.x * 3;
    el.y = el.y + el.direction.y * 3;
    
    const currLeft = parseInt(el.element.style.left, 10) || 0;
    const currTop = parseInt(el.element.style.top, 10) || 0;
    el.element.style.left = currLeft + el.direction.x * 3 + 'px';
    el.element.style.top = currTop + el.direction.y * 3 + 'px';

    // switch(el.direction) {
    //     case RIGHT:{
    //         const currLeft = parseInt(el.element.style.left, 10) || 0;
    //         el.element.style.left = currLeft + 3 + 'px';
    //         el.x += 3;
    //         break;
    //     }
    //     case LEFT:{
    //         const currLeft = parseInt(el.element.style.left, 10) || 0;
    //         el.element.style.left = currLeft - 3 + 'px';    
    //         el.x -= 3;
    //         break;
    //     }
    //     case DOWN:{
    //         const currTop = parseInt(el.element.style.top, 10) || 0;
    //         el.element.style.top = currTop + 3 + 'px'; 
    //         el.y += 3;   
    //         break;
    //     }
    //     case UP:{
    //         const currTop = parseInt(el.element.style.top, 10) || 0;
    //         el.element.style.top = currTop - 3 + 'px';
    //         el.y -= 3;
    //         break;
    //     }
    // }

}

function checkNextCell(el){
    const nextX = el.x + el.direction.x * CELL_SIZE;
    const nextY = el.y + el.direction.y * CELL_SIZE;

    return game.getCell(nextX/CELL_SIZE, nextY/CELL_SIZE);
}
