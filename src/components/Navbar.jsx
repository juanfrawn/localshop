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
    <nav className="navbar">
      <div className='navbar__container'> 
        <div className='navbar__menu-icon' onClick={() => setIsMenuOpen(!isMenuOpen)}>
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

        <section className='navbar__links'>
          <ul className='navbar__links__container'>
            <li>
              <Link to="/blog" className='navbar__links__items'>Blog</Link>
            </li>
            <li>
              <Link to="/FAQ" className='navbar__links__items'>Preguntas Frecuentes</Link>
            </li>
            <li>
              <Link to={user ? '/cuenta' : '/login'} className='navbar__links__items'>{user ? 'Mi cuenta' : 'Iniciar sesión'}</Link>
            </li>
            <li className={`relative ${user ? 'hidden' : ''}`} onMouseEnter={() => setShowOptions(true)} onMouseLeave={() => setShowOptions(false)}>
              <span className='navbar__links__items flex items-center cursor-pointer' >
                Registrarte
                <span className='ml-1'><img src={arrow} alt="Más opciones" className={`transition-transform duration-500 ${showOptions ? 'rotate-180' : 'rotate-0'}`} /></span>
              </span>
              <ul className={`${showOptions ? 'opacity-100' : 'opacity-0'} navbar__links__register__container`}>
                <Link to="/cliente" className="navbar__links__register__items">
                  <span className="w-4 mr-2"><img src={cliente} alt="Icono" /></span>
                  Clientes
                </Link>
                <Link to="/shopper" className="navbar__links__register__items">
                  <span className="w-4 mr-2"><img src={delivery} alt="Icono" /></span>
                  Shopper
                </Link>
                <Link to="/tienda" className="navbar__links__register__items">
                  <span className="w-4 mr-2"><img src={store} alt="Icono" /></span>
                  Tienda
                </Link>
              </ul>
            </li>
          </ul>
        </section>

        <section className='nabvar__buttons__container'>
          <Link to="/search" className='mr-5 lg:mr-3 lg:w-6' onClick={() => {
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