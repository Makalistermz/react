import { useEffect, useState } from "react";

function Desafio2() {
    const [perfumes, setPerfumes] = useState([]);

    const [mostrar, setMostrar] = useState(false);

    //perfume para o individual, e perfumes para pegar tudo
    const listaPerfume = perfumes.map ( perfume =>
            <li key={perfume.id}>
                <h3>{perfume.nome}</h3>
                <p>R$ {perfume.preco}</p>
            </li>
        )

    useEffect ( () => {
        fetch('/desafio2.json')
        .then(res => res.json())
        .then(data => setPerfumes(data));
    }, []);

    return (
        <>
            <button onClick={ () => setMostrar(!mostrar)}>
                Mostrar perfumes
            </button>

            { mostrar && (
                <div>
                    <ul>{listaPerfume}</ul>
                    <p>Quantidade de perfumes no estoque {perfumes.length}</p>
                    <button onClick={ () => setMostrar(!mostrar)}>
                        {mostrar ? 'Ocultar perfumes' : 'Mostrar perfumes'}
                    </button>
                </div>
            )}
        </>
    )
}

export default Desafio2