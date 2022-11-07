import React from 'react'

const TodoList = (setAdded) => {

    const todoList = [
        'Barrer la casa',
        'Tender las camas',
        'Preparar el almuerzo',
        'Regar las plantas',
        'Alimentar a Firu'
    ]

  return (
    <>
    <h2>Lista de tareas</h2>
    <ul>
        {todoList.map((item, index) => (
            <React.Fragment key={index}>
                <li>{item}</li>
                <button onClick={() => setAdded(prev => [...prev,item])}>Agregar tarea</button>
            </React.Fragment>
        ))}
    </ul>
    </>
  )
}

export default TodoList

//Tengo una lista. Hay que iterar la lista
//Cada elemento de la lista tiene un boton 
//La funcionalidad de ese boton es de guardar el elemento en un estado
//Ese estado que contiene una lista de elementos guardados hay que renderizarlo en otro componente

//*setAdded es un componente con las tareas agregadas que se lo envio a su hermano todolist por props
