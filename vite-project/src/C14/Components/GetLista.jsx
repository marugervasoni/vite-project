import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const GetLista = () => {
  
  const url = "https://jsonplaceholder.typicode.com/comments"

  const [comentarios, setComentarios] = useState([])

  useEffect(()=> {

    console.log('el componente GetLista se ha montado');

    fetch(url)
    .then(response => response.json())
    .then(data => setComentarios(data))
    // .then(data => console.log(data))
    
  }, [setComentarios])

  return (
    <>
    <h2>Comentarios</h2>
    <ol>
    {comentarios.map((comentario) => { 
      return (
        <li key={comentario.id}>
          <p>Post ID: {comentario.postId}</p>
          <p>Comentario ID: {comentario.id}</p>
          <h3>{comentario.name}</h3>
          <h5>{comentario.email}</h5>
          <p>{comentario.body}</p>
        </li>
    )})}
    </ol>
    </>
  )
}

export default GetLista