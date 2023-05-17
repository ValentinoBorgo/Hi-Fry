import './App.css'
import { Route, Routes } from 'react-router-dom'
import {NavBar} from './components/NavBar/index'
import HamburguesasPedidos from './components/HamburguesasPedidos/HamburguesasPedidos'
import Home from './components/Home/Home'




function App() {

  return (
    <div>
      <h1>🍔 Hi Fry !</h1>
      <NavBar />
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/hamburguesas' element={<HamburguesasPedidos />} />
      </Routes>
    </div>
  )
}

export default App
