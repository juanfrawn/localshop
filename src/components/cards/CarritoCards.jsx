import { useContext, useState } from "react"
import { AppContext } from "../../context/AppContext"

const CarritoCards = ({ producto, total, img, product}) => {
    const { productos, setProductos } = useContext(AppContext)

    const handleDecrement = () => {
        if (product.count > 1) {
            setProductos(productos.map(item => {
                if (item.id === product.id) {
                    return { ...item, count: item.count - 1 }
                }
                return item
        }))} else {
            setProductos(productos.filter(item => item.id !== product.id))
        }
    }

    const handleIncrement = () => {
        setProductos(productos.map(item => {
            if (item.id === product.id) {
                return { ...item, count: item.count + 1 }
            }
            return item
        }))
    }

    if(1 > 0) {
        return (
            <article className="carrito__card">
                <div>
                    <img src={img} alt="Carrito item"/>
                </div>
                <div className="carrito__card__content">
                    <div>
                        <h3 className="carrito__card__item__name">{producto}</h3>
                        <span className="carrito__card__item__price">$ {total}</span>
                    </div>
                    <div className="self-center">
                        <button className="carrito__card__item__quantity__btn" onClick={handleDecrement}>-</button>
                        <span className="font-extrabold">{product.count}</span>
                        <button className="carrito__card__item__quantity__btn" onClick={handleIncrement}>+</button>
                    </div>
                </div>
            </article>
          )
    }

    return null
}

export default CarritoCards