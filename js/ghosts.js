
//*  MOVING GHOSTS

function moveGhosts(){
    document.getElementById("demo1").innerHTML = "moveGhosts()";

    var ghost = document.getElementById("blue-ghost");
    var playground = document.getElementById("playground");

    // document.getElementById("ghostLeft").innerHTML = "Left: " + ghost.offsetLeft;
    // document.getElementById("ghostTop").innerHTML = "Top: " + ghost.offsetTop;

    switch(direction){
        case "right": {
            if(ghost.offsetLeft + ghost.offsetWidth < playground.offsetLeft + playground.offsetWidth){   
                document.getElementById("demo2").innerHTML = "move> right";
                var currentLeft = parseInt(ghost.style.left || 0, 10);
                var newLeft = currentLeft + 5; // move 5 pixels to the right
                ghost.style.left = newLeft + "px";
                break;
            }
            else{
                stopMoving();
                break;
            }
        };
        case "up": {
            if(ghost.offsetTop> playground.offsetTop){   
                document.getElementById("demo2").innerHTML = "move> up";
                var currentTop = parseInt(ghost.style.top || 0, 10);
                var newTop = currentTop - 5; // move 5 pixels to the right
                ghost.style.top = newTop + "px";
                break;
            }
            else{
                stopMoving();
                break;
            }
        };
        case "left": {
            if(ghost.offsetLeft > playground.offsetLeft){   
                document.getElementById("demo2").innerHTML = "move> left";
                var currentLeft = parseInt(ghost.style.left || 0, 10);
                var newLeft = currentLeft - 5; // move 5 pixels to the right
                ghost.style.left = newLeft + "px";
                break;
            }
            else{
                stopMoving();
                break;
            }
        };
        case "down": {
            if(ghost.offsetTop + ghost.offsetHeight < playground.offsetTop + playground.offsetHeight){ 
                document.getElementById("demo2").innerHTML = "move> down";
                var currentTop = parseInt(ghost.style.top || 0, 10);
                var newTop = currentTop + 5; // move 5 pixels to the right
                ghost.style.top = newTop + "px";
                break;
            }
            else{
                stopMoving();
                break;
            }
        };
    }
}
