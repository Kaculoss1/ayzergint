import "../../styles/globals.css";
import "slick-carousel/slick/slick.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Footer, Navbar } from "@/components";

const ESB = localFont({
  src: "../../assets/fonts/EudoxusSans-Bold.woff2",
  variable: "--ESB",
  weight: "700",
  style: "normal",
  display: "block",
});
const ESM = localFont({
  src: "../../assets/fonts/EudoxusSans-Medium.woff2",
  variable: "--ESM",
  weight: "500",
  style: "normal",
  display: "block",
});
const ESXL = localFont({
  src: "../../assets/fonts/EudoxusSans-ExtraLight.woff2",
  variable: "--ESXL",
  weight: "200",
  style: "normal",
  display: "block",
});
const ESXB = localFont({
  src: "../../assets/fonts/EudoxusSans-ExtraBold.woff2",
  variable: "--ESXB",
  weight: "800",
  style: "normal",
  display: "block",
});
const ESL = localFont({
  src: "../../assets/fonts/EudoxusSans-Light.woff2",
  variable: "--ESL",
  weight: "300",
  style: "normal",
  display: "block",
});
const ESR = localFont({
  src: "../../assets/fonts/EudoxusSans-Regular.woff2",
  variable: "--ESR",
  weight: "400",
  style: "normal",
  display: "block",
});

export const metadata: Metadata = {
  title: "Ayzer Group International",
  description: "A Brokerage Company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${ESB.variable} ${ESM.variable} ${ESXL.variable} ${ESXB.variable} ${ESL.variable} ${ESR.variable}`}
    >
      <body>
        <div className="bg-primary-black overflow-hidden">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
