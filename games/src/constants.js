// Turnos de el tic tac toe
export const TURNS = {
    X: JSON.stringify({ 'i': 'bi bi-x-lg' }),
    O: JSON.stringify({ 'i': 'bi bi-circle' })
    // X: "X",
    // O: "O"
}

// Posiciones ganadoras.
export const WINNER_COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
