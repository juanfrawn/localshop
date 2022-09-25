import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const Tienda = () => {
  return (
    <>
    <section className='text-center my-10'>
      <h1 className='text-2xl font-extrabold text-primary mb-6 md:text-3xl md:mb-8 lg:text-5xl lg:mb-10'>Registrate como Tienda</h1>
      <form className='flex flex-col max-w-lg px-4 mb-4 mx-auto'>
        <label htmlFor="email" className='text-start'>Email</label>
        <input type='email' id='email' className='border-2 mb-3 p-3 px-2 rounded-md' placeholder='Email' />
        <label htmlFor="email2" className='text-start'>Confirmar email</label>
        <input type='email2' id='email' className='border-2 mb-3 p-3 px-2 rounded-md' placeholder='Email' />
        <label htmlFor="password" className='text-start'>Contraseña</label>
        <input type='password' id='password' className='border-2 mb-3 p-3 px-2 rounded-md' placeholder='Contraseña' />
        <label htmlFor="password2" className='text-start'>Confirmar contraseña</label>
        <input type='password2' id='password' className='border-2 mb-3 p-3 px-2 rounded-md' placeholder='Contraseña' />
        <label htmlFor="name" className='text-start'>Nombre del dueño</label>
        <input type='text' id='name' className='border-2 mb-3 p-3 px-2 rounded-md' placeholder='Nombre' />
        <label htmlFor="last_name" className='text-start'>Apellido del dueño</label>
        <input type='text' id='last_name' className='border-2 mb-3 p-3 px-2 rounded-md' placeholder='Apellido' />
        <label htmlFor="dni" className='text-start' placeholder='Rut'>Rut o Pasaporte</label>
        <input type='text' id='dni' className='border-2 mb-3 p-3 px-2 rounded-md' placeholder='Rut' />
        <label htmlFor="razon_social" className='text-start' placeholder='Rut'>Razon Social</label>
        <input type='text' id='razon_social' className='border-2 mb-3 p-3 px-2 rounded-md' placeholder='Razón social' />
        <label htmlFor="address" className='text-start'>Teléfono</label>
        <div className='flex mb-3 items-stretch'>
          <span className='bg-stone-300/50 self-center py-3 px-3'>+56</span>
          <input type='text' id='address' className='w-full border-2 p-3 px-2 rounded-md' placeholder='00000000' />
        </div>
        <label htmlFor="local" className='text-start'>Nombre del local</label>
        <input type='text' id='local' className='border-2 mb-3 p-3 px-2 rounded-md' placeholder='Local' />
        <label htmlFor="rut_local" className='text-start'>Rut del local</label>
        <input type='text' id='rut_local' className='border-2 mb-3 p-3 px-2 rounded-md' placeholder='11.111.111-1' />
        <label htmlFor="address" className='text-start'>Dirección</label>
        <input type='text' id='address' className='border-2 mb-3 p-3 px-2 rounded-md' placeholder='Dirección' />
        <label htmlFor="work" className='text-start w-full'>Comuna</label>
        <input type='text' id='work' className='w-full border-2 mb-8 p-3 px-2 rounded-md' placeholder='Comuna' />
        
        <button className='bg-primary text-white font-extrabold p-3 rounded-lg'>Siguiente</button>
      </form>
      <p className='text-title'>Ya tienes cuenta? <Link to="/login" className='text-primary'>Inicia sesión</Link></p>
      <Link to="/register" className=' text-primary'>¿Quieres volver al menú anterior?</Link>
    </section>
    <Footer /> 
    </>
  )
}

export default Tienda