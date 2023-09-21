"use client";

import styles from "@/styles";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";

const AboutBanner = () => {
  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="relative w-full"
      >
        <video
          src="/file.mp4"
          autoPlay
          loop
          muted
          className="w-full h-[300px]  sm:h-[300px] object-cover rounded-2xl opacity-60"
        />
        <div className="absolute inset-0 flex flex-col sm:flex-row gap-0 mt-[70px] sm:mt-0  w-full items-end">
          <div className=" flex-[3] sm:flex-[3]    xl:flex-[4] bg-[rgb(0,88,38)] pb-0 sm:pb-8 pr-4 h-full bg-opacity-70 flex flex-row gap-2 sm:gap-0 sm:flex-col w-full justify-end items-end">
            <p className="font-kextrabold text-right text-3xl">About</p>
            <p className="font-kextrabold text-right text-3xl">Us</p>
          </div>
          <div className=" flex-[4] sm:flex-[7] xl:flex-[6] flex pt-8 sm:pt-[120px] px-4 pb-8 w-full h-full bg-[rgb(38,38,38)]">
            <p className="font-kmedium text-lg sm:text-xl lg:text-2xl leading-normal  lg:leading-10 ">
              Welcome to
              <span className="font-kextrabold text-xl sm:text-2xl lg:3xl ">
                AYZER GROUP INTERNATIONAL (AGI) –
              </span>{" "}
              <br />
              Your Trusted Partner in Global Commodity Trading and Financial
              Services.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutBanner;
