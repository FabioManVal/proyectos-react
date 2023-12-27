import { useEffect, useState } from 'react';
import './GuessNumber.scss'

import { InputNumber } from '../../components/GuessNumber/InputNumber/InputNumber';
import { ListNumbers } from '../../components/GuessNumber/ListNumbers/ListNumbers';
import { ShowNumber } from '../../components/GuessNumber/ShowNumber/ShowNumber';
import { DisplayGuessNumber } from '../../components/GuessNumber/DisplayGuessNumber/DisplayGuessNumber';
import { WinnerModal } from '../../components/GuessNumber/WinnerModal/WinnerModal';
import { Tries } from '../../components/GuessNumber/Tries/Tries';
import { RangeNumber } from '../../components/GuessNumber/RangeNumber/RangeNumber';

import { repeatNumber, focusRepeatNumber, sortNumbers } from '../../utils/GuessNumber/insertNumber';
import { isNumber, existNumber } from '../../utils/GuessNumber/validations';

const createRandomNumber = (setNumber) => {
    return Math.floor(Math.random() * setNumber) + 1;
}
export function GuessNumber() {

    // Almacena el número que se esta insertando.
    const [insertNumber, setInsertNumber] = useState('');
    // Almacena la cantidad de intentos que se necesitaron para ganar.
    const [tries, setTries] = useState(0);
    // Almacena el número a adivinar.
    const [maxRange, setMaxRange] = useState(100);
    const [guessNumber, setGuessNumber] = useState(createRandomNumber(maxRange));
    // Almacena el número ganador.
    const [winnerNumber, setWinnerNumber] = useState(0);
    // Almacena el número más alto y más bajo.
    const [alertNumber, setAlertNumber] = useState([0, 0]);
    // Almacena una lista de los números que están encima del número a adivinar.
    const [tooTall, setTooTall] = useState([]);
    // Almacena una lista de los números que están debajo del número a adivinar.
    const [tooLow, setTooLow] = useState([]);


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


    const addTries = (insertNumber, tooLow, tooTall, tries) => {
        if (!existNumber(insertNumber, tooTall) &&
            !existNumber(insertNumber, tooLow)) {
            return tries + 1
        }
        return tries
    }

    const resetGame = () => {
        setAlertNumber([0, 0]);
        setWinnerNumber(0);
        setInsertNumber('');
        setTries(0);
        setTooTall([]);
        setTooLow([]);
    }

    const addAlertNumber = (insertNumber, guessNumber, arrAlertNumber) => {
        return insertNumber > guessNumber ?
            [insertNumber, arrAlertNumber[1]] :
            [arrAlertNumber[0], insertNumber];
    }


    // Se encarga de agregar el número a la lista tooTall o tooLow
    useEffect(() => {
        const handleKeyDown = ((event) => {
            const key = event.key;
            let tmpInsertNumber;

            switch (key) {
                case 'Enter':
                    if (winnerNumber !== guessNumber) {
                        tmpInsertNumber = Number(insertNumber);
                        if (isNumber(tmpInsertNumber)) {

                            const newTooLow = sortAndFocusNumbers(tooLow, tmpInsertNumber);
                            const newTooTall = sortAndFocusNumbers(tooTall, tmpInsertNumber);

                            if (+insertNumber !== 0) {
                                insertNumber > guessNumber ?
                                    setTooTall(newTooTall) :
                                    setTooLow(newTooLow);
                            }

                            if (tmpInsertNumber !== guessNumber) {
                                if (+tmpInsertNumber !== 0) {
                                    setTries(addTries(tmpInsertNumber, tooLow, tooTall, tries));
                                    setAlertNumber(addAlertNumber(tmpInsertNumber, guessNumber, alertNumber));
                                }
                            } else if (tmpInsertNumber == guessNumber) {
                                setWinnerNumber(tmpInsertNumber);
                            }
                            setInsertNumber('');
                        }
                    } else {
                        if (isNumber(insertNumber)) {
                            resetGame();
                            setGuessNumber(createRandomNumber(+insertNumber));
                            setMaxRange(+insertNumber);
                        }
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

        // if (+insertNumber === +guessNumber) {
        //     window.removeEventListener('keydown', handleKeyDown);
        // } else {
        window.addEventListener('keydown', handleKeyDown)
        // }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, [insertNumber, tooTall, tooLow, guessNumber, alertNumber, tries, winnerNumber]);



    return (
        <>
            <main className="game">
                <div className="game__guessNumber">
                    <h1 className="guessNumber__title">
                        <div className="title__text">Adivina el número</div>
                        <div className="title__text title__text--mirror">Adivina el número</div>
                    </h1>
                    {winnerNumber === guessNumber ?
                        <InputNumber number={''}></InputNumber> :
                        <InputNumber number={insertNumber}></InputNumber>}

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
                            <div className="content__Number">
                                <DisplayGuessNumber number={winnerNumber} maxRange={maxRange}>{guessNumber}</DisplayGuessNumber>
                            </div>
                            <ListNumbers arrNumbers={tooLow} isToo={false}></ListNumbers>
                        </div> :
                        ''
                    }

                    {
                        winnerNumber !== 0 ?
                            <WinnerModal times={tries} winnerNumber={winnerNumber} >{insertNumber}</WinnerModal> :
                            ''
                    }
                    <Tries>{tries}</Tries>
                </div>
            </main >
        </>
    );
}