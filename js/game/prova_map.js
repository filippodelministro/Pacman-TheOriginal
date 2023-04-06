

class Map{
    constructor(){
        this.id = "grid";
        this.cells = map1;
        this. fillMap();
    }
}

Map.prototype.fillMap = function(){
    const gridContainer = document.querySelector('.grid');
    for (let i = 0; i < MAP_DIM * MAP_DIM; i++) {
        if (this.cells.includes(i)) {
            const wall = document.createElement('div');
            wall.classList.add('wall');
            gridContainer.appendChild(wall);
        } else {
            const food = document.createElement('div');
            food.classList.add('food');
            gridContainer.appendChild(food);
        }
    }
}


const map1 = [
    8,
    18, 19, 20, 22, 23, 25, 27, 28, 30, 31, 32,
    35, 36, 37, 47, 48, 49, 
    56, 58, 59, 60, 62,
    69, 70, 71, 73, 76, 79, 81, 82, 83,
    90, 91, 93, 95, 96,
    102, 103, 104, 105, 107, 113, 115, 116, 117, 118,
    119, 120, 121, 122, 124, 126, 127, 128, 130, 132, 133, 134, 135,
    143, 144, 145,
    153, 154, 155, 156,, 158, 164, 166, 167, 168, 169,
    175, 176, 178, 180, 181, 188, 189, 190, 192, 193, 195, 197, 198, 200, 201, 202,
    207, 217,
    221, 222, 224, 226, 228, 229, 230, 232, 234, 236, 237,
    243, 246, 249,
    256, 257, 258, 259, 260, 261, 263, 265, 266, 267, 268, 269, 270
]