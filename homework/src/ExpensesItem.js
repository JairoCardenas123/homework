import React from 'react';
import './ExpensesItem.css'

function ExpenseItem(props) {

  return (
    <div className='expense-item'>
      <div className='expense1' >
        <img className='img' src={props.image} ></img>
      <h2>{props.nombre}</h2>
        <p>{props.descripcion}</p>
        <p>{props.precio}</p>    
        <a className='boton' href="#">Add to Cart</a>

      </div>
    </div>
  );
}

export default ExpenseItem;