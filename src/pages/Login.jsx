import { useContext } from 'react'
import { Link, useNavigate  } from 'react-router-dom'

import { AppContext } from '../context/AppContext'

import LoginForm from '../components/form/LoginForm'
import InputLogin from '../components/inputs/InputLogin'
import BotonPrincipal from '../components/buttons/BotonPrincipal'

const Login = () => {
    const { setUser } = useContext(AppContext)
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        setUser({ firstName: 'Juan', lastName: 'Ramirez' , email: 'juan@localshop.cl', number: '12345678', address:'Calle 1' })
        navigate("/cuenta");
    }

  return (
    <section className='text-center mt-20'>
      <h1 className='text-2xxl font-extrabold text-primary mb-6 md:text-3xl md:mb-8 lg:text-5xl lg:mb-10'>Inicia sesión</h1>
      <LoginForm handleLogin={handleLogin}>
        <InputLogin type="email" placeholder="Email" />
        <InputLogin type='password' placeholder='Contraseña' />
        <BotonPrincipal title='Iniciar sesión' color="primary" />
      </LoginForm>
      <p className='text-title'>¿No tienes cuenta? <Link to="/register" className='text-primary'>Registrate</Link></p>
      <Link to="/password" className=' text-primary'>¿Olvidaste tu contraseña?</Link>
    </section>
  )
}

export default Login