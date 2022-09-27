import clock from "../../assets/time.svg";
import fav from "../../assets/fav.svg";

const LocalCard = ({ local }) => {
  return (
    <article className="local__card">
        <div>
            <img src={local.img} alt="Imagen" className="local__card__image" />
        </div>
        <div className="local__card__content">
            <div>
                <h2 className="local__card__title">{local.title}</h2>
                <p className="local__card__description">{local.category} ° {local.address}</p>
                <p className="local__card__time">
                    <span>
                        <img src={clock} alt="tiempo" className="w-3 mr-1" />
                    </span>
                    {local.time}
                </p>
            </div>
            <div className="local__card__stars">
                <span className="flex gap-x-1 items-center pt-2">
                    <span className="pt-[2px]">
                    {local.stars} 
                    </span>
                    <img src={fav} alt="tiempo" className="w-4" />
                </span>
            </div>
        </div>
    </article>
  )
}

export default LocalCard