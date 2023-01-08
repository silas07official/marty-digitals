import React from "react";
import imageOne from "../assets/hero-banner.webp";
import Button from "./Button";

function HeroCard() {
  return (
    <div className="md:flex gap-6 items-center md:justify-center md:px-10 px-7">
      <div className="mb-[80px] md:mb-4 md:basis-[45%]">
        <h1 className=" text-bigText font-bold text-2xl md:text-4xl">
          Business Solutions for Growth
        </h1>
        <p className=" h-2 my-5 text-[18px] w-[90%]">
          In today's digital age, having an online presence is essential for
          businesses to stay Competitive, Grow and Succeed.
        </p>
        <div className="my-[100px] md:my-[100px]">
          <Button
            className={`bg-indigo-500 borde hover:bg-indigo-300 text-white`}
          >
            Start A Project
          </Button>
        </div>
      </div>
      <div className="basis-[50%]">
        <img src={imageOne} alt="hero banner image" />
      </div>
    </div>
  );
}

export default HeroCard;
