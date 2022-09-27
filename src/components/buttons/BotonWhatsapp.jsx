import Whatsapp from '../../assets/whatsapp.svg'

const BotonWhatsapp = () => {
  return (
    <article className='fixed bottom-8 right-8 bg-secondary rounded-full p-2 shadow-xl hover:scale-110 transition-transform cursor-pointer duration-500'>
        <img src={Whatsapp} alt="Contactanos por whatsapp" className='w-10' />
    </article>
  )
}

export default BotonWhatsapp