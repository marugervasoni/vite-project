import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Pedido from './Pedido'

const Pedidos = () => {
    // 5. creo estado para usar en setTimeOut--> aca voy a colocar el pedido y lo uso para renderizar la pagina
    const [producto, setProducto] = useState()

    // 3. montar componente --> con array deps vacio
    useEffect(() => {
        console.log('el componente fue montado');
        // 4. agregar setTimeOut -->para cargar pedido 2" despues de montar comp
        setTimeout(() => {
            // 6. b) modificar estado en useEffect (agrego el producto)
            setProducto(['Milanesa']) 
        }, 2000)
    }, [])

  return (
    <>
        {/* 1. seteo mi pantalla con contenido html */}
        <h1>Su pedido</h1>
        {/* 2. paso producto por props --> envio el estado */}
            {/* (si producto tiene contenido muestro componente producto, sino nada).*/}
        {producto ? <Pedido producto={producto}/> : null} 
            {/* (--si producto fuera un array debo mapear)  */}
        {/* {producto ? producto.map(item => <Pedido producto={producto}/>) : null} */}
        
        {/* 6. a) modificar evento click del boton */}
        <button onClick={() => setProducto(null)}>Cancelar pedido</button>
    </>
  )
}

export default Pedidos

// mostrar pantalla de una app donde solic pedido de pizza
// que el pedido se cargue 2 segundos despues de montar el componente --> analizr como usar setTimeOut dentro de useEffect usando props
// que cuando se actualice elcomp, se imprima en consola que el comp fue actualizado
// necesitaremos 1 boton que al hacerclick genere un alerta informando que el pedido fue cancelado antes de desmont el comp