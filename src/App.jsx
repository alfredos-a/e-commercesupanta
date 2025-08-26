import NavBar from './components/NavBar/NavBar'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  const datos = "Lista de productos"
  return (
    <>
      <NavBar/>
      <ItemListContainer datos={datos}/>
    </>
  )
}

export default App
