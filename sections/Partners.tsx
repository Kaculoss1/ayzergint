"use client";

import { TypingText } from "@/components";
import styles from "@/styles";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { webData } from "@/webData";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Partners = () => {
  return (
    <section id="partners" className={`${styles.paddings} relative z-10`}>
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col `}
      >
        <TypingText textStyles="text-center" title="| Our Partners" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] mb-8 font-normal sm:text-[32px] text-[20px] text-center text-secondary-white "
        >
          We carefully select and continually grow our strategic partnerships
          which afford us the necessary resource required to offer our clients,
          local and international, the best service that meets their needs.
        </motion.p>

        <div className="w-full flex items-center gap-8 justify-center px-4 flex-wrap">
          {webData.home_screen.partner_section.partners.map(
            (partner, index) => (
              <motion.div
                key={partner.name}
                variants={fadeIn("down", "tween", index * 0.5, 1)}
              >
                <Link href={partner.link} target="_blank">
                  <Image
                    src={partner.img}
                    alt={partner.name}
                    className="h-28 w-28 object-contain"
                  />
                </Link>
              </motion.div>
            )
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Partners;
