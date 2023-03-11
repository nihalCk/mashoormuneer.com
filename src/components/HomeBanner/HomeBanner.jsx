import React from "react";
// import { Link } from "react-router-dom";

import "./HomeBanner.css";
// import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { motion } from "framer-motion";
import { transition1 } from "../../transitions";


import slider2 from "../../assets/img/home-slider/IMG_3990 1-min-compressed.jpg";
import slider3 from "../../assets/img/home-slider/IMG_0908 1-compressed.jpg";
import slider4 from "../../assets/img/home-slider/MSR04725-compressed.jpg";
import slider5 from "../../assets/img/home-slider/MSR03658 1-min-compressed.jpg";

const HomeBanner = () => {
  return (
    <>
      <motion.div
          initial={{ opacity: -5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={transition1} 
          className="slider position-relative ">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          // navigation={true}
          loop={true}
          // pagination={{
          //   clickable: true,
          // }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          className="mySwiper "
        >
          <SwiperSlide className="mask">
            <img src={slider2} alt="#" />
          </SwiperSlide>
          <SwiperSlide className="mask">
            <img src={slider3} alt="#" />
          </SwiperSlide>
          <SwiperSlide className="mask">
            <img src={slider4} alt="#" />
          </SwiperSlide>
          <SwiperSlide className="mask">
            <img src={slider5} alt="#" />
          </SwiperSlide>
        </Swiper>
        <div className="home_banner-content">
          <h1 className="mt-lg-0 mt-4 mb-0 pre_line letters">
            <span className="lettersspan">
              <span className="letter_1" style={{ color: "#ffff" }}>
               
              </span>
            </span>
            <br />
            <span className="lettersspan">
              <span className="letter_2"> Mashoor Muneer</span>
            </span>
          </h1>
          <p>
            Filimmaker <br />
            Photographer, Content Creator{" "}
          </p>
        </div>
        </motion.div>
    </>
  );
};

export default HomeBanner;
