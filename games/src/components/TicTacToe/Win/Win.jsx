import PropTypes from 'prop-types';

import { TURNS } from '../../../constants';
import { createTurn } from '../../../utils/TicTacToe/turn';

export function Win({ wins, restCount }) {

    return (
        <>
            <div className="win">
                <section className="win__content">
                    <header className="content__icon">{createTurn(TURNS.X)}</header>
                    <footer className="content__winsNums">{wins[0]}</footer>
                </section>
                <section className="win__content win__content--right">
                    <header className="content__icon">{createTurn(TURNS.O)}</header>
                    <footer className="content__winsNums">{wins[1]}</footer>
                </section>
                <button onClick={restCount} className="win__reset">
                    <i className="bi bi-eraser-fill"></i>
                </button>
            </div>
        </>
    );
}

Win.propTypes = {
    wins: PropTypes.array,
    restCount: PropTypes.func,
}