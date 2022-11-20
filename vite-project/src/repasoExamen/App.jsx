import { useState } from 'react';
import './App.css'
import Estatus from './Components/Estatus';
import Posteos from './Components/Posteos';

const App = () =>  {
 
    const [likes, setLikes] = useState(0)
    const likear = () => {
      setLikes(likes + 1) 
    }
  return (
      <div className="App">
        <Estatus/>
        <Posteos likear={likear}/>
        <h3>likes={likes}</h3>
        </div>

  );
}

export default App

// El comopente app es el padre de: ewstatus y posteos
// Estado: app debe manejar en su estado un numero para contabilizar el totla de likes
// Metodos: app debe tener un metodo para aumentar este numero y que 
// pueda ser ejecutado por su nieto post
// props: app debera pasar por props lo necesario a sus componentes internos para que manipulen o lean su estado