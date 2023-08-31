const boardCells = document.querySelectorAll('.cell');
const gameBoard = document.getElementById('gameBoard');

const GameBoard = (() => {
    "use strict";

    let startingCells = ["","","","","","","","","",]
    
    //Starting asset path for 'cross' sign
    let startingSign = './assets/cross.svg';
    
    const createGameBoard  = () => {
        startingCells.forEach((cell, index) => {
            const block = document.createElement('div');
            block.classList.add('cell')
            
            // Set data-index attribute
            block.setAttribute('data-index', index); 
            
            //each block can be updated when clicked
            block.addEventListener('click', updateBlock);

            //adds a div to the gameboard to have a 3x3 grid
            gameBoard.append(block)
        })
    }

    const updateBlock = (e) => {
        const img = document.createElement('img');
        img.src = startingSign;

        //Change the current sign to the next sign path
        startingSign = startingSign === './assets/cross.svg' ? './assets/circle.svg' : './assets/cross.svg';                               
        e.target.append(img)
        
        e.target.removeEventListener('click', updateBlock)
    }

    return { createGameBoard }

})();


document.addEventListener('DOMContentLoaded', () => {
    const gameModal = document.getElementById('game-modal');
    gameModal.classList.add('fade-in');
    createCopyRight();
    GameBoard.createGameBoard()
})

const createCopyRight = () => {
    const footer = document.querySelector('.footer')
    const copyRight = document.createElement('p');
    let date =  new Date().getFullYear();
    copyRight.innerHTML =  `Copyright © ${date} <a href="https://github.com/heyitslauu" class="gh-link">heyitslauu</a>`
    footer.prepend(copyRight)
}