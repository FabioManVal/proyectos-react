// Retorno unicamente números.
export const isNumber = (number) => {
    const num = Number(number);
    if (!isNaN(num) && number !== '.' && number !== 0) {
        return num;
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