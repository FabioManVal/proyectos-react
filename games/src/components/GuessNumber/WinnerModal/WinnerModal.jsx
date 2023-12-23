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
                    <div className="info__content content">
                        <div className="content__number number">
                            <div className="number__start start">
                                <p className="start__text">1</p>
                                <p className="start__text start__text--mirror">1</p>
                            </div>
                            <div className="number__description description">
                                <p className="description__text">al</p>
                                <p className="description__text description__text--mirror">al</p>
                            </div>
                            <div className="number__end end">
                                <p className="end__text">{children}</p>
                                <p className="end__text end__text--mirror">{children}</p>
                            </div>
                        </div>
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