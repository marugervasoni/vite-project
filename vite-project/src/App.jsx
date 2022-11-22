// CLASE 14-------------------------------------------------------------
import './App.css'
import GetLista from './C14/Components/GetLista'
import { useState } from 'react'
import PostComentario from './C14/Components/PostComentario'

const App = () =>  {
  
  // const url = "https://jsonplaceholder.typicode.com/comments"

  // const [comentarios, setComentarios] = useState([])
  
  return (
  <> 
    <PostComentario/>
    <GetLista />
  </>    
  )
}

export default App