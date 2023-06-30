class Timer {
    constructor(){
        this.time = 0;
        this.interval = null;
    }

    ticTac(){
        //handle timer and print in game-info section
        this.time++;

        let minutes = Math.floor(this.time / 60);
        let seconds = this.time % 60;
        let timeString = minutes.toString() + "'" + ('0' + seconds.toString()).slice(-2) + "''";
        document.getElementById("timer").textContent = "timer: " + timeString;
    }

    start(){
        this.interval = setInterval(this.ticTac.bind(this), 1000)
    }

    stop(){
        clearInterval(this.interval);
    }
}