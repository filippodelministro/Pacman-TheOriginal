
function Map(){
    this.cells = [MAP_DIM * MAP_DIM];
    this.foodElements = 0;
    this.fillMap(map1);
}

Map.prototype.fillMap = function(mapDesc){
    const gridContainer = document.querySelector('.map');
    for (let i = 0; i < MAP_DIM * MAP_DIM; i++) {
        this.cells[i] = mapDesc[i];

        //create HTML to visualize the map
        const cell = document.createElement('div');
        cell.classList.add('cell');
        switch(mapDesc[i]){
            case WALL: cell.classList.add('wall'); break;
            case FOOD: cell.classList.add('food'); break
            case CROSS: {
                cell.classList.add('cross');
                cell.classList.add('food');
                break;
            }
            case TUNN: {
                cell.classList.add('tunnel');
                // cell.classList.add('food'); 
                break;
            }
            case SPWN: {
                cell.classList.add('spawn');
                // cell.classList.add('food'); 
                break;
            }
        }


        gridContainer.appendChild(cell);
    }
}



/*
    0> wall
    1> food
    2> cross: used to move ghosts
    3> tunnel: used to go to the other side
    4> spawn> used to make ghosts spawn
*/
// const map1 = [
//     1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1,
//     1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1,
//     1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,
//     1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1,
//     1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1,
//     1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1,
//     0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0,
//     0, 0, 0, 0, 1, 0, 1, 4, 4, 4, 1, 0, 1, 0, 0, 0, 0,
//     3, 1, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 3,
//     0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0,
//     1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1,
//     1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1,
//     1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,
//     0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0,
//     1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1,
//     1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1,
//     1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
// ]

const map1 = [
    FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, WALL, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD,
    FOOD, WALL, WALL, WALL, FOOD, WALL, WALL, FOOD, WALL, FOOD, WALL, WALL, FOOD, WALL, WALL, WALL, FOOD,
    FOOD, WALL, WALL, WALL, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, WALL, WALL, WALL, FOOD,
    FOOD, FOOD, FOOD, FOOD, FOOD, WALL, FOOD, WALL, WALL, WALL, FOOD, WALL, FOOD, FOOD, FOOD, FOOD, FOOD,
    FOOD, WALL, WALL, WALL, FOOD, WALL, FOOD, FOOD, WALL, FOOD, FOOD, WALL, FOOD, WALL, WALL, WALL, FOOD,
    FOOD, FOOD, FOOD, FOOD, FOOD, WALL, WALL, FOOD, WALL, FOOD, WALL, WALL, FOOD, FOOD, FOOD, FOOD, FOOD,
    WALL, WALL, WALL, WALL, FOOD, WALL, FOOD, FOOD, FOOD, FOOD, FOOD, WALL, FOOD, WALL, WALL, WALL, WALL,
    WALL, WALL, WALL, WALL, FOOD, WALL, FOOD, SPWN, SPWN, SPWN, FOOD, WALL, FOOD, WALL, WALL, WALL, WALL,
    TUNN, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, SPWN, SPWN, SPWN, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, TUNN,
    WALL, WALL, WALL, WALL, FOOD, WALL, FOOD, FOOD, FOOD, FOOD, FOOD, WALL, FOOD, WALL, WALL, WALL, WALL,
    FOOD, FOOD, FOOD, FOOD, FOOD, WALL, WALL, FOOD, WALL, FOOD, WALL, WALL, FOOD, FOOD, FOOD, FOOD, FOOD,
    FOOD, WALL, WALL, WALL, FOOD, WALL, WALL, FOOD, WALL, FOOD, WALL, WALL, FOOD, WALL, WALL, WALL, FOOD,
    FOOD, FOOD, FOOD, WALL, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, WALL, FOOD, FOOD, FOOD,
    WALL, WALL, FOOD, WALL, FOOD, WALL, FOOD, WALL, WALL, WALL, FOOD, WALL, FOOD, WALL, FOOD, WALL, WALL,
    FOOD, FOOD, FOOD, FOOD, FOOD, WALL, FOOD, FOOD, WALL, FOOD, FOOD, WALL, FOOD, FOOD, FOOD, FOOD, FOOD,
    FOOD, WALL, WALL, WALL, WALL, WALL, WALL, FOOD, WALL, FOOD, WALL, WALL, WALL, WALL, WALL, WALL, FOOD,
    FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD
]