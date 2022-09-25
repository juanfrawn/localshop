import React from 'react'
import{ useContext } from 'react'
import { AppContext } from '../context/AppContext'

import CuentaOption from '../components/CuentaOption'

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

        <section className='px-4 max-w-lg mx-auto md:max-w-2xl lg:px-0'>
            <CuentaOption title="Perfil general" img={setting} />

            <CuentaOption title="Mi saldo" img={cash} />

            <CuentaOption title="Metodos de pago" img={cards} />

            <CuentaOption title="Historial de pedidos" img={pick} />

            <CuentaOption title="Cupones" img={cupones} />

            <CuentaOption title="Cerrar sesión" img={signout} />
        </section>
    </section>
    <section className='hidden lg:block px-8'>
        <h1 className='my-10 text-3xl font-extrabold'>Perfil General</h1>
        <section className=''>
        <form className='flex flex-col' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="email" className='text-start'>Email</label>
        <input type='email' id='email' className='border-2 mb-6 p-1 px-2 rounded-md' />
        <label htmlFor="password" className='text-start'>Contraseña</label>
        <input type='password' id='password' className='border-2 mb-6 p-1 px-2 rounded-md' />
        <label htmlFor="name" className='text-start'>Nombre</label>
        <input type='text' id='name' className='border-2 mb-6 p-1 px-2 rounded-md' value={user.firstName} />
        <label htmlFor="last_name" className='text-start'>Apellido</label>
        <input type='text' id='last_name' className='border-2 mb-6 p-1 px-2 rounded-md' value={user.lastName} />
        <label htmlFor="address" className='text-start'>Teléfono</label>
        <div className='flex mb-4 items-stretch'>
          <span className='bg-stone-300/50 self-center py-3 px-3'>+56</span>
          <input type='text' id='address' className='w-full border-6 p-1 px-2 rounded-md' value={user.number} />
        </div>
        <label htmlFor="address" className='text-start'>Dirección</label>
        <input type='text' id='address' className='border-2 mb-6 p-1 px-2 rounded-md' value={user.address} />
        
        <button className='bg-primary text-white font-extrabold p-2 rounded-lg'>Actualizar</button>
      </form>
        </section>
    </section>
    </section>
  )
}

export default Cuenta