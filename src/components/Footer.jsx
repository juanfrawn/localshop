import logo from '../assets/logo.svg'

import whatsapp from '../assets/whatsapp.svg'
import email from '../assets/mail.svg'

import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'
import linkedin from '../assets/linkedIn.svg'

const Footer = () => {
  return (
    <footer className='bg-title'>
        <section className='text-white'>
            <div className='py-8'>
                <img src={logo} alt="Localshop" className='mx-auto w-44' />
            </div>
            <div>
                <article className='grid grid-cols-links text-start w-52 mx-auto mb-4 gap-x-2'>
                    <img src={email} alt="correo" className='w-full' />
                    <p className='self-center'>contacto@localshop.cl</p>
                </article>
                <article className='grid grid-cols-links text-start w-52 mx-auto mb-10 gap-x-2'>
                    <img src={whatsapp} alt="whatsapp" className='w-full' />
                    <p className='self-center'>+56 9 5368 9258</p>
                </article>
            </div>
        </section>
        <section className='flex justify-center gap-x-3 mb-8'>
            <img src={facebook} alt="Facebook" />
            <img src={instagram} alt="Instagram" />
            <img src={twitter} alt="Twitter" />
            <img src={linkedin} alt="Linkedin" />
        </section>
        <section className='text-white text-center'>
            <p>Acortando la brecha digital democratizando el delivery</p>
            <a className='text-primary'>Terminos y condiciones</a>
            <p>Pioneros en Conversational Commerce en Chile</p>
        </section>
    </footer>
  )
}

export default Footer