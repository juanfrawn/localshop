import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

import { Brands } from '../Utils/Brands'

import 'swiper/css';

const BrandsCarrousell = () => {
  SwiperCore.use([Autoplay])

  return (
    <Swiper
      autoplay={{ delay: 2500, disableOnInteraction: false }} 
      spaceBetween={50}
      loop={true}
      breakpoints={{
        320: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
    >
        {Brands.map((brand) => (
            <SwiperSlide key={brand.name} >
                <a href={brand.url} target="_blank" rel="noreferrer" className='hover:scale-105'>
                  <img src={brand.logo} alt={brand.name} />
                </a>
            </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default BrandsCarrousell