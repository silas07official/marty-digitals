import React from "react";
import Button from "./Button";
import { bannerContent } from "./index";

function HeroCard() {
  return (
    <div className="md:flex gap-6 items-center md:justify-center md:px-14 px-4">
      <div className=" md:mb-0 md:basis-[45%]">
        <h1 className=" text-bigText font-bold text-2xl md:text-4xl">
          {bannerContent.headerText}
        </h1>
        <p className="my-3 text-[18px] w-[90%]">{bannerContent.paragraph}</p>
        <div className=" my-6 md:mt-[20px]">
          <Button
            className={`bg-indigo-500 borde hover:bg-indigo-300 text-white`}
          >
            {bannerContent.buttonText}
          </Button>
        </div>
      </div>
      <div className="basis-[45%]">
        <img src={bannerContent.image} alt="hero banner image" />
      </div>
    </div>
  );
}

export default HeroCard;
