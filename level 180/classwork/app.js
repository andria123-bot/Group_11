"use strict";
function handleClick() {
    const firstNumber = Number(document.getElementById('firstNumber').value);
    const secondNumber = Number(document.getElementById('secondNumber').value);
    const result = add(firstNumber, secondNumber);
    const resultElement = document.getElementById('result');
    resultElement.textContent = `გახსოვდეს: ${result}`;
}
const addButton = document.getElementById('addButton');
addButton.addEventListener('click', handleClick);
function add(a, b) {
    return a + b;
}
