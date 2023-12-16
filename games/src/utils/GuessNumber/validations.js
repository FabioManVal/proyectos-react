// Retorno unicamente números.
export const isNumber = (number) => {
    if (!isNaN(number) && number !== '.' && number !== '') {
        return number;
    }
    return null;
}

// Error al validar si le número existe
export const existNumber = (number, arrNumber) => {
    let nums = [];
    arrNumber
        .map((num) => {
            nums.push(num);
        });
    return nums.indexOf(number) !== -1 ?
        true :
        false;
}

export const sortNumbers = (arrNumbers, sort) => {
    let nums = arrNumbers
        .map((subArr) => subArr[0])
        .sort(sort)

    return nums
        .map(num => [num, '']);
}