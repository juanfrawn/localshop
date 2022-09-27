import { Link } from 'react-router-dom'

import Footer from '../components/Footer'
import RegisterContainer from '../components/containers/RegisterContainer'
import RegisterForm from '../components/form/RegisterForm'

import InputPrincipal from '../components/inputs/InputPrincipal'
import InputSecondary from '../components/inputs/InputSecondary'
import BotonPrincipal from '../components/buttons/BotonPrincipal'

const Shopper = () => {
  return (
    <>
    <RegisterContainer>
      <h1 className='text-2xl font-extrabold text-primary mb-6 md:text-3xl md:mb-8 lg:text-5xl lg:mb-10'>Registrate como Shopper</h1>
      <RegisterForm>
        <label htmlFor="email" className='text-start'>Email</label>
        <InputPrincipal type='email' id='email' placeholder="Email" />
        <label htmlFor="password" className='text-start'>Contraseña</label>
        <InputPrincipal type='password' id='password' placeholder="Contraseña" />
        <label htmlFor="name" className='text-start'>Nombre</label>
        <InputPrincipal type='text' id='name' placeholder="Nombre" />
        <label htmlFor="last_name" className='text-start'>Apellido</label>
        <InputPrincipal type='text' id='last_name' placeholder="Apellido" />
        <label htmlFor="number" className='text-start'>Teléfono</label>
        <InputSecondary text='+56' type='number' id='number' placeholder='00000000' />
        <label htmlFor="address" className='text-start'>Dirección</label>
        <InputPrincipal type='text' id='address' placeholder="Dirección" />
        <label htmlFor="dni" className='text-start' placeholder='Rut'>Rut o Pasaporte</label>
        <InputPrincipal type='text' id='dni' placeholder="Rut o Pasaporte" />

        <label htmlFor="banco" className='text-start w-full mt-10'>Datos bancarios</label>
        <InputPrincipal type='text' id='banco' placeholder="Banco" />
        <InputPrincipal type='text' id='cuenta' placeholder="00000000" />
        <InputPrincipal type='text' id='cuenta' placeholder="Cuenta" />

        <label htmlFor="birthday" className='text-start mt-10 w-full'>Fecha de nacimiento</label>
        <InputPrincipal type='date' id='birthday' placeholder="Fecha" />
        <label htmlFor="work" className='text-start w-full'>Comuna donde te activarás</label>
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

export default Shopper