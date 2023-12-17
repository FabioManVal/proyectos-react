
// Asigna modificadores a la clase teniendo en cuenta la posición del cuadrado ingresado.
export const classForIndex = (index, className) => {
    const TOP = '--top';
    const LEFT = '--left';
    const RIGHT = '--right';
    const BOTTOM = '--bottom';
    // Valida si no se esta utilizando la clase para los turnos o no.
    if (!className.includes('--is-selected')) {
        switch (index) {
            case 0: return `${className} ${className + TOP} ${className + LEFT}`;
            case 1: return `${className} ${className + TOP}`;
            case 2: return `${className} ${className + TOP} ${className + RIGHT}`;
            case 3: return `${className} ${className + LEFT}`;
            case 5: return `${className} ${className + RIGHT}`;
            case 6: return `${className} ${className + LEFT} ${className + BOTTOM}`;
            case 7: return `${className} ${className + BOTTOM}`;
            case 8: return `${className} ${className + BOTTOM} ${className + RIGHT}`;
            default: return className;
        }
    }
    return className;
}