import menu from '../assets/menu.svg'
import logo from '../assets/Logo.svg'
import search from '../assets/search.svg'
import cart from '../assets/cart.svg'

const Navbar = () => {
  return (
    <nav className="p-5 bg-primary">
      <div className='flex justify-between xs:max-w-lg xs:mx-auto'> 
        <div className='flex items-center'>
          <img src={menu} alt="Menú" className='xxs:w-9' />
        </div>
        <div>
          <img src={logo} alt="Logo" className='w-32' />
        </div>
        <section className='flex items-center'>
          <div className='mr-5'>
            <img src={search} alt="Buscar" className='xxs:w-7' />
          </div>
          <div>
            <img src={cart} alt="Carrito" className='xxs:w-5' />
          </div>
        </section>
      </div> 
    </nav>
  )
}

export default Navbar