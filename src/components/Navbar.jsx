import menu from '../assets/menu.svg'
import logo from '../assets/Logo.svg'
import search from '../assets/search.svg'
import cart from '../assets/cart.svg'

const Navbar = () => {
  return (
    <div className="bg-primary flex justify-between p-5">
        <div>
          <img src={menu} alt="Menú" />
        </div>
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div className='flex items-center'>
          <div className='mr-4'>
            <img src={search} alt="Buscar" />
          </div>
          <div>
            <img src={cart} alt="Carrito" />
          </div>
        </div>
    </div>
  )
}

export default Navbar