import { useState } from "react";
import { InputInsert } from "./InputInsert";

export function OffCanvas({ returnRandomNumber }) {
    
    const [ number, setNumber ] = useState( '' );
    const [randomNumber, setRandomNumber] = useState("");

    const generateRandomNumber = (number) => {
        console.log(number)
        const random = Math.random() * number;
        setRandomNumber(Math.floor(random));
        console.log(random)
    };

    const submit = (( event ) => {
        event.preventDefault();
        returnRandomNumber(randomNumber);
    })

    return (
        <>
            <div className="offCanvas">
                <h1>Inserte un número, que este entre 2 a infinito.</h1>
                <form onSubmit={submit}>
                    <InputInsert inputType={"text"} returnNumber={generateRandomNumber}>
                        Número entre 2 a infinito.
                    </InputInsert>
                </form>
            </div>
        </>
    );
}
