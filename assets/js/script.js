const optionBox = document.querySelector(".option-box");
const selectOptionBtnX = optionBox.querySelector(".selectOption .btn-playerX");
const selectOptionBtnO = optionBox.querySelector(".selectOption .btn-playerO");
const cellBoxs = document.querySelectorAll(".cellBox");
const wonText = document.querySelector(".won-text-box");
const replayBtn = won-text-box.querySelector("btn-replay");

const trun = document.getElementsByClassName("X", "O");
const winSet=[
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],

[0, 4, 8],
[2, 4, 6],
[1, 4, 7],

[0, 3, 6],
[2, 5, 8],
];
let options= ["", "", "", "", "","", "", "", ""];
let turnX = "x"         
let gameOver = true;
