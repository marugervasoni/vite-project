import React from 'react'
import { useState } from 'react';
import Header from '../Pages/Header';

const Formulario = () => {

    const [textInput, setTextInput] = useState([])
    console.log(textInput);

    const handleSubmit = (e) => {
        e.preventDefault();
        setTextInput("");    
        e.target.value = "";
    }

    return (
    <>
        <Header textInput={textInput}/>
        <h1>Cambiá el texto del botón</h1>
        <form>
            <input type="text" name="texto" placeholder='ingrese texto' onChange={(e) => setTextInput(e.target.value)}/>
            {/* <input type="text" name="texto" placeholder='ingrese texto'/> */}
            {/* <button onClick={handleSubmit}>{textButton}</button> */}
            <button style={{color: 'yellow'}} onClick={handleSubmit}>Submit</button>
        </form>
    </>
  )
}

export default Formulario