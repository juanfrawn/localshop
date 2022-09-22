import { Swiper, SwiperSlide } from 'swiper/react';

import { Brands } from '../Utils/Brands'

import 'swiper/css';

const BrandsCarrousell = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        {Brands.map((brand) => (
            <SwiperSlide key={brand.url}>
                <img src={brand.logo} alt={brand.name} />
            </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default BrandsCarrousell