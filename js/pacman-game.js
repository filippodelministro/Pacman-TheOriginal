
var level = 0;

function start(level){
    playground = document.getElementById("playground");
    playground.style.cursor = "none";
    game = new Game(level);
}

function Game(level){
    document.addEventListener("keyup", this.key)
}




document.onkeydown = detectKey;

function detectKey(e) {

    var posLeft = document.getElementById('pacman').offsetLeft;
    var posTop = document.getElementById('pacman').offsetTop;

    // e = e || window.event;

    //todo: change in switch
    if (e.keyCode == '38') {
        document.getElementById('pacman').style.marginTop  = (posTop-1)+"px";
    }
    else if (e.keyCode == '40') {
        document.getElementById('pacman').style.marginTop  = (posTop+1)+"px";
    }
    else if (e.keyCode == '37') {
        document.getElementById('pacman').style.marginLeft  = (posLeft-1)+"px";
    }
    else if (e.keyCode == '39') {
        document.getElementById('pacman').style.marginLeft  = (posLeft+1)+"px";
    }
}



