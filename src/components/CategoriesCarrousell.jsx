import { Swiper, SwiperSlide } from "swiper/react";

const CategoriesCarrousell = ({categories}) => {
  return (
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
  );
};

export default CategoriesCarrousell;
