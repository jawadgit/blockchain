"use strict";
const guessNumber = document.querySelector('.numberClass');
const clickButton = document.querySelector('.clickMe');
const messageBoard = document.querySelector('.message');
clickButton.addEventListener('click', gameGuessNumber);
const StateRandom = {
    checkNumber: 0,
    generateRandom: function () {
        this.checkNumber = Math.trunc(Math.random() * 20);
    },
};
StateRandom.generateRandom();
function gameGuessNumber() {
    if (StateRandom.checkNumber === Number(guessNumber.value)) {
        return messageBoard.textContent = "Correct Number";
        guessNumber.value = '0';
    }
    if (StateRandom.checkNumber > Number(guessNumber.value)) {
        return messageBoard.textContent = "Guess Big Number";
    }
    return messageBoard.textContent = "Guess Small Number";
}
//# sourceMappingURL=app.js.map