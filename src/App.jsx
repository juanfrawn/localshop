import { Routes, Route } from "react-router-dom";

import NavigationMenu from "./components/NavigationMenu";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import PreguntasFrecuentes from "./pages/PreguntasFrecuentes";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cliente from "./pages/Cliente";
import Shopper from "./pages/Shopper";
import Tienda from "./pages/Tienda";
import Cuenta from "./pages/Cuenta";
import Search from "./pages/Search";

import "./App.css";

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
        <Route path="/register" element={<Register />} />
        <Route path="/cliente" element={<Cliente />} />
        <Route path="/shopper" element={<Shopper />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/cuenta" element={<Cuenta />} />
        <Route path="/Search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
