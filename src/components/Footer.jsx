import logo from "../assets/marty-logo.png";

function Footer() {
  return (
    <div>
      <div className=" bg-indigo-700 text-gray-300 px-2 md:px-4">
        <div className=" justify-between md:flex px-5 md:px-14 py-4 md:py-8">
          <div>
            <div className="mb-4">
              <div className="mb-2">
                <a href="/">
                  <img src={logo} alt="Footer logo" />
                </a>
              </div>
              <p className=" max-w-sm md:max-w-md my-2 ">
                Lets build you a solution that grows your business and increases
                your revenue.
              </p>
              <ul className="flex items-start gap-4 text-xl">
                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="flex gap-8 mb-4 md:gap-12">
              <ul>
                <li className=" mb-2 underline underline-offset-2">
                  <h3 className="uppercase font-medium">About</h3>
                </li>
                <li className=" text-sm hover:text-white duration-100 ease-in md:text-md">
                  <a href="#about" className="footer-link">
                    Why Choose Us
                  </a>
                </li>
                <li className=" text-sm hover:text-white duration-100 ease-in md:text-md">
                  <a href="#project" className="footer-link">
                    Projects
                  </a>
                </li>
                <li className=" text-sm hover:text-white duration-100 ease-in md:text-md">
                  <a href="#contact" className="footer-link">
                    Contact Us
                  </a>
                </li>
                <li className=" text-sm hover:text-white duration-100 ease-in md:text-md">
                  <a href="#" className="footer-link">
                    Blog
                  </a>
                </li>
              </ul>
              <ul>
                <li className=" mb-2 underline underline-offset-2">
                  <h3 className="uppercase font-medium">Services</h3>
                </li>
                <li className=" text-sm hover:text-white duration-100 ease-in md:text-md">
                  <a href="#services" className="footer-link">
                    Website Design
                  </a>
                </li>
                <li className=" text-sm hover:text-white duration-100 ease-in md:text-md">
                  <a href="#services" className="footer-link">
                    Software Development
                  </a>
                </li>
                <li className=" text-sm hover:text-white duration-100 ease-in md:text-md">
                  <a href="#services" className="footer-link">
                    Email services
                  </a>
                </li>
                <li className=" text-sm hover:text-white duration-100 ease-in md:text-md">
                  <a href="#services" className="footer-link">
                    Website Maintenance
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className=" mb-2 uppercase underline underline-offset-1 font-medium">
              Newsletter
            </h3>
            <form action="#" className="flex items-center gap-2 md:flex-col">
              <div>
                <input
                  type="text"
                  name="subscribe"
                  id="subscribe"
                  placeholder="enter valid email"
                  className=" py-1 px-2 rounded-sm text-gray-800 focus:outline-none"
                />
              </div>
              <Button
                type="submit"
                className=" bg-sectionBg border border-indigo-500 text-indigo-500 hover:text-white hover:bg-indigo-500 duration-500 ease-in my-1"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
      <div className=" bg-black text-center text-gray-300 py-6">
        <p>&copy; Marty Digitals {new Date().getFullYear()}</p>
      </div>
    </div>
  );
}

export default Footer;
