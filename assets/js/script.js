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

    // start game function that lets you choose a player and you start the game.
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

    // cellclicked function that checks the game state
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
    // switch player between x or o.
    function switchPlayer() {
        currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
        if (currentPlayer === 'O') {
            computerMove();
        }
    }
    // computer move with time delay for better ux.
    function computerMove() {
        let emptyCells = gameState.map((cell, index) => cell === "" ? index : null).filter(index => index !== null);

        if (emptyCells.length > 0) {
            const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
            setTimeout(() => cellClicked(randomIndex), 300); // Adding a delay for better UX
        }
    }
    // display function winnter result message through won text box.
    function displayResult(message) {
        wonTextBox.textContent = message;
        wonTextBox.classList.remove('hide');
    }

    // rest game listener once replay button is clicked
     replayBtn.addEventListener('click', resetGame);

    // reset game to replay with the same user
    function resetGame() {
        gameState.fill(""); // Reset game state to empty
        cells.forEach(cell => cell.textContent = ""); // Clear the cell displays
        wonTextBox.textContent = ""; // Clear any win message
        wonTextBox.classList.add('hide'); // Hide any displayed messages
        gameEnded = false;        
    }

    // Exit button listener 
    exitBtn.addEventListener('click', endGame);

    //exit game function, once exit button is clicked it takes you back to rules.
    function endGame() {
        gameContainer.style.display = 'none';
        optionBox.style.display ='none';
        wonTextBox.textContent = ""; // Clear any win message
        wonTextBox.classList.add('hide'); // Hide any displayed messages
        rulesBox.style.display = 'block'; //show rules box
    }

    // check winner function which returns the game state of the win cobination.
    function checkWin(player) {
        return winCombinations.some(condition =>
            condition.every(index => gameState[index] === player)
        );
    }
   


});