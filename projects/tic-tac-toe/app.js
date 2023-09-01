const boardCells = document.querySelectorAll('.cell');
const gameBoard = document.getElementById('gameBoard');
const gameForm = document.getElementById('playerStarter');
const gameModal = document.getElementById('game-modal');
const turn = document.getElementById('player-info');
const winnerDialog = document.getElementById('winner-alert');
const winner = document.createElement('h1');
const restart = document.querySelector('.restartBtn');

const GameBoard = (() => {
    "use strict";
    
    let startingCells = ["","","","","","","","","",]
    
    let player1, player2;

    // Tracker to avoid persistent showing of player form
    let playersCreated = false;
    let currentPlayer;
    
    let gameWinner;
    let moved = 0;

    const winningCombination = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ]
    
    //Starting asset path for 'cross' sign
    let startingSign = './assets/cross.svg';
    let startingMoveClass = 'cross';

    const createGameBoard  = () => {
        startingCells.forEach((cell, index) => {
            const block = document.createElement('div');
            block.classList.add('cell')
            block.style.padding = "2.5em";
            
            // Set data-index attribute
            block.setAttribute('data-index', index); 
            
            //each block can be updated when clicked
            block.addEventListener('click', updateBlock);

            //adds a div to the gameboard to have a 3x3 grid
            gameBoard.append(block)
        })
        //Show current player when board is created
        turn.textContent =  `${currentPlayer.getName()} 's Turn`;
    }

    const updateBlock = (e) => {
        moved++; //add every update

        if(gameWinner == undefined) {
            //check if there is no winner yet
            currentPlayer = currentPlayer === player1 ? player2 : player1;
            turn.textContent =  `${currentPlayer.getName()} 's Turn`;

            const img = document.createElement('img');
            img.src = startingSign;

            //attach class to image
            img.className = startingMoveClass;

            //Change the current sign/class
            startingSign = startingSign === './assets/cross.svg' ? './assets/circle.svg' : './assets/cross.svg';
            startingMoveClass = startingMoveClass === 'cross' ? 'circle' : 'cross';
            e.target.append(img)
            
            e.target.removeEventListener('click', updateBlock)
            checkScore();
        }

        if(gameWinner == undefined && moved >= 9) { 
            // if no game winner and no cells to move left
            turn.textContent =  ``;
            winner.innerHTML = `ITS A TIE!`;
            winnerDialog.prepend(winner);
            winnerDialog.classList.add('show');
        }
    }

    const createPlayers = (name1, name2) => {
        player1 = Player(name1, 'x');
        player2 = Player(name2, 'o');

        playersCreated = true;
    
        if(playersCreated) {
            gameModal.style.display = 'none';
            currentPlayer = player1
            createGameBoard();
        }
       
    }

    const checkScore = () => {
        const cells = document.querySelectorAll('.cell');
       

        winningCombination.forEach((array) => {
            let p2Winner = array.every(cell => cells[cell].firstChild?.classList.contains('circle'))

            if(p2Winner) {
                winner.innerHTML = `${player2.getName()} wins`;
                winnerDialog.prepend(winner);
                winnerDialog.classList.add('show');
                cells.forEach(cell => cell.replaceWith(cell.cloneNode(true)))
                gameWinner = 'player1'
                return;
            }
        })

        winningCombination.forEach((array) => {
            let p1Winner = array.every(cell => cells[cell].firstChild?.classList.contains('cross'))

            if(p1Winner) {
                winner.innerHTML = `${player1.getName()} wins`;
                winnerDialog.prepend(winner);
                winnerDialog.classList.add('show');
                cells.forEach(cell => cell.replaceWith(cell.cloneNode(true)))
                gameWinner = 'player2'
                return;
            }
        })
    }

    const resetBoard = () => {
        //Reset values to initial value
        moved = 0;
        currentPlayer = player1;
        gameWinner = undefined;
        startingSign = './assets/cross.svg';
        startingMoveClass = 'cross';

        gameBoard.innerHTML = ''
        winnerDialog.classList.remove('show');
        createGameBoard();
    }


    return { createGameBoard, createPlayers, resetBoard}
})();

const Player = function (name, move) {
    const getName = () => name;
    const getMove = () => move;
    return {
        getName,
        getMove
    }
}

document.addEventListener('DOMContentLoaded', () => {
    gameModal.classList.add('fade-in');
    createCopyRight();
})

gameForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const playerName1 = document.getElementById('player1').value;
    const playerName2 = document.getElementById('player2').value;

    GameBoard.createPlayers(playerName1, playerName2)
})
//Copy right footer
const createCopyRight = () => {
    const footer = document.querySelector('.footer')
    const copyRight = document.createElement('p');
    let date =  new Date().getFullYear();
    copyRight.innerHTML =  `Copyright © ${date} <a href="https://github.com/heyitslauu" class="gh-link">heyitslauu</a>`
    footer.prepend(copyRight)
}

restart.addEventListener('click', () => {
    GameBoard.resetBoard();
})