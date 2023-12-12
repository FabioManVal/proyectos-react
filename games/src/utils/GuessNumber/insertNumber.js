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

// Retorno unicamente números.
export const isNumber = (number) => {
    if (!isNaN(number) && number !== '.' && number !== '') {
        return number;
    }
    return null;
}

export const sortNumbers = (arrNumbers, sort) => {
    let tmpNums = [];
    const arr = [];
    arrNumbers.map((elem) => {
        tmpNums.push(elem[0]);
    })
    tmpNums = tmpNums.sort(sort)
    tmpNums.map((elem) => {
        arr.push([elem, '']);
    })
    return arr
}

// Busca el número repetido y le asigna una clase para resaltarlo.
export const focusRepeatNumber = (arr, index, number, classFocus) => {
    if (index !== null) {
        arr[index] = [number, classFocus];
    } else {
        arr.push([number, '']);
    }
    return arr;
}