"use client";

import { OfferCard, OfferCardSmall, TitleText, TypingText } from "@/components";
import styles from "@/styles";
import { staggerContainer } from "@/utils/motion";
import { webData } from "@/webData";
import { motion } from "framer-motion";
import { useState } from "react";

const Offer = () => {
  const [active, setActive] = useState<string>("offer-05");

  return (
    <section className={`${styles.paddings}`} id="offer">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flx flex-col`}
      >
        <TypingText textStyles="text-center" title="| Our Services" />
        <TitleText
          title={<>{webData.home_screen.offer_section.title}</>}
          textStyles="text-center"
        />

        <div className="hidden mt-[50px] lg:flex lg:flex-row flex-col min-h-[70vh] gap-5 ">
          {webData.home_screen.offer_section.offers.map((offer, index) => (
            <OfferCard
              key={offer.id}
              {...offer}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
        {/* <OfferCardSmall
          desc={webData.home_screen.offer_section.offers[0].desc}
          icon={webData.home_screen.offer_section.offers[0].icon}
          imgUrl={webData.home_screen.offer_section.offers[0].imgUrl}
          index={1}
          title={webData.home_screen.offer_section.offers[0].title}
        /> */}
        <div className="lg:hidden mt-8 flex flex-row flex-wrap items-center justify-center gap-5 ">
          {webData.home_screen.offer_section.offers.map((offer, index) => (
            <OfferCardSmall key={offer.id} {...offer} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Offer;
