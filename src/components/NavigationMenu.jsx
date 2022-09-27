import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

import close from "../assets/close.svg";
import Logo from "../assets/Logo.svg";
import search from "../assets/search.svg";
import cart from "../assets/cart.svg";

const NavigationMenu = () => {
    const { isMenuOpen, setIsMenuOpen, user } = useContext(AppContext);
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
    <div className={`navbar__menu ${isMenuOpen ? 'w-full' : 'w-0'} `}>
      <section className="m-10 z-20">
        <div className={`navbar__menu__content ${navbarContent ? 'opacity-100' : 'opacity-0'}`}>
            <Link to="/" className="mb-8" onClick={() => setIsMenuOpen(!isMenuOpen)}>Home</Link>
            <Link to="/blog" className="mb-8" onClick={() => setIsMenuOpen(!isMenuOpen)}>Blog</Link>
            <Link to="/faq" className="mb-8" onClick={() => setIsMenuOpen(!isMenuOpen)}>Preguntas Frecuentes</Link>
            <Link to="/register" className={`mb-8 ${user ? 'hidden' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                Registrate 
            </Link>
            <Link to={user ? "/cuenta" : "/login"} className="mb-8" onClick={() => setIsMenuOpen(!isMenuOpen)}>{user ? 'Mi cuenta' : 'Iniciar sesión'}</Link>
        </div>
      </section>
    </div>
  );
};

export default NavigationMenu;
