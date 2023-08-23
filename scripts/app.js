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
let setNewCurrentValFlag = false;
let currentOpFlag = false;


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
    previousValue = null;
    currentOp = false;
    setNewCurrentValFlag = false;
    currentOpFlag = false;
}

function negate() {
    if (screenElement.value) {
        currentValue *= -1;
        screenElement.value = currentValue;
    }
}

function enterInput(input) {
    if (currentValue !== null) {
        if (currentOp !== null && setNewCurrentValFlag) {
            previousValue = currentValue;
            currentValue = input;
            setNewCurrentValFlag = false;
        } else {
            currentValue *= 10;
            currentValue += input;
        }
        screenElement.value = currentValue;
    }
}

function setOperation(op) {
    // Ensure that we have a valid current value to work with, otherwise do nothing
    if (currentValue !== null && !currentOpFlag) {
        currentOp = op;
        setNewCurrentValFlag = true;
        currentOpFlag = true;
    }
}

function performOperation() {
    if (previousValue !== null && currentValue !== null && currentOpFlag) {
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
        currentOpFlag = false;
        screenElement.value = currentValue;
    }
}
