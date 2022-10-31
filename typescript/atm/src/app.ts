const checkPIN: HTMLInputElement = document.querySelector('.numberClass')!;
const clickButton: HTMLElement = document.querySelector('.clickMe')!;
const messageBoard: Element = document.querySelector('.message')!;
const atmMenu: HTMLElement = document.querySelector('.atmMenu')!;

clickButton!.addEventListener('click', toggleATM);

function toggleATM(): string {
    if (Number(checkPIN.value) === 6543) {
        styleButtonCheck('block');
        return messageBoard!.textContent = "";
    }
    checkPIN!.value = '0';
    styleButtonCheck('none');
    return messageBoard!.textContent = "Incorrect PIN";
}

const styleButtonCheck = (style: string) => {
    atmMenu!.style.display = style;
};