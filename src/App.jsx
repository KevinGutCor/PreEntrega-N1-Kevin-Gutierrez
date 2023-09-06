
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'

function App() {
  const greeting = <h1 className='text-inicio'>Proximamente...</h1>
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={greeting} />
    </>
  )
}

export default App
