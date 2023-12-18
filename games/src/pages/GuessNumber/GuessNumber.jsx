import { useEffect, useState } from 'react';
import './GuessNumber.scss'

import { InputNumber } from '../../components/GuessNumber/InputNumber/InputNumber';
import { ListNumbers } from '../../components/GuessNumber/ListNumbers/ListNumbers';
import { ShowNumber } from '../../components/GuessNumber/ShowNumber/ShowNumber';
import { DisplayGuessNumber } from '../../components/GuessNumber/DisplayGuessNumber/DisplayGuessNumber';
import { WinnerModal } from '../../components/GuessNumber/WinnerModal/WinnerModal';
import { Tries } from '../../components/GuessNumber/Tries/Tries';

import { repeatNumber, focusRepeatNumber, sortNumbers } from '../../utils/GuessNumber/insertNumber';
import { isNumber, existNumber } from '../../utils/GuessNumber/validations';

export function GuessNumber() {

    // Almacena el número que se esta insertando.
    const [insertNumber, setInsertNumber] = useState('');
    // Almacena la cantidad de intentos que se necesitaron para ganar.
    const [tries, setTries] = useState(0);
    // Almacena el número a adivinar.
    const [guessNumber, setGuessNumber] = useState(27);
    // Almacena el número ganador.
    const [winnerNumber, setWinnerNumber] = useState(0);
    // Almacena el número más alto y más bajo.
    const [alertNumber, setAlertNumber] = useState([0, 0]);
    // Almacena una lista de los números que están encima del número a adivinar.
    const [tooTall, setTooTall] = useState([]);
    // Almacena una lista de los números que están debajo del número a adivinar.
    const [tooLow, setTooLow] = useState([]);

    // Se encarga de agregar el número a la lista tooTall o tooLow
    useEffect(() => {
        const addNumber = ((event) => {
            if (isNumber(event.key)) {
                const inputNumber = event.key;
                setInsertNumber(insertNumber + inputNumber)
            }

            if (event.key === 'Enter') {
                if (insertNumber !== 0 && insertNumber !== '') {
                    const alertClass = 'repeatNumber'
                    const arrTall = sortNumbers([...tooTall], ((a, b) => a - b));
                    const newTall = focusRepeatNumber(
                        arrTall,
                        repeatNumber(arrTall, insertNumber, alertClass),
                        insertNumber,
                        alertClass
                    );
                    const arrLow = sortNumbers([...tooLow], ((a, b) => a - b));
                    const newLow = focusRepeatNumber(
                        arrLow,
                        repeatNumber(arrLow, insertNumber, alertClass),
                        insertNumber,
                        alertClass
                    );

                    if (insertNumber > guessNumber) {
                        if (newTall.length > 0) {
                            setTooTall(newTall);

                        }
                    }
                    if (insertNumber < guessNumber) {
                        if (newLow.length > 0) {
                            setTooLow(newLow);
                        }
                    }
                    setInsertNumber('');
                }
            }
        })

        window.addEventListener('keydown', addNumber)

        return () => {
            window.removeEventListener('keydown', addNumber);
        }
    }, [insertNumber, tooTall, tooLow, guessNumber]);

    // Se encargara de contar los intentos del jugador, al momento de adivinar el número.
    useEffect(() => {
        const countTries = ((event) => {
            if (event.key === 'Enter') {
                if (!isNaN(insertNumber) && insertNumber !== guessNumber && insertNumber !== '') {
                    if (
                        !existNumber(insertNumber, tooTall) &&
                        !existNumber(insertNumber, tooLow)) {
                        console.log(insertNumber, typeof insertNumber)
                        setTries(tries + 1);
                    }
                }
            }
        })

        window.addEventListener('keydown', countTries);

        return () => {
            window.removeEventListener('keydown', countTries)
        }
    }, [tries, guessNumber, insertNumber, tooTall, tooLow]);

    // Me agrega el número insertado, al valor encargado de mostrar, sí el número se ingresado en el lado de los tooTall o tooLow
    useEffect(() => {
        const addAlertNumber = ((event) => {
            if (event.key === 'Enter') {
                if (insertNumber !== 0 && insertNumber !== '') {
                    if (insertNumber > guessNumber) setAlertNumber([insertNumber, alertNumber[1]]);
                    if (insertNumber < guessNumber) setAlertNumber([alertNumber[0], insertNumber]);
                }
            }
        })

        window.addEventListener('keydown', addAlertNumber);

        return () => {
            window.removeEventListener('keydown', addAlertNumber);
        }
    }, [insertNumber, alertNumber, guessNumber]);

    // Se encarga de validar si el número insertado, es el número que debemos de encontrar.
    useEffect(() => {
        const addWinnerNumber = () => {
            if (insertNumber == guessNumber) {
                setWinnerNumber(insertNumber);
            }
        }
        window.addEventListener('keydown', addWinnerNumber);

        return () => {
            window.removeEventListener('keydown', addWinnerNumber);
        }
    }, [insertNumber, guessNumber]);

    // Modifica el numero insertado cuando se presione una tecla.
    useEffect(() => {

        const removeNumber = (event) => {

            // Elimina todo el número que se estaba insertando, utilizando Ctrl+Backspace.
            if (event.ctrlKey && event.key === 'Backspace') {
                setInsertNumber('');
            }

            // Elimina el ultimo número, del número del input oprimiendo Backspace. 
            if (event.key === 'Backspace') {
                setInsertNumber(insertNumber.slice(0, -1));
            }
        }

        window.addEventListener('keydown', removeNumber)

        return () => {
            window.removeEventListener('keydown', removeNumber);
        }
    }, [insertNumber]);


    return (
        <>
            <main className="game">
                <div className="game__guessNumber">
                    <h1 className="guessNumber__title">
                        <div className="title__text">Adivina el número</div>
                        <div className="title__text title__text--mirror">Adivina el número</div>
                    </h1>
                    <InputNumber number={insertNumber}></InputNumber>

                    <div className="guessNumber__alertNumber">
                        {alertNumber[0] !== 0 || alertNumber[1] !== 0 ?
                            <>
                                <ShowNumber isToo={true}>{alertNumber[0]}</ShowNumber>
                                <div></div>
                                <ShowNumber isToo={false}>{alertNumber[1]}</ShowNumber>
                            </>
                            :
                            ''}
                    </div>

                    {tooTall.length > 0 || tooLow.length > 0 ?
                        <div className="guessNumber__content">
                            <ListNumbers arrNumbers={tooTall} isToo={true}></ListNumbers>
                            <DisplayGuessNumber number={winnerNumber}>{guessNumber}</DisplayGuessNumber>
                            <ListNumbers arrNumbers={tooLow} isToo={false}></ListNumbers>
                        </div> :
                        ''
                    }

                    {
                        winnerNumber !== 0 ?
                            <WinnerModal>{winnerNumber}</WinnerModal> :
                            ''
                    }
                    <Tries>{tries}</Tries>
                </div>
            </main >
        </>
    );
}