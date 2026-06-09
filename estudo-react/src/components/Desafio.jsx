import { useState, useEffect } from "react";

function Desafio() {
    const [mostrar, setMostrar] = useState(false)

    const pessoa = {
        nome: "Makalister",
        idade: 18, 
        cidade: "Santa Maria de Jetibá"
    };

    useEffect( () => {
        if (mostrar === true) {
            console.log('Perfil aberto!')
        }
    }, [mostrar]);

    return (
    <>
        <button onClick={ () => setMostrar(!mostrar)}>
            Mostrar Perfil
        </button>

        {mostrar && (
            <div>
                <h1>Bem-vindo {pessoa.nome}, segue a baixo suas informações</h1>
                <p>idade: {pessoa.idade}</p>
                <p>cidade: {pessoa.cidade}</p>
                <button onClick={ () => setMostrar(!mostrar)}>
                    {mostrar ? 'Ocultar perfil' : 'Mostrar perfil'}
                </button>
            </div>
        )}
    </>
    );
}

export default Desafio