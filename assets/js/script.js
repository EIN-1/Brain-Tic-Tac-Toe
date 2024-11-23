document.addEventListener("DOMContentLoaded", function () {
    // selecting elements from the DOM.
    const cells = document.querySelectorAll('.cellBox')
    const replayBtn = document.querySelector('.replay-btn')
    const wonTextBox = document.querySelector('.won-text')
    const gameContainer = document.getElementById('.game-container')
    const gameRules = document.getElementById('.game-rules')
    const startGamebtn = document.getElementById('.start-game-btn')
    const optionBox = document.querySelector('.option-box')

    let currentPlayer = ""; // Default starting player
    let gameState = Array(9).fill("");

    //start game button
    startGamebtn.addEventListener('click', () => {
        rulesBox.style.display = 'none';//Hide the game rules
        optionBox.style.display = 'block';// show the choice box
    });




    // below is part of the old code, i might use it later
    let gameEnded = false;
    let userSelectedPlayer = "";


    // Define the winning combinations
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];



    function simulateComputerMove(index) {
        const cell = document.querySelector(`.cellBox[cellIndex="${index}"]`);
        // Simulate the computer's click after a short delay
        setTimeout(() => {
            cell.click();
        }, 230); // Adjust the delay as needed
    }
});