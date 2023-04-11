
function moveElement(el, dx, dy){
    const currLeft = parseInt(el.element.style.left, 10) || 0;
    const currTop = parseInt(el.element.style.top, 10) || 0;
    const newLeft = dx * CELL_SIZE;
    const newTop = dy * CELL_SIZE;
    el.element.style.top = `${newTop}px`;
    el.element.style.left = `${newLeft}px`;
}