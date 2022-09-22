import banner from '../assets/Banner.png'
import bannerLG from '../assets/Banner_lg.png'

const Banner = () => {
  return (
    <section className='mb-16 sm:mb-20 mt-0'>
        <div className='pb-6 bg-gradient-to-b from-primary via-primary/80 to-white flex justify-center'>
            <div className='sm:max-w-lg md:min-w-[700px]'>
              <picture>
                <source srcset={bannerLG} media='(min-width: 768px)' />
                <img src={banner} alt="banner" />
              </picture>
            </div>
        </div>
        <div className='text-center mb-7 md:mb-12'>
            <h1 className='text-2xxl md:text-6xl sm:text-4xl font-extrabold text-primary '>LOCALSHOP TE SALVA</h1>
            <p className='text-base sm:text-xs md:text-2xl'>!Lo más rico de tu barrio en minutos!</p>
        </div>
        <form className='flex flex-col text-center px-5 sm:max-w-lg sm:mx-auto md:max-w-xl'>
            <input type="text" className='bg-item text-center py-3 rounded-lg mb-3 font-semibold md:py-5 md:text-lg' placeholder='¿Dónde quieres tu pedido?' name="ubicación" id="location" />
            <button className='bg-secondary py-3 rounded-lg text-white font-extrabold text-base sm:text-lg md:py-5 md:text-xl'>Iniciar pedido</button>
        </form>
    </section>
  )
}

export default Banner