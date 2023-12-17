import PropTypes from 'prop-types';
import './Board.scss';

import { Square } from '../Square/Square';
import { createTurn } from '../../../utils/TicTacToe/turn';

export function Board({ board, update }) {
    return (
        <>
            <section className='board'>
                {board.map((turn, index) => {
                    return (
                        <Square className='board__square' updateBoard={update} index={index} key={index}>
                            {
                                createTurn(turn)
                            }
                        </Square>
                    )
                })}
            </section>
        </>
    );
}

Board.propTypes = {
    board: PropTypes.string,
    update: PropTypes.func.isRequired
}