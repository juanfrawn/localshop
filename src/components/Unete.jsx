import UneteCard from "./cards/UneteCard"

import tienda from "../assets/tienda.webp"
import shopper from "../assets/shopper.webp"

const Unete = () => {
  return (
    <section className="text-center mb-16 sm:max-w-lg sm:mx-auto md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
        <h2 className="mb-11 font-extrabold text-title text-xl sm:text-2xxl md:text-4xl">UNETE A <span className="text-primary">LOCALSHOP</span></h2>
        <div className="px-2 md:grid md:grid-cols-2 md:gap-x-4 md:px-0 lg:grid-cols-1">
            <UneteCard img={tienda} title="Unete como Tienda" description="¡Ser parte de Localshop es gratis y fácil! Únete con tecnología que conoces" cta="¡Inscribe tu local gratis!" url="/tienda" />
            <UneteCard img={shopper} title="Unete como Shopper" description="Ten ingresos extras en tu propio barrio, incluso a pie" cta="¡Quiero ser shopper!" url="/shopper" />
        </div>
    </section>
  )
}

export default Unete