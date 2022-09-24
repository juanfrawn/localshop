import { Routes, Route } from "react-router-dom";

import NavigationMenu from './components/NavigationMenu'
import Navbar from './components/Navbar'

import Home from './pages/Home'
import Blog from './pages/Blog'


import './App.css'

function App() {
  return (
    <div className="App font-nunito">
      <NavigationMenu />
      <Navbar />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  )
}

export default App
