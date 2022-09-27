import { useContext, useState, useEffect } from "react"
import { AppContext } from "../context/AppContext"
import CarritoCards from "./cards/CarritoCards"

import producto1 from '../assets/producto_1.webp'
import producto2 from '../assets/producto_2.webp'

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
    <section className={`${showCart ? 'w-full' : 'w-0'} carrito__container`}>
        <div className={`text-title ${carritoContent ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
            <div className={carritoContent ? '' : 'hidden'}>
                <div className="carrito__header">
                    <h3 className="carrito__header-title">Tu carrito</h3>
                    <img className="carrito__header-icon" src={close} alt="Cerrar carrito" onClick={() => setShowCart(false)} />
                </div>
    
                <div>
                    <CarritoCards img={producto1} producto="Agua con sabor" total={2990} />
                    <CarritoCards img={producto2} producto="Papas fritas" total={2990} />
                    <CarritoCards img={producto1} producto="Agua con sabor" total={2990} />
                </div>
    
                <div className="carrito__total">
                    <h3 className="">Total</h3>
                    <h3>$ 5990</h3>
                </div>
    
                <div className="carrito__button">
                    <button className="bg-primary text-white w-full rounded-lg py-2 mb-4">Comprar</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Carrito