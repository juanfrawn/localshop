import comrpomiso from '../assets/compromiso.webp'

const Hero = () => {
  return (
    <section className='hero__container'>
        <img src={comrpomiso} className="hero__image" alt="Nuestro compromiso" />
        <h3 className='hero__title'>Compromiso Localshop</h3>
        <p className='hero__description'>Entregamos el 10% de las ganancias a la respectiva comunidad local para proyectos que mejoren su calidad vida.</p>
    </section>
  )
}

export default Hero