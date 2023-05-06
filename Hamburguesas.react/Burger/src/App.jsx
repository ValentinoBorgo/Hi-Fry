import { useState, useEffect, useCallback } from 'react'
import './App.css'
import { MostrarBurger } from './components/Burguesa/Hamburguesa'
import { UseBurger } from './service/useBurger'



function App() {


  return (
    <>
    <div>
      <MostrarBurger/>
    </div>
    </>
  )
}

export default App
