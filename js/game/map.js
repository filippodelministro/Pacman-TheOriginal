
function Map(){
    this.map = map1;
    this.foodElements = 0;
    this.fillMap();
}


Map.prototype.fillMap = function(){
    const gridContainer = document.querySelector('.map');
    for (let i = 0; i < MAP_DIM * MAP_DIM; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');

        // if (this.map.includes(i)) {
        //     cell.classList.add('wall');
        // } else {
        //     cell.classList.add('food');
        //     this.foodElements++;
        // }
        
        switch(this.map[i]){
            case 0: cell.classList.add('wall'); break;
            case 1: cell.classList.add('food'); break
            case 2: {
                cell.classList.add('cross');
                cell.classList.add('food');
                break;
            }
            case 3: {
                cell.classList.add('tunnel');
                // cell.classList.add('food'); 
                break;
            }
            case 4: {
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
const map1 = [
    1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1,
    1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1,
    0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0,
    0, 0, 0, 0, 1, 0, 1, 4, 4, 4, 1, 0, 1, 0, 0, 0, 0,
    3, 1, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 3,
    0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0,
    1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1,
    1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,
    0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0,
    1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
]