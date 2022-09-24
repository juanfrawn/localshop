import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <section className='text-center mt-20'>
      <h1 className='text-2xxl font-extrabold text-primary mb-6 md:text-3xl md:mb-8 lg:text-5xl lg:mb-10'>Inicia sesión</h1>
      <form className='flex flex-col max-w-lg px-4 mb-4 mx-auto'>
        <input type='email' placeholder='Email' className='border-2 mb-3 p-3 px-2 rounded-md' />
        <input type='password' placeholder='Contraseña' className='border-2 mb-3 p-3 px-2 rounded-md' />
        <button className='bg-primary text-white font-extrabold p-3 rounded-lg'>Iniciar sesión</button>
      </form>
      <p className='text-title'>¿No tienes cuenta? <Link to="/register" className='text-primary'>Registrate</Link></p>
      <Link to="/password" className=' text-primary'>¿Olvidaste tu contraseña?</Link>
    </section>
  )
}

export default Login