import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import {Autoplay } from "swiper/modules";

// import "./FollowOnSection.css";
import  '../Style/Home.css'
import  '../Style/HomeResponsive.css'

import instagram01 from "../../../Assets/Follow-Swiper Img/instagram01.png";
import instagram02 from "../../../Assets/Follow-Swiper Img/instagram02.jpg";
import instagram03 from "../../../Assets/Follow-Swiper Img/instagram03.jpg";
import instagram04 from "../../../Assets/Follow-Swiper Img/instagram04.jpg";
import instagram05 from "../../../Assets/Follow-Swiper Img/instagram05.jpg";
import instagram06 from "../../../Assets/Follow-Swiper Img/instagram06.jpg";

function FollowOnSwiper() {
  return (
    <section className="FollowOnSection 2xl:container 2xl:mx-auto pt-16 pb-20">

      <div className="follow-On-wrapper mb-9">
        <div className="follow-hading text-center">
          <p className="text-[#D82552] text-[1.2rem]">Follow On</p>
          <h1 className="flex items-center justify-center poppins-bold text-[2rem]">
            <i className="fa-brands fa-instagram mr-2"></i>
            ninico-shop
          </h1>
        </div>
      </div>

      <div className="follow-swiper-box ">
        <div className="follow-swiper ">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
              1980: {
                slidesPerView: 6,
                spaceBetween: 10,
              },
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Link to="/" className="flex items-center inst-link">
                <img src={instagram01} alt="Follow-post-1" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/" className="flex items-center inst-link">
                <img src={instagram02} alt="Follow-post-1" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/" className="flex items-center inst-link">
                <img src={instagram03} alt="Follow-post-1" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/" className="flex items-center inst-link">
                <img src={instagram04} alt="Follow-post-1" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/" className="flex items-center inst-link">
                <img src={instagram05} alt="Follow-post-1" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/" className="flex items-center inst-link">
                <img src={instagram06} alt="Follow-post-1" />
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default FollowOnSwiper;
