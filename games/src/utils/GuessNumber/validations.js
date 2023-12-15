// Retorno unicamente números.
export const isNumber = (number) => {
    if (!isNaN(number) && number !== '.' && number !== '') {
        return number;
    }
    return null;
}
