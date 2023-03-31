

//fix this

function translateRight(element){
    const currentPosition = parseInt(element.style.left, 10) || 0;
    const newPosition = currentPosition + 2;
    element.style.left = `${newPosition}px`;
}

function translateLeft(element){
    const currentPosition = parseInt(element.style.left, 10) || 0;
    const newPosition = currentPosition - 2;
    element.style.left = `${newPosition}px`;
}


function translateUp(element){
    const currentPosition = parseInt(element.style.top, 10) || 0;
    const newPosition = currentPosition - 2;
    element.style.top = `${newPosition}px`;
}


function translateDown(element){
    const currentPosition = parseInt(element.style.top, 10) || 0;
    const newPosition = currentPosition + 2;
    element.style.top = `${newPosition}px`;
}
