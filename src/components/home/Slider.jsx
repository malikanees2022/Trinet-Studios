import React, { useState } from "react";
// Import Swiper React components
import './slider.css'
import { Swiper, SwiperSlide } from "swiper/react";
import Phone from '../../assets/phone.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const activeSlideStyle = {
  // border: "10px solid rgb(255, 106, 0) ",
  backgroundImage: `url(${Phone})`, // Background image URL
  backgroundSize: "100% 100%", // Adjust the background size as needed
  backgroundPosition: "100% 100%", // Adjust the background position as needed
  // borderRadius: "20px",
  backgroundColor:"white",
  borderRadius:"40px",
  padding: "30px 15px",
  
// First border
  
};

import Image1 from '../../assets/Image1.png'
import Image2 from '../../assets/Image2.png'
import Image3 from '../../assets/Image3.png'
import Image4 from '../../assets/Image6.png'
import Image5 from '../../assets/image7.png'
import Image6 from '../../assets/Image8.png'
import Image7 from '../../assets/Image9.png'
import Image8 from '../../assets/Image6.png'
import Image9 from '../../assets/image7.png'

export default function Slider() {
  
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSlideChange = (swiper) => {
    const centerIndex = Math.floor(swiper.realIndex + swiper.params.slidesPerView / 2) -1;
    console.log("Center Index:", centerIndex);
    setActiveIndex(centerIndex);
  };
  
  
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"3"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        onSlideChange={handleSlideChange}
        className="mySwiper"
      >
        <SwiperSlide style={activeIndex === 0 ? activeSlideStyle : null}>
          <img src={Image1} />
        </SwiperSlide>
        <SwiperSlide style={activeIndex === 1 ? activeSlideStyle : null}>
         
          <img src={Image2} />
        </SwiperSlide>
        <SwiperSlide style={activeIndex === 2 ? activeSlideStyle : null}>
          <img src={Image3} />
          
        </SwiperSlide>
        <SwiperSlide style={activeIndex === 3 ? activeSlideStyle : null}>
          <img src={Image4} />
        </SwiperSlide>
        <SwiperSlide style={activeIndex === 4 ? activeSlideStyle : null}>
          <img src={Image5} />
        </SwiperSlide>
        <SwiperSlide style={activeIndex === 5 ? activeSlideStyle : null}>
          <img src={Image6} />
        </SwiperSlide>
        <SwiperSlide style={activeIndex === 6 ? activeSlideStyle : null}>
          <img src={Image7} />
        </SwiperSlide>
        <SwiperSlide style={activeIndex === 7 ? activeSlideStyle : null}>
          <img src={Image9} />
        </SwiperSlide>
        <SwiperSlide style={activeIndex === 8 ? activeSlideStyle : null}>
          <img src={Image8} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
