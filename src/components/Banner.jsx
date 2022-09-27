import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

import BotonPrincipal from "./buttons/BotonPrincipal";

import banner from "../assets/Banner.webp";
import bannerLG from "../assets/Banner_lg.webp";
import bannerXL from "../assets/Banner_xl.webp";

const Banner = () => {
  const navigate = useNavigate();
  const { setLocation  } = useContext(AppContext);

  const handlerSubmit = (e) => {
    e.preventDefault();
    setLocation(e.target[0].value);
    navigate("/search");
  }

  return (
    <section className="banner">
      <div className="banner__container">
        <div className="banner__image">
          <div className="sm:max-w-lg md:min-w-[700px] lg:min-w-0">
            <picture>
              <source srcSet={bannerXL} media="(min-width: 1024px)" />
              <source srcSet={bannerLG} media="(min-width: 768px)" />
              <img src={banner} alt="banner" />
            </picture>
          </div>
        </div>

        <div className="banner__content">
          <div className="banner__text">
            <h1 className="banner__title">
              LOCALSHOP TE SALVA
            </h1>
            <p className="banner__description">
              !Lo más rico de tu barrio en minutos!
            </p>
          </div>
          <form className="banner__font" onSubmit={handlerSubmit}>
            <input
              type="text"
              className="bg-item text-center py-3 rounded-lg mb-3 font-semibold md:py-5 md:text-lg lg:py-3"
              placeholder="¿Dónde quieres tu pedido?"
              name="ubicación"
              id="location"
            />
            <BotonPrincipal title="Iniciar pedido" color="secondary" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Banner;
