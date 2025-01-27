"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import { CardData } from "../../data/index.js";
import "./NewsSlider.css";
import Image from "next/image.js";

const NewsSlider = () => {
  return (
    <div className="h-[24vh] relative bottom-[50px] lg:bottom-[0] flex  items-center justify-center md:h-[27vh] md:mb-12  px-4 xl:max-w-[1695px] xl:mx-auto" >
      {/* <h1 className="text-black">Our Team</h1> */}
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="w-full max-w-[100%] lg:max-w-[80%]"
      >
        {CardData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex flex-col gap-4 mb-10 group relative shadow-lg text-white rounded-xl px-4 py-6 sm:py-8 h-[300px] lg:h-[390px] w-full sm:w-[300px] lg:w-[320px] overflow-hidden cursor-pointer lg:mr-[30px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-black opacity-35 group-hover:opacity-60" />
              <div className="relative flex flex-col gap-3">
                <item.icon className="text-blue-600 group-hover:text-blue-400 w-[24px] sm:w-[32px] h-[24px] sm:h-[32px]" />
                <h1 className="text-lg sm:text-xl lg:text-2xl">{item.title} </h1>
                <span className="tag tag-teal w-fit">{item.tech}</span>
                <p className="text-sm sm:text-base lg:text-[18px]">{item.content} </p>
              </div>
              <div className="z-10 flex items-center justify-between relative top-[45px] w-full ">
                <RxArrowTopRight className="relative sm:bottom-[22px] md:bottom-[22px] w-[24px] mr-[18px] md:mr-[1px] sm:w-[35px] h-[24px] sm:h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100 " />
                <div className="user w-full sm:w-[84%] relative left-[110px]  sm:left-[77px] sm:bottom-[22px] md:bottom-[22px]">
                  <Image
                    src={item.Image2}
                    alt="hero image"
                    className="user__image w-[35px] sm:w-[52.5px] object-cover"
                    width={300}
                    height={200}
                  />
                  <div className="user__info">
                    <h5>{item.text}</h5>
                    <small className="tag tag-teal2 w-fit text-[#fff]">{item.date}</small>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewsSlider;