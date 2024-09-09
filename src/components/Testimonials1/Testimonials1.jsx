

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import './Testimonials.module.css';

import Style from './Testimonials.module.css'

// import required modules
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

import v1 from '../../assets/videos/AbdulBasith.mp4'

export default function Testimonials() {
  return (
    <Swiper
    effect={'coverflow'}
    grabCursor={true}
    centeredSlides={true}
    slidesPerView={'3'}
    pagination={{ clickable: true }}
    scrollbar={{ scrollable: true }}
    navigation={true} 
    initialSlide={2}
    loop={true}
    scrollBar={true}
    spaceBetween={'40px'}
    slideToClickedSlide={true}
    // allowSlideNext={true}
    // allowSlidePrev={true}
    coverflowEffect={{
      rotate: 40,
      stretch: 0,
      depth: 10,
      modifier: 1,
      slideShadows: true,
      centeredSlides:true
    }}
    // pagination={true}
    modules={[EffectCoverflow, Pagination,Navigation]}
    className={Style.swiper}
  >
    <SwiperSlide className={Style.swiperSlide}>
      <video controls src={v1}></video>
      {/* <img src="https://swiperjs.com/demos/images/nature-1.jpg" /> */}
    </SwiperSlide >

    <SwiperSlide className={Style.swiperSlide}>
    <video controls src={v1}></video>
    </SwiperSlide>

    <SwiperSlide className={Style.swiperSlide}>
    <video controls src={v1}></video>
    </SwiperSlide>

    <SwiperSlide className={Style.swiperSlide}>
    <video controls src={v1}></video>
    </SwiperSlide>

    <SwiperSlide className={Style.swiperSlide}>
    <video controls src={v1}></video>
    </SwiperSlide>

    <SwiperSlide className={Style.swiperSlide}>
    <video controls src={v1}></video>
    </SwiperSlide>

    <SwiperSlide className={Style.swiperSlide}>
    <video controls src={v1}></video>
    </SwiperSlide>

    <SwiperSlide className={Style.swiperSlide}>
    <video controls src={v1}></video>
    </SwiperSlide>

    <SwiperSlide className={Style.swiperSlide}>
    <video controls src={v1}></video>
    </SwiperSlide>
  </Swiper>
  )
}
