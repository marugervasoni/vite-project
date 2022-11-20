import React from 'react'
import { useEffect } from 'react'

const Pedido = ({producto}) => {
  // 8. creo useEffect para desmontar comp en caso de cancelacion --> agrego array deps y un return para ello
  useEffect(() => {
    // 9. ademas concologue para actualizacion del comp
    console.log('el componente fue actualizado');

    return() => {
      console.log('el componente fue desmontado');
    } 
    // (para el array deps en este caso no es necesario pasar producto (xq se actualiza solo 1 vez))
  }, [producto])

  return (
    <>
    {/* 7. cargo pizza en un li por props */}
      <li>{producto}</li>
    </>
  )
}

export default Pedido