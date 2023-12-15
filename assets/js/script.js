document.addEventListener("DOMContentLoaded", function () {
    // Get necessary elements
    const optionBox = document.querySelector('.option-box');

    const playerXBtn = document.querySelector('.btn-playerX');
    const playerOBtn = document.querySelector('.btn-playerO');

    const gameContainer = document.getElementById('game-container');
    const boxContainer = document.getElementById('boxContainer');
    const turns = document.querySelectorAll('.turn');
    const wonTextBox = document.querySelector('.won-text-box');
    const replayBtn = document.querySelector('.btn-replay');


    let userSelectedPlayer = ""

    let currentPlayer = ""; // Default starting player
    let gameEnded = false;

    // Define the winning combinations
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    // Event listener for player choice
    playerXBtn.addEventListener('click', () => {
        startGame("X")
    });

    playerOBtn.addEventListener('click', () => {
        startGame("O")
    });

    // Event listener for cell clicks
    boxContainer.addEventListener('click', (event) => {
        if (!gameEnded) {
            const cell = event.target;
            if (cell.classList.contains('cellBox') && !cell.textContent) {
                cell.textContent = currentPlayer;
                checkWinner();
                switchPlayer();
            }
        }
    });

    // Event listener for replay button
    replayBtn.addEventListener('click', () => {
        resetGame();
    });

    function startGame(player) {
        optionBox.classList.add("hide")
        gameContainer.classList.remove("hide")
        currentPlayer = player
        userSelectedPlayer = player
        updateSliderPosition()
    }


    function switchPlayer() {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        console.log(currentPlayer)
        updateTurns();
    }

    // function updateTurns() {
    //     turns.forEach((turn) => {
    //         turn.classList.toggle('align', turn.textContent === currentPlayer);
    //     });
    // }
    function updateTurns() {
        turns.forEach((turn) => {
            turn.classList.toggle('align', turn.textContent === currentPlayer);
        });
        updateSliderPosition()
        if (currentPlayer != userSelectedPlayer) {
            makeComputerMove()
        }
    }

    function updateSliderPosition() {
        const slider = document.querySelector('.slider');
        if (currentPlayer === 'X') {
            slider.style.left = '0';
            slider.style.right = 'auto';
        } else {
            slider.style.left = 'auto';
            slider.style.right = '0';
        }
    }

    function checkWinner() {
        const cells = document.querySelectorAll('.cellBox');
        for (const combo of winningCombinations) {
            const [a, b, c] = combo;
            const cells = document.querySelectorAll('.cellBox');
            // Check if the values in the cells match for a winning combination
            if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[b].textContent === cells[c].textContent) {
                displayWinner(cells[a].textContent);
                return;
            }
        }

        // Check for a tie (if all cells are filled)
        if ([...cells].every(cell => cell.textContent)) {
            displayWinner('Tie');
        }
    }

    function displayWinner(winner) {
        wonTextBox.querySelector('.won-text').textContent = winner === 'Tie' ? 'It\'s a Tie!' : `Player ${winner} won!`;
        wonTextBox.classList.remove('hide');
        gameEnded =true
    }

    function resetGame() {
        const cells = document.querySelectorAll('.cellBox');
        // Clear cell content
        cells.forEach(cell => {
            cell.textContent = '';
        });
        gameEnded = false;
        wonTextBox.querySelector('.won-text').textContent = "";
        optionBox.classList.remove("hide")
        gameContainer.classList.add("hide")
        currentPlayer = ""
        userSelectedPlayer = ""
    }

    function makeComputerMove() {
        const emptyCells = [...document.querySelectorAll('.cellBox')].filter(cell => !cell.textContent);

        // Check if the user is one move away from winning
        const userMoves = getUserMoves();
        const blockingMove = findBlockingMove(userMoves);
        if (blockingMove) {
            // Block the user from winning
            simulateComputerMove(blockingMove);
        } else {
            // Try to find a winning move for the computer
            const winningMove = findWinningMove();
            if (winningMove) {
                // Make a winning move
                simulateComputerMove(winningMove);
            } else if (emptyCells.length > 0) {
                // If no winning move, make a random move
                const randomIndex = Math.floor(Math.random() * emptyCells.length);
                const computerCell = emptyCells[randomIndex];

                // Simulate the computer's click after a short delay
                setTimeout(() => {
                    computerCell.click();
                }, 500); // Adjust the delay as needed
            }
        }
    }

    function getUserMoves() {
        const cells = document.querySelectorAll('.cellBox');
        return [...cells].map((cell, index) => ({ index, value: cell.textContent }));
    }

    function findBlockingMove(userMoves) {
        // Check if there's a move to block the user from winning
        for (const combo of winningCombinations) {
            for (const move of userMoves) {
                if (combo.includes(move.index)) {
                    const otherMoves = combo.filter(index => index !== move.index);
                    const emptyCellIndex = otherMoves.find(index => !userMoves.some(userMove => userMove.index === index));
                    if (emptyCellIndex !== undefined) {
                        return emptyCellIndex;
                    }
                }
            }
        }
        return null;
    }

    function findWinningMove() {
        // Check if there's a winning move for the computer
        const emptyCells = [...document.querySelectorAll('.cellBox')].filter(cell => !cell.textContent);
        for (const combo of winningCombinations) {
            for (const index of combo) {
                const cell = emptyCells.find(emptyCell => emptyCell.cellIndex == index);
                if (cell) {
                    return index;
                }
            }
        }
        return null;
    }

    function simulateComputerMove(index) {
        const cell = document.querySelector(`.cellBox[cellIndex="${index}"]`);
        // Simulate the computer's click after a short delay
        setTimeout(() => {
            cell.click();
        }, 500); // Adjust the delay as needed
    }
})