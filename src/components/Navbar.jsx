import { React, useState } from "react";
import logo from "../assets/marty-logo.png";
import Button from "./Button";
import { Links } from "./index";

function Navbar() {
  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 bg-white">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7 ">
        <div>
          <a href="/">
            <img src={logo} alt="" width={60} height={20} />
          </a>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-3 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <ul
          className={`md:flex items-center bg-sectionBg md:bg-transparent md:pb-0 pb-8 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto pl-9 md:pl-0 transition-all duration-500 ease-in ${
            open ? "top-12 opacity-100" : "top-[-499px]"
          } md:opacity-100 `}
        >
          {Links.map((link) => (
            <li key={link.name} className="capitalize md:ml-6 my-7 md:my-0">
              <a
                href={link.link}
                className=" text-slate-500 hover:text-indigo-500 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <a href="#home">
            <Button className="bg-indigo-500 hover:bg-indigo-400 text-white md:ml-6">
              Get Started
            </Button>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
