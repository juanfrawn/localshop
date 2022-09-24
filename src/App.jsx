import { Routes, Route } from "react-router-dom";

import NavigationMenu from './components/NavigationMenu'
import Navbar from './components/Navbar'

import Home from './pages/Home'
import Blog from './pages/Blog'
import PreguntasFrecuentes from './pages/PreguntasFrecuentes'
import Login from './pages/Login'


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
      </Routes>
    </div>
  )
}

export default App
