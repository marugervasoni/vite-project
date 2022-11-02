import React from 'react'
import {cities} from '../ciudades'
import styles from '../Home.module.css'

const Child = () => {
console.log(cities);
  return (
    <>
    {cities.filter((ciudad) => ciudad.country == "AR" )
    .map((ciudad) => {
      return (         
      <div key={ciudad.id} className={styles.card}>
          <h2 className={styles.city}>{ciudad.city}</h2>
          <p className={styles.population}>{ciudad.population}</p>
      </div>
  
    );
  }    
  )}
    </>
  )

}
export default Child
