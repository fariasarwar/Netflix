import React from "react";
import "./section.css";
import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import Slider1 from '../Slider/slider1/Slider1'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Slider2 from "../Slider/slider2/Slider2";
import Slider3 from "../Slider/slider3/Slider3";
import Slider4 from "../Slider/slider4/Slider4";
import Slider5 from "../Slider/slider5/Slider5";
import Slider6 from "../Slider/slider6/Slider6";
import Slider7 from "../Slider/slider7/Slider7";
import Slider8 from "../Slider/slider8/Slider8";
import Slider9 from "../Slider/slider9/Slider9";
import Slider10 from "../Slider/slider10/Slider10";

const Section = () => {
  return (
    <>
      <div className="section-container">
        <div className="section-slider-div">
          <div className="slider-content">
            <h1>Trending Now</h1>
            <div className="slider-div">
              
              <Swiper style={{height:"260px"}}
                // install Swiper modules
                modules={[Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={5}
                navigation
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
                <SwiperSlide>{Slider1}</SwiperSlide>
                <SwiperSlide>{Slider2}</SwiperSlide>
                <SwiperSlide>{Slider3}</SwiperSlide>
                <SwiperSlide>{Slider4}</SwiperSlide>
                <SwiperSlide>{Slider5}</SwiperSlide>
                <SwiperSlide>{Slider6}</SwiperSlide>
                <SwiperSlide>{Slider7}</SwiperSlide>
                <SwiperSlide>{Slider8}</SwiperSlide>
                <SwiperSlide>{Slider9}</SwiperSlide>
                <SwiperSlide>{Slider10}</SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
