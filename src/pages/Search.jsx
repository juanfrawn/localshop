import { Swiper, SwiperSlide } from "swiper/react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

import LocalCard from "../components/LocalCard";

import { categories } from "../Utils/categories";
import local from "../assets/local.jpg";
import local2 from "../assets/local2.jpg";
import local3 from "../assets/local3.jpg";
import locationIcon from "../assets/location.svg";

const Search = () => {
  const { location } = useContext(AppContext);
  return (
    <section className="px-2 sm:max-w-lg mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
      <h1 className="text-2xl my-4 font-extrabold text-primary lg:flex lg:justify-between lg:items-center">
        ¿Que necesitas hoy?
        <span className="hidden lg:flex items-center text-title">
          <img src={locationIcon} alt="local" className="w-6" />
          <span className="text-base">{location}</span>
        </span>
      </h1>
      <form className="mb-4">
        <input
          type="text"
          className="w-full p-2 border-2 rounded-lg"
          placeholder="Tomates..."
        />
      </form>

      <section className="px-2">
        <Swiper
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          spaceBetween={10}
          breakpoints={{
            320: {
              slidesPerView: 4,
            },
            640: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 8,
              spaceBetween: 20,
            },
          }}
        >
            {categories.map((category) => (
                <SwiperSlide key={category.id} className="border-2 py-3 rounded-xl h-24" >
                    <div>
                        <img src={category.icon} alt={category.name} className="w-12 mx-auto" />
                    </div>
                    <h1 className="text-center text-[10px] font-extrabold text-title">{category.name}</h1>
                </SwiperSlide>
            ))}
        </Swiper>
      </section>

      <section className="">
        <h2 className="mt-6 mb-4 font-extrabold text-2xl text-primary ">Locales</h2>
        <div className="flex flex-wrap mx-auto lg:mx-0">
            <LocalCard title="Pamela" category="Minimarket" address="Diaguitas 507" time="60 min" stars="5" img={local} />
            <LocalCard title="Rocky" category="Minimarket" address="Diaguitas 507" time="60 min" stars="5" img={local2} />
            <LocalCard title="Emporio SM" category="Minimarket" address="Diaguitas 507" time="60 min" stars="5" img={local3} />
            <LocalCard title="Pamela" category="Minimarket" address="Diaguitas 507" time="60 min" stars="5" img={local} />
            <LocalCard title="Rocky" category="Minimarket" address="Diaguitas 507" time="60 min" stars="5" img={local2} />
            <LocalCard title="Emporio SM" category="Minimarket" address="Diaguitas 507" time="60 min" stars="5" img={local3} />
            <LocalCard title="Pamela" category="Minimarket" address="Diaguitas 507" time="60 min" stars="5" img={local} />
            <LocalCard title="Rocky" category="Minimarket" address="Diaguitas 507" time="60 min" stars="5" img={local2} />
            <LocalCard title="Emporio SM" category="Minimarket" address="Diaguitas 507" time="60 min" stars="5" img={local3} />
            <LocalCard title="Pamela" category="Minimarket" address="Diaguitas 507" time="60 min" stars="5" img={local} />
            <LocalCard title="Rocky" category="Minimarket" address="Diaguitas 507" time="60 min" stars="5" img={local2} />
            <LocalCard title="Emporio SM" category="Minimarket" address="Diaguitas 507" time="60 min" stars="5" img={local3} />
        </div>
      </section>
    </section>
  );
};

export default Search;
