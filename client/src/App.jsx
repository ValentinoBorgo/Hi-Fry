import { useState, useEffect, useCallback } from 'react'
import './App.css'
import { Home } from './components/Home/Home'




function App() {

  // const {datos} = GetBurgers();


  return (
    <>
    <h1>🍔 Hi Fry !</h1>
      {/* <MostrarBurger datos={datos}/> */}
      <Home />
    </>
  )
}

export default App
