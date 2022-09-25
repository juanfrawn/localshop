import { Routes, Route } from "react-router-dom";

import NavigationMenu from './components/NavigationMenu'
import Navbar from './components/Navbar'
import Carrito from './components/Carrito'

import Home from './pages/Home'
import Blog from './pages/Blog'
import PreguntasFrecuentes from './pages/PreguntasFrecuentes'
import Login from './pages/Login'
import Register from './pages/Register'
import Cliente from './pages/Cliente'
import Shopper from './pages/Shopper'
import Tienda from './pages/Tienda'


import './App.css'

function App() {
  return (
    <div className="font-nunito">
        <Navbar />
        <NavigationMenu />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/FAQ" element={<PreguntasFrecuentes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Cliente" element={<Cliente />} />
        <Route path="/Shopper" element={<Shopper />} />
        <Route path="/Tienda" element={<Tienda />} />
      </Routes>
    </div>
  )
}

export default App
