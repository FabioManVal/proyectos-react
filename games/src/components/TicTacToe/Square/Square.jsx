import PropTypes from 'prop-types';
import './Square.scss';

export function Square({ children, updateBoard, index, isSelected, className, }) {

    const selected = isSelected ? `${className} ${className + '--is-selected'}` : className;

    // Actualiza el estado, teniendo en cuenta en que posición se dio click.
    const handlerClick = () => {
        updateBoard(index);
    }

    return (
        <div className={selected} onClick={handlerClick}>
            {children}
        </div >
    );
}

Square.propTypes = {
    children: PropTypes.string,
    updateBoard: PropTypes.func.isRequired,
    index: PropTypes.number,
    isSelected: PropTypes.bool,
    className: PropTypes.string.isRequired,
}