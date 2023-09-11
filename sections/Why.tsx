"use client";

import styles from "@/styles";
import { fadeIn, planetVariants, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import whyImage from "../assets/offshore.png";
import Image from "next/image";
import { TitleText, TypingText } from "@/components";
import { webData } from "@/webData";
import Link from "next/link";

const Why = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={planetVariants("left")}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <Image
            src={whyImage}
            alt="get started"
            className="w-[90%] h-[90%] object-contain "
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title="| Why AGI Services" />
          <TitleText title={<>At Ayzer Group International, </>} />
          <div className="mt-[31px] flex flex-col max-w-[450px] gap-[24px] ">
            <p className="-mt-4 mb-8 font-normal sm:text-xl text-lg w-full text-secondary-white ">
              {webData.home_screen.why_agi_section.description.substring(8)}
            </p>
            <Link
              href="/request-form"
              className="bg-[rgb(0,88,38)] rounded-lg drop-shadow-xl shadow-xl text-white py-3 px-4 text-lg text-center font-kbold "
            >
              Request for Service
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Why;
