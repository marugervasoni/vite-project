import React, { useState } from 'react'

const Form = () => {
  
  const [user, setUser] = useState({
    nameAndSurname: '',
    age: '',
    pokeFav: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <form>
        <label>1.</label>
        <input type="text" placeholder='Nombre y apellido' onChange={(e) => setUser({...user, nameAndSurname: e.target.value})}/>
        <br />
        <label>2.</label>
        <input type="number" placeholder='Edad' onChange={(e) => setUser({...user, age: e.target.value})}/>
        <br />
        <label>3.</label>
        <input type="text" placeholder='Pokemon favorito' onChange={(e) => setUser({...user, pokeFav: e.target.value})}/>
        <br />
        <br />
        <button onClick={handleSubmit}>Registrarse</button>
      </form>

      <h2>Nombre completo: {user.nameAndSurname}</h2>
      <h2>Edad: {user.age}</h2>
      <h2>Pokemon favorito: {user.pokeFav}</h2>
    </>
  )
}

export default Form