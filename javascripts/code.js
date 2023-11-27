function findMin() {
    const input = document.getElementById('numbers').value;
    const resultElement = document.getElementById('result');
    
    const numbersArray = [];
    const numStrings = input.split(',');

    for (let i = 0; i < numStrings.length; i++) {
        const num = parseFloat(numStrings[i].trim());
        if (!isNaN(num)) {
            numbersArray.push(num);
        }
    }

    if (numbersArray.length > 0) {
        const minValue = Math.min(...numbersArray);
        resultElement.textContent = `Minimum: ${minValue}`;
    } else {
        resultElement.textContent = "Error: Enter valid MIN numbers.";
    }
}

function findMax() {
    const input = document.getElementById('numbers').value;
    const resultElement = document.getElementById('result');
    
    const numbersArray = [];
    const numStrings = input.split(',');

    for (let i = 0; i < numStrings.length; i++) {
        const num = parseFloat(numStrings[i].trim());
        if (!isNaN(num)) {
            numbersArray.push(num);
        }
    }

    if (numbersArray.length > 0) {
        const maxValue = Math.max(...numbersArray);
        resultElement.textContent = `Maximum: ${maxValue}`;
    } else {
        resultElement.textContent = "Error: Enter valid MAX numbers.";
    }
}