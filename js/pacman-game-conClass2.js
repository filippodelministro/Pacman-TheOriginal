document.addEventListener('keydown', keyPressed);

function keyPressed(e) {
    if (e.keyCode == 8) // backspace
        window.location = './materialPacman.html';

    else{
        document.getElementById("demo1").innerHTML = "keyPressed()"
        init();
    }
}


class Game{
    pause;

    pause(){
        this.pause = true;
        pacman.pause();
    }
    resume(){
        this.pause = false;
    }
}

class Pacman{
    pause(){
        this.moving = false;
    }

}

function init(){
    game = new Game();
    pacman = new Pacman();
}
