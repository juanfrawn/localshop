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
    <article className="grid grid-cols-carrito lg:grid-cols-carritoXL px-2 mb-8">
        <div>
            <img src={img} alt=""/>
        </div>
        <div className="flex justify-between self-center">
            <div>
                <h3 className="font-extrabold text-lg">{producto}</h3>
                <span className="font-extrabold">$ {total}</span>
            </div>
            <div className="self-center">
                <button className="w-6 bg-stone-300/70 rounded-md mx-2" onClick={handleDecrement}>-</button>
                <span className="font-extrabold">{count}</span>
                <button className="w-6 bg-stone-300/70 rounded-md mx-2" onClick={() => setCount(count + 1)}>+</button>
            </div>
        </div>
    </article>
  )
}

export default CarritoCards