import React from 'react';
import ExpenseItem from './ExpensesItem';
import './ExpensesItem.css'
import image from './images/hongo.png'

function App() {
  const datos = [
    {
      id: "e1",
      nombre: "T-Shirt",
      descripcion: "A white t-shirt",
      precio: "$35",
      image:image
    },
    {
      id: "e2",
      nombre: "Wallet",
      descripcion: "A fancy wallet",
      precio: "$20",
      image:image
    },
    {
      id: "e3",
      nombre: "Cup",
      descripcion: "A tea cup",
      precio: "$5",
      image:image
    },
  ];

  return (
    <div >
      <h2 className='h2' >E-Commerce in React and SnipCart</h2>
      <div className='expenses' >
    <ExpenseItem
      image={datos[0].image}
      nombre={datos[0].nombre}
      descripcion={datos[0].descripcion}
      precio={datos[0].precio}
    ></ExpenseItem>
    <ExpenseItem
      image={datos[1].image}
      nombre={datos[1].nombre}
      descripcion={datos[1].descripcion}
      precio={datos[1].precio}>
    </ExpenseItem>
    <ExpenseItem
      image={datos[2].image}
      nombre={datos[2].nombre}
      descripcion={datos[2].descripcion}
      precio={datos[2].precio}>
    </ExpenseItem>
    </div>
    </div>
  );
}

export default App;
