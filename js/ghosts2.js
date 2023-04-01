class Ghost {
    constructor(id) {
      this.id = id;
      this.element = document.getElementById(id);
      this.speed = 2;
      this.direction = 'right';
      this.moveInterval = null;
      this.moving = false;
    }
  

    // startMoving() {
    //   this.moveInterval = setInterval(() => {
    //     const currentPosition = parseInt(this.element.style.left, 10) || 0;
    //     const newPosition = currentPosition + (this.direction === 'right' ? this.speed : -this.speed);
    //     this.element.style.left = `${newPosition}px`;
  
    //     if (newPosition <= 0 || newPosition + this.element.offsetWidth >= this.element.parentElement.offsetWidth) {
    //       this.direction = this.direction === 'right' ? 'left' : 'right';
    //     }
    //   }, 20);
    // }
  
    // stopMoving() {
    //   clearInterval(this.moveInterval);
    // }
}



Ghost.prototype.startMoving = function(){
    this.moving = true;
    this.moveInterval = setInterval(() => {
        const currentPosition = parseInt(this.element.style.left, 10) || 0;
        const newPosition = currentPosition + (this.direction === 'right'? this.speed : -this.speed);
        this.element.style.left = `${newPosition}px`;
           
        if (newPosition <= 0 || newPosition + this.element.offsetWidth >= this.element.parentElement.offsetWidth) {
            this.direction = this.direction === 'right' ? 'left' : 'right';
          }
        }, 20);
}



Ghost.prototype.stopMoving = function(){
    clearInterval(this.interval); // stop the interval
    this.moving = false;
}