/* jshint esversion: 6 */ // this enables ES6 features.
document.addEventListener("DOMContentLoaded", function () {
    // selecting elements from the DOM.
    const cells = document.querySelectorAll('.cellBox');
    const replayBtn = document.querySelector('.btn-replay');
    const exitBtn = document.querySelector('.btn-exit');
    const wonTextBox = document.querySelector('.won-text');
    const gameContainer = document.getElementById('game-container');
    const rulesBox = document.getElementById('game-rules');
    const startGameBtn = document.getElementById('start-game-btn');
    const optionBox = document.querySelector('.option-box');
    const playerXBtn = document.querySelector('.play-X');
    const playerOBtn = document.querySelector('.play-O');
    const turns = document.querySelectorAll('.turn');
    

    let selectedPlayer = ""; // tracks which player the user chose.
    let currentPlayer = ""; // tracks which player's turn it is.
    let aComputer = ""; // checks if the current player is a computer
    let gameEnded = false;
    let gameState = Array(9).fill(""); // It starts with 9 empty strings

   // Define the winning combinations
    const winningCombinations = [
         [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
         [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
         [0, 4, 8], [2, 4, 6]             // Diagonals
    ];
 


    //when start game button is clicked, it hinds it and shows the option box 
    startGameBtn.addEventListener('click', () => {
        rulesBox.style.display = 'none'; //Hide the game rules
        optionBox.style.display = 'block'; // show the choice box
    });

    // Player choice listeners
    playerXBtn.addEventListener('click', () => startGame('X'));
    playerOBtn.addEventListener('click', () => startGame('O'));

    // start game function that lets you choose a player and you start the game.
    function startGame(player){
        selectedPlayer = player; // the player's choice to make sure X and O can be selected by user.
        currentPlayer = selectedPlayer; // set the current player to the user's choice
        aComputer =  (selectedPlayer === 'X') ? 'O' : 'X';

        optionBox.style.display = 'none'; // hide the OptionBox once you have choosen a player. 
        gameContainer.style.display = 'block'; // show the gameContainer
        resetGame(); // rest game state if replay button is clicked
        updateTurns(); // update slider position depending on player's turn
        console.log(`Game started! You are playing as ${selectedPlayer}. Computer is ${aComputer}.`);

    }

    // Setting up listeners for game cell clicks
    cells.forEach((cell, index) => {
        cell.addEventListener('click', function() {
            cellClicked(index);
        });
    });

    // update turns fuction that updates the slider to indicate whose turn it is.
    function updateTurns() {
        turns.forEach((turn) => {
            turn.classList.toggle('align', turn.textContent === currentPlayer);
        });
        updateSliderPosition();
    }

    function updateSliderPosition() {
        const slider = document.querySelector('.slider');
        
        if (currentPlayer === 'X') {
            slider.style.left = '0';         // Position slider to the left for player X
            slider.style.right = 'auto';     // Reset right property
        } else {
            slider.style.left = 'auto';      // Reset left property
            slider.style.right = '0';        // Position slider to the right for player O
        }
    }

    // clicked cell function that checks the game state
    function cellClicked(index) {
        if (gameState[index] === "" && !gameEnded) {
            gameState[index] = currentPlayer;
            cells[index].textContent = currentPlayer;
            console.log(`Player ${currentPlayer} clicked cell ${index}.`);
            // checks winning condition
            if (checkWin(currentPlayer)) {
                displayResult(`${currentPlayer} Wins!`);
                gameEnded = true;
                console.log(`${currentPlayer} has won the game.`);
            } else if (gameState.every(cell => cell !== "")) {
                displayResult("It's a Draw!");
                gameEnded = true; // ended game for draw
                console.log("ended game in a draw.");
            } else {
                switchPlayer();
            }
            updateTurns(); // updateTurns everytime a cell is clicked
        } else {
            console.log(`Cell ${index} cell taken.`);
        }
    }

    // switch player between x or o.
    function switchPlayer() {
        console.log(`Current player before switch: ${currentPlayer}`);
        if (currentPlayer === selectedPlayer) {
            currentPlayer = (selectedPlayer === 'X') ? 'O' : 'X'; // switch to computer's turn
            updateTurns(); // turns update to change slider position
            console.log(`Switched to computer's turn: ${currentPlayer}`);
            computerMove(); // here computer moves immediately
        } else {
            currentPlayer = selectedPlayer; // switch back to player's choice
            console.log(`Switched back to player's turn: ${currentPlayer}`);
            updateTurns(); // update turns for the player's choice
        }
    }
    // computer move with time delay for better ux.
    function computerMove() {
        let emptyCells = gameState.map((cell, index) => cell === "" ? index : null).filter(index => index !== null);
        console.log(`Empty cells for computer move: ${emptyCells}`);
        
        if (emptyCells.length > 0) {
            const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
            console.log(`Computer chooses cell: ${randomIndex}`);
            setTimeout(() => cellClicked(randomIndex), 400); // added a delay for better UX
        }
    }

    // display function winnter result message through won text box.
    function displayResult(message) {
        wonTextBox.textContent = message;
        wonTextBox.classList.remove('hide');



        // If it's a draw highlight all cells
        if(message.includes("Draw")) {
            cells.forEach(cell => cell.classList.add('draw-cell'));
        }
    }

    // rest game listener once replay button is clicked
     replayBtn.addEventListener('click', resetGame);


    // reset game to replay with the same user
    function resetGame() {
        gameState.fill(""); // reset to empty state
        cells.forEach(cell => cell.textContent = ""); // clear the cells displays
        wonTextBox.textContent = ""; // clear any message
        wonTextBox.classList.add('hide'); // Hide displayed messages
        gameEnded = false;
        
        // when replaying clear all highlight color
        cells.forEach(cell => {
            cell.textContent = ""; // Clear cell displays
            cell.classList.remove('win-cell'); // win highlight removed
            cell.classList.remove('draw-cell'); // if exists draw highlight will be removed
        });
    }

    // Exit button listener 
    exitBtn.addEventListener('click', endGame);

    //Exit game function, once exit button is clicked it takes you back to rules.
    function endGame() {
        gameContainer.style.display = 'none';
        optionBox.style.display ='none';
        wonTextBox.textContent = ""; // Clear any win message
        wonTextBox.classList.add('hide'); // Hide any displayed messages
        rulesBox.style.display = 'block'; //show rules box
        
        // when exiting clear all highlight color
        cells.forEach(cell => {
            cell.textContent = ""; // Clear cell displays
            cell.classList.remove('win-cell'); // win highlight removed
            cell.classList.remove('draw-cell'); // if exists draw highlight will be removed
        });
    }

    // winner function which returns true if a player has won.
    function checkWin(player) {
        const winnerCombinations = winningCombinations.some(condition =>
            condition.every(index => gameState[index] === player)
        );
        // the winning cells will change color
        if (winnerCombinations) {
            colorWinningCells(player);
        }

        return winnerCombinations;
    }

    // Function to highlight winning cells
    function colorWinningCells(player) {
    winningCombinations.forEach(combination => {
        if (combination.every(index => gameState[index] === player)) {
            combination.forEach(index => {
                cells[index].classList.add('win-cell'); // added a win-cell class to color winning cells
            });
        }
    });
}



});