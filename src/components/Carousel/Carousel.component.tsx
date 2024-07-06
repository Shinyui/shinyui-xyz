"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Carousel.styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const Carousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={12}
        loop={true}
        centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="aspect-[2/1]"
      >
        <SwiperSlide>玩命新增活動中...</SwiperSlide>
        <SwiperSlide>玩命新增活動中...</SwiperSlide>
        <SwiperSlide>玩命新增活動中...</SwiperSlide>
        <SwiperSlide>玩命新增活動中...</SwiperSlide>
        <SwiperSlide>玩命新增活動中...</SwiperSlide>
        <SwiperSlide>玩命新增活動中...</SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
