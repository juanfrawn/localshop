import UneteCard from "./cards/UneteCard"

import tienda from "../assets/tienda.webp"
import shopper from "../assets/shopper.webp"

const Unete = () => {
  return (
    <section className="unete__container">
        <h2 className="unete__title">UNETE A <span className="text-primary">LOCALSHOP</span></h2>
        <div className="unete__cards__container">
            <UneteCard img={tienda} title="Unete como Tienda" description="¡Ser parte de Localshop es gratis y fácil! Únete con tecnología que conoces" cta="¡Inscribe tu local gratis!" url="/tienda" />
            <UneteCard img={shopper} title="Unete como Shopper" description="Ten ingresos extras en tu propio barrio, incluso a pie" cta="¡Quiero ser shopper!" url="/shopper" />
        </div>
    </section>
  )
}

export default Unete