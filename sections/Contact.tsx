"use client";

import { TitleText, TypingText } from "@/components";
import styles from "@/styles";
import { fadeIn, planetVariants, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import advisory from "../assets/advisory.webp";
import { ChangeEvent, useRef, useState } from "react";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import { webData } from "@/webData";

// const service_id = process.env.EMAILJS_SERVICE_ID;
// const template_id = process.env.EMAILJS_TEMPLATE_ID;
// const public_key = process.env.EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  // const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   if (template_id && service_id && public_key) {
  //     setLoading(true);

  //     emailjs
  //       .send(
  //         service_id,
  //         template_id,
  //         {
  //           from_name: form.name,
  //           to_name: "Keezy",
  //           from_email: form.email,
  //           to_email: "sanialhassan863@gmail.com",
  //           message: form.message,
  //         },
  //         public_key
  //       )
  //       .then(
  //         () => {
  //           setLoading(false);
  //           alert("Thank you. I will get back to you as soon as possible.");

  //           setForm({
  //             name: "",
  //             email: "",
  //             message: "",
  //           });
  //         },
  //         (error) => {
  //           setLoading(false);
  //           console.error(error);

  //           alert("Ahh, something went wrong. Please try again.");
  //         }
  //       );
  //   } else {
  //     alert(
  //       "Ahh, something went wrong. Please email me directly on 'Sanialhassan853@gmail.com' and I will get back to you as soon as possible."
  //     );
  //   }
  // };

  return (
    <section id="contact" className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.75] flex bg-[rgb(0,88,38)] bg-opacity-50 rounded-2xl p-8 justify-center flex-col shadow-lg shadow-primary"
        >
          <TypingText title="| Get in Touch" />
          <TitleText title={<>Contact</>} />
          <div className="w-full flex flex-col justify-start items-end text-right mt-2">
            <p className="text-base m-0 font-kmedium">
              {webData.home_screen.contact_section.address}
            </p>
            <p className="text-base m-0 font-kmedium">
              {webData.home_screen.contact_section.email}
            </p>
            <p className="text-base m-0 font-kmedium">
              {webData.home_screen.contact_section.telephone}
            </p>
          </div>

          <form
            ref={formRef}
            // onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-kmedium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="bg-[rgba(38,38,38,1)] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-kmedium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-kmedium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="johndoe@gmail.com"
                className="bg-[rgba(38,38,38,1)] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-kmedium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-kmedium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="message..."
                className="bg-[rgba(38,38,38,1)] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-kmedium"
              />
            </label>

            <button
              type="submit"
              className="bg-[rgba(38,38,38,1)] py-3 px-8 rounded-xl outline-none w-fit text-white font-kbold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
        <motion.div
          variants={planetVariants("right")}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <Image
            src={advisory}
            alt="get started"
            className="w-[90%] h-[90%] object-contain "
          />
          {/* <GoogleMap
            mapContainerStyle={{ height: "90%", width: "90%" }}
            center={{
              lat: webData.home_screen.contact_section.latitude,
              lng: webData.home_screen.contact_section.longitude,
            }}
            zoom={10}
          >
            <MarkerF
              position={{
                lat: webData.home_screen.contact_section.lat,
                lng: webData.home_screen.contact_section.long,
              }}
            />
          </GoogleMap> */}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
