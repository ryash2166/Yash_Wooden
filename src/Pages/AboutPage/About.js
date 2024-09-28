import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PageHeading from "../../Components/Common Components/PageHeading/PageHeading";
import TeamCard from "../../Components/AboutComponents/TeamCard";

import "./About.css";

import aboutImg1 from "../../Assets/About/about-banner-1.jpg";
import aboutImg2 from "../../Assets/About/about-img-2.jpg";
import aboutTextImg from "../../Assets/About/about-text-3.jpg";

import Team__thumb1 from "../../Assets/About/team-1.jpg";
import Team__thumb2 from "../../Assets/About/team-2.jpg";
import Team__thumb3 from "../../Assets/About/team-3.jpg";
import Team__thumb4 from "../../Assets/About/team-4.jpg";

import aboutBanner_1 from "../../Assets/About/about-banner-1.jpg";
import aboutBanner_2 from "../../Assets/About/about-banner-2.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";

// ICONS
import { IoCheckmark } from "react-icons/io5";

function About() {
  return (
    <section>
      <PageHeading goBackLink="Home" pageTitle="About" />
      <div className="sm:container mx-auto pt-16">
        <div className="about-Header grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
          <div className="">
            <img
              src={aboutImg1}
              alt="..."
              className="block object-cover min-w-full min-h-full rounded-md"
            />
          </div>
          <div className="">
            <img
              src={aboutImg2}
              alt="..."
              className="block object-contain w-full rounded-md"
            />
          </div>

          <div className="aboutTextImg absolute bottom-0 left-0 right-0">
            <img
              src={aboutTextImg}
              alt="..."
              className="block object-contain mx-auto mix-blend-lighten"
            />
          </div>

        </div>

        <div className="">
          <h1 className="text-5xl font-bold capitalize">
            <small className="text-sm font-light text-gray-500 pl-1.5 pb-1.5  inline-flex">
              About Us
            </small>
            <br />
            About Our Story
          </h1>

          <div className="grid grid-cols-12 py-10 gap-y-10 lg:gap-y-0 gap-x-4 lg:gap-x-8">
            <div className="col-span-12 md:col-span-6 lg:col-span-4 ">
              <p className="capitalize text-wrap md:text-pretty text-base text-gray-400 leading-7 ">
                Publish your eCommerce site quickly with our easy-to-use store
                builder— no coding required. Migrate your items from your point
                of sale system or turn your Instagram feed into a shopping site
                and start selling fast. Square Online works for all kinds of
                businesses—retail, restaurants, services without costly
                customization or add ons. Get orders to your customers in lots
                of ways by offering shipping, pickup, delivery, and even QR code
                ordering.
              </p>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-5 ">
              <p className="capitalize text-wrap md:text-pretty text-base text-gray-400 leading-7 ">
                Expand your reach and sell more using seamless integrations with
                Google, Instagram, Facebook, and more. Built- in SEO tools make
                it easy for shoppers to find your business on search engines.
                Get access to the entire suite of integrated Square solutions to
                help you run your business. Integration between Square Online
                and all Square point of sale systems makes inventory management
                easy. Subscribe to Square Marketing and easily send email
                promotions to your customers using the contact information
              </p>
            </div>

            <div className="col-span-12 lg:col-span-3 ">
              <ul className="CheckMark-box min-h-full flex flex-col items-start justify-between">
                <li className="flex items-start justify-start gap-x-4">
                  <span className="block mt-1">
                    <IoCheckmark className="text-2xl" />
                  </span>

                  <a
                    href="/about"
                    className="CheckMark-link flex flex-col items-start justify-center gap-y-1 text-base  "
                  >
                    <span className="block">
                      Orders go right to your restaurant
                    </span>

                    <span className="block">
                      point of sale, KDS, and kitchen
                    </span>
                  </a>
                </li>
                <li className="flex items-start justify-start gap-x-4">
                  <span className="block mt-1">
                    <IoCheckmark className="text-2xl" />
                  </span>
                  <a
                    href="/about"
                    className="CheckMark-link flex flex-col items-start justify-center gap-y-1 text-base  "
                  >
                    <span className="block">
                      Provide in-person pickup, delivery by
                    </span>
                    <span className="block">professional couriers</span>
                  </a>
                </li>
                <li className="flex items-start justify-start gap-x-4">
                  <span className="block mt-1">
                    <IoCheckmark className="text-2xl" />
                  </span>
                  <a
                    href="/about"
                    className="CheckMark-link flex flex-col items-start justify-center gap-y-1 text-base  "
                  >
                    <span className="block">
                      Offer in-person diners self-serve,
                    </span>
                    <span className="block">
                      contactless ordering via QR codes.
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div id="About_Team" className="bg-[#F6F6F6] my-8 py-20">
        <h1 className="text-4xl font-bold capitalize text-center pb-8">
          <small className="inline-flex mb-1.5 text-xs font-light text-gray-400">
            Team
          </small>
          <br />
          Meet with Team
        </h1>

        <div className="w-full px-5">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <TeamCard
                Team__thumb={Team__thumb1}
                Team__position={"Founder"}
                Team__title={"Rosailna D. Willson"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <TeamCard
                Team__thumb={Team__thumb2}
                Team__position={"CEO"}
                Team__title={"Rosailna D. Willson"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <TeamCard
                Team__thumb={Team__thumb3}
                Team__position={"Designer"}
                Team__title={"Rosailna D. Willson"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <TeamCard
                Team__thumb={Team__thumb4}
                Team__position={"DeveLoper"}
                Team__title={"Rosailna D. Willson"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <TeamCard
                Team__thumb={Team__thumb1}
                Team__position={"Founder"}
                Team__title={"Rosailna D. Willson"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <TeamCard
                Team__thumb={Team__thumb2}
                Team__position={"CEO"}
                Team__title={"Rosailna D. Willson"}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="sm:container About_Banner mx-auto ">
        <div
          id="aboutBanner_1"
          className="grid grid-cols-12 gap-x-6 gap-y-6 pt-16"
        >
          <div className="col-span-12  lg:col-span-6">
            <img
              src={aboutBanner_1}
              alt="..."
              className="rounded-lg block object-contain w-full"
            />
          </div>
          <div className="col-span-12 lg:col-span-6 pr-0 lg:pr-14">
            <p className="text-3xl font-bold md:text-4xl">
              <small className="text-sm inline-flex font-light md:text-base text-gray-400">
                Features #01
              </small>
              <br />
              Solutions that work together
            </p>
            <p className="text-base text-gray-600 md:text-lg py-8">
              Publish your eCommerce site quickly with our easy-to-use store
              builder— no coding required. Migrate your items from your point of
              sale system or turn your Instagram feed into a shopping site and
              start selling fast. Square Online works for all kinds of
              businesses—retail, restaurants, services.
            </p>
            <button
              type="button"
              className="rounded-md border border-gray-400 px-5 py-4 text-lg  font-semibold text-black hover:text-white hover:bg-[#d51243] transition-all"
            >
              Get In ToUch
            </button>
          </div>
        </div>

        <div
          id="aboutBanner_2"
          className="grid grid-cols-12 gap-x-6 gap-y-6 py-16"
        >
          <div className="col-span-12 lg:col-span-6 pr-0 lg:pr-14">
            <p className="text-3xl font-bold md:text-4xl">
              <small className="text-sm inline-flex font-light md:text-base text-gray-400">
                Features #02
              </small>
              <br />
              All kinds of payments securely
            </p>
            <p className="text-base text-gray-600 md:text-lg py-8">
              Publish your eCommerce site quickly with our easy-to-use store
              builder— no coding required. Migrate your items from your point of
              sale system or turn your Instagram feed into a shopping site and
              start selling fast. Square Online works for all kinds of
              businesses—retail, restaurants, services.
            </p>
            <button
              type="button"
              className="rounded-md border border-gray-400 px-5 py-4 text-lg  font-semibold text-black hover:text-white hover:bg-[#d51243] transition-all"
            >
              Contact with Us
            </button>
          </div>
          <div className="col-span-12  lg:col-span-6">
            <img
              src={aboutBanner_2}
              alt="..."
              className="rounded-lg block object-contain w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
