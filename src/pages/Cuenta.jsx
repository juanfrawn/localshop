import{ useContext } from 'react'
import { AppContext } from '../context/AppContext'

import CuentaOptions from '../components/containers/CuentaOptions'
import CuentaUpdate from '../components/containers/CuentaUpdate'
import CuentaOption from '../components/CuentaOption'

import CuentaForm from '../components/form/CuentaForm'
import InputPrincipal from '../components/inputs/InputPrincipal'
import InputSecondary from '../components/inputs/InputSecondary'
import BotonPrincipal from '../components/buttons/BotonPrincipal'

import profile from '../assets/profile.webp'
import setting from '../assets/Profile/user.svg'
import cupones from '../assets/Profile/bill.svg'
import cards from '../assets/Profile/card.svg'
import cash from '../assets/Profile/money.svg'
import pick from '../assets/Profile/pedido.svg'
import signout from '../assets/Profile/signout.svg'


const Cuenta = () => {
    const {user} = useContext(AppContext)

  return (
    <section className='lg:grid lg:grid-cols-usuario max-w-5xl mx-auto'>
      <section className='flex flex-col text-center my-4 md:my-8'>
          <section className='w-[100px] mx-auto mb-4 md:w-[150px] md:mb-6 lg:w-[80px]'>
              <img src={profile} alt="Usuario" className='rounded-full' />
          </section>
          <h1 className='font-extrabold text-xl mb-4 md:text-2xxl lg:text-xl'>Hola <span>{user?.name || 'Juan'}</span></h1>
          <CuentaOptions>
              <CuentaOption title="Perfil general" img={setting} />
              <CuentaOption title="Mi saldo" img={cash} />
              <CuentaOption title="Metodos de pago" img={cards} />
              <CuentaOption title="Historial de pedidos" img={pick} />
              <CuentaOption title="Cupones" img={cupones} />
              <CuentaOption title="Cerrar sesión" img={signout} />
          </CuentaOptions>

      </section>
    <CuentaUpdate>
        <h1 className='my-10 text-3xl font-extrabold'>Perfil General</h1>
        <section>
          <CuentaForm>
            <label htmlFor="email" className='text-start'>Email</label>
            <InputPrincipal type="email" id="email" placeholder="Email" />
            <label htmlFor="password" className='text-start'>Contraseña</label>
            <InputPrincipal type="password" id="password" placeholder="Contraseña" />
            <label htmlFor="name" className='text-start'>Nombre</label>
            <InputPrincipal type="text" id="name" placeholder="Nombre" value={user.firstName} />
            <label htmlFor="last_name" className='text-start'>Apellido</label>
            <InputPrincipal type="text" id="last_name" placeholder="Apellido" value={user.lastName} />
            <label htmlFor="number" className='text-start'>Teléfono</label>
            <InputSecondary text="+56" type="text" id="number" value={user.phone} />
            <label htmlFor="address" className='text-start'>Dirección</label>
            <InputPrincipal type="text" id="address" placeholder="Dirección" value={user.address} />

            <BotonPrincipal title="Actualizar" color="primary" />
            </CuentaForm>
        </section>
    </CuentaUpdate>
    </section>
  )
}

export default Cuenta