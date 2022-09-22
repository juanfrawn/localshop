import PasoItem from './PasoItem'

import paso1 from '../assets/paso_1.png'
import paso2 from '../assets/paso_2.png'
import paso3 from '../assets/paso_3.png'

const PasosContainer = () => {
  return (
    <section className='mb-16'>
        <PasoItem img={paso1} title="1. Buscas tus tiendas" description="Ingresa tu dirección y conoce los favoritos del barrio" />
        <PasoItem img={paso2} title="2. Elige tus productos" description="Los de siempre, los urgentes o las tentaciones" />
        <PasoItem img={paso3} title="3. Recibe el pedido" description="Un shopper de barrio lo llevará lo más rápido posible" />
    </section>
  )
}

export default PasosContainer