import { Swiper, SwiperSlide } from "swiper/react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

import LocalCard from "../components/cards/LocalCard";
import CategoriesCarrousell from "../components/CategoriesCarrousell";
import SearchContainer from "../components/containers/SearchContainer";
import InputPrincipal from "../components/inputs/InputPrincipal";

import { categories } from "../Utils/categories";
import { Locals } from "../Utils/Locals";

import locationIcon from "../assets/location.svg";

const Search = () => {
  const { location } = useContext(AppContext);
  return (
    <SearchContainer>
      <h1 className="text-2xl my-4 font-extrabold text-primary lg:flex lg:justify-between lg:items-center">
        ¿Que necesitas hoy?
        <span className="hidden lg:flex items-center text-title">
          <img src={locationIcon} alt="local" className="w-6" />
          <span className="text-base">{location}</span>
        </span>
      </h1>
      <form className="mb-4">
        <InputPrincipal type="text" placeholder="Tomates..." />
      </form>

      <section className="px-2">
        <CategoriesCarrousell categories={categories} />
      </section>

      <section className="">
        <h2 className="mt-6 mb-4 font-extrabold text-2xl text-primary ">Locales</h2>
        <div className="flex flex-wrap mx-auto lg:mx-0">
          {Locals.map((local) => (
            <LocalCard key={local.id} local={local} />
          ))}
            </div>
      </section>
    </SearchContainer>
  );
};

export default Search;
