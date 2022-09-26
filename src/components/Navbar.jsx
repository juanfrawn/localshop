import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

import menu from '../assets/menu.svg'
import close from '../assets/close_alt.svg'
import logo from '../assets/Logo.svg'
import logoLG from '../assets/logo_xl.svg'
import search from '../assets/search.svg'
import cart from '../assets/cart.svg'
import arrow from '../assets/arrow.svg'
import store from '../assets/store.svg'
import cliente from '../assets/user.svg'
import delivery from '../assets/delivery.svg'

import Carrito from "./Carrito";

const Navbar = () => {
  const { isMenuOpen, setIsMenuOpen, showCart, setShowCart, user } = useContext(AppContext);

  const [showOptions, setShowOptions] = useState(false);


  return (
    <nav className="px-5 py-3 bg-primary sticky top-0 left-0 z-10">
      <div className='flex justify-between sm:max-w-lg sm:mx-auto md:max-w-2xl lg:max-w-4xl lg:grid lg:grid-cols-navbar xl:max-w-5xl'> 
        <div className='flex items-center lg:hidden hover:cursor-pointer' onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <img src={isMenuOpen ? close : menu} alt="Menú" className='w-7 md:w-11' />
        </div>
        <div>
          <Link to="/" onClick={() => {
            setIsMenuOpen(false);
          }}>
          <picture>
            <source srcset={logoLG} media='(min-width: 1024px)' />
            <img src={logo} alt="Logo" className='w-32 md:w-52 lg:w-44' />
          </picture>
          </Link>
        </div>
        <section className='hidden lg:block self-center'>
          <ul className='flex justify-end items-center gap-x-8 mr-8 tracking-wide'>
            <li>
              <Link to="/blog" className='text-white text-sm font-bold'>Blog</Link>
            </li>
            <li>
              <Link to="/FAQ" className='text-white text-sm font-bold'>Preguntas Frecuentes</Link>
            </li>
            <li>
              <Link to={user ? '/cuenta' : '/login'} className='text-white text-sm font-bold'>{user ? 'Mi cuenta' : 'Iniciar sesión'}</Link>
            </li>
            <li className={`relative ${user ? 'hidden' : ''}`} onMouseEnter={() => setShowOptions(true)} onMouseLeave={() => setShowOptions(false)}>
              <span className='text-white text-sm font-bold flex items-center cursor-pointer' >
                Registrarte
                <span className='ml-1'><img src={arrow} alt="Más opciones" className={`transition-transform duration-500 ${showOptions ? 'rotate-180' : 'rotate-0'}`} /></span>
              </span>
              <ul className={`absolute top-5 pt-3 -left-2 ${showOptions ? 'opacity-100' : 'opacity-0'} bg-primary/90 backdrop-blur-lg rounded-lg text-sm font-extrabold text-white transition-all`}>
                <Link to="/cliente" className="flex items-center hover:bg-orange-700/30 pt-2 pb-3 cursor-pointer pl-2 pr-6 transition-colors">
                  <span className="w-4 mr-2"><img src={cliente} alt="Icono" /></span>
                  Clientes
                </Link>
                <Link to="/shopper" className="flex items-center hover:bg-orange-700/30 pt-2 pb-3 cursor-pointer pl-2 pr-6 transition-colors">
                  <span className="w-4 mr-2"><img src={delivery} alt="Icono" /></span>
                  Shopper
                </Link>
                <Link to="/tienda" className="flex items-center hover:bg-orange-700/30 pt-2 pb-3 cursor-pointer pl-2 pr-6 transition-colors">
                  <span className="w-4 mr-2"><img src={store} alt="Icono" /></span>
                  Tienda
                </Link>
              </ul>
            </li>
          </ul>
        </section>
        <section className='flex items-center'>
          <Link to="/search" className='mr-5 lg:hidden' onClick={() => {
            setIsMenuOpen(false);
          }}>
              <img src={search} alt="Buscar" className='sm:w-7' />
          </Link>
          <div>
            <span onClick={() => {
                setShowCart(!showCart)
                setIsMenuOpen(false)
              }} className="cursor-pointer">
              <img src={cart} alt="Carrito" className='sm:w-5 lg:w-4' />
            </span>
          </div>
        </section>
      </div> 
      <Carrito />
    </nav>
  )
}

export default Navbar