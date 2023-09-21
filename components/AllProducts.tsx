"use client";

import styles from "@/styles";
import { staggerContainer } from "@/utils/motion";
import { webData } from "@/webData";
import { motion } from "framer-motion";
import Image from "next/image";

const AllProducts = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 py-6 px-4`}
    >
      {webData.product_screen.products.map((product) => (
        <div
          key={product.id}
          className="border-[1px] border-[rgb(0,88,38)] border-opacity-40 h-600px group "
        >
          <div className="h-[55%] w-full overflow-hidden">
            <Image
              src={product.img}
              alt={product.name}
              className="w-full h-full object-cover brightness-75 group-hover:brightness-100 duration-300 group-hover:scale-110"
            />
          </div>
          <div className="h-[45%] w-full flex flex-col justify-start">
            <div className="flex justify-between items-center px-4 py-1 border-b-[1px] border-b-[rgb(0,88,38)]">
              <p>{product.name}</p>
            </div>
            <p className="py-2 px-3 text-base">{product.desc}</p>
          </div>
        </div>
      ))}
    </motion.section>
  );
};

export default AllProducts;
