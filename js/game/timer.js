function Timer() {
    this.time = 0;
    this.interval = null;
}

Timer.prototype.ticTac = function () {
    //handle timer and print in game-info section
    this.time++;

    var minutes = Math.floor(this.time / 60);
    var seconds = this.time % 60;
    var timeString = minutes.toString() + "'" + ('0' + seconds.toString()).slice(-2) + "''";
    document.getElementById("timer").textContent = "timer: " + timeString;
}

Timer.prototype.start = function () {
    this.interval = setInterval(this.ticTac.bind(this), 1000)
}
Timer.prototype.stop = function () {
    clearInterval(this.interval);
}