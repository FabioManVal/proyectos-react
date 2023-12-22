import PropTypes from 'prop-types';
import './WinnerModal.scss';
import { useEffect, useState } from 'react';
import { isNumber } from '../../../utils/GuessNumber/validations';

export function WinnerModal({ children, times, winnerNumber, newGuessNumber }) {

    // const [insertNumber, setInsertNumber] = useState(children);


    return (
        <section className="winnerModal">
            <div className="winnerModal__modal modal">
                <header className="modal__info info">
                    <div className="info__title title">
                        <div className="title__text text">
                            <p className="text__show">Número</p>
                            <p className="text__show text__show--mirror">Número</p>
                        </div>
                        <div className="title__value value">
                            <span className="value__win">{winnerNumber}</span>
                            <span className="value__win value__win--mirror">{winnerNumber}</span>
                        </div>
                    </div>
                    <div className="info__content content">
                        <div className="content__text text">
                            <p className="text__show">Intentos</p>
                            <p className="text__show text__show--mirror">Intentos</p>
                        </div>
                        <div className="content__value value">
                            <span className="value__times">{times}</span>
                            <span className="value__times value__times--mirror">{times}</span>
                        </div>
                    </div>
                </header>
                <footer className="modal__actions actions">
                    <div className="actions__info info">
                        <p className="info__text">¿Desea intentar adivinar otro número?</p>
                        <p className="info__text info__text--mirror">
                            ¿Desea intentar adivinar otro número?</p>
                    </div>
                    <div className="info__number">
                        {`Número entre el 1 al ${children}`}
                    </div>
                </footer>
            </div>
        </section>
    );
}

WinnerModal.propTypes = {
    children: PropTypes.string.isRequired,
    winnerNumber: PropTypes.number,
    guessNumber: PropTypes.number,
    times: PropTypes.number,
}