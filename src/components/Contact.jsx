import { useRef, useState } from "react";
import Button from "./Button";
import emailjs from "emailjs-com";
import { Result } from "postcss";
import Modal from "./Modal";

function Contact() {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "contact_service",
        "contact_form",
        form.current,
        "user_wEgO1uJigsjaEN4LM3GoR"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowModal(true);
          
        },
        (error) => console.log(error.text)
      );
      e.target.reset();
  };

  return (
    <section
      id="contact"
      className=" bg-sectionBg px-4 py-16 md:px-14 mt-8 mb-[86px] md:mb-12 md:mt-[0px]"
    >
      <h3 className="text-center text-3xl text-bigText after:absolute after:content-[''] after:h-[4px] after:w-[50px] after:bg-indigo-500 after:mt-[40px]  md:after:left-[48%] after:left-[43%]">
        Get In Touch
      </h3>

      <p className="text-bigText text-center my-4 text-[18px]">
        Do you want to start a Project ? Leave us a message
      </p>
      <div className="md:flex justify-center items-center gap-7 mt-10">
        <div className="max-w-md bg-white rounded-lg overflow-hidden md:max-w-xl">
          <div className="md:flex">
            <div className="md:w-1/2 bg-indigo-50 p-4">
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-bigText font-semibold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-bigText font-semibold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-bigText font-semibold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  ></textarea>
                </div>
                <div className="text-center">
                  <Button
                    type="submit"
                    className="mx-3 bg-indigo-500  text-white hover:text-indigo-500 hover:bg-sectionBg hover:border hover:border-indigo-500 duration-400 ease-in my-4"
                  >
                    <span>Send Message</span>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                  </Button>
                </div>
              </form>
            </div>
            <div className="md:w-1/2 bg-indigo-100 p-4">
              <h2 className="text-md text-bigText md:text-lg font-semibold mb-4">
                Contact Information
              </h2>
              <ul className=" pl-2 list-none">
                <li className="flex items-center gap-1  my-4 text-[16px] md:text-sm">
                  <ion-icon
                    name="locate-outline"
                    className="inline-block mr-2"
                  ></ion-icon>
                  Lagos, Nigeria
                </li>
                <li className="flex items-center gap-1  my-4 text-[16px] md:text-sm">
                  <ion-icon
                    name="logo-whatsapp"
                    className="inline-block mr-2"
                  ></ion-icon>
                  <a href="https://wa.me/2349066777091" target="blank">+234 9066-777-091</a>
                </li>
                <li className="flex items-center gap-1 text-[16px] md:text-sm my-4">
                  <ion-icon
                    name="mail-outline"
                    className="inline-block"
                  ></ion-icon>
                  <a href="mailto:martydigitals@gmail.com" target="blank">
                    martydigitals@gmail.com
                  </a>
                </li>
                <li className="flex items-center my-4  gap-1 text-[16px] md:text-sm">
                  <ion-icon
                    name="logo-facebook"
                    className="inline-block mr-2"
                  ></ion-icon>
                  <a href="https://web.facebook.com/MartyDigitals" target="blank">Marty Digitals</a>
                  
                </li>
                <li className="flex items-center my-4 gap-1 text-[16px] md:text-sm">
                  <ion-icon
                    name="logo-twitter"
                    className="inline-block mr-2"
                  ></ion-icon>
                  <a href="https://twitter.com/marty_digitals" target="blank">Marty Digitals</a>
                  
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-5 hidden md:block md:mt-0">
          <img
            src="https://www.sendnotice.in/assets/images/contactus.svg"
            alt="contactus_image"
            className="w-[100%]"
          />
        </div>
      </div>
      {showModal ? <Modal message="Message sent successfully" /> : null}
    </section>
  );
}

export default Contact;
