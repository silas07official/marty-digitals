import React from "react";
import HeroCard from "./HeroCard";

function Hero() {
  return (
    <section
      id="home"
      className=" bg-sectionBg mt-[48px] mb-16 md:mt-[65px] md:mb-16 md:px-4 px-2 py-9 md:py-10"
    >
      <HeroCard />
    </section>
  );
}

export default Hero;
