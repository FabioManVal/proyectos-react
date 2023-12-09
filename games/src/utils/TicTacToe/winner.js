import { WINNER_COMBOS } from "../../constants";
import { checkEndGame } from "./board";

// Verifica el ganador teniendo en cuenta las combinaciones ganadoras.
export const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo;
        if (
            boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]
        ) {
            // Si el turno de la posición a esta en otras tres posiciones ganadoras.
            // retorna el elemento de la posición a
            return boardToCheck[a];
        }
    }
    // Solo si no existe ganador valido.
    return null;
}

// Asigna a un ganador o un empate.
export const newWinner = (board) => {

    // Retorna el símbolo ganador
    const winner = checkWinner(board);
    if (winner) {
        return winner
        // Retorna falso para empate.
    } else if (checkEndGame(board)) {
        return false;
    }
    // Sí, no existe ganador.
    return null;
}