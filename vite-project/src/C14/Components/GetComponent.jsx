import React, { useState } from 'react'
import { useEffect } from 'react'

const GetComponent = () => {
  
    const [lista, setLista] = useState([0])

    const url = 'https://jsonplaceholder.typicode.com/comment'
    // const url = 'https://pokeapi.co/'
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url)
            const data = await response.json()
            setLista(data)
            // console.log(data);
        }
        fetchData()

    }, [url])
  
  
    return (
    <>
        <h1>lista de comentarios</h1>
        <li></li>
    </>
  )
}

export default GetComponent