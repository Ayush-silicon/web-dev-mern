const display = document.getElementById('result');
let currentNumber = '';
let previousNumber = '';
let operation = null;

const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const buttonValue = button.dataset.value;
    const buttonAction = button.dataset.action;

    if (buttonValue !== undefined) {
      handleNumber(buttonValue);
    } else if (buttonAction !== undefined) {
      handleAction(buttonAction);
    }
    console.log(currentNumber, previousNumber, operation);
    updateDisplay();
  });
});

function handleNumber(number) {
  currentNumber += number;
}

function handleAction(action) {
  if (action === 'calculate') {
    calculate();
    operation = null;
    currentNumber = '';
  } else if (action === 'AC') {
    currentNumber = '';
    previousNumber = '';
    operation = null;
  } else if (action === 'DEL') {
    currentNumber = currentNumber.slice(0, -1);
  } else {
    operation = action;
    previousNumber = currentNumber;
    currentNumber = '';
  }
}

function calculate() {
  const prevNum = parseFloat(previousNumber);
  const currNum = parseFloat(currentNumber);
  let result = '';

  switch (operation) {
    case '+':
      result = prevNum + currNum;
      break;
    case '-':
      result = prevNum - currNum;
      break;
    case '*':
      result = prevNum * currNum;
      break;
    case '/':
      if (currNum === 0) {
        result = 'Error: Cannot divide by zero';
      } else {
        result = prevNum / currNum;
      }
      break;
    default:
      return;
  }

  currentNumber = result;
}

function updateDisplay() {
  display.textContent = currentNumber;
}