import PropTypes from 'prop-types';
import './WinnerModal.scss';

export function WinnerModal({ children, times, winnerNumber }) {
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
                            <p className="value__win">{winnerNumber}</p>
                            <p className="value__win value__win--mirror">{winnerNumber}</p>
                        </div>
                    </div>
                    <div className="info__content content">
                        <div className="content__text text">
                            <p className="text__show">Intentos</p>
                            <p className="text__show text__show--mirror">Intentos</p>
                        </div>
                        <div className="content__value value">
                            <p className="value__times">{times}</p>
                            <p className="value__times value__times--mirror">{times}</p>
                        </div>
                    </div>
                </header>
                <footer className="modal__actions actions">
                    <div className="actions__info info">
                        <p className="info__text">¿Desea intentar adivinar otro número?</p>
                        <p className="info__text info__text--mirror">
                            ¿Desea intentar adivinar otro número?</p>
                    </div>
                    <div className="info__number number">
                        <p className="number__text">{`Inserte un número entre el 1 al ${children}`}</p>
                        <p className="number__text number__text--mirror">{`Inserte un número entre el 1 al ${children}`}</p>
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