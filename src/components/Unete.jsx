import UneteCard from "./UneteCard"

import tienda from "../assets/tienda.jpg"
import shopper from "../assets/shopper.png"

const Unete = () => {
  return (
    <section className="text-center mb-16">
        <h2 className="mb-11 font-extrabold text-title text-xl">UNETE A <span className="text-primary">LOCALSHOP</span></h2>
        <div>
            <UneteCard img={tienda} title="Unete como Tienda" description="¡Ser parte de Localshop es gratis y fácil! Únete con tecnología que conoces" cta="¡Inscribe tu local gratis!" />
            <UneteCard img={shopper} title="Unete como Shopper" description="Ten ingresos extras en tu propio barrio, incluso a pie" cta="¡Quiero ser shopper de barrio!" />
        </div>
    </section>
  )
}

export default Unete