import UneteCard from "./UneteCard"

import tienda from "../assets/tienda.jpg"
import shopper from "../assets/shopper.png"

const Unete = () => {
  return (
    <section className="text-center mb-16 sm:max-w-lg sm:mx-auto md:max-w-3xl lg:max-w-4xl">
        <h2 className="mb-11 font-extrabold text-title text-xl sm:text-2xxl md:text-4xl">UNETE A <span className="text-primary">LOCALSHOP</span></h2>
        <div className="md:grid md:grid-cols-2 md:gap-x-4 lg:grid-cols-1">
            <UneteCard img={tienda} title="Unete como Tienda" description="¡Ser parte de Localshop es gratis y fácil! Únete con tecnología que conoces" cta="¡Inscribe tu local gratis!" />
            <UneteCard img={shopper} title="Unete como Shopper" description="Ten ingresos extras en tu propio barrio, incluso a pie" cta="¡Quiero ser shopper!" />
        </div>
    </section>
  )
}

export default Unete