let display = document.getElementById('display');
let currentInput = '';

function Display(value) {
    currentInput += value;
    display.textContent = currentInput;
    if(currentInput >= 99999999999999999999)    {
    display.textContent = "Limit exceeded";
    }
}

function clearDisplay() {
    currentInput = '';
    display.textContent = '0';
}

function calculateResult() {
    try {
        currentInput = eval(currentInput);
        display.textContent = currentInput;
    } catch (error) {
        display.textContent = 'Error';
    }
}
