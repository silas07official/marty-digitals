import React from "react";
import Button from "./Button";
import { serviceLeft, serviceCard } from "./index";

function Service() {
  return (
    <section
      id="services"
      className="px-4 md:px-14 mt-8 mb-[86px] md:mb-12 md:mt-[140px]"
    >
      <div className="md:flex gap-[150px] items-center md:justify-center md:px-14 px-4">
        <div className="mb-6 md:mb-0 basis-[50%]">
          <div className="grid place-items-center text-[40px] text-indigo-500 bg-indigo-100 w-[60px] h-[60px] rounded-[4px] mb-[30px] z-10">
            <ion-icon name="cube"></ion-icon>
          </div>
          <p className="mb-[20px] text-bigText text-3xl ">
            {serviceLeft.title}
          </p>
          <p className="text-bigText">{serviceLeft.subText}</p>
          <a href="/services">
            <Button className=" bg-sectionBg border border-indigo-500 text-indigo-500 hover:text-white hover:bg-indigo-500 duration-500 ease-in my-4">
              {serviceLeft.buttonText}
            </Button>
          </a>
        </div>
        <ul className="grid gap-4 grid-cols-2">

        {serviceCard.map((card) =>(
          <li key={card.title} className=" hover:bg-indigo-500 hover:text-white rounded-md duration-500 ease-in">
          <div className="flex flex-col justify-center items-center p-[20px] shadow-md hover:cursor-pointer  text-bigText hover:text-white">
            <div className="h-[60px] w-[60px] grid place-items-center text-[30px] text-indigo-500 bg-indigo-100 rounded-full my-3">
              <ion-icon name={card.icon}></ion-icon>
            </div>
            <h3 className="my-[10px] text-xl font-medium">
              {card.title}
            </h3>
            <p className="text-left">
              {card.text}
            </p>
          </div>
        </li>
        ))}

          
        </ul>
      </div>
    </section>
  );
}

export default Service;