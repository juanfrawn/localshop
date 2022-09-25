import clock from "../assets/time.svg";
import fav from "../assets/fav.svg";

const LocalCard = ({ title, category, address, time, stars, img}) => {
  return (
    <article className="rounded-xl mb-8 sm:max-w-lg md:max-w-xs lg:max-w-[32%] mx-auto">
        <div>
            <img src={img} alt="Imagen" className="rounded-t-xl" />
        </div>
        <div className="flex justify-between">
            <div>
                <h2 className="font-extrabold text-xl text-title mt-2">{title}</h2>
                <p className="text-xs text-neutral-600 mb-2">{category} ° {address}</p>
                <p className="text-xs flex items-center text-neutral-600">
                    <span>
                        <img src={clock} alt="tiempo" className="w-3 mr-1" />
                    </span>
                    {time}
                </p>
            </div>
            <div className="font-extrabold text-title">
                <span className="flex gap-x-1 items-center pt-2">
                    <span className="pt-[2px]">
                    {stars} 
                    </span>
                    <img src={fav} alt="tiempo" className="w-4" />
                </span>
            </div>
        </div>
    </article>
  )
}

export default LocalCard