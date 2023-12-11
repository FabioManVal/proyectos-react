// Se busca el número repetido de la lista, para aplicarle un estilo que lo resalte.
export const repeatNumber = (arr, data, className) => {
    for (let position = 0; position < arr.length; position++) {
        if (
            JSON.stringify(arr[position]) === JSON.stringify([data, '']) ||
            (JSON.stringify(arr[position]) === JSON.stringify([data, className]))
        ) {
            return position;
        }
    }
    return null;
}

// Restablece todas las clases de los elementos.
export const resetClass = (arr) => {
    const tmpArr = [];
    arr.map((list) => {
        list[1] = '';
        tmpArr.push(list);
    })
    return tmpArr;
}

export const isNumber = (number) => {
    if (!isNaN(number) && number !== '.') {
        return number;
    }
    return null;
}

// Al momento de presionar Enter me guardo el número insertado.
// y no se repita el número insertado.
// if (event.ctrlKey && event.key === 'Backspace') {
//     setInsertNumber('');
//     setShowNumber('');
// }

// if (event.key === 'Enter') {
//     const numbers = resetClass([...guessNumber]);
//     const repeatIndex = repeatNumber(numbers, insertNumber, 'alert');

//     //!numbers.includes(insertNumber)
//     if (repeatIndex !== null) {
//         numbers[repeatIndex] = [insertNumber, 'alert'];
//         setGuessNumber(numbers);
//     } else {
//         numbers.push([insertNumber, '']);
//         setGuessNumber(numbers);
//     }
//     setInsertNumber('')
// }

// if (event.key === 'Backspace') {
//     const temp = insertNumber.slice(0, -1);
//     setInsertNumber(temp);
// }

