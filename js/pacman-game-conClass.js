// document.addEventListener('keydown', keyPressed);
onload = init;

// function keyPressed(e){
//     if(this.gameOn){
//         if(this.pauseOn){
//             // sono in pausa
//             if(e.keyCode == '32' || e.KeyCode == '27')
//                 resume();
//         }
//         else{
//             // sto giocando
//             if(e.keyCode == '32' || e.KeyCode == '27')
//                 pause();
//             else
//                 this.changeDirection(e);
//         }
//     }
//     else{
//         this.resume();
//     }
// }

function init(){
    document.getElementById("demo1").innerHTML = "init()";
    Pacman = new Pacman();
    // startgame();
}
function Pacman(){
    // document.getElementById("demo1").innerHTML = "Pacman()";

    this.gameOn = true;
    this.pauseOn = false;

    this.direction = '39';

    this.lives = MAX_LIFE;
    // document.addEventListener('keydown', this.command);
    document.addEventListener('keydown', command);
    document.getElementById("demo2").innerHTML = "Pacman2()";
    this.startgame();
}


//!NOT WORKING Pacman.prototype.command = 
//!NOT WORKING     function(e) {

function command(e){
    document.getElementById("demo1").innerHTML = "command()";
    if(this.pauseOn){
        // sono in pausa
        if(e.keyCode == '32' || e.KeyCode == '27'){
            document.getElementById("demo3").innerHTML = "command()> arrivato resume()";   
            //!NOT WORKING this.resume();
            resume();

        }
    }
    else{
        // sto giocando
        if(e.keyCode == '32' || e.KeyCode == '27'){
            document.getElementById("demo3").innerHTML = "command()> arrivato Pause()";   
            //!NOT WORKING this.pause();
            pause();
        }
        else
            //!NOT WORKING this.changeDirection();
            changeDirection(e);
    }
}
Pacman.prototype.startgame = 
    function() {
        document.getElementById("demo2").innerHTML = "startgame()";
        this.gameOn = true;
        this.pauseOn = false;

        this.move();
        // while(this.gameOn){
        //     move();
        //     break;
        // }
    }
Pacman.prototype.move = 
    function(){
        document.getElementById("demo1").innerHTML = "move()";
        
        //? lo fa una votla sola
        let cont = 0;
        while(cont <= 3){
            var posLeft = document.getElementById("pacman").offsetLeft;
            document.getElementById("pacman").style.marginLeft = (posLeft+25)+"px";
            cont++;
        }

    }




//! NOT WORKING 
// Pacman.prototype.pause = 
//     function(){
//         document.getElementById("demo1").innerHTML = "pause()";
//         document.getElementById("pause-menu-container").style.visibility = "visible";

//         this.pauseOn = true;
//         // handlePauseMenu(e);
//     }
// Pacman.prototype.resume = 
//     function(){
//         document.getElementById("startinfo").style.visibility = "hidden";
//         document.getElementById("demo1").innerHTML = "resume()";
        
//         document.getElementById("pause-menu-container").style.visibility = "hidden";
//         this.pauseOn = false;
//         // handlePauseMenu(e);
//     }
// Pacman.prototype.changeDirection = 
//     function(e){
//         document.getElementById("demo1").innerHTML = "changeDirection()";
//         document.getElementById("demo2").innerHTML = e.KeyCode;
//     }


function pause(){
    document.getElementById("demo1").innerHTML = "pause()";
    document.getElementById("pause-menu-container").style.visibility = "visible";

    this.pauseOn = true;
    // handlePauseMenu(e);
}

function resume(){
    document.getElementById("startinfo").style.visibility = "hidden";
    document.getElementById("demo1").innerHTML = "resume()";
    
    document.getElementById("pause-menu-container").style.visibility = "hidden";
    this.pauseOn = false;
}
function changeDirection(e){
    document.getElementById("demo1").innerHTML = "changeDirection()";
    document.getElementById("demo2").innerHTML = e.KeyCode;
}


// if(game_on){
//     if(!pause_on){
//         if(e.keyCode == 32 || e.keyCode == 27)         //pause
//             pause(e);
//         else move(e);
//     }
//     else{
//         if(e.keyCode == 32)
//             start();
//         else handlePauseMenu(e);
//     }
// }
// else{
//     game_on = true;
//     pause_on = false;
//     move(e);
// }