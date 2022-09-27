import { useState } from "react"

const CarritoCards = ({ producto, total, img}) => {
    const [count, setCount] = useState(1)

    const handleDecrement = () => {
        if(count === 1) {
            setCount(1)
        } else {
            setCount(count - 1)
        }
    }

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
                <span className="font-extrabold">{count}</span>
                <button className="carrito__card__item__quantity__btn" onClick={() => setCount(count + 1)}>+</button>
            </div>
        </div>
    </article>
  )
}

export default CarritoCards