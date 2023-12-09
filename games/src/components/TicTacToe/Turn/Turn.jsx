import { Square } from "../Square/Square";

import { TURNS } from "../../../constants";
import { isEqualsTo } from "../../../utils/TicTacToe/validations";
import { createTurn } from '../../../utils/TicTacToe/turn';

export function Turn({ turn }) {

    return (
        <>
            <section className="turn">
                <Square className="turn__square" isSelected={isEqualsTo(turn, TURNS.X)}>
                    {createTurn(TURNS.X)}
                </Square>
                <Square className="turn__square" isSelected={isEqualsTo(turn, TURNS.O)}>
                    {createTurn(TURNS.O)}
                </Square>
            </section>
        </>
    );
}