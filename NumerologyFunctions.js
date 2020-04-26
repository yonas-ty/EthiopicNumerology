function extractLetterValues(array, attr) {
    console.log(attr);
    for (var i = 0; i < array.length; i += 1) {
        if (array[i][attr]) return array[i][attr];
    }
}


function geezOneCalculator(word) {
    sum = 0;
    if (word === "") return;
    else
        for (let l of word) {
            value = extractLetterValues(ethiopicLetters, l);
            sum += value.rowValue;
        }

    return sum;
}

function geezTwoCalculator(word) {
    sum = 0;
    if (word === "") return;
    else
        for (let l of word) {
            value = extractLetterValues(ethiopicLetters, l);
            sum += value.colValue * value.rowValue;
        }

    return sum;
}