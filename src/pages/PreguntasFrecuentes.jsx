import PreguntasToggle from "../components/PreguntasToggle"

import { clientes, shopper, tiendas } from '../Utils/Questions'

const PreguntasFrecuentes = () => {
  return (
    <section className='mt-8'>
      <h1 className='text-center font-bold text-primary text-2xl mb-5 md:text-3xl lg:text-4xl md:mb-10'>Preguntas Frecuentes</h1>
      <section>
        <PreguntasToggle title="Para Clientes" questions={clientes} />
        <PreguntasToggle title="Para Shopper" questions={shopper} />
        <PreguntasToggle title="Para Tiendas" questions={tiendas} />
      </section>
    </section>
  )
}

export default PreguntasFrecuentes