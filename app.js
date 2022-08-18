function clearScreen() {
    const result = document.getElementById('resultField');
    result.value = '';
}

function calculate(value) {
    const result = document.getElementById('resultField');
    result.value += value;
}

function totalResult() {
    let result = document.getElementById('resultField');
    let oldValue = result.value;
    let calculateNewValue = eval(oldValue);
    result.value = calculateNewValue;
}
