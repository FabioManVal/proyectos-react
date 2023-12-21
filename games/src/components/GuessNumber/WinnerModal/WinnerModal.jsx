import PropTypes from 'prop-types';
import './WinnerModal.scss';
import { useEffect, useState } from 'react';
import { isNumber } from '../../../utils/GuessNumber/validations';

export function WinnerModal({ children, times, guessNumber, newGuessNumber }) {

    const [insertNumber, setInsertNumber] = useState('');
    const [randomNumber, setRandomNumber] = useState(0);

    useEffect(() => {
        if (Number(children) === Number(guessNumber)) {
            const addNumber = ((event) => {
                const key = event.key;

                switch (key) {
                    default:
                        if (isNumber(key)) {
                            setInsertNumber(insertNumber + key);
                        }
                }
            })

            window.addEventListener('keydown', addNumber);

            return () => {
                window.removeEventListener('keydown', addNumber);
            }
        }

    }, [insertNumber, guessNumber, children]);


    // const onChange = (number) => {
    //     if (isNumber(Number(number))) {
    //         setInsertNumber(insertNumber + number)
    //     }
    // };

    // const submit = (event) => {
    //     event.preventDefault();
    //     generateRandomNumber(number);
    //     const random = Math.floor(Math.random() * insertNumber + 1);
    //     setNumber('');
    //     setRandomNumber(rando);
    //     newGuessNumber(rando);
    // };


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
                            <span className="value__win">{children}</span>
                            <span className="value__win value__win--mirror">{children}</span>
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
                        {insertNumber}
                    </div>
                </footer>
            </div>
        </section>
    );
}

WinnerModal.propTypes = {
    children: PropTypes.number.isRequired,
    times: PropTypes.number,
}