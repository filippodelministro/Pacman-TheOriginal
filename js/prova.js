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
  timer=setInterval(draw, 10);
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