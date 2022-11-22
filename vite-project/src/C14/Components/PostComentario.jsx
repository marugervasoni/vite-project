import React, { useState } from 'react'

//solo falta lograr que el nuevo post se renderice en pantalla (la actualizacion)

const PostComentario = () => {

    const url = "https://jsonplaceholder.typicode.com/comments"

    const [comentarios, setComentarios] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault();
    
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(comentarios)
    })
    .then(response => response.json())
    .then(response => console.log('Exito', response))
    }

    const handleChange = (e) => {
    setComentarios({...comentarios, [e.target.name]: e.target.value});
    }

  return (
    <>
        <h2>Añadir comentario</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" name='name' placeholder='título' onChange={handleChange}/>
            <input type="email"  name='email' placeholder='correo electrónico' onChange={handleChange}/>
            <input type="text" name='body' placeholder='comentario' onChange={handleChange}/>
            <br/>
            <button type='submit'>Enviar comentario</button>
        </form>        
    </>
  )
}

export default PostComentario