/* eslint-disable react/no-unescaped-entities */
"use client";

import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import Image from "next/image";
import { webData } from "@/webData";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "@/utils/motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "@/styles";

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const settings1 = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    // vertical: true,
    row: 1,
  };

  return (
    <section className="w-full  relative">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={` mx-auto flex flex-col `}
      >
        <Slider {...settings} nextArrow={<></>} prevArrow={<></>}>
          {webData.home_screen.banners.map((banner) => (
            <div key={banner.message}>
              <Image
                className="w-full h-[240px] md:h-[300px] lg:h-[400px] object-cover "
                src={banner.banner}
                alt="banner"
              />
            </div>
          ))}
        </Slider>

        <div className="w-full flex items-center justify-center">
          <motion.div
            variants={fadeIn("down", "tween", 0.2, 1)}
            className="bg-[rgba(0,88,38,0.9)] p-1 md:p-4 rounded-3xl w-[250px] h-[150px] sm:w-[350px] sm:h-[200px] md:w-[500px] md:h-[300px] -mt-32 md:-mt-40 z-10 drop-shadow-xl shadow-card shadow-black border-b-4 border-b-[rgb(38,38,38)] "
          >
            <Slider
              {...settings1}
              nextArrow={<></>}
              prevArrow={<></>}
              adaptiveHeight
              slidesPerRow={1}
              rtl
            >
              {webData.home_screen.banners.map((banner) => (
                <div key={banner.message} className="p-1 sm:p-4 md:p-8 pt-0">
                  <p className="text-white font-kextrabold text-[20px] sm:text-[30px] md:text-[48px]">
                    "
                  </p>
                  <p className="text-white tracking-wider font-kbold text-[12px] sm:text-[14px] md:text-[18px] mb-12">
                    {banner.message}
                  </p>
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
