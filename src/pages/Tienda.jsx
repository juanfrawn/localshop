import { Link } from 'react-router-dom'

import Footer from '../components/Footer'
import RegisterContainer from '../components/containers/RegisterContainer'
import RegisterForm from '../components/form/RegisterForm'

import InputPrincipal from '../components/inputs/InputPrincipal'
import InputSecondary from '../components/inputs/InputSecondary'
import BotonPrincipal from '../components/buttons/BotonPrincipal'

const Tienda = () => {
  return (
    <>
    <RegisterContainer>
      <h1 className='text-2xl font-extrabold text-primary mb-6 md:text-3xl md:mb-8 lg:text-5xl lg:mb-10'>Registrate como Tienda</h1>
      <RegisterForm>
        <label htmlFor="email" className='text-start'>Email</label>
        <InputPrincipal type='email' id='email' placeholder="Email" />
        <label htmlFor="email2" className='text-start'>Confirmar email</label>
        <InputPrincipal type='email' id='email2' placeholder="Confirmar email" />
        <label htmlFor="password" className='text-start'>Contraseña</label>
        <InputPrincipal type='password' id='password' placeholder="Contraseña" />
        <label htmlFor="password2" className='text-start'>Confirmar contraseña</label>
        <InputPrincipal type='password' id='password2' placeholder="Confirmar contraseña" />
        <label htmlFor="name" className='text-start'>Nombre del dueño</label>
        <InputPrincipal type='text' id='name' placeholder="Nombre del dueño" />
        <label htmlFor="last_name" className='text-start'>Apellido del dueño</label>
        <InputPrincipal type='text' id='last_name' placeholder="Apellido del dueño" />
        <label htmlFor="dni" className='text-start' placeholder='Rut'>Rut o Pasaporte</label>
        <InputPrincipal type='text' id='dni' placeholder="Rut o Pasaporte" />
        <label htmlFor="razon_social" className='text-start' placeholder='Rut'>Razon Social</label>
        <InputPrincipal type='text' id='razon_social' placeholder="Razon Social" />
        <label htmlFor="number" className='text-start'>Teléfono</label>
        <InputSecondary text='+56' type='number' id='number' placeholder='00000000' />
        <label htmlFor="local" className='text-start'>Nombre del local</label>
        <InputPrincipal type='text' id='local' placeholder="Nombre del local" />
        <label htmlFor="rut_local" className='text-start'>Rut del local</label>
        <InputPrincipal type='text' id='rut_local' placeholder="Rut del local" />
        <label htmlFor="address" className='text-start'>Dirección</label>
        <InputPrincipal type='text' id='address' placeholder="Dirección" />
        <label htmlFor="work" className='text-start w-full'>Comuna</label>
        <InputPrincipal type='text' id='work' placeholder="Comuna" />
        
        <BotonPrincipal title='Siguiente' color="primary" />
      </RegisterForm>
      <p className='text-title'>Ya tienes cuenta? <Link to="/login" className='text-primary'>Inicia sesión</Link></p>
      <Link to="/register" className=' text-primary'>¿Quieres volver al menú anterior?</Link>
    </RegisterContainer>
    <Footer /> 
    </>
  )
}

export default Tienda