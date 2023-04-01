

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


function translate(element){
    console.log("translate> " + element.id + ": " + element.direction);
    // switch(element.direction){
    // }


}
