

//fix this

function  translateRight(element){
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



//BOHHH

function checkPosition(element){
    console.log("checkPosition> " + element.id + "\tcol: " + element.col);


    var nextCol = element.col + 1;
    if(map1[nextCol] !=0){
        return false;
    }

    return true;
}

function translateRight1(element){
    const currentPosition = parseInt(element.style.left, 10) || 0;
 
    const newPosition = currentPosition + CELL_SIZE;
    // const newPosition = currentPosition + CELL_SIZE;
    // console.log("translateRight1> " + element.id + "\tcurrent: " + currentPosition);
    // console.log("translateRight1> " + element.id + "\tnew: " + newPosition);

    element.style.left = `${newPosition}px`;
}