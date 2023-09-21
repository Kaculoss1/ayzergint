"use client";

import { TypingText } from "@/components";
import styles from "@/styles";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import Link from "next/link";

const About = () => {
  return (
    <section id="about" className={`${styles.paddings} relative z-10`}>
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col `}
      >
        <TypingText
          textStyles="text-center"
          title="| About Ayzer Group International"
        />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] mb-8 font-normal sm:text-[32px] text-[20px] text-center text-secondary-white "
        >
          <span className="font-kextrabold text-white">
            AYZER GROUP INTERNATIONAL
          </span>{" "}
          is a privately held professional{" "}
          <span className="font-kextrabold text-white">trading, finance</span>{" "}
          and <span className="font-kextrabold text-white">investment </span>
          group of companies registered and operating in West Africa and
          association with Joint Venture (JV) Partners. At Ayzer Group
          International, we are more than just a brokerage firm; we are a team
          of experienced and skilled financial traders with a global reach.
        </motion.p>

        <motion.div variants={fadeIn("down", "tween", 0.3, 1)}>
          <Link
            href="/about"
            className="bg-[rgb(0,88,38)] rounded-lg drop-shadow-xl shadow-xl text-white py-3 px-4 text-lg font-kbold "
          >
            Learn More
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
