

function addFood(){
    const gridContainer = document.querySelector('.map');
    for (let i = 0; i < 15 * 15; i++) {
        const food = document.createElement('div');
        food.classList.add('food');
        gridContainer.appendChild(food);
    }
}

function addWallsToCells(cellIndexes) {
    for (let i = 0; i < 15 * 15; i++) {
        if(i == cellIndexes[i]){
        const wall = document.createElement('div');
        wall.classList.add('wall');
        gridContainer.appendChild(wall);
        }
    }
}