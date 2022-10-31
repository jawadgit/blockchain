"use strict";
const checkPIN = document.querySelector('.numberClass');
const clickButton = document.querySelector('.clickMe');
const messageBoard = document.querySelector('.message');
const atmMenu = document.querySelector('.atmMenu');
clickButton.addEventListener('click', toggleATM);
function toggleATM() {
    if (Number(checkPIN.value) === 6543) {
        styleButtonCheck('block');
        return messageBoard.textContent = "";
    }
    checkPIN.value = '0';
    styleButtonCheck('none');
    return messageBoard.textContent = "Incorrect PIN";
}
const styleButtonCheck = (style) => {
    atmMenu.style.display = style;
};
//# sourceMappingURL=app.js.map