import close from "../assets/close.svg";
import Logo from "../assets/Logo_orange.svg";
import search from "../assets/search_orange.svg";
import cart from "../assets/cart_orange.svg";
import arrow from "../assets/arrow_orange.svg";

const NavigationMenu = () => {
  return (
    <div className="h-screen w-screen bg-white fixed top-0 -left-full">
      <nav className="p-5">
        <div className="flex justify-between sm:max-w-lg sm:mx-auto md:max-w-2xl lg:max-w-4xl lg:grid lg:grid-cols-navbar">
          <div className="flex items-center lg:hidden">
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
        <ul className="font-extrabold text-primary text-lg">
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
