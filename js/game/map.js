
function Map(){
    // this.element = null;
    this.cells = [MAP_DIM * MAP_DIM];
    this.cellsDir = new Array(MAP_DIM);
    this.foodElements = 0;
    this.fillMap(map1);
    this.fillMapDir(map1);
}

Map.prototype.fillMap = function(mapDesc){
    const map = document.querySelector('.map');
    for (let i = 0; i < MAP_DIM * MAP_DIM; i++) {
        this.cells[i] = mapDesc[i];

        //create HTML to visualize the map: each cell has different CSS based on its element
        const cell = document.createElement('div');
        cell.classList.add('cell');
        switch(mapDesc[i]){
            case WALL: cell.classList.add('wall'); break;
            case FOOD:{
                this.foodElements++;
                cell.classList.add('food');
                break
            } 
            case CRSS: {                        //used to make ghost moving in random direction
                cell.classList.add('food');
                this.foodElements++;
                break;
            }
            case BIGF: cell.classList.add('bigFood'); break;
            case TUNN: cell.classList.add('tunnel'); break;
            case SPWN: cell.classList.add('spawn'); break;
        }
        map.appendChild(cell);
    }
}

function stampaMap(){
    console.log("north: ", this.cellsDir[0][0].north);
}

Map.prototype.fillMapDir = function(mapDesc){
    //for each cell check the nexts with true or false if elements can move there
    for(i = 0; i < MAP_DIM; i++) {
        this.cellsDir[i] = new Array(MAP_DIM);
        for(let j=0; j < MAP_DIM; j++){
            this.cellsDir[i][j] = {
                rx: (j === MAP_DIM-1) ? false : this.checkCell(mapDesc, i, j+1),
                lx: (j === 0) ? false : this.checkCell(mapDesc, i, j-1),
                up: (i === 0) ? false : this.checkCell(mapDesc, i-1, j),
                dw: (i === MAP_DIM-1) ? false : this.checkCell(mapDesc, i+1, j)
            };
        }
    }
}

Map.prototype.checkCell = function(mapDesc, i, j){
    const v = mapDesc[i * MAP_DIM + j];

    switch(v){
        case BIGF:
        case TUNN:
        case FOOD: return true;
        default: return false;
    }
}


const map1 = [
    BIGF, FOOD, FOOD, FOOD, CRSS, FOOD, FOOD, FOOD, WALL, FOOD, FOOD, FOOD, CRSS, FOOD, FOOD, FOOD, BIGF,
    FOOD, WALL, WALL, WALL, FOOD, WALL, WALL, FOOD, WALL, FOOD, WALL, WALL, FOOD, WALL, WALL, WALL, FOOD,
    FOOD, WALL, WALL, WALL, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, WALL, WALL, WALL, FOOD,
    FOOD, FOOD, FOOD, FOOD, CRSS, WALL, FOOD, WALL, WALL, WALL, FOOD, WALL, CRSS, FOOD, FOOD, FOOD, CRSS,
    FOOD, WALL, WALL, WALL, FOOD, WALL, FOOD, FOOD, WALL, FOOD, FOOD, WALL, FOOD, WALL, WALL, WALL, FOOD,
    FOOD, FOOD, FOOD, BIGF, CRSS, WALL, WALL, FOOD, WALL, FOOD, WALL, WALL, CRSS, BIGF, FOOD, FOOD, FOOD,
    WALL, WALL, WALL, WALL, FOOD, WALL, FOOD, CRSS, FOOD, CRSS, FOOD, WALL, FOOD, WALL, WALL, WALL, WALL,
    WALL, WALL, WALL, WALL, FOOD, WALL, FOOD, SPWN, SPWN, SPWN, FOOD, WALL, FOOD, WALL, WALL, WALL, WALL,
    TUNN, FOOD, FOOD, FOOD, CRSS, FOOD, FOOD, SPWN, SPWN, SPWN, FOOD, FOOD, CRSS, FOOD, FOOD, FOOD, TUNN,
    WALL, WALL, WALL, WALL, FOOD, WALL, FOOD, CRSS, BIGF, CRSS, FOOD, WALL, FOOD, WALL, WALL, WALL, WALL,
    FOOD, FOOD, FOOD, FOOD, FOOD, WALL, WALL, FOOD, WALL, FOOD, WALL, WALL, CRSS, FOOD, FOOD, FOOD, FOOD,
    FOOD, WALL, WALL, WALL, FOOD, WALL, WALL, FOOD, WALL, FOOD, WALL, WALL, FOOD, WALL, WALL, WALL, FOOD,
    FOOD, FOOD, FOOD, WALL, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, WALL, FOOD, FOOD, FOOD,
    WALL, WALL, FOOD, WALL, FOOD, WALL, FOOD, WALL, WALL, WALL, FOOD, WALL, FOOD, WALL, FOOD, WALL, WALL,
    FOOD, FOOD, CRSS, FOOD, CRSS, WALL, FOOD, FOOD, WALL, FOOD, FOOD, WALL, CRSS, FOOD, CRSS, FOOD, FOOD,
    FOOD, WALL, WALL, WALL, WALL, WALL, WALL, FOOD, WALL, FOOD, WALL, WALL, WALL, WALL, WALL, WALL, FOOD,   
    BIGF, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, CRSS, FOOD, CRSS, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, BIGF
]

