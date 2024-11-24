document.addEventListener("DOMContentLoaded", function () {
    // selecting elements from the DOM.
    const cells = document.querySelectorAll('.cellBox')
    const replayBtn = document.querySelector('.replay-btn')
    const wonTextBox = document.querySelector('.won-text')
    const gameContainer = document.getElementById('game-container')
    const rulesBox = document.getElementById('game-rules')
    const startGameBtn = document.getElementById('start-game-btn')
    const optionBox = document.querySelector('.option-box')

    let currentPlayer = ""; // Tracks which player's turn it is
    let gameState = Array(9).fill(""); // It starts with 9 empty strings


    //when start game button is clicked, it hinds it and shows the option box 
    startGameBtn.addEventListener('click', () => {
        rulesBox.style.display = 'none';//Hide the game rules
        optionBox.style.display = 'block';// show the choice box
    });

    //setting up button listeners on players when clicked to starts the game.
    document.querySelector('.play-X').addEventListener('click', () => startGame('X'));
    document.querySelector('.play-O').addEventListener('click', () => startGame('O'));

    function startGame(player){
        currentPlayer = player;
        optionBox.style.display = 'none';// show the choice box
        gameContainer.style.display = 'block'; // show the gameContainer
        resetGame(); // rest game state
    }

        // Replay button listener
    replayBtn.addEventListener('click', resetGame);

    // Game cell listeners
    cells.forEach((cell, index) => {
        cell.addEventListener('click', () => cellClicked(index));
    });

  
    
    function cellClicked(index) {
        if (gameState[index] === "" && wonTextBox.textContent === "") {
            gameState[index] = currentPlayer;
            cells[index].textContent = currentPlayer;
            if (checkWin(currentPlayer)) {
                wonTextBox.textContent = `${currentPlayer} Wins!`;
            } else if (gameState.every(cell => cell !== "")) {
                wonTextBox.textContent = "It's a Draw!";
            } else {
                currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
            }
        }
    }

});





    // this is for later use
    // below is part of the old code, i might use it later
   // let gameEnded = false;
   // let userSelectedPlayer = "";


    // Define the winning combinations
   //  const winningCombinations = [
   //     [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
   //     [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
   //     [0, 4, 8], [2, 4, 6]             // Diagonals
   // ];



   // function simulateComputerMove(index) {
    //    const cell = document.querySelector(`.cellBox[cellIndex="${index}"]`);
        // Simulate the computer's click after a short delay
    //    setTimeout(() => {
   //         cell.click();
   //     }, 230); // Adjust the delay as needed
  //  }
//});