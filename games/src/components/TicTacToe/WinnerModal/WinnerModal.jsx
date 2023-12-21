import PropTypes from 'prop-types';
import './WinnerModal.scss';

import { createTurn } from '../../../utils/TicTacToe/turn';

export function WinnerModal({ winner, resetGame }) {
    // Cambia el texto si existe empate o no.
    const modalTitle = winner === false ? 'Empate' : 'El ganador es: ';

    return (
        <>
            {
                (winner !== null) ?
                    <section className="winner">
                        <div className="winner__notification notification">
                            <header className="notification__title">{modalTitle} {createTurn(winner)}</header>
                            <footer className="notification__reset reset">
                                <button onClick={resetGame} className="reset__button">
                                    <i className="bi bi-arrow-clockwise"></i>
                                </button>
                            </footer>
                        </div>
                    </section> :
                    ''

            }
        </>
    );
}

WinnerModal.propTypes = {
    winner: PropTypes.string,
    resetGame: PropTypes.func
}