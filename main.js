var input = document.getElementById('userInput');
var geez1 = document.getElementById('geezone');
var geez2 = document.getElementById('geeztwo');
var resultView = document.getElementById("result");

let result;
geez1.addEventListener('click', () => {
    inputValue = input.value;
    result = geezOneCalculator(inputValue);
    res = ""
    for (let a of inputValue) {
        res += `${a} = ${ extractLetterValues(ethiopicLetters, a).rowValue } \n`
    }
    resultView.innerText = res + `
    ${ result }  
    `;
});


geez2.addEventListener('click', () => {
    inputValue = input.value;
    result = geezTwoCalculator(inputValue);
    res = ""
    for (let a of inputValue) {
        res += `${a} = ${ extractLetterValues(ethiopicLetters, a).rowValue * extractLetterValues(ethiopicLetters, a).colValue } \n`
    }
    resultView.innerText = res + `
    ${ result }  
    `;
});



console.log("Result: ", result);