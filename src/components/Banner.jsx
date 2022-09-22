import banner from '../assets/Banner.png'

const Banner = () => {
  return (
    <section className='mb-16 xs:mb-20 mt-0'>
        <div className='pb-6 bg-gradient-to-b from-primary via-primary/80 to-white flex justify-center'>
            <div className='xs:max-w-lg'>
              <img src={banner} alt="banner" />
            </div>
        </div>
        <div className='text-center mb-7'>
            <h1 className='text-2xxl xs:text-4xl font-extrabold text-primary'>LOCALSHOP TE SALVA</h1>
            <p className='text-base xs:text-lg'>!Lo más rico de tu barrio en minutos!</p>
        </div>
        <form className='flex flex-col text-center px-5 xs:max-w-lg xs:mx-auto'>
            <input type="text" className='bg-item text-center py-3 rounded-lg mb-3 font-semibold' placeholder='¿Dónde quieres tu pedido?' name="ubicación" id="location" />
            <button className='bg-secondary py-3 rounded-lg text-white font-extrabold text-base xs:text-lg'>Iniciar pedido</button>
        </form>
    </section>
  )
}

export default Banner