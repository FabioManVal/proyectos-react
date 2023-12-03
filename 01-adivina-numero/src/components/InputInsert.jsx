import { useState } from "react";

export function InputInsert({ children, inputType, returnNumber }) {
    /*Componente encargado de tomar el número que estará entre 2 a infinito.*/
    
    const [ number, setNumber ] = useState( '' );

    // Permito que solo números sean insertados.
    const changeNumber = (( event ) => {
        if (!isNaN(event.target.value) && !event.target.value.includes('.')) {
            const newNumber = event.target.value;
            setNumber(newNumber);
            returnNumber(number);
        }
    })

    // Retorna el input encargado de tomar el número.
    return (
        <input
            className="Insert"
            value={number}
            onChange={changeNumber}
            type={inputType}
            placeholder={children}
        />
    );
}
