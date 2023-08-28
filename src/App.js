import React from 'react';
import Expenses from './Expenses';
function App() {
  const datos = [
    {
      id:"e1",
      nombre:"T-Shirt",
      descripcion:"A white t-shirt",
      precio:"$35",
    },
    {
      id:"e2",
      nombre:"Wallet",
      descripcion:"A fancy wallet",
      precio:"$20",
    },
    {
      id:"e3",
      nombre:"Cup",
      descripcion:"A tea cup",
      precio:"$5",
    }
  ]

  return (
    <div className="App">
     <Expenses></Expenses> 
    </div>
  );
}

export default App;
