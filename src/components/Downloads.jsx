import BotonComprar from "./buttons/BotonComprar"

import whatsapp from "../assets/whatsapp.svg"
import play_store from '../assets/play_store.svg'
import apple from "../assets/apple.svg"
import local from "../assets/local.svg"


const Downloads = () => {
  return (
    <section className="mb-16 sm:max-w-lg sm:mx-auto md:max-w-3xl md:grid md:grid-cols-2 lg:max-w-4xl xl:max-w-5xl">
        <BotonComprar icon={whatsapp} text="Compra directo por WhatsApp" color="bg-secondary" />
        <BotonComprar icon={play_store} text="Descarga la app en Google Play" color="bg-title" />
        <BotonComprar icon={apple} text="Descarga la app en la App Store" color="bg-title" />
        <BotonComprar icon={local} text="Compra directo por nuestra web" color="bg-primary" />
    </section>
  )
}

export default Downloads