import { useEffect, useState } from 'react';
import './GuessNumber.scss'

import { InputNumber } from '../../components/GuessNumber/InputNumber/InputNumber';
import { Numbers } from '../../components/GuessNumber/Numbers/Numbers';
import { Number } from '../../components/GuessNumber/Number/Number';
import { ShowNumber } from '../../components/GuessNumber/ShowNumber/ShowNumber';

import { repeatNumber, focusRepeatNumber, sortNumbers } from '../../utils/GuessNumber/insertNumber';
import { isNumber } from '../../utils/GuessNumber/validations';

export function GuessNumber() {

    // Almacena el número que se esta insertando
    const [insertNumber, setInsertNumber] = useState('');
    // Almacena el número a adivinar.
    const [guessNumber, setGuessNumber] = useState(27);
    // Almacena el número más alto y más bajo.
    const [alertNumber, setAlertNumber] = useState([0, 0]);
    // Almacena una lista de los números que están encima del número a adivinar.
    const [tooTall, setTooTall] = useState([]);
    // Almacena una lista de los números que están debajo del número a adivinar.
    const [tooLow, setTooLow] = useState([]);





    // Modifica el numero insertado cuando se presione una tecla.
    useEffect(() => {

        const handleKeyDown = (event) => {

            const inputNumber = isNumber(event.key);
            // Valido que en el número insertado no contenga letras ni puntos.
            if (inputNumber && inputNumber !== '') {
                setInsertNumber(insertNumber + inputNumber);
            }

            // Elimina todo el número que se estaba insertando, utilizando Ctrl+Backspace.
            if (event.ctrlKey && event.key === 'Backspace') {
                setInsertNumber('');
            }

            // Inserta el número a la lista presionando Enter.
            if (event.key === 'Enter') {
                if (insertNumber !== 0) {
                    const alertClass = 'alert'
                    const arrTall = sortNumbers([...tooTall], ((a, b) => b - a));
                    const newTall = focusRepeatNumber(
                        arrTall,
                        repeatNumber(arrTall, insertNumber, alertClass),
                        insertNumber,
                        alertClass
                    )
                    const arrLow = sortNumbers([...tooLow], ((a, b) => a - b));
                    const newLow = focusRepeatNumber(
                        arrLow,
                        repeatNumber(arrLow, insertNumber, alertClass),
                        insertNumber,
                        alertClass
                    )

                    if (insertNumber > guessNumber) {
                        if (newTall.length > 0) {
                            setTooTall(newTall);
                            setAlertNumber([insertNumber, alertNumber[1]]);

                        }
                    }
                    if (insertNumber < guessNumber) {
                        if (newLow.length > 0) {
                            setTooLow(newLow);
                            setAlertNumber([alertNumber[0], insertNumber]);
                        }
                    }
                    setInsertNumber('')
                }
            }

            // Elimina el ultimo número, del número del input oprimiendo Backspace. 
            if (event.key === 'Backspace') {
                setInsertNumber(insertNumber.slice(0, -1));
            }
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, [insertNumber, tooTall, tooLow, guessNumber]);


    return (
        <>
            <main className="game">
                <div className="game__guessNumber">
                    <h1 className="guessNumber__title">Adivina el número</h1>
                    <InputNumber number={insertNumber}></InputNumber>

                    <div className="guessNumber__alertNumber">
                        {alertNumber[0] !== 0 || alertNumber[1] !== 0 ?
                            <>
                                <Number too={true}>{alertNumber[0]}</Number>
                                <div></div>
                                <Number too={false}>{alertNumber[1]}</Number>
                            </>
                            :
                            ''}
                    </div>

                    {tooTall.length > 0 || tooLow.length > 0 ?
                        <div className="guessNumber__content">
                            <Numbers arrNumbers={tooTall} tooTall={true}></Numbers>
                            <div><ShowNumber number={guessNumber}>{insertNumber}</ShowNumber></div>
                            <Numbers arrNumbers={tooLow} tooTall={false}></Numbers>
                        </div> :
                        ''
                    }
                </div>
            </main >
        </>
    );
}