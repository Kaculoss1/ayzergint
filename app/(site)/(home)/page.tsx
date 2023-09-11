import { Video } from "@/components";
import { About, Contact, Hero, Offer, Partners, Why } from "@/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="relative">
        <Offer />
        <div className="gradient-03 z-0" />
        <About />
      </div>
      <Video />
      <div className="relative">
        <Why />
        <div className="gradient-04 z-0" />
        <Partners />
      </div>
      <Contact />
    </>
  );
}
