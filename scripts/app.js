const screenElement = document.getElementById('screen-container').firstElementChild;
const numberGridElement = document.getElementById('number-grid');
const leftBtnListElement = document.getElementById('left-btn-list');
const rightBtnListElement = document.getElementById('right-btn-list');
const acBtnElement = document.getElementById('clear-btn');
const negBtnElement = document.getElementById('negate-btn');
const modBtnElement = document.getElementById('mod-btn');
const numberBtnsList = numberGridElement.children;

const MOD = 'MOD';
const ADD = 'ADD';
const SUB = 'SUB';
const DIV = 'DIV';
const MUL = 'MUL';

let currentValue = null;
let previousValue = null;
let mantissa = 0;
let currentOp = null;


for (let numbBtn of numberBtnsList) {
    const numbVal = parseInt(numbBtn.textContent);
    numbBtn.addEventListener('click', enterInput.bind(this, numbVal));
}

acBtnElement.addEventListener('click', clear);
negBtnElement.addEventListener('click', negate);
modBtnElement.addEventListener('click', setOperation.bind(this, MOD));

function clear() {
    currentValue = 0;
    screenElement.value = currentValue;
}

function negate() {
    if (screenElement.value) {
        currentValue *= -1;
        screenElement.value = currentValue;
    }
}

function enterInput(input) {
    // Check if the current operation has been set, if so move current value
    // into previous value and set current value to input
    if (currentOp) {
        previousValue = currentValue;
        currentValue = input;
        console.log(`Previous Value: ${previousValue}, current value: ${currentValue}, current operation: ${currentOp}`);
    } else {
        if (currentValue) {
            currentValue *= 10;
            currentValue += input;
        } else {
            currentValue = input;
        }
    }
    screenElement.value = currentValue;
}

function setOperation(op) {
    // Ensure that we have a valid current value to work with, otherwise do nothing
    if (currentValue !== null) {
        currentOp = op;
    }
}

function performOperation() {
    if (previousValue !== null && currentValue !== null && currentOp) {
        if (currentOp === ADD)  {
            currentValue += previousValue;
        } else if (currentOp === SUB) {
            currentValue = previousValue - currentValue;
        } else if (currentOp === MUL) {
            currentValue *= previousValue;
        } else if (currentOp === DIV) {
            currentValue = previousValue / currentValue;
        } else if (currentOp === MOD) {
            currentValue = previousValue % currentValue;
        }
        previousValue = null;
        currentOp = null;
        screenElement.value = currentValue;
    }
}
