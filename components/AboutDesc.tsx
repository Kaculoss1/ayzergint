"use client";

import styles from "@/styles";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";

const AboutDesc = () => {
  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[40px] px-10 mb-8 font-normal sm:text-[32px] text-[20px] text-center leading-tighttext-secondary-white "
      >
        At Ayzer Group International, we are dedicated to excellence, integrity,
        and sustainability. Join us in shaping a better future, one transaction
        at a time.
      </motion.p>
    </motion.div>
  );
};

export default AboutDesc;
