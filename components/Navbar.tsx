"use client";

import styles from "@/styles";
import { navVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../assets/logo.png";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import Link from "next/link";
import { useState } from "react";
import { webData } from "@/webData";

const Navbar = () => {
  const [active, setActive] = useState<string>("/");
  const [toggle, setToggle] = useState<boolean>(false);

  const handleClick = () => {
    setActive("");
    window.scrollTo(0, 0);
  };

  const handleSmallClick = (link: string) => {
    setActive(link);
    setToggle(!toggle);
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.paddingX} w-full flex items-center py-2 fixed top-0 z-20 bg-primary bg-opacity-50`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={handleClick}
        >
          <Image
            src={logo}
            alt="logo"
            className="w-36 md:w-40 lg:w-52 object-contain"
          />
        </Link>
        <ul className="list-none hidden md:flex flex-row gap-4 lg:gap-6">
          {webData.header.navbarLinks.map((link) => (
            <li
              key={link.name}
              onClick={() => setActive(link.link)}
              className={`${
                active === link.link ? "text-white" : "text-secondary"
              } hover:text-white lg:text-base text-sm font-kmedium cursor-pointer `}
            >
              <Link href={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>

        <div className="md:hidden flex flex-1 justify-end items-center">
          <Image
            src={toggle ? close : menu}
            alt="menu"
            onClick={() => setToggle(!toggle)}
            className="w-[28px] h-[28px] object-contain cursor-pointer "
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 green-gray-gradient absolute top-20 right-0 mx-4 mr-2 min-w-[140px] z-10 rounded-xl `}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {webData.header.navbarLinks.map((link) => (
                <li
                  key={link.name}
                  onClick={() => handleSmallClick(link.link)}
                  className={`${
                    active === link.link ? "text-white" : "text-secondary"
                  } font-kmedium cursor-pointer text-base`}
                >
                  <Link href={link.link}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
export default Navbar;
