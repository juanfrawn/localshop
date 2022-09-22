import menu from '../assets/menu.svg'
import logo from '../assets/Logo.svg'
import logoLG from '../assets/logo_xl.svg'
import search from '../assets/search.svg'
import cart from '../assets/cart.svg'
import arrow from '../assets/arrow.svg'

const Navbar = () => {
  return (
    <nav className="p-5 bg-primary">
      <div className='flex justify-between sm:max-w-lg sm:mx-auto md:max-w-2xl lg:max-w-4xl lg:grid lg:grid-cols-navbar'> 
        <div className='flex items-center lg:hidden'>
          <img src={menu} alt="Menú" className='w-8 md:w-11' />
        </div>
        <div>
          <picture>
            <source srcset={logoLG} media='(min-width: 1024px)' />
            <img src={logo} alt="Logo" className='w-32 md:w-52 lg:w-44' />
          </picture>
        </div>
        <section className='hidden lg:block self-center'>
          <ul className='flex justify-end items-center gap-x-8 mr-8'>
            <li>
              <a href="#" className='text-white text-sm font-bold'>Blog</a>
            </li>
            <li>
              <a href="#" className='text-white text-sm font-bold'>Preguntas Frecuentes</a>
            </li>
            <li>
              <a href="#" className='text-white text-sm font-bold flex items-center'>
                Iniciar Sesión
                <span className='ml-1'><img src={arrow} alt="Más opciones" /></span>
              </a>
            </li>
            <li>
              <a href="#" className='text-white text-sm font-bold flex items-center'>
                Registrarte
                <span className='ml-1'><img src={arrow} alt="Más opciones" /></span>
              </a>
            </li>
          </ul>
        </section>
        <section className='flex items-center'>
          <div className='mr-5 lg:hidden'>
            <img src={search} alt="Buscar" className='sm:w-7' />
          </div>
          <div>
            <img src={cart} alt="Carrito" className='sm:w-5' />
          </div>
        </section>
      </div> 
    </nav>
  )
}

export default Navbar