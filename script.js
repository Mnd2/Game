"use strict"

var scoreOne = document.getElementById("scoreOne");
var scoreTwo = document.getElementById("scoreTwo");
var displayNumber = document.getElementById("displayNumber");
var inputNumber = document.getElementById("inputNumber");
var playerOne = document.getElementById("playerOne");
var playerTwo = document.getElementById("playerTwo");
var reset = document.getElementById("reset");

var scorePlayerOne = 0;
var scorePlayerTwo = 0;
var number = 5;


scoreOne.innerText = scorePlayerOne;
scoreTwo.innerText = scorePlayerTwo;
displayNumber.innerText = number;

inputNumber.addEventListener("change", function (event) {
    number = event.target.value;
    displayNumber.innerText = number;
});

inputNumber.addEventListener("blur", function (event) {
    if (event.target.value < 0) {
        inputNumber.value = 0;
    }
});

reset.addEventListener("click", function () {
    scorePlayerOne = 0;
    scorePlayerTwo = 0;
    scoreOne.textContent = scorePlayerOne;
    scoreOne.style.color = "black";
    scoreTwo.textContent = scorePlayerTwo;
    scoreTwo.style.color = "black";
});

playerOne.addEventListener("click", function () {
    if (scorePlayerTwo == number) {
        return;
    }
    if (scorePlayerOne <= number - 1) {
        scorePlayerOne++;
        scoreOne.textContent = scorePlayerOne;
    }
    if (scorePlayerOne == number) {
        scoreOne.style.color = "crimson";
    }
});

playerTwo.addEventListener("click", function () {
    if (scorePlayerOne == number) {
        return;
    }
    if (scorePlayerTwo <= number - 1) {
        scorePlayerTwo++;
        scoreTwo.textContent = scorePlayerTwo;
    }
    if (scorePlayerTwo == number) {
        scoreTwo.style.color = "crimson";
    }
});


