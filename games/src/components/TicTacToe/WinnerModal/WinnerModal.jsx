import { createTurn } from '../../../utils/TicTacToe/turn';

export function WinnerModal({ winner, resetGame }) {
    // Cambia el texto si existe empate o no.
    const modalTitle = winner === false ? 'Empate' : 'El ganador es: ';

    return (
        <>
            {
                (winner !== null) ?
                    <section className="winner">
                        <div className="winner__notification">
                            <header className="notification__title">{modalTitle} {createTurn(winner)}</header>
                            <footer className="notification__reset">
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
