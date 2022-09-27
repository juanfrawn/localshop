import { useContext, useState, useEffect } from "react"
import { AppContext } from "../context/AppContext"
import CarritoCards from "./cards/CarritoCards"

import close from '../assets/close.svg'

const Carrito = () => {
    const { showCart, setShowCart, productos, setProductos } = useContext(AppContext)

    const [carritoContent, setCarritoContent] = useState(false);
    const [subTotal, setSubTotal] = useState(0);
    const [shopperPercent, setShopperPercent] = useState(0);


    const handleSubTotal = () => {
        let total = 0
        productos.forEach(producto => {
            total += (producto.total * producto.count)
        })
        setSubTotal(total)
    }

    const handlePercent = () => {
        setShopperPercent(subTotal * 0.1)
    }

    useEffect(() => {
        handleSubTotal()
        handlePercent()
    }, [productos, subTotal])

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
                    {productos.map(producto => (
                        <CarritoCards key={producto.id} product={producto} producto={producto.producto} total={producto.total} img={producto.img} count={producto.count} />
                    ))}
                </div>

                <div className="carrito__footer">
                    <div className="flex justify-between px-4">
                        <p className="">Subtotal</p>
                        <p className="">$ {subTotal}</p>
                    </div>
                    <div className="flex justify-between px-4 mb-2">
                        <p className="">Shopper</p>
                        <p className="">$ {shopperPercent}</p>
                    </div>
                </div>
    
                <div className="carrito__total">
                    <h3 className="">Total</h3>
                    <h3>$ {
                        subTotal + shopperPercent   
                    }</h3>
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