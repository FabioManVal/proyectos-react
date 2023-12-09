
// Valida si el juego termino en empate.
export const checkEndGame = (board) => {
    return board.every((square) => square !== null);
}

// Modifica el tablero si existe algún cambio en el tablero anterior.
export const newBoard = (board, index, winner, turn) => {
    const tmpBoard = [...board];
    (!(tmpBoard[index] !== null) && !winner) ? tmpBoard[index] = turn : '';
    return tmpBoard;
}