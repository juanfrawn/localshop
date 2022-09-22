import comrpomiso from '../assets/compromiso.png'

const Hero = () => {
  return (
    <section className='bg-secondary text-center text-white py-10 mb-16'>
        <img src={comrpomiso} className="w-20 mx-auto mb-4" alt="Nuestro compromiso" />
        <h3 className='font-extrabold text-2xl mb-3'>Compromiso Localshop</h3>
        <p className='font-semibold text-sm'>Entregamos el 10% de las ganancias a la respectiva comunidad local para proyectos que mejoren su calidad vida.</p>
    </section>
  )
}

export default Hero