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


    const insertNumberToList = (tooLow, tooTall, insertNumber, guessNumber) => {
        if (insertNumber > guessNumber) {
            if (tooTall.length > 0) {
                setTooTall(tooTall);

            }
        }
        if (insertNumber < guessNumber) {
            if (tooLow.length > 0) {
                setTooLow(tooLow);
            }
        }
    }

    const sortAndFocusNumbers = (arrTooNumbers, insertNumber, alertClass = 'repeatNumber') => {
        // Ordena los números de menor a mayor.
        const sortArrNumbers = sortNumbers(
            [...arrTooNumbers],
            ((menor, mayor) => menor - mayor)
        );

        // retorna la posición del número a insertar si este existe en la lista.
        const indexRepeatNumber = repeatNumber(
            sortArrNumbers,
            insertNumber,
            alertClass
        );

        // Asigna una clase como modificador para el elemento repetido, y retorna la lista con ese dato modificado.
        const newArrNumbers = focusRepeatNumber(
            sortArrNumbers,
            indexRepeatNumber,
            insertNumber,
            alertClass
        );

        return newArrNumbers
    }


    const countAttempts = (insertNumber, tooLow, tooTall, tries) => {
        if (
            !existNumber(insertNumber, tooTall) &&
            !existNumber(insertNumber, tooLow)) {
            setTries(tries + 1);
        }
    }



    // Se encarga de agregar el número a la lista tooTall o tooLow
    useEffect(() => {
        const handleKeyDown = ((event) => {
            const key = event.key;

            switch (key) {
                case 'Enter':
                    if (isNumber(insertNumber) && insertNumber !== 0) {

                        const newTooLow = sortAndFocusNumbers(tooLow, insertNumber);
                        const newTooTall = sortAndFocusNumbers(tooTall, insertNumber);

                        insertNumberToList(newTooLow, newTooTall, insertNumber, guessNumber);

                        if (insertNumber !== guessNumber) {
                            countAttempts(insertNumber, tooLow, tooTall, tries);
                        } else if (insertNumber > guessNumber) {
                            setAlertNumber([insertNumber, alertNumber[1]]);
                        } else {
                            setAlertNumber([alertNumber[0], insertNumber]);
                        }

                        if (insertNumber == guessNumber) {
                            setWinnerNumber(insertNumber);
                        }
                        setInsertNumber('');
                    }
                    break;

                case 'Backspace':
                    if (event.ctrlKey && key === 'Backspace') {
                        setInsertNumber('');
                    } else {
                        setInsertNumber(insertNumber.slice(0, -1));
                    }

                    break;

                default:
                    if (isNumber(key)) {
                        setInsertNumber(insertNumber + key);
                    }
            }

        })

        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, [insertNumber, tooTall, tooLow, guessNumber, alertNumber, tries]);



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