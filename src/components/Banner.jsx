import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

import banner from "../assets/Banner.png";
import bannerLG from "../assets/Banner_lg.png";
import bannerXL from "../assets/Banner_xl.png";

const Banner = () => {
  const navigate = useNavigate();
  const { setLocation  } = useContext(AppContext);

  const handlerSubmit = (e) => {
    e.preventDefault();
    setLocation(e.target[0].value);
    navigate("/search");
  }

  return (
    <section className="mb-16 sm:mb-20 mt-0 lg:bg-gradient-to-b from-primary via-primary/80 lg:mb-0 to-white lg:pb-36 xl:pb-44 xl:pt-6">
      <div className="lg:flex lg:max-w-4xl mx-auto xl:max-w-5xl">
        <div className="pb-6 bg-gradient-to-b from-primary via-primary/80 to-white flex justify-center order-1 lg:bg-none lg:w-1/2">
          <div className="sm:max-w-lg md:min-w-[700px] lg:min-w-0">
            <picture>
              <source srcSet={bannerXL} media="(min-width: 1024px)" />
              <source srcSet={bannerLG} media="(min-width: 768px)" />
              <img src={banner} alt="banner" />
            </picture>
          </div>
        </div>

        <div className="lg:w-1/2 self-center">
          <div className="text-center mb-7 md:mb-12 lg:mb-5">
            <h1 className="text-2xxl md:text-6xl sm:text-4xl font-extrabold text-primary lg:text-white lg:text-start">
              LOCALSHOP TE SALVA
            </h1>
            <p className="text-base sm:text-xs md:text-2xl lg:text-white lg:text-start">
              !Lo más rico de tu barrio en minutos!
            </p>
          </div>
          <form className="flex flex-col text-center px-5 sm:max-w-lg sm:mx-auto md:max-w-xl lg:px-0 lg:mr-8" onSubmit={handlerSubmit}>
            <input
              type="text"
              className="bg-item text-center py-3 rounded-lg mb-3 font-semibold md:py-5 md:text-lg lg:py-3"
              placeholder="¿Dónde quieres tu pedido?"
              name="ubicación"
              id="location"
            />
            <button className="bg-secondary py-3 rounded-lg text-white font-extrabold text-base sm:text-lg md:py-5 md:text-xl lg:py-3 hover:scale-105 transition-transform">
              Iniciar pedido
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Banner;
