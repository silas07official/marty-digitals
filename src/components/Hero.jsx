import React from "react";
import HeroCard from "./HeroCard";

function Hero() {
  return (
    <section
      id="home"
      className=" bg-sectionBg my-[56px] md:my-[72px] md:px-10 px-7 py-9 md:py-10"
    >
      <HeroCard />
    </section>
  );
}

export default Hero;
