import React from "react";
import {Link} from 'react-router-dom'

// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules

import { Autoplay, Pagination } from "swiper/modules";


import slider_1 from "../../../Assets/Swiper-Img/banner-1.png";
import slider_2 from "../../../Assets/Swiper-Img/banner-2.png";
import slider_3 from "../../../Assets/Swiper-Img/banner-3.png";
import banner01 from "../../../Assets/Swiper-Img/banner-slider-01.png";
import banner02 from "../../../Assets/Swiper-Img/banner-slider-02.png";

import '../Style/Home.css'
import '../Style/HomeResponsive.css'

function Header() {

  return (
      <header className="mb-10">
        <div className="main-box w-full grid grid-cols-1 lg:grid-cols-12 gap-y-4 md:gap-x-4">
          <div className="slider-wrapper col-auto lg:col-span-9 xl:col-start-3 xl:col-end-10 ml-0 xl:ml-6">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide className="">

                <div className="slide min-h-[inherit]">

                  <img
                    src={slider_1}
                    alt="slid-1"
                    className="slide-img"
                  />

                  <div className="slide-text  pl-1 sm:pl-4 md:pl-8">

                    <p className="slide-sub-heading slide-text-animation">Accessories</p>

                    <h1 className="slide-heading  slide-text-animation my-0 sm:my-3 md:my-6">
                      Up To
                      <span>40% Off</span>
                      latest <br /> Creations
                    </h1>

                    <Link
                      to="/shop"
                      id="slide-shopLink"
                      className="transition slide-text-animation"
                    >
                      Shop Now
                      <i className="fa-solid fa-arrow-right block ml-3"></i>
                    </Link>
                
                  </div>
                
                </div>

              </SwiperSlide>

              <SwiperSlide className="">

                <div className="slide min-h-[inherit]">

                  <img
                    src={slider_2}
                    alt="slid-2"
                    className="slide-img"
                  />

                  <div className="slide-text  pl-1 sm:pl-4 md:pl-8">

                    <p className="slide-sub-heading slide-text-animation">Accessories</p>

                    <h1 className="slide-heading slide-text-animation my-0 sm:my-3 md:my-6">
                      Up To
                      <span>35% Off</span>
                      latest <br /> Creations
                    </h1>

                    <Link
                      to="/shop"
                      id="slide-shopLink"
                      className="transition slide-text-animation"
                    >
                      Shop Now
                      <i className="fa-solid fa-arrow-right block ml-3"></i>
                    </Link>
                
                  </div>
                
                </div>

              </SwiperSlide>

              <SwiperSlide className="">

                <div className="slide min-h-[inherit]">

                  <img
                    src={slider_3}
                    alt="slid-3"
                    className="slide-img"
                  />

                  <div className="slide-text  pl-1 sm:pl-4 md:pl-8">

                    <p className="slide-sub-heading slide-text-animation">Accessories</p>

                    <h1 className="slide-heading slide-text-animation my-0 sm:my-3 md:my-6">
                      Up To
                      <span>45% Off</span>
                      latest <br /> Creations
                    </h1>

                    <Link
                      to="/shop"
                      id="slide-shopLink"
                      className="transition slide-text-animation"
                    >
                      Shop Now
                      <i className="fa-solid fa-arrow-right block ml-3"></i>
                    </Link>
                
                  </div>
                
                </div>

              </SwiperSlide>

              

            

            </Swiper>

          </div>{/*END of slider-wrapper */}

          <div className="aside-img-bar col-auto lg:col-span-3  xl:col-start-10 xl:col-end-[-1] grid grid-cols-1 md:grid-cols-2  md:gap-x-5 lg:grid-cols-1 gap-y-4">
          <div className="img-box overflow-hidden rounded-md">
            <Link to="/shop" className="block h-full banner banner-1 relative">
              <img src={banner01} alt="Hand Mande" className="block min-h-full w-full object-cover" />
              <div className="Img-text absolute top-0 left-0 p-2">
                <h3>Hand made</h3>
                <h1>New Modern <br /> stylist Craft</h1>
              </div>
            </Link>
            </div>
            <div className="img-box overflow-hidden rounded-md">
            <Link to="/shop" className="block h-full  banner banner-1 relative">
              <img src={banner02} alt="Hand Mande" className="block min-h-full w-full object-fill" />
              <div className="Img-text absolute top-0 left-0 p-2">
              <h3>Popular</h3>
                <h1>Energy with our <br /> newest collection</h1>
              </div>
            </Link>
            </div>
          </div>
        </div>
      </header>
  );
}

export default Header;
