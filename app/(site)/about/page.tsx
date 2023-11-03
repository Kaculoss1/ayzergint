import { AboutBanner, AboutDesc, Subsidiaries } from "@/components";
import styles from "@/styles";
import { webData } from "@/webData";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGI | About Us",
};

export default function AboutPage() {
  return (
    <>
      <AboutBanner />
      <div className="relative">
        <div className="gradient-04 z-0" />
        <div
          className={`${styles.paddingX} mt-16 mx-auto flex flex-col items-center gap-10`}
        >
          {webData.about_screen.subsidiaries.map((subs, index) => (
            <Subsidiaries key={subs.id} {...subs} index={index} />
          ))}
          <AboutDesc />
          <Link
            href="/services"
            className="bg-[rgb(0,88,38)] mt-16 w-fit rounded-lg drop-shadow-xl shadow-xl text-white py-3 px-4 text-lg font-kbold "
          >
            Our Services
          </Link>
        </div>
      </div>
    </>
  );
}
