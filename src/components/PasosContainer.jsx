import PasoItem from './PasoItem'

import paso1 from '../assets/paso_1.webp'
import paso2 from '../assets/paso_2.webp'
import paso3 from '../assets/paso_3.webp'

const PasosContainer = () => {
  return (
    <section className='mb-16 sm:max-w-lg sm:mb-20 mx-auto md:flex md:max-w-3xl lg:-mt-28 lg:max-w-4xl xl:max-w-5xl'>
        <PasoItem img={paso1} title="1. Buscas tus tiendas" description="Ingresa tu dirección y conoce los favoritos del barrio" />
        <PasoItem img={paso2} title="2. Elige tus productos" description="Los de siempre, los urgentes o las tentaciones" />
        <PasoItem img={paso3} title="3. Recibe el pedido" description="Un shopper de barrio lo llevará lo más rápido posible" />
    </section>
  )
}

export default PasosContainer