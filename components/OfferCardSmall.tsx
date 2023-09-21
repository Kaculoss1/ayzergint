"use client";

import Image, { StaticImageData } from "next/image";

interface IProps {
  imgUrl: StaticImageData;
  icon: StaticImageData;
  title: string;
  index: number;

  desc: string;
}

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import styles from "@/styles";
import Link from "next/link";

const OfferCardSmall = ({ imgUrl, icon, title, index, desc }: IProps) => {
  return (
    <motion.div
      variants={fadeIn(
        (index + 1) % 2 === 0 ? "right" : "left",
        "spring",
        index * 0.5,
        0.75
      )}
      className={`relative flex items-center justify-center w-full max-w-[300px] h-[200px] transition-[flex] duration-[0.7s] ease-out-flex `}
    >
      <Image
        src={imgUrl}
        alt={title}
        className="absolute w-full h-full object-cover rounded-[20px]"
      />

      <div className="flex absolute bottom-0 p-2 px-4  justify-start w-full flex-col bg-[rgba(0,88,38,0.8)] rounded-b-[20px]">
        <div
          className={`${styles.flexCenter} w-[35px] h-[35px]  rounded-[14px] glassmorphism mb-2`}
        >
          <Image src={icon} alt="icon" className="w-4/5 h-4/5 object-contain" />
        </div>
        <h2 className=" w-full font-semibold text-base text-white">{title}</h2>
        <p className=" font-normal text-sm text-white ">
          {desc.substring(0, 75)}...
        </p>
        <div className="flex justify-end  w-full">
          <Link
            href="/services"
            className="mt-1 text-right text-black font-kbold w-full"
          >
            Learn More
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default OfferCardSmall;
