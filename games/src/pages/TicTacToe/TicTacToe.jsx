/* Functions */
import { useState } from 'react';
import { newBoard } from '../../utils/TicTacToe/board';
import { newWinner } from '../../utils/TicTacToe/winner';

/* Components */
import { Board } from '../../components/TicTacToe/Board/Board';
import { Win } from '../../components/TicTacToe/Win/Win';
import { Turn } from '../../components/TicTacToe/Turn/Turn';
import { WinnerModal } from '../../components/TicTacToe/WinnerModal/WinnerModal';

/* Constants */
import { TURNS } from '../../constants';
import { newTurn } from '../../utils/TicTacToe/turn';
import { isEqualsTo } from '../../utils/TicTacToe/validations';

import './TicTacToe.scss';

export function TicTacToe() {

    // Estado que cuenta las victorias de cada jugador
    const [countWin, setCountWin] = useState(() => {
        const localStorage = window.localStorage.getItem('wins');
        if (localStorage) {
            return JSON.parse(localStorage);
        }
        return Array(2).fill(0);
    });

    // Estado que permite identificar al ganador.
    const [winner, setWinner] = useState(null);

    // Estado encargado de modificar el tablero
    const [board, setBoard] = useState(() => {
        const localStorage = window.localStorage.getItem('board');
        if (localStorage) {
            // Verifica si en el tablero hay ganador o no, y retorna el tablero del localStorage.
            setWinner(newWinner(JSON.parse(localStorage)));
            return JSON.parse(localStorage);
        }
        // Retorna tablero vacío.
        return Array(9).fill(null);
    });

    // Estado que maneja los turnos.
    const [turn, setTurn] = useState(() => {
        const localStorage = window.localStorage.getItem('turn') ?? null;
        if (localStorage) return localStorage
        return TURNS.X;
    });

    // Actualiza el tablero, solo si existe alguna modificación.
    const updateBoard = (index) => {
        const modBoard = newBoard(board, index, winner, turn);
        if (JSON.stringify(modBoard) !== JSON.stringify(board)) {
            setBoard(() => modBoard);
            // Cambia el turno
            setTurn(() => newTurn(turn));
            // Crea el local storage para el tablero y los turnos.
            window.localStorage.setItem('board', JSON.stringify(modBoard));
            window.localStorage.setItem('turn', newTurn(turn));
        }
        // Valida si hay ganador o no.
        setWinner(() => newWinner(modBoard))
    }

    // Restaura los valores por defecto de los estados y del local storage.
    const resetGame = () => {
        const wins = countWin;
        if (isEqualsTo(JSON.stringify(winner), JSON.stringify(TURNS.X))) {
            wins[0] = parseInt(wins[0]) + 1;
        }
        if (isEqualsTo(JSON.stringify(winner), JSON.stringify(TURNS.O))) {
            wins[1] = parseInt(wins[1]) + 1;
        }
        setCountWin(wins)
        window.localStorage.setItem('wins', JSON.stringify(countWin));

        setBoard(Array(9).fill(null));
        setTurn(TURNS.X);
        setWinner(null);
        window.localStorage.removeItem('board');
        window.localStorage.removeItem('turn');
    }

    // Restaura el contador de victorias
    const resetWins = () => {
        setCountWin(Array(2).fill(0))
        window.localStorage.removeItem('wins');
    }

    return (
        <>
            <main className="game">
                <div className="game__tictactoe">
                    <h1 className="tictactoe__title">Tic Tac Toe</h1>
                    <div className="tictactoe__content">
                        <header className="content__header">
                            <Win wins={countWin} restCount={resetWins} ></Win>
                            <Board board={board} update={updateBoard}></Board>
                            <button onClick={resetGame} className="header__button">
                                <i className="bi bi-arrow-clockwise"></i>
                            </button>
                        </header>
                        <footer className='content__footer'>
                            <Turn turn={turn} />
                        </footer>
                    </div>
                    <WinnerModal resetGame={resetGame} winner={winner} />
                </div>
            </main>
        </>
    );
}