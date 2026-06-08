// Componente pai
import { useState, useEffect } from 'react';
import './App.css'

// Importar o componente filho
import MyButton from './components/MyButton'

const pessoa = {
  nome: 'Makalister',
  idade: 18,
  cidade: 'Santa Maria de Jetibá - ES',
  FontWeight: 'bolder'
}

const livros = [
  { id: 1, titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien' },
  { id: 2, titulo: 'HarryPotter', autor: 'J.K. Rowling' },
  { id: 3, titulo: 'O pequeno prícipe', autor: 'Antonie de Saint-Exupéry'}
];

const ListaDeLivros = livros.map( livro  => 
  <li key={livro.id}>
    <h3>{livro.titulo}</h3>
    <p>O autor do livro "{livro.titulo}" é {livro.autor}</p>
  </li>
);

function ButtonTwo() {
  return (
    <button>Botão 2</button>
  )
}

  function cliqueAqui() {
    alert('Você clicou no botão!')
  }

function App() {
  const [aberto, setAberto] = useState(false);
  
  const [dados, setDados] = useState(null);

  useEffect(() => {        //teste de JSON
    fetch('/teste.json')
      .then(res => res.json())
      .then(data => setDados(data));
  }, []);


  return (
    <>
      <div className={`container ${aberto ? 'container-open' : ''}`}>
        <h1 className="title">Olá, Mundo!</h1>
        <p style={{ fontWeight: pessoa.FontWeight }}>Olá, meu nome é {pessoa.nome}, tenho {pessoa.idade} anos e moro em {pessoa.cidade}</p>
        <ul>{ListaDeLivros}</ul>
        <MyButton/>
        <button onClick={cliqueAqui}>Clique aqui!</button>
        <div>
          <button onClick={() => setAberto(!aberto)}>
            Menu
          </button>
          {aberto && (
            <div>
              <h2>Menu aberto</h2>
              <p>Conteudo aberto</p>
            </div>
          )}
        </div>
      </div>
      <div>
      {dados && <h1>{dados.nome}</h1>} 
    </div>
    </>
  );
}

export default App
