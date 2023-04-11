import React from "react";
import { aboutContent } from "./index";
import Button from "./Button";

function About() {
  return (
    <section
      id="about"
      className=" bg-white mt-[48px] mb-16 md:mt-[65px] md:mb-16 md:px-4 px-2 py-9 md:py-10"
    >
      <div className="md:flex gap-6 items-center md:justify-center md:px-14 px-4">
        <div className=" md:mb-0 md:basis-[45%]">
          <h1 className=" text-bigText font-bold text-2xl md:text-4xl">
            {aboutContent.headerSubtext}
          </h1>
          <p className="my-3 text-[18px] w-[90%] text-bigText">
            {aboutContent.subText}
          </p>
          <div className=" my-6 md:mt-[20px]">
            <Button
              className={`bg-indigo-500 borde hover:bg-indigo-400 text-white`}
            >
              {aboutContent.buttonText}
            </Button>
          </div>
        </div>
        <div className="basis-[45%]">
          <img src={aboutContent.image} alt="about us image" />
        </div>
      </div>
    </section>
  );
}

export default About;
