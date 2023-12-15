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

// Ordena los números de la lista
export const sortNumbers = (arrNumbers, sort) => {
    let nums = arrNumbers
        .map((subArr) => subArr[0])
        .sort(sort)

    return nums
        .map(num => [num, '']);
}

// // Restablece todas las clases de los elementos.
// export const resetClass = (arr) => {
//     const tmpArr = arr
//         .map(subArr => [subArr[0], '']);

//     return tmpArr;
// }

// Busca el número repetido y le asigna una clase para resaltarlo.
export const focusRepeatNumber = (arr, index, number, classFocus) => {
    if (index !== null) {
        arr[index] = [number, classFocus];
    } else {
        if (number !== '') {
            arr.push([number, '']);
        }
    }
    return arr;
}