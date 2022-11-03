import React from 'react'
import Form from '../Components/Form'
import image from '../../assets/pokemon.jpg'

const Register = () => {
  return (
    <>
    <h2>Registrate Pokeusuario!!</h2>
    <img src={image} alt="pokemon" style={{height:'10rem', }}/>
    <Form/>
    </>
  )
}

export default Register