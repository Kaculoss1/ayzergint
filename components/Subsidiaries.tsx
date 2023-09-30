"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import styles from "@/styles";

interface IProps {
  imgUrl: StaticImageData;
  desc: string;
  title: string;
  index: number;
}

const Subsidiaries = ({ imgUrl, desc, title, index }: IProps) => {
  return (
    <motion.div
      variants={fadeIn(
        (index + 1) % 2 === 0 ? "right" : "left",
        "spring",
        index * 0.5,
        0.75
      )}
      className={` ${(index + 1) % 2 === 0 ? "flex-row" : "flex-row-reverse"} ${
        styles.innerWidth
      } relative flex items-center gap-6 justify-center w-full transition-[flex] duration-[0.7s] ease-out-flex `}
    >
      <Image
        src={imgUrl}
        alt={title}
        className="hidden md:block w-[100px] h-[100px] rounded-2xl object-cover"
      />
      <div
        className={`${
          (index + 1) % 2 === 0 ? "text-left" : "text-right"
        } px-4 flex flex-col justify-center items-start w-full`}
      >
        <h4
          className={"text-2xl font-kbold mb-4 w-full text-[rgb(103,167,131)]"}
        >
          {title}
        </h4>
        <p
          className={`text-lg font-kmedium w-full text-justify text-secondary-white`}
        >
          {desc}
        </p>
      </div>
    </motion.div>
  );
};

export default Subsidiaries;
