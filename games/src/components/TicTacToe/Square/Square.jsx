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