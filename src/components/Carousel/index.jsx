/* eslint-disable prettier/prettier */
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { register } from 'swiper/element/bundle'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

register()

export function Carousel({ children }) {
  return (
    <Swiper
      rewind={true}
      spaceBetween={24}
      slidesPerView={5}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Navigation]}
      className="swiper"
      breakpoints={{
        240: {
          slidesPerView: 1,
          spaceBetween: 24,
        },
        576: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 24,
        },
      }}
    >
      {children.map((card, index) => (
        <SwiperSlide key={String(index)}>
          {card}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
