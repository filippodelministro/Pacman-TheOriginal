
function Map(){
    // this.element = null;
    this.cells = [MAP_DIM * MAP_DIM];
    this.foodElements = 0;
    this.fillMap(map1);
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
            case BIGF:{
                this.foodElements++;
                cell.classList.add('bigFood');
                break;
            }  
            case TUNN: cell.classList.add('tunnel'); break;
            case SPWN: cell.classList.add('spawn'); break;
        }
        map.appendChild(cell);
    }
}

const map1 = [
    BIGF, FOOD, FOOD, FOOD, CRSS, FOOD, FOOD, FOOD, WALL, FOOD, FOOD, FOOD, CRSS, FOOD, FOOD, FOOD, BIGF,
    FOOD, WALL, WALL, WALL, FOOD, WALL, WALL, FOOD, WALL, FOOD, WALL, WALL, FOOD, WALL, WALL, WALL, FOOD,
    FOOD, WALL, WALL, WALL, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, WALL, WALL, WALL, FOOD,
    FOOD, FOOD, FOOD, FOOD, CRSS, WALL, FOOD, WALL, WALL, WALL, FOOD, WALL, CRSS, FOOD, FOOD, FOOD, CRSS,
    FOOD, WALL, WALL, WALL, FOOD, WALL, FOOD, FOOD, WALL, FOOD, FOOD, WALL, FOOD, WALL, WALL, WALL, FOOD,
    FOOD, FOOD, FOOD, FOOD, CRSS, WALL, WALL, FOOD, WALL, FOOD, WALL, WALL, CRSS, FOOD, FOOD, FOOD, FOOD,
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