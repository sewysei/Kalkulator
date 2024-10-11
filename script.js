// script.js
let display = document.getElementById('display');
let currentInput = ''; // stores current expression

// Append number to the current input
function appendNumber(number) {
  currentInput += number;
  display.value = currentInput;
}

// Append operator to the current input
function appendOperator(operator) {
  if (currentInput === '' && operator !== '.') return;
  currentInput += operator;
  display.value = currentInput;
}

// Clear the display
function clearDisplay() {
  currentInput = '';
  display.value = '';
}

// Delete the last character
function deleteChar() {
  currentInput = currentInput.slice(0, -1);
  display.value = currentInput;
}

// Calculate the result of the expression
function calculateResult() {
  try {
    currentInput = eval(currentInput).toString();
    display.value = currentInput;
  } catch (error) {
    display.value = 'Error';
    currentInput = '';
  }
}

const toggle = document.querySelector('.toggle');
const knob = document.querySelector('.knob');
const icon = document.querySelector('.icon');
const body = document.querySelector('body');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');

  if ( toggle.classList.contains('active')){
    body.style.backgroundColor = '#1e1e2e' ;
    icon.classList.remove('fa-sun-o');
    icon.classList.add('fa-moon-o');
  }else{
    body.style.backgroundColor = '#ffffff' ;
    icon.classList.remove('fa-moon-o');
    icon.classList.add('fa-sun-o');
  }
})
