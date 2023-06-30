
//init game to load elements, then wait for Keypress to start moving
onload = init;
let playground;
function init(){
    playground = document.getElementById("playground");
    game = new Game();
    document.addEventListener('keydown', keyPressed);
}
function keyPressed(e) {
    if (e.keyCode == 8) // backspace
    window.location = './home.php';
    
    else{
        game.startGame();
    }
}

class Game{
    constructor(){
        this.pause_on = false;
        this.gameover = false;
        this.score = 0;
        this.ghostsKilled = 0;
        this.vulnerability = false;
        this.coins = 0;
    
        this.timer = new Timer();
        this.map = new Map();
        this.foodRemaining = this.map.foodElements;
        
        this.pacman = new Pacman();
        this.ghosts = [
            new Ghost('ghost1', 7, 9),
            new Ghost('ghost2', 8, 9),
            new Ghost('ghost3', 9, 9),
            new Ghost('ghost4', 8, 6)
        ];
    }

    startGame(e){
        this.hydeMenu("pause-container");

        document.getElementById("startinfo").style.visibility = "hidden";
        document.removeEventListener('keydown', keyPressed);
        document.addEventListener('keydown', this.keyPressedonGame.bind(this));
        this.pacman.startMoving();
        this.startMovingGhosts();
        this.timer.start();
    }

    keyPressedonGame(e){
        //handle gaming commands
        if(!this.gameover){
            if(!this.pause_on){     //in game
                if(e.keyCode == 32 || e.keyCode == 27)            
                    this.pause(e);
                else
                    this.pacman.changeDirection(e);
            }
            else if(e.keyCode == 32 || e.keyCode == 27) 
                this.resume();
        }
    }

    //* ------------ PAUSE FUNCTIONS ------------
    pause(){
        this.pause_on = true;

        this.showMenu("pause-container");
        this.pacman.stopMoving();
        this.stopMovingGhosts();
        this.timer.stop();
    }

    resume(){
        this.pause_on = false;
        this.hydeMenu("pause-container");
        this.pacman.startMoving();
        this.startMovingGhosts();
        this.timer.start();
    }

    startMovingGhosts(){
        for (let i = 0; i < this.ghosts.length; i++) {
            this.ghosts[i].startMoving();
        } 
    }

    stopMovingGhosts(){
        for (let i = 0; i < this.ghosts.length; i++) {
            if(this.GhostVulnerable)
                this.GhostVulnerableOff
    
            this.ghosts[i].stopMoving();
        }
    }

    //* ------------ POINTS FUNCTIONS ------------
    addPoints(type){
        let points = (type == FOOD ) ? FOOD_POINTS : GHOST_POINTS;
        this.score += points;
    
        points = document.getElementById("score");
        points.textContent = "score: " + this.score;
    
        if(type == FOOD){
            this.foodRemaining--;
            
            if(!this.foodRemaining){
                this.level++;
                this.gameOver(true);
            }
        }
        else if(type == GHOST_POINTS){
            this.ghostsKilled++;
            let ghostK = document.getElementById("ghostK");
            ghostK.textContent = "ghost-killed: " + this.ghostsKilled;
        }
    }

    //* ------------ GAME FUNCTIONS ------------
    getCell(x, y){
        //return cell number if position passed is valid
        if(x < 0 || x >= MAP_DIM || y < 0 || y >= MAP_DIM){
            return WALL;
        }

        return this.map.cells[y * MAP_DIM + x];
    }

    remove(type, x, y){
        let t;
        switch(type){
            case CRSS:
            case FOOD: t = "food"; break;
            case BIGF: t = "bigFood"; break;
            default: return;
        }

        //remove food from HTML
        const grid = document.querySelector('.map');
        const cells = grid.querySelectorAll('.cell');
        cells[y/CELL_SIZE * MAP_DIM + x/CELL_SIZE].classList.remove(t);

        //remove if not CRSS to make ghosts move randomly for the entire game
        if(this.map.cells[y/CELL_SIZE * MAP_DIM + x/CELL_SIZE] != CRSS)
            this.map.cells[y/CELL_SIZE * MAP_DIM + x/CELL_SIZE] = EMPTY;
    }

    checkPacmanCollision(){
        let ghostHit = -1;  //not a valid ID ghost
        //check for collision between Pacman and ghosts
        
        let x = this.pacman.x;
        let y = this.pacman.y;
    
        if((x >= this.ghosts[0].x - MOVABLE_DIM && x <= this.ghosts[0].x + MOVABLE_DIM) && (y >= this.ghosts[0].y - MOVABLE_DIM && y <= this.ghosts[0].y + MOVABLE_DIM)) ghostHit = 0;
        if((x >= this.ghosts[1].x - MOVABLE_DIM && x <= this.ghosts[1].x + MOVABLE_DIM) && (y >= this.ghosts[1].y - MOVABLE_DIM && y <= this.ghosts[1].y + MOVABLE_DIM)) ghostHit = 1;
        if((x >= this.ghosts[2].x - MOVABLE_DIM && x <= this.ghosts[2].x + MOVABLE_DIM) && (y >= this.ghosts[2].y - MOVABLE_DIM && y <= this.ghosts[2].y + MOVABLE_DIM)) ghostHit = 2;
        if((x >= this.ghosts[3].x - MOVABLE_DIM && x <= this.ghosts[3].x + MOVABLE_DIM) && (y >= this.ghosts[3].y - MOVABLE_DIM && y <= this.ghosts[3].y + MOVABLE_DIM)) ghostHit = 3;
            
        //check if vulnerability (of ghost) is active or not 
        if(ghostHit != -1){   
            if(this.vulnerability){
                this.addPoints(GHOST_POINTS);
                this.ghosts[ghostHit].initPosition();
            }
            else{
                this.pacman.PacmanHit();
                for(let i = 0; i < this.ghosts.length; i++)
                    this.ghosts[i].initPosition();
            }
        }
    }

    //* ------------ VULNERABILITY FUNCTIONS ------------

    GhostVulnerable(){
        this.vulnerability = true;
        for(let i = 0; i < this.ghosts.length; i++){
            const ghost = document.getElementById(this.ghosts[i].id);
            ghost.classList.add('vulnerable');
            ghost.classList.remove(this.ghosts[i].id);
            this.ghosts[i].vulnerabilityInterval = setTimeout(this.GhostVulnerableOff.bind(this), VULNERABILITY_TIME);
        }
    }

    GhostVulnerableOff(){
        this.vulnerability = false;
        for(let i = 0; i < this.ghosts.length; i++){
            const ghost = document.getElementById(this.ghosts[i].id);
            ghost.classList.remove('vulnerable');
            ghost.classList.add(this.ghosts[i].id);
        }
    }

    //* ------------ GAMEOVER FUNCTIONS ------------

    gameOver(result){
        this.gameover = true;
        this.clearPlayground();
        this.coinsEarned(result);
        this.showStatistics();
        this.showMenu("endGame-container");
        
        let text = (result) ? 'YOU WIN!' : 'GAME OVER!';
        let color = (result) ? 'win' : 'lose';
        let res = document.createElement("h3");
        res.classList.add('blink');
        res.classList.add('end-message');
        res.classList.add(color);    
    
        res.textContent = text;
        document.body.appendChild(res);
    
        updateMatches(this.score, this.ghostsKilled, this.timer.time, result);
        updateWallet(this.coins, "add");
    }

    clearPlayground(){
        this.pacman.stopMoving();
        this.stopMovingGhosts();
        this.timer.stop();
        playground.remove();
    }

    showStatistics(){
        //create statistics: score | ghost killed | level passed | timer
        let section = document.createElement("div");
        section.classList.add("game-stats");

        //statistics list
        let ul = document.createElement("ul");
        let scoreLi = document.createElement("li");
        scoreLi.textContent = `Score:................ ${this.score} `;
        ul.appendChild(scoreLi);

        let timerLi = document.createElement("li");
        let minutes = Math.floor(this.timer.time / 60);
        let seconds = this.timer.time % 60;
        let timeString = minutes.toString() + "'" + ('0' + seconds.toString()).slice(-2) + "''";
        timerLi.textContent = `Timer:................ ` + timeString;
        ul.appendChild(timerLi);

        let ghostKilledLi = document.createElement("li");
        ghostKilledLi.textContent = `Ghosts killed:........ ${this.ghostsKilled}`;
        ul.appendChild(ghostKilledLi);

        let coinsLi = document.createElement("li");
        coinsLi.classList.add("coins");
        coinsLi.textContent = `Coins earned:.........  +${this.coins}`;
        ul.appendChild(coinsLi);

        //add section to document
        section.appendChild(ul);
        document.body.appendChild(section);
    }

    showMenu(type){
        let menu = document.getElementById(type);

        menu.classList.remove('hidden');
        menu.classList.add('appear');
    }

    hydeMenu(type){
        let menu = document.getElementById(type);

        menu.classList.add('hidden');
        menu.classList.remove('appear');
    }

    coinsEarned(res){
        // more points more coins
        this.coins = Math.floor(this.score / 100);
        this.coins += this.ghostsKilled * 20;           //20 coins each ghost killed

        //if win add coins: less time more coins
        if(res){
            this.coins += 300 - this.timer.time;         //average game take 5 minutes to finish
        }  
    }
}