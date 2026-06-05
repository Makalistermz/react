// Componente pai
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
  return (
    <>
      <h1 className="title">Olá, Mundo!</h1>
      <p style={{ fontWeight: pessoa.FontWeight }}>Olá, meu nome é {pessoa.nome}, tenho {pessoa.idade} anos e moro em {pessoa.cidade}</p>
      <ul>{ListaDeLivros}</ul>
      <MyButton/>
      <button onClick={cliqueAqui}>Clique aqui!</button>
    </>
  )
}

export default App
