import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

import close from "../assets/close.svg";
import Logo from "../assets/Logo.svg";
import search from "../assets/search.svg";
import cart from "../assets/cart.svg";
import arrow from "../assets/arrow.svg";

const NavigationMenu = () => {
    const { isMenuOpen, setIsMenuOpen } = useContext(AppContext);
    const [navbarContent, setNavbarContent] = useState(false);

    useEffect(() => {
        if (isMenuOpen) {
            setTimeout(() => {
                setNavbarContent(true);
            }, 300);
        } else {
            setNavbarContent(false);
        }
    }, [isMenuOpen]);
    
  return (
    <div className={`h-screen w-screen bg-primary fixed top-0 transition-all duration-500 ${isMenuOpen ? 'w-full' : 'w-0'} lg:hidden `}>
      <nav className="p-5">
        <div className="flex justify-between sm:max-w-lg sm:mx-auto md:max-w-2xl lg:max-w-4xl lg:grid lg:grid-cols-navbar">
          <div className="flex items-center lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <img src={close} alt="Cerrar menú" className="w-8 md:w-11" />
          </div>

          <div>
            <picture>
              <img src={Logo} alt="Logo" className="w-32 md:w-52 lg:w-44" />
            </picture>
          </div>

          <section className="flex items-center">
            <div className="mr-5 lg:hidden">
              <img src={search} alt="Buscar" className="sm:w-7" />
            </div>
            <div>
              <img src={cart} alt="Carrito" className="sm:w-5" />
            </div>
          </section>
        </div>
      </nav>
      <section className="m-5">
        <ul className={`font-extrabold text-white text-lg transition-opacity duration-200 ${navbarContent ? 'opacity-100' : 'opacity-0'}`}>
            <li className="mb-8">Home</li>
            <li className="mb-8">Blog</li>
            <li className="mb-8">Preguntas Frecuentes</li>
            <li className="mb-8 flex justify-between items-center">
                Registrate 
                <span><img src={arrow} alt="Más Opciones" className="w-6" /></span>
            </li>
            <li className="mb-8 flex justify-between items-center">
                Iniciar Sesión 
                <span><img src={arrow} alt="Más Opciones" className="w-6" /></span>
            </li>
        </ul>
      </section>
    </div>
  );
};

export default NavigationMenu;
