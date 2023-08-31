const boardCells = document.querySelectorAll('.cell');
const gameBoard = document.getElementById('gameBoard');

const GameBoard = (() => {
    let startingCells = ["","","","","","","","","",]
    
    const createGameBoard  = () => {
        startingCells.forEach((cell, index) => {
            const block = document.createElement('div');
            block.classList.add('cell')
            block.setAttribute('data-index', index); // Set data-index attribute
            
            block.addEventListener('click', updateBlock);
            gameBoard.append(block)
        })
    }

    const updateBlock = () => {
        console.log("clicked")
    }

    return { createGameBoard }
})();

GameBoard.createGameBoard()