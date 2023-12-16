import PropTypes from 'prop-types';

export function WinnerModal({ children, times }) {


    return (
        <section className="winnerModal">
            <header className="winnerModal__title">El número ganador fue <span className="title__win">{children}</span></header>
            <div className="winnerModal__content">La cantidad de intentos necesarios fue de: <span className="content__times">{times}</span></div>
            <footer className="winnerModal__actions"></footer>
        </section>
    );
}

WinnerModal.propTypes = {
    children: PropTypes.string.isRequired,
    times: PropTypes.number,
}