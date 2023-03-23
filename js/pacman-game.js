
// var game_on = false;
// var pause_on = false;
// // document.addEventListener('keydown', keyPressed);

// function keyPressed(e){
//     if(game_on){
//         if(!pause_on){
//             if(e.keyCode == 32 || e.keyCode == 27)         //pause
//                 pause(e);
//             else move(e);
//         }
//         else{
//             if(e.keyCode == 32)
//                 start();
//             else handlePauseMenu(e);
//         }
//     }
//     else{
//         game_on = true;
//         pause_on = false;
//         init();
//     }
// }

// function start(){
//     document.getElementById("pause-menu-container").style.visibility = "hidden";
//     document.getElementById("startinfo").style.visibility = "hidden";
    
//     game_on = true;
//     pause_on = false;
// }
// function resume(){
//     document.getElementById("pause-menu-container").style.visibility = "hidden";
    
//     game_on = true;
//     pause_on = false;
// }
// function pause(e){
//     document.getElementById("pause-menu-container").style.visibility = "visible";

//     pause_on = true;
//     // handlePauseMenu(e);
// }

// function handlePauseMenu(e){
//     document.getElementById("demo3").innerHTML = e.keyCode;

//     switch(e.keyCode){
//         case 27: start(); break;        //resume [ESC]
//     }
// }


// //  moving functions
// function move(e) {
    
//     var posLeft = document.getElementById("pacman").offsetLeft;
//     var posTop = document.getElementById("pacman").offsetTop;
//     e = e || window.event;

//     //!not working
//     // switch(e.keyCode){
//     //     case '37': document.getElementById("pacman").style.marginLeft  = (posLeft-25)+"px"; break;
//     //     case '38': document.getElementById("pacman").style.marginTop  = (posTop-25)+"px"; break;
//     //     case '39': document.getElementById("pacman").style.marginLeft  = (posLeft+25)+"px"; break;
//     //     case '40': document.getElementById("pacman").style.marginTop  = (posTop+25)+"px"; break;
//     // }

//     if (e.keyCode == '38') {
//         // up arrows
//         document.getElementById("pacman").style.marginTop  = (posTop-25)+"px";
//     }
//     else if (e.keyCode == '40') {
//         // down arrow
//         document.getElementById("pacman").style.marginTop  = (posTop+25)+"px";
//     }
//     else if (e.keyCode == '37') {
//        // left arrow
//         document.getElementById("pacman").style.marginLeft  = (posLeft-25)+"px";
//     }
//     else if (e.keyCode == '39') {
//        // right arrow
//         document.getElementById("pacman").style.marginLeft  = (posLeft+25)+"px";
//     }
// }

var canvas;
var ctx;
var dx = 1;
var dy = 2;
var bar=new Bar(400,500);
var circle=new Circle(400,30,10);
var dxBar=6;
var timer;
var barImg;
function Bar(x,y){
  this.x=x;
  this.y=y;
}
function Circle(x,y,r){
  this.x=x;
  this.y=y;
  this.r=r;
}
function drawBall(c) {
    // ctx.fillStyle("red");
  ctx.beginPath();
  ctx.arc(c.x, c.y, c.r, 0, Math.PI*2, true);
  ctx.fill();
}
function doKeyDown(e){
  if(e.keyCode==37){
    if(bar.x-dxBar>0)
      bar.x-=dxBar;
  }
  else if(e.keyCode==39){
    if(bar.x+dxBar<canvas.width)
      bar.x+=dxBar;
  }
}
function init() {
  window.addEventListener("keydown",doKeyDown,false);
  barImg=document.getElementById("bar");
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
//   timer=setInterval(draw, 10);
  return timer;
}
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#FAF7F8";
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "#003300";
  drawBall(circle);
  if (circle.x +dx > canvas.width || circle.x +dx < 0)
    dx=-dx;
  if(circle.y+dy>bar.y && circle.x>bar.x && circle.x<bar.x+barImg.width)
    dy=-dy;
  if (circle.y +dy > canvas.height || circle.y +dy < 0)
    dy=-dy;
  circle.x += dx;
  circle.y += dy;
  ctx.drawImage(barImg,bar.x,bar.y);
  if(circle.y>bar.y){
    clearTimeout(timer);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    alert("Game Over");
  }
}