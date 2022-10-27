import React from 'react'
import Header from '../Components/Header'
//importo lista de productos
import productos from '../productos.js'
import styles from './Shop.module.css'

const Shop = () => {

  return (
    <>
    <Header titulo='Shop'/>

    {/* mapeo lista de productos */}
    {productos.map((producto, index) => (
        
        <div key={index} className={styles.card}>
            <img src={producto.imagen} alt="" className={styles.imagen}/>
            <h2 className={styles.nombre}>{producto.nombre}</h2>
            <h3 className={styles.precio}>{producto.precio}</h3>
        </div>
    ))}

    </>
  )
}

export default Shop