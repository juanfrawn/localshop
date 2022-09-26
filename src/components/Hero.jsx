import comrpomiso from '../assets/compromiso.webp'

const Hero = () => {
  return (
    <section className='bg-secondary text-center text-white py-10 mb-16'>
        <img src={comrpomiso} className="w-20 mx-auto mb-4" alt="Nuestro compromiso" />
        <h3 className='font-extrabold text-2xl mb-3 sm:text-2xxl'>Compromiso Localshop</h3>
        <p className='font-semibold px-4 text-sm sm:px-10 sm:text-base md:px-40'>Entregamos el 10% de las ganancias a la respectiva comunidad local para proyectos que mejoren su calidad vida.</p>
    </section>
  )
}

export default Hero