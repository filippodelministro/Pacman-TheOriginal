

//fix this

function translateRight(element){
    document.getElementById("demo1").innerHTML = "translateRigth()";

    element.x += 1;
    element.style.left = `${element.x}px`;
}

function translateLeft(element){
    document.getElementById("demo1").innerHTML = "translateLeft()";

    element.x -= 1;
    element.style.left = `${element.x}px`;
}


function translateUp(element){
    document.getElementById("demo1").innerHTML = "translateUp()";

    element.y -= 1;
    element.style.top = `${element.y}px`;
}


function translateDown(element){
    document.getElementById("demo1").innerHTML = "translateDown()";

    element.y -= 1;
    element.style.top = `${element.y}px`;
}

