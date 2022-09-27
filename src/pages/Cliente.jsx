import { Link } from 'react-router-dom'

import Footer from '../components/Footer'
import RegisterContainer from '../components/containers/RegisterContainer'
import RegisterForm from '../components/form/RegisterForm'

import InputPrincipal from '../components/inputs/InputPrincipal'
import InputSecondary from '../components/inputs/InputSecondary'
import BotonPrincipal from '../components/buttons/BotonPrincipal'

const User = () => {
  return (
    <>
    <RegisterContainer>
      <h1 className='text-2xl font-extrabold text-primary mb-6 md:text-3xl md:mb-8 lg:text-5xl lg:mb-10'>Registrate como Cliente</h1>
      <RegisterForm>
        <label htmlFor="emailClient" className='text-start'>Email</label>
        <InputPrincipal type='email' id='emailClient' />
        <label htmlFor="passwordClient" className='text-start'>Contraseña</label>
        <InputPrincipal type='password' id='passwordClient' />
        <label htmlFor="name" className='text-start'>Nombre</label>
        <InputPrincipal type='text' id='name' />
        <label htmlFor="last_name" className='text-start'>Apellido</label>
        <InputPrincipal type='text' id='last_name' />
        <label htmlFor="number" className='text-start'>Teléfono</label>
        <InputSecondary text='+56' type='number' id='number' placeholder='11 1234 5678' />
        <label htmlFor="address" className='text-start'>Dirección</label>
        <InputPrincipal type='text' id='address' />
        
        <BotonPrincipal title='Registrarse' color="primary" />
        
      </RegisterForm>
      <p className='text-title'>Ya tienes cuenta? <Link to="/login" className='text-primary'>Inicia sesión</Link></p>
      <Link to="/register" className=' text-primary'>¿Quieres volver al menú anterior?</Link>
    </RegisterContainer>
    <Footer /> 
    </>
  )
}

export default User