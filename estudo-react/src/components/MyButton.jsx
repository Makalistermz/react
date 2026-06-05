import { useState } from "react";

function MyButton() {
    const [numero, setNumero] = useState(0);

    return (
        <button onClick={() => setNumero(numero + 1)}>
            <span>Clique aqui para contar! {numero} </span>
        </button>
    );
}

export default MyButton;