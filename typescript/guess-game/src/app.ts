const guessNumber: HTMLInputElement = document.querySelector('.numberClass')!;
const clickButton: HTMLElement = document.querySelector('.clickMe')!;
const messageBoard: Element = document.querySelector('.message')!;

clickButton!.addEventListener('click', gameGuessNumber);

const StateRandom = {
    checkNumber: 0,
    generateRandom: function () {
        this.checkNumber = Math.trunc(Math.random() * 20);
    },
};

StateRandom.generateRandom();

function gameGuessNumber(): string {
    if (StateRandom.checkNumber === Number(guessNumber.value)) {
        return messageBoard!.textContent = "Correct Number";
        guessNumber!.value = '0';
    }
    if (StateRandom.checkNumber > Number(guessNumber.value)) {
        return messageBoard!.textContent = "Guess Big Number";
    }
    return messageBoard!.textContent = "Guess Small Number";
}
