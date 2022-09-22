import React from 'react'

const Newsletter = () => {
  return (
    <section className='mb-16 text-center'>
        <p className='font-extrabold -mb-1 sm:text-lg'>SUSCRIBETE A NUESTRO</p>
        <h2 className='text-4xl font-extrabold text-primary mb-1 sm:text-5xl sm:mb-4'>NEWSLETTER</h2>
        <p className='text-sm mb-4 sm:text-base sm:px-4 sm:mb-8 md:w-96 md:mx-auto md:mb-6'>Déjanos tu correo y estarás al tanto de todas las tendencias del barrio.</p>
        <form className='flex flex-col text-center px-5 sm:max-w-lg sm:mx-auto md:max-w-xl'>
            <input type="text" className='bg-item text-center py-3 rounded-lg mb-3 font-semibold md:py-5 md:text-lg' placeholder='Nombre' name="ubicación" id="location" />
            <input type="text" className='bg-item text-center py-3 rounded-lg mb-3 font-semibold md:py-5 md:text-lg' placeholder='Email' name="ubicación" id="location" />
            <button className='bg-secondary py-3 rounded-lg text-white font-extrabold text-base md:py-5 md:text-xl'>Enviar</button>
        </form>
    </section>
  )
}

export default Newsletter