let display = document.querySelector('.display');
let currentInput = '';

function appendNumber(number) {
  if (currentInput === '0') {
    currentInput = number.toString();
  } else {
    currentInput += number.toString();
  }
  updateDisplay();
}

function appendOperator(operator) {
  currentInput += operator;
  updateDisplay();
}

function appendDecimal() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
  }
  updateDisplay();
}

function applyPercentage() {
  // Separate the input into parts: number, operator, and percent value
  let parts = currentInput.split(/([+\-*/])/);
  let number = parseFloat(parts[0]);
  let operator = parts[1];
  let percent = parseFloat(parts[2]);

  // If there's no operator or percent value, or if the operator is not subtraction (-), do nothing
  if (!operator || !percent || operator !== '-') return;

  // Calculate the percentage value
  let percentValue = (number * percent) / 100;

  // Subtract the percentage value from the number
  let result = number - percentValue;

  // Update currentInput with the result
  currentInput = result.toString();

  // Update the display
  updateDisplay();
}

function calculate() {
  let result = eval(currentInput);
  currentInput = result.toString();
  updateDisplay();
}

function clearDisplay() {
  currentInput = '0';
  updateDisplay();
}

function updateDisplay() {
  display.textContent = currentInput;
}

