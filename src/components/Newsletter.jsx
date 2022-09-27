import BotonPrincipal from "./buttons/BotonPrincipal"

const Newsletter = () => {
  return (
    <section className='newsletter__container'>
        <p className='newsletter__subtitle'>SUSCRIBETE A NUESTRO</p>
        <h2 className='newsletter__title'>NEWSLETTER</h2>
        <p className='newsletter__description'>Déjanos tu correo y estarás al tanto de todas las tendencias del barrio.</p>
        <form className='newsletter__form'>
            <input type="text" className='newsletter__input' placeholder='Nombre' name="ubicación" id="location" />
            <input type="text" className='newsletter__input' placeholder='Email' name="ubicación" id="location" />
            <BotonPrincipal title='Enviar' color='secondary' />
        </form>
    </section>
  )
}

export default Newsletter