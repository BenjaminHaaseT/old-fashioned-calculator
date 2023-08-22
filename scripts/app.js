const screenElement = document.getElementById('screen-container').firstElementChild;
const numberGridElement = document.getElementById('number-grid');
const leftBtnListElement = document.getElementById('left-btn-list');
const rightBtnListElement = document.getElementById('right-btn-list');
const acBtnElement = document.getElementById('clear-btn');
const negBtnElement = document.getElementById('negate-btn');
const modBtnElement = document.getElementById('mod-btn');
const eqBtnElement = document.getElementById('eq-btn');
const divBtnElement = rightBtnListElement.children[0];
const mulBtnElement = rightBtnListElement.children[1];
const subBtnElement = rightBtnListElement.children[2];
const addBtnElement = rightBtnListElement.children[3];
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
divBtnElement.addEventListener('click', setOperation.bind(this, DIV));
mulBtnElement.addEventListener('click', setOperation.bind(this, MUL));
subBtnElement.addEventListener('click', setOperation.bind(this, SUB));
addBtnElement.addEventListener('click', setOperation.bind(this, ADD));
eqBtnElement.addEventListener('click', performOperation);


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
