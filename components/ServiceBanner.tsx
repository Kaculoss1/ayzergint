"use client";

import styles from "@/styles";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import services from "../assets/services.jpg";
import Image from "next/image";

const ServiceBanner = () => {
  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col mb-16`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="relative w-full"
      >
        <video
          src="/file_4.mp4"
          autoPlay
          loop
          muted
          className="w-full h-[150px]  sm:h-[300px] object-cover rounded-2xl opacity-60"
        />
        <div className="absolute inset-0 flex flex-col sm:flex-row gap-0  sm:mt-0  w-full items-end">
          <div className=" flex-[1] sm:flex-[3]    xl:flex-[4] bg-[rgb(0,88,38)] pb-0 sm:pb-8 pr-4 h-full bg-opacity-70 flex flex-row gap-2 sm:gap-0 sm:flex-col w-full justify-end items-end">
            <p className="font-kextrabold text-right text-3xl">Our</p>
            <p className="font-kextrabold text-right text-3xl">Services</p>
          </div>
          <div className="hidden flex-[4] sm:flex-[7] xl:flex-[6] sm:flex  w-full h-full ">
            <Image
              src={services}
              alt="services"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceBanner;
