import logo from '../assets/logo.svg'

import whatsapp from '../assets/whatsapp.svg'
import email from '../assets/mail.svg'

import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'
import linkedin from '../assets/linkedIn.svg'

const Footer = () => {
  return (
    <footer className='bg-title pb-10'>
        <section className='text-white lg:grid lg:grid-cols-3 lg:py-8 lg:max-w-4xl lg:mx-auto'>
            <div className='py-8'>
                <img src={logo} alt="Localshop" className='mx-auto w-44 md:w-52' />
            </div>
            <div className='md:text-xl text-start lg:grid lg:col-span-2 lg:grid-cols-2'>
                <article className='grid grid-cols-links w-52 mx-auto mb-4 gap-x-2 md:w-64 lg:place-content-center lg:mb-0'>
                    <img src={email} alt="correo" className='w-full' />
                    <p className='self-center'>contacto@localshop.cl</p>
                </article>
                <article className='grid grid-cols-links w-52 mx-auto mb-10 gap-x-2 md:w-64 lg:place-content-center lg:mb-0'>
                    <img src={whatsapp} alt="whatsapp" className='w-full' />
                    <p className='self-center'>+56 9 5368 9258</p>
                </article>
            </div>
        </section>
        <section className='flex justify-center gap-x-3 mb-8'>
            <img src={facebook} className="md:w-5" alt="Facebook" />
            <img src={instagram} className="md:w-9" alt="Instagram" />
            <img src={twitter} className="md:w-9" alt="Twitter" />
            <img src={linkedin} className="md:w-8" alt="Linkedin" />
        </section>
        <section className='text-white text-center'>
            <p className='mb-2'>Acortando la brecha digital democratizando el delivery</p>
            <a className='text-primary block mb-2'>Terminos y condiciones</a>
            <p>Pioneros en Conversational Commerce en Chile</p>
        </section>
    </footer>
  )
}

export default Footer