import banner from '../assets/Banner.png'

const Banner = () => {
  return (
    <section className='mb-16'>
        <div className='pb-6 bg-gradient-to-b from-primary via-primary/80 to-white'>
            <img src={banner} alt="banner" />
        </div>
        <div className='text-center mb-7'>
            <h1 className='text-2xl font-extrabold text-primary'>LOCALSHOP TE SALVA</h1>
            <p className='text-base'>!Lo más rico de tu barrio en minutos!</p>
        </div>
        <form className='flex flex-col text-center px-5'>
            <input type="text" className='bg-item text-center py-3 rounded-lg mb-3 font-semibold' placeholder='¿Dónde quieres tu pedido?' name="ubicación" id="location" />
            <button className='bg-secondary py-3 rounded-lg text-white font-extrabold text-base'>Iniciar pedido</button>
        </form>
    </section>
  )
}

export default Banner