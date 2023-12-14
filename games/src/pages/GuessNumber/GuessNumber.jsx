import { useEffect, useState } from 'react';
import './GuessNumber.scss'

import { InputNumber } from '../../components/GuessNumber/InputNumber/InputNumber';
import { Numbers } from '../../components/GuessNumber/Numbers/Numbers';
import { isNumber, repeatNumber, resetClass, focusRepeatNumber, sortNumbers } from '../../utils/GuessNumber/insertNumber';

export function GuessNumber() {

    const [insertNumber, setInsertNumber] = useState('');
    const [showNumber, setShowNumber] = useState('');
    const [guessNumber, setGuessNumber] = useState(27);
    const [tooTall, setTooTall] = useState([]);
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
                setShowNumber('');
            }

            // Inserta el número a la lista presionando Enter.
            if (event.key === 'Enter') {
                // let numbersTall = resetClass([...tooTall]);
                const numbersTall = sortNumbers([...tooTall], ((a, b) => a - b));
                const numbersLow = sortNumbers([...tooLow], ((a, b) => a - b));
                // let numbersLow = resetClass([...tooLow]);
                // numbersLow = sortNumbers(numbersLow, ((a, b) => a - b));
                const repeatIndexTall = repeatNumber(numbersTall, insertNumber, 'alert');
                const repeatIndexLow = repeatNumber(numbersLow, insertNumber, 'alert');
                const newNumberTall = focusRepeatNumber(numbersTall, repeatIndexTall, insertNumber, 'alert');
                const newNumberLow = focusRepeatNumber(numbersLow, repeatIndexLow, insertNumber, 'alert');

                // Error al organizar ya que mi array no es de números es de objetos = [[1, ''], [2, ''] ...]

                if (insertNumber > guessNumber) {
                    const tmp = newNumberTall.sort((a, b) => b - a);
                    if (tmp.length > 0) {
                        setTooTall(tmp);
                    }
                }
                if (insertNumber < guessNumber) {
                    const tmp = newNumberLow.sort((a, b) => b - a);
                    if (tmp.length > 0) {
                        setTooLow(tmp);
                    }
                }
                setInsertNumber('')
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

    useEffect(() => {
        const handleKeyUp = (event) => {

            const inputNumber = isNumber(event.key);
            // Valido que en el número insertado no contenga letras ni puntos.
            if (inputNumber) {
                setShowNumber(showNumber + inputNumber);
            }

            // Elimina todo el número en la pantalla.
            if (event.ctrlKey && event.key === 'Backspace') {
                setShowNumber('');
                setInsertNumber('');
            }

            // Vacía el número en la pantalla, para reflejar que se inserto.
            if (event.key === 'Enter') {
                setShowNumber('');
            }

            // Elimina el ultimo número de la pantalla.
            if (event.key === 'Backspace') {
                setShowNumber(showNumber.slice(0, -1));
            }
        }

        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keyup', handleKeyUp);
        }
    }, [showNumber]);

    return (
        <>
            <main className="game">
                <div className="game__guessNumber">
                    <h1 className="guessNumber__title">Adivina el número</h1>
                    <InputNumber number={showNumber}></InputNumber>
                    {tooTall.length > 0 || tooLow.length > 0 ?
                        <div className="guessNumber__content">
                            <Numbers arrNumbers={tooTall} tooTall={true}></Numbers>
                            <Numbers arrNumbers={tooLow} tooTall={false}></Numbers>
                        </div> :
                        ''
                    }
                </div>
            </main >
        </>
    );
}