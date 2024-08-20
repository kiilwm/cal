const character = "#";
const count = 7;
const rows = [];
function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 0; i < count; i = i + 1) {
  rows.push(padRow(i + 1, count));
}

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);
console.log(result);

// Load the click sound
const clickSound = new Audio('.s/click.mp3.mp3');

// Select the display input
const display = document.querySelector('.display input');

// Initialize the current expression
let currentExpression = '';

// Function to update the display
function updateDisplay() {
    display.value = currentExpression;
}

// Function to clear the display
function clearDisplay() {
    currentExpression = '';
    updateDisplay();
}

// Function to delete the last character
function deleteLastCharacter() {
    currentExpression = currentExpression.slice(0, -1);
    updateDisplay();
}

// Function to append a value to the expression
function appendToExpression(value) {
    currentExpression += value;
    updateDisplay();
}

// Function to evaluate the expression
function evaluateExpression() {
    try {
        currentExpression = eval(currentExpression).toString();
    } catch {
        currentExpression = 'Error';
    }
    updateDisplay();
}

// Function to handle button clicks
function handleButtonClick(event) {
    clickSound.play();  // Play click sound
    const value = event.target.value;

    if (value === 'AC') {
        clearDisplay();
    } else if (value === 'DE') {
        deleteLastCharacter();
    } else if (value === '=') {
        evaluateExpression();
    } else {
        appendToExpression(value);
    }
}

// Add event listeners to all buttons
const buttons = document.querySelectorAll('input[type="button"]');
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});
