// Comonente pai
import './App.css'

// Importar o componente filho
import FunctionalComponent from './components/FunctionalComponent'
import ClassComponents from './components/ClassComponents'
import PropsExemple from './components/PropsExemple'

function App() {
  return (
    <>
      <h1>Hello World React</h1>
      {/* Comentario dentro do jsx*/}
      <FunctionalComponent/>
      <ClassComponents/>
      <PropsExemple nome="Makalister" idade={18}/>
    </>
  )
}

export default App
