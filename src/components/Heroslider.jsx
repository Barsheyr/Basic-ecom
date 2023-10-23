import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";

import Img1 from "../assets/images/header-1.jpg";
import Img2 from "../assets/images/header-2.jpg";
import Img3 from "../assets/images/header-3.jpg";

const slides = [
  {
    title: "Style with us",
    bg: Img1,
  },
  {
    title: "We never go out of style",
    bg: Img2,
  },
  {
    title: "From Clavin by James Deen",
    bg: Img3,
  },
];

const Heroslider = () => {
  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect={"fade"}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="h-[600px] lg:h-[800px]"
    >
      {slides.map((slide, index) => {
        const { title, bg } = slide;

        return (
          <SwiperSlide
            className="relative flex justify-center items-center"
            key={index}
          >
            <div className="text-white text-center z-20 relative top-52">
              <div className="lg:text-2xl "> Style like never before</div>

              <h1 className="lg:text-7xl text-2xl  text-white font-primary text-center uppercase lg:mt-20 mt-5 ">
                {title}
              </h1>
            </div>

            <div className=" absolute top-0 w-full h-full">
              <img className="object-cover h-full w-full" src={bg} alt="" />
            </div>

            <div className="absolute w-full h-full top-0  bg-black/70"></div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Heroslider;