// const map1 = [
//     WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL,
//     WALL, BIGF, FOOD, FOOD, FOOD, CRSS, FOOD, FOOD, FOOD, WALL, FOOD, FOOD, FOOD, CRSS, FOOD, FOOD, FOOD, BIGF, WALL,
//     WALL, FOOD, WALL, WALL, WALL, FOOD, WALL, WALL, FOOD, WALL, FOOD, WALL, WALL, FOOD, WALL, WALL, WALL, FOOD, WALL,
//     WALL, FOOD, WALL, WALL, WALL, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, WALL, WALL, WALL, FOOD, WALL,
//     WALL, FOOD, FOOD, FOOD, FOOD, CRSS, WALL, FOOD, WALL, WALL, WALL, FOOD, WALL, CRSS, FOOD, FOOD, FOOD, CRSS, WALL,
//     WALL, FOOD, WALL, WALL, WALL, FOOD, WALL, FOOD, FOOD, WALL, FOOD, FOOD, WALL, FOOD, WALL, WALL, WALL, FOOD, WALL,
//     WALL, FOOD, FOOD, FOOD, BIGF, CRSS, WALL, WALL, FOOD, WALL, FOOD, WALL, WALL, CRSS, BIGF, FOOD, FOOD, FOOD, WALL,
//     WALL, WALL, WALL, WALL, WALL, FOOD, WALL, FOOD, CRSS, FOOD, CRSS, FOOD, WALL, FOOD, WALL, WALL, WALL, WALL, WALL,
//     WALL, WALL, WALL, WALL, WALL, FOOD, WALL, FOOD, SPWN, SPWN, SPWN, FOOD, WALL, FOOD, WALL, WALL, WALL, WALL, WALL,
//     WALL, TUNN, FOOD, FOOD, FOOD, CRSS, FOOD, FOOD, SPWN, SPWN, SPWN, FOOD, FOOD, CRSS, FOOD, FOOD, FOOD, TUNN, WALL,
//     WALL, WALL, WALL, WALL, WALL, FOOD, WALL, FOOD, CRSS, BIGF, CRSS, FOOD, WALL, FOOD, WALL, WALL, WALL, WALL, WALL,
//     WALL, FOOD, FOOD, FOOD, FOOD, FOOD, WALL, WALL, FOOD, WALL, FOOD, WALL, WALL, CRSS, FOOD, FOOD, FOOD, FOOD, WALL,
//     WALL, FOOD, WALL, WALL, WALL, FOOD, WALL, WALL, FOOD, WALL, FOOD, WALL, WALL, FOOD, WALL, WALL, WALL, FOOD, WALL,
//     WALL, FOOD, FOOD, FOOD, WALL, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, WALL, FOOD, FOOD, FOOD, WALL,
//     WALL, WALL, WALL, FOOD, WALL, FOOD, WALL, FOOD, WALL, WALL, WALL, FOOD, WALL, FOOD, WALL, FOOD, WALL, WALL, WALL,
//     WALL, FOOD, FOOD, CRSS, FOOD, CRSS, WALL, FOOD, FOOD, WALL, FOOD, FOOD, WALL, CRSS, FOOD, CRSS, FOOD, FOOD, WALL,
//     WALL, FOOD, WALL, WALL, WALL, WALL, WALL, WALL, FOOD, WALL, FOOD, WALL, WALL, WALL, WALL, WALL, WALL, FOOD, WALL,
//     WALL, BIGF, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, CRSS, FOOD, CRSS, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, BIGF, WALL,
//     WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL
// ]