"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function calculator() {
    var firstNum = (0, readline_sync_1.question)('enter first number: ');
    var checkNum = checkValidNum(firstNum);
    var secNum = (0, readline_sync_1.question)('enter second number: ');
    var checkSecNum = checkValidNum(secNum);
    var operator = (0, readline_sync_1.question)('operator: ');
    var checkOperator = checkValidOperator(operator);
    if (checkNum == false || checkSecNum == false || checkOperator == false) {
        console.log('invalid input exiting');
        return "invalid input exiting";
    }
    else {
        console.log(applyOperator(parseInt(firstNum), parseInt(secNum), operator));
    }
    return 'result';
}
function applyOperator(firstNum, secNum, operator) {
    switch (operator) {
        case '+':
            return firstNum + secNum;
        case '-':
            return firstNum - secNum;
        case '*':
            return firstNum * secNum;
        case '/':
            return firstNum / secNum;
    }
}
function checkValidNum(num) {
    return !isNaN(parseInt(num));
}
function checkValidOperator(operator) {
    if (operator == '+' || operator == '-' || operator == '*' || operator == '/') {
        return true;
    }
    else {
        return false;
    }
}
calculator();
