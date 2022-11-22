// CLASE ______-------------------------------------------------------------
import { Link } from 'react-router-dom'
import './App.css'

const App = () =>  {
  
  
  return (
  <>

   {/*agrego par router dom  */}
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/faqs">Faqs</Link>
    </nav>
    
  {/* modificar */}
    <PostComentario/>
    <GetLista />
  </>    
  )
}

export default App