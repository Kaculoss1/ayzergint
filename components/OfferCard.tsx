"use client";

import Image, { StaticImageData } from "next/image";

interface IProps {
  id: string;
  imgUrl: StaticImageData;
  icon: StaticImageData;
  title: string;
  index: number;
  active: string;
  desc: string;
  handleClick: (id: string) => void;
}

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import styles from "@/styles";
import Link from "next/link";

const OfferCard = ({
  imgUrl,
  icon,
  title,
  index,
  active,
  desc,
  id,
  handleClick,
}: IProps) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      onClick={() => handleClick(id)}
      onMouseOver={() => handleClick(id)}
      className={`relative ${
        active === id ? "lg:flex-[3.5] flex-[20] " : "lg:flex-[0.5] flex-[2] "
      } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer `}
    >
      <Image
        src={imgUrl}
        alt={title}
        onClick={() => handleClick(id)}
        className="absolute w-full h-full object-cover rounded-[24px] cursor-pointer"
      />
      {active !== id ? (
        <h3
          onClick={() => handleClick(id)}
          className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0] cursor-pointer "
        >
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-2 px-4 lg:px-8 lg:p-8 justify-start w-full flex-col bg-[rgba(0,88,38,0.95)] rounded-b-[24px]">
          <div
            className={`${styles.flexCenter} w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] rounded-[15px] lg:rounded-[24px] glassmorphism mb-2 lg:mb-4 `}
          >
            <Image
              src={icon}
              alt="headset"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <h2
            onClick={() => handleClick(id)}
            className="mt-4 font-semibold lg:text-[32px] text-[24px] text-white cursor-pointer"
          >
            {title}
          </h2>
          <p className="mt-2 font-normal text-[16px] leading-[20px] text-white ">
            {desc.substring(0, 100)}...
          </p>
          <div className="flex justify-end w-full">
            <Link
              href="/services"
              className="mt-1 text-right text-black font-kbold w-full"
            >
              Learn More
            </Link>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default OfferCard;
