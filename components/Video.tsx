"use client";

import styles from "@/styles";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";

const Video = () => {
  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col `}
    >
      <motion.video
        variants={fadeIn("up", "tween", 0.2, 1)}
        src="/file_2.mp4"
        autoPlay
        loop
        muted
        className="w-full h-[300px] object-cover rounded-2xl opacity-60"
      />
    </motion.div>
  );
};

export default Video;
