"use client";

import styles from "@/styles";
import { footerVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import Link from "next/link";
import book from "../assets/book-open-check.svg";
import logo from "../assets/logo.png";
import Image from "next/image";
import { webData } from "@/webData";
import { BiSolidBookOpen } from "react-icons/bi";

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.paddings} py-8 relative`}
    >
      <div className="footer-gradient" />
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <div className="flex items-center justify-between flex-wrap gap-5">
          <h4 className="font-kbold md:text-[64px] text-[44px] text-white ">
            Get Started
          </h4>
          <Link
            href="/#contact"
            className="bg-[rgb(0,88,38)] rounded-lg drop-shadow-xl shadow-xl text-white py-3 px-4 text-lg font-kbold flex items-center gap-2 "
          >
            <BiSolidBookOpen />
            <span className="font-normal text-[16px] text-white">
              REQUEST FOR SERVICE
            </span>
          </Link>
        </div>
        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-white opacity-10 " />
          <div className="flex items-center justify-between flex-wrap gap-4 ">
            <Image
              src={logo}
              alt="logo"
              className="w-28 md:w-32 lg:w-40 object-contain"
            />
            {/* <h4 className="font-kextrabold text-[24px] text-white ">
              Metaversus
            </h4> */}
            <p className="font-normal text-[14px] text-white opacity-50 ">
              Copyright @ 2023 - 2024 Ayzer Group International. All rights
              reserved.
            </p>
            <div className="flex gap-4">
              {webData.footer.socials.map((social) => (
                <Image
                  key={social.name}
                  src={social.img}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer "
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
