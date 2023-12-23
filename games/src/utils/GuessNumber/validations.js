// Retorno unicamente números.
export const isNumber = (numberToValidate) => {
    const tmpNumber = String(numberToValidate);
    if (!isNaN(tmpNumber) && !tmpNumber.includes('.')) {
        return tmpNumber;
    }
    return null;
}

// Valida si le número pasado existe en el array
export const existNumber = (number, arrNumber) => {
    let exist = false;
    for (let position = 0; position < arrNumber.length; position++) {
        if (arrNumber[position][0] === number) {
            exist = true;
            break;
        }
    }
    return exist;
}

export const sortNumbers = (arrNumbers, sort) => {
    let nums = arrNumbers
        .map((subArr) => subArr[0])
        .sort(sort)

    return nums
        .map(num => [num, '']);
}