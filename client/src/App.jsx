import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landing from './components/Landing/Landing'
import HamburguesasPedidos from './components/HamburguesasPedidos/HamburguesasPedidos'
import Home from './components/Home/Home'
import Pedidos from './components/Pedidos/Pedidos'
import Configuración from './components/Configuracion/Configuracion'




function App() {

  return (
    <div>
      <Landing />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/pedidos' element={<Pedidos />}/>
        <Route path='/hamburguesas' element={<HamburguesasPedidos />} />
        <Route path='/configuración' element={<Configuración />}/>
      </Routes>
    </div>
  )
}

export default App
