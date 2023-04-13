import logo from "../assets/marty-logo.png";

function Footer() {
  return (
    <div>
      <div className=" bg-indigo-700 text-slate-200">
        <div className=" flex px-5 md:px-14 py-4 md:py-8">
         
        </div>
      </div>
      <div className=" bg-black text-center text-white py-6">
        <div className="container">
          <p className="copyright">
         &copy; Marty Digitals {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
