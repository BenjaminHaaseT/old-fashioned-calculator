const screenElement = document.getElementById('screen-container').firstElementChild;
const numberGridElement = document.getElementById('number-grid');
const leftBtnListElement = document.getElementById('left-btn-list');
const rightBtnListElement = document.getElementById('right-btn-list');
const acBtnElement = document.getElementById('clear-btn');
const negBtnElement = document.getElementById('negate-btn');
const modBtnElement = document.getElementById('mod-btn');
const numberBtnsList = numberGridElement.children;
// const sevenBtnElement = numberBtnsList[0];
// const eightBtnElement = numberBtnsList[1];
// const nineBtnElement = numberBtnsList[2];
// const fourBtnElement = numberBtnsList[3];
// const fiveBtnElement = numberBtnsList[4];
// const sixBtnElement = numberBtnsList[5];
// const oneBtnElement = numberBtnsList[6];
// const twoBtnElement = numberBtnsList[7];
// const threeBtnElement = numberBtnsList[8];




let currentValue = 0;
let currentOp = null;

function enterInput(input) {
    if (currentValue === 0 && !currentOp)
}

acBtnElement.addEventListener('click', clear);

function clear() {
    currentValue = 0;
    screenElement.value = currentValue;
}
