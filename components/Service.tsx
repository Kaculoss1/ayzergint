"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { fadeIn, planetVariants, staggerContainer } from "@/utils/motion";
import styles from "@/styles";

interface IProps {
  img: StaticImageData;
  desc: string;
  title: string;
  service: string;
  index: number;
  id: string;
}

const Service = ({ id, img, desc, title, service, index }: IProps) => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      id={id}
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto mb-16 flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants("left")}
        className={`flex-[0.65] ${styles.flexCenter}`}
      >
        <Image
          src={img}
          alt="get started"
          className="w-[70%] h-[70%]  lg:w-[90%] lg:h-[90%] object-contain "
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-1 flex items-start justify-center flex-col px-4"
      >
        <h3 className="font-kextrabold text-[rgb(0,88,38)] text-xl  md:text-2xl lg:text-3xl mb-2">
          {service}
        </h3>
        <h4 className="font-kbold text-base md:text-lg lg:text-xl mb-2">
          {title}
        </h4>
        <p className="font-kmedium text-sm md:text-base  lg:text-lg mb-2">
          {desc}
        </p>
        {/* <div className="mt-[31px] flex flex-col max-w-[450px] gap-[24px] ">
          <p className="-mt-4 mb-8 font-normal sm:text-xl text-lg w-full text-secondary-white ">
            {webData.home_screen.why_agi_section.description.substring(8)}
          </p>
          <Link
            href="/request-form"
            className="bg-[rgb(0,88,38)] rounded-lg drop-shadow-xl shadow-xl text-white py-3 px-4 text-lg text-center font-kbold "
          >
            Request for Service
          </Link>
        </div> */}
      </motion.div>
    </motion.section>
  );
};

export default Service;
