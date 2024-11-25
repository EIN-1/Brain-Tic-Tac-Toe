document.addEventListener("DOMContentLoaded", function () {
    // selecting elements from the DOM.
    const cells = document.querySelectorAll('.cellBox')
    const replayBtn = document.querySelector('.btn-replay')
    const exitBtn = document.querySelector('.btn-exit')
    const wonTextBox = document.querySelector('.won-text')
    const gameContainer = document.getElementById('game-container')
    const rulesBox = document.getElementById('game-rules')
    const startGameBtn = document.getElementById('start-game-btn')
    const optionBox = document.querySelector('.option-box')
    const playerXBtn = document.querySelector('.play-X');
    const playerOBtn = document.querySelector('.play-O');

    let currentPlayer = ""; // Tracks which player's turn it is
    let gameEnded = false;
    let gameState = Array(9).fill(""); // It starts with 9 empty strings

   // Define the winning combinations
    const winCombinations = [
         [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
         [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
         [0, 4, 8], [2, 4, 6]             // Diagonals
     ];
 


    //when start game button is clicked, it hinds it and shows the option box 
    startGameBtn.addEventListener('click', () => {
        rulesBox.style.display = 'none';//Hide the game rules
        optionBox.style.display = 'block';// show the choice box
    });

    // Player choice listeners
    playerXBtn.addEventListener('click', () => startGame('X'));
    playerOBtn.addEventListener('click', () => startGame('O'));


    function startGame(player){
        currentPlayer = player;
        optionBox.style.display = 'none';// show the choice box
        gameContainer.style.display = 'block'; // show the gameContainer
        resetGame(); // rest game state
    }

    // Setting up listeners for game cell clicks
    cells.forEach((cell, index) => {
        cell.addEventListener('click', function() {
            cellClicked(index);
        });
    });

    function cellClicked(index) {
        if (gameState[index] === "" && !gameEnded) {
            gameState[index] = currentPlayer;
            cells[index].textContent = currentPlayer;
            if (checkWin(currentPlayer)) {
                displayResult(`${currentPlayer} Wins!`);
                gameEnded = true;
            } else if (gameState.every(cell => cell !== "")) {
                displayResult("It's a Draw!");
            } else {
                switchPlayer();
            }
        }
    }

});