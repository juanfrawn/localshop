import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const User = () => {
  return (
    <>
    <section className='text-center my-10'>
      <h1 className='text-2xl font-extrabold text-primary mb-6 md:text-3xl md:mb-8 lg:text-5xl lg:mb-10'>Registrate como Cliente</h1>
      <form className='flex flex-col max-w-lg px-4 mb-4 mx-auto'>
        <label htmlFor="email" className='text-start'>Email</label>
        <input type='email' id='email' className='border-2 mb-3 p-3 px-2 rounded-md' />
        <label htmlFor="password" className='text-start'>Contraseña</label>
        <input type='password' id='password' className='border-2 mb-3 p-3 px-2 rounded-md' />
        <label htmlFor="name" className='text-start'>Nombre</label>
        <input type='text' id='name' className='border-2 mb-3 p-3 px-2 rounded-md' />
        <label htmlFor="last_name" className='text-start'>Apellido</label>
        <input type='text' id='last_name' className='border-2 mb-3 p-3 px-2 rounded-md' />
        <label htmlFor="address" className='text-start'>Teléfono</label>
        <div className='flex mb-3 items-stretch'>
          <span className='bg-stone-300/50 self-center py-3 px-3'>+56</span>
          <input type='text' id='address' className='w-full border-2 p-3 px-2 rounded-md' />
        </div>
        <label htmlFor="address" className='text-start'>Dirección</label>
        <input type='text' id='address' className='border-2 mb-3 p-3 px-2 rounded-md' />
        
        <button className='bg-primary text-white font-extrabold p-3 rounded-lg'>Siguiente</button>
      </form>
      <p className='text-title'>Ya tienes cuenta? <Link to="/login" className='text-primary'>Inicia sesión</Link></p>
      <Link to="/register" className=' text-primary'>¿Quieres volver al menú anterior?</Link>
    </section>
    <Footer /> 
    </>
  )
}

export default User