import React from 'react'

const Newsletter = () => {
  return (
    <section className='mb-16 text-center'>
        <p className='font-extrabold -mb-1 xs:text-lg'>SUSCRIBETE A NUESTRO</p>
        <h2 className='text-4xl font-extrabold text-primary mb-1 xs:text-5xl xs:mb-4'>NEWSLETTER</h2>
        <p className='text-sm mb-4 xs:text-base xs:px-4 xs:mb-8'>Déjanos tu correo y estarás al tanto de todas las tendencias del barrio.</p>
        <form className='flex flex-col text-center px-5 xs:max-w-lg xs:mx-auto'>
            <input type="text" className='bg-item text-center py-3 rounded-lg mb-3 font-semibold' placeholder='Nombre' name="ubicación" id="location" />
            <input type="text" className='bg-item text-center py-3 rounded-lg mb-3 font-semibold' placeholder='Email' name="ubicación" id="location" />
            <button className='bg-secondary py-3 rounded-lg text-white font-extrabold text-base'>Enviar</button>
        </form>
    </section>
  )
}

export default Newsletter