class Ghost {
    constructor(id) {
      this.id = id;
      this.element = document.getElementById(id);
      this.speed = 2;
      this.changeDirection();
      this.moveInterval = null;
      this.moving = false;
    }
}


// Ghost.prototype.startMoving = function(){
//     this.moving = true;
//     this.moveInterval = setInterval(() => {
//         const currentPosition = parseInt(this.element.style.left, 10) || 0;
//         const newPosition = currentPosition + (this.direction === 'right'? this.speed : -this.speed);
//         this.element.style.left = `${newPosition}px`;
           
//         if (newPosition <= 0 || newPosition + this.element.offsetWidth >= this.element.parentElement.offsetWidth) {
//             this.direction = this.direction === 'right' ? 'left' : 'right';
//           }
//         }, 20);
// }

Ghost.prototype.startMoving = function(){
    if (!this.moving) {
        // this.changeDirection();
        this.moveInterval = setInterval(this.move.bind(this), this.speed);
        this.moving = true;
    }
}


Ghost.prototype.stopMoving = function(){
    clearInterval(this.moveInterval); // stop the interval
    this.moving = false;
}


Ghost.prototype.move = function(){
    var map = document.getElementById("map");

    switch(this.direction){
        case "right" :{
            if(this.element.offsetLeft + this.element.offsetWidth  < map.offsetLeft + map.offsetWidth){   
                // this.translateRight();
                translateRight(this.element) 
                break;
            }
            else{
                this.changeDirection();
                break;
            }
        };
        case "up" :{
            if(this.element.offsetTop > map.offsetTop ){   
                // this.translateRight();
                translateUp(this.element) 
                break;
            }
            else{
                this.changeDirection();
                break;
            }
        };
        case "left" :{
            if(this.element.offsetLeft > map.offsetLeft ){   
                translateLeft(this.element) 
                break;
            }
            else{
                this.changeDirection();
                break;
            }
        };
        case "down" :{
            if(this.element.offsetTop + this.element.offsetHeight < map.offsetLeft + map.offsetHeight ){   
                translateDown(this.element) 
                break;
            }
            else{
                this.changeDirection();
                break;
            }
        };
    }
}

Ghost.prototype.changeDirection = function(){
    const directions = ['up', 'down', 'right', 'left'];
    const randomIndex = Math.floor(Math.random() * directions.length);
    this.direction = directions[randomIndex];

    console.log(this.id + ": " + this.direction);

}