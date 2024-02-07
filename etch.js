const grid = document.querySelector('.flexContainer');

const createGrid = function () {
    numberOfSquares = 16;
    
    for (x = 0; x <= numberOfSquares; x++) {
        const oneSquare = document.createElement('div');
        oneSquare.classList.add('square');
        oneSquare.style.border = '2px solid black';
        oneSquare.style.width = '30px';
        oneSquare.style.height = '30px';
        grid.appendChild(oneSquare);
    };
};
createGrid();