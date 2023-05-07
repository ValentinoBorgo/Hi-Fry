import { useState, useEffect, useCallback } from 'react'
import './App.css'
import { MostrarBurger } from './components/Burguesa/Hamburguesa'
import { GetBurger } from './service/GetBurger'



function App() {

  const {datos} = GetBurger();


  return (
    <>
    <h1>🍔 Hi Fry !</h1>
    <div>
      <nav>
        <ul>
          <li>Pedidos</li>
          <li>Stock</li>
          <li>Cocina</li>
        </ul>
      </nav>
    </div>
    <div>
      <MostrarBurger datos={datos}/>
    </div>
    </>
  )
}

export default App
