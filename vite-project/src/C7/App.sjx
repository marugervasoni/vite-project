// CLASE 7-------------------------------------------------------------
import { useState } from 'react'
import './App.css'
import TodoAdded from './C7/Components/TodoAdded'
import TodoList from './C7/Components/TodoList'

const App = () =>  {

  const [added, setAdded] = useState([])
  
  return (
  <>
  <h1>Bienvenido usuario atareado</h1>
  <TodoList setAdded={setAdded}/>
  <TodoAdded added={added}/>    
  </>
  )
}

export default App