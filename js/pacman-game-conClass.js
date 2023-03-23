
function Pacman(x, y, radius, mouthAngle, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.mouthAngle = mouthAngle;
    this.color = color;
  
    this.draw = function(ctx) {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(this.x, this.y, this.radius, (this.mouthAngle + 0.2) * Math.PI, (1.8 - this.mouthAngle) * Math.PI, false);
      ctx.lineTo(this.x, this.y);
      ctx.fill();
      ctx.closePath();
    };
    
    this.move = function(dx, dy) {
      this.x += dx;
      this.y += dy;
    };
  
    this.setMouthAngle = function(angle) {
      this.mouthAngle = angle;
    };
  }
  
  // usage

  function init(){

    document.getElementById("demo1").innerHTML = "init()"

    var canvas = document.getElementById("playground");
    var ctx = canvas.getContext("2d");
    var pacman = new Pacman(100, 100, 50, 0.3, "yellow");
    pacman.draw(ctx);
    pacman.setMouthAngle(0.5);
    pacman.move(50, 0);
    pacman.draw(ctx);  
}





document.addEventListener('keydown', keyPressed);

function keyPressed(e){
    if(game_on){
        if(!pause_on){
            if(e.keyCode == 32 || e.keyCode == 27)         //pause
                pause(e);
            else move(e);
        }
        else{
            if(e.keyCode == 32)
                start();
            else handlePauseMenu(e);
        }
    }
    else{
        game_on = true;
        pause_on = false;
        start();
    }
}

function start(){
    document.getElementById("pause-menu-container").style.visibility = "hidden";
    document.getElementById("startinfo").style.visibility = "hidden";
    
    game_on = true;
    pause_on = false;
}
function resume(){
    document.getElementById("pause-menu-container").style.visibility = "hidden";
    
    game_on = true;
    pause_on = false;
}
function pause(e){
    document.getElementById("pause-menu-container").style.visibility = "visible";

    pause_on = true;
    // handlePauseMenu(e);
}