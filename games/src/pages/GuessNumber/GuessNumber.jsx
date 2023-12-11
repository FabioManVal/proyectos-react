import { useEffect, useState } from 'react';
import './GuessNumber.scss'

import { InputNumber } from '../../components/GuessNumber/InputNumber/InputNumber';
import { isNumber, repeatNumber, resetClass } from '../../utils/GuessNumber/insertNumber';

export function GuessNumber() {

    const [insertNumber, setInsertNumber] = useState('');
    const [showNumber, setShowNumber] = useState('');
    const [guessNumber, setGuessNumber] = useState([]);


    // Modifica el numero insertado cuando se presione una tecla.
    useEffect(() => {

        const handleKeyDown = (event) => {

            const inputNumber = isNumber(event.key);
            // Valido que en el número insertado no contenga letras ni puntos.
            if (inputNumber) {
                setInsertNumber(insertNumber + inputNumber);
            }

            // Al momento de presionar Enter me guardo el número insertado.
            // y no se repita el número insertado.
            if (event.ctrlKey && event.key === 'Backspace') {
                setInsertNumber('');
                setShowNumber('');
            }

            if (event.key === 'Enter') {
                const numbers = resetClass([...guessNumber]);
                const repeatIndex = repeatNumber(numbers, insertNumber, 'alert');

                //!numbers.includes(insertNumber)
                if (repeatIndex !== null) {
                    numbers[repeatIndex] = [insertNumber, 'alert'];
                    setGuessNumber(numbers);
                } else {
                    numbers.push([insertNumber, '']);
                    setGuessNumber(numbers);
                }
                setInsertNumber('')
            }

            if (event.key === 'Backspace') {
                const temp = insertNumber.slice(0, -1);
                setInsertNumber(temp);
            }

        }

        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, [insertNumber, guessNumber]);

    useEffect(() => {
        const handleKeyUp = (event) => {

            if (event.ctrlKey && event.key === 'Backspace') {
                setShowNumber('');
                setInsertNumber('');
            }

            if (!isNaN(event.key) && event.key !== '.') {
                setShowNumber(showNumber + event.key);
            }

            if (event.key === 'Enter') {
                setShowNumber('');
            }

            if (event.key === 'Backspace') {
                const temp = showNumber.slice(0, -1);
                setShowNumber(temp);
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
                    <div className="numbers">
                        {
                            guessNumber ?
                                guessNumber.map((num) => {
                                    return num[1] !== '' ?
                                        <p key={num[0]} className={num[1]}>{num[0]}</p> :
                                        <p key={num[0]}>{num[0]}</p>
                                }) :
                                ''
                        }
                    </div>
                </div>
            </main >
        </>
    );
}