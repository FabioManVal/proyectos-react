import { createElement } from "react";

import { TURNS } from "../../constants";
import { isEqualsTo } from "./validations";

// Cambia los turnos teniendo en cuenta el turno actual.
export const newTurn = (turn) => isEqualsTo(turn, TURNS.X) ? TURNS.O : TURNS.X;

// me crea la figura del turno. Teniendo en cuenta que puede ser una cadena o icono.
export const createTurn = (turn) => {
    if (turn) {
        try {
            const tmpTurn = JSON.parse(turn);
            // {'i': 'className'}
            // para los iconos se utiliza este formato.
            return createElement(
                Object.keys(tmpTurn)[0],
                { className: Object.values(tmpTurn)[0] }
            );
        } catch (error) {
            /* Error vacío*/
        }
    }
    // retorna como cadena si no es icono.
    return turn;
}