import { useContext, useState, useEffect } from "react"
import { AppContext } from "../context/AppContext"
import CarritoCards from "./CarritoCards"

import producto1 from '../assets/producto_1.png'
import producto2 from '../assets/producto_2.png'

import close from '../assets/close.svg'

const Carrito = () => {
    const { showCart, setShowCart } = useContext(AppContext)

    const [carritoContent, setCarritoContent] = useState(false);

    useEffect(() => {
        if (showCart) {
            setTimeout(() => {
                setCarritoContent(true);
            }, 300);
        } else {
            setCarritoContent(false);
        }
    }, [showCart]);

  return (
    <section className={`${showCart ? 'w-full' : 'w-0'} h-screen max-w-sm bg-white/90 absolute top-0 right-0 z-10 duration-700`}>
        <div className={`text-title ${carritoContent ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
            <div className={carritoContent ? '' : 'hidden'}>
            <div className="flex justify-between px-6">
                <h3 className="text-center font-extrabold text-3xl my-10 lg:text-3xl">Tu carrito</h3>
                <img className="w-8 cursor-pointer lg:w-7" src={close} alt="Cerrar carrito" onClick={() => setShowCart(false)} />
            </div>

            <div>
                <CarritoCards img={producto1} producto="Agua con sabor" total={2990} />
                <CarritoCards img={producto2} producto="Papas fritas" total={2990} />
                <CarritoCards img={producto1} producto="Agua con sabor" total={2990} />
            </div>

            <div className="flex justify-between px-4 font-extrabold text-xl mb-4">
                <h3 className="">Total</h3>
                <h3>$ 5990</h3>
            </div>

            <div className="font-extrabold text-xl px-2 lg:px-8">
                <button className="bg-primary text-white w-full rounded-lg py-2 mb-4">Comprar</button>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Carrito