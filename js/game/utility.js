
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
    //fix this
    console.log(el.direction);
    switch(el.direction){
        case RIGHT:{
            const currLeft = parseInt(el.element.style.left, 10) || 0;
            el.element.style.left = currLeft + 2 + 'px';
            el.x += 2;
            break;
        }
        case LEFT:{
            const currLeft = parseInt(el.element.style.left, 10) || 0;
            el.element.style.left = currLeft - 2 + 'px';    
            el.x -= 2;
            break;
        }
        case DOWN:{
            const currTop = parseInt(el.element.style.top, 10) || 0;
            el.element.style.top = currTop + 2 + 'px'; 
            el.y += 2;   
            break;
        }
        case UP:{
            const currTop = parseInt(el.element.style.top, 10) || 0;
            el.element.style.top = currTop - 2 + 'px';
            el.y -= 2;
            break;
        }
    }

}