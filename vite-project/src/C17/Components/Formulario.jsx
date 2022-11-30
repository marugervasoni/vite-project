import React from 'react'
import { useState } from 'react';

const Formulario = () => {
  
    const [textButton, setTextButton] = useState(["Submit"])

    const handleChange = (e) => {
        setTextButton(textButton, e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
    <>
        <h1>Cambia el texto del botón</h1>
        <form>
            <input type="text" name="InputText"placeholder='ingrese texto' onChange={handleChange}/>
            <button onClick={()=>{}}>{textButton}</button>
        </form>
    </>
  )
}

export default Formulario

// HACER QUE FUNCION EL TEXTO (QUE SE PASE AL BOTON)