import { useRef } from "react";
import Button from "./Button";
import emailjs from "emailjs-com";
import { Result } from "postcss";

function Contact() {
  const form = useRef();

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
        (result) => console.log(result.text),
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
      <div className="md:flex gap-[150px] items-center md:justify-center md:px-14 px-4 md:my-[50px] my-3">
        <div className="mb-[20px] basis-[50%]">
          <form
            ref={form}
            className="shadow-md shadow-indigo-300 px-2 py-8 rounded-md "
            onSubmit={sendEmail}
          >
            <div className="flex">
              <div className=" mb-[20px] basis-[50%]">
                <label htmlFor="name" className="text-bigText p-3">
                  Name*
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Enter Your Name"
                  className="border p-2 text-sm  outline-none text-gray-400 w-[210px] bg-transparent"
                />
              </div>
              <div className="mb-[20px] basis-[50%]">
                <label htmlFor="name" className="text-bigText p-3">
                  Email*
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  required
                  placeholder="Enter Your Email"
                  className="border p-2 text-sm  outline-none text-gray-400 w-[210px] bg-transparent"
                />
              </div>
            </div>
            <div>
              <label for="message" className="my-3 mx-4">
                Message*
              </label>
              <textarea
                name="message"
                id="message"
                required
                className="w-[95%] border outline-none resize-none mx-4 my-3 p-3 h-[250px] bg-transparent"
                placeholder="Enter Your Message"
              ></textarea>
            </div>
            <Button
              type="submit"
              className="mx-4 bg-indigo-500  text-white hover:text-indigo-500 hover:bg-sectionBg hover:border hover:border-indigo-500 duration-400 ease-in my-4"
            >
              <span>Send Message</span>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </Button>
          </form>
        </div>
        <div>
          <p>heey</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
