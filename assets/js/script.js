//these are all the required elements.
const optionBox = document.querySelector(".option-box");
const selectOptionBtnX = optionBox.querySelector(".selectOption .btn-playerX");
const selectOptionBtnO = optionBox.querySelector(".selectOption .btn-playerO");
const Boxs = document.querySelectorAll("#boxContainer");
const wonTextBox = document.querySelector(".won-text-box");
const wonText = wonTextBox.querySelector("won-text");
const replayBtn = wonTextBox.querySelector("btn-replay");

const trun = document.getElementsByClassName("X", "O");
const winSet = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 4, 8],
    [2, 4, 6],
    [1, 4, 7],

    [0, 3, 6],
    [2, 5, 8],
];
let options = ["", "", "", "", "", "", "", "", ""];
let turnX = "x";
let gameOver = true;


gghjklll;