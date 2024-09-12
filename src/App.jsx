import { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import herofirst from "./assets/illustration-hero.svg";
import Feautures from "./Components/Feautures";
import Download from "./Components/Download";
import Accordion from "./Components/Accordion";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="md:px-24 px-8 md:py- py-5">
        <NavBar />
        {/* Hero Section */}
        <div className="flex justify-between md:flex-row flex-col items-center w-full">
          <div className="flex flex-col gap-5 order-2 md:order-1 text-center md:text-justify">
            <h1 className="text-4xl font-bold text-veryDarkBlue md:w-[70%]">
              A Simple Bookmark Manager
            </h1>
            <p className="text-grayishBlue text-sm md:w-[70%] ">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
            <div className="flex items-center gap-4 md:w-auto w-full mb-16 md:mb-auto">
              <button className="md:px-4 p-2 md:py-3 text-white bg-softBlue rounded-md md:text-sm text-xs shadow-2xl border-transparent border-2 hover:border-softBlue hover:bg-white hover:text-softBlue transition-all md:w-auto w-full">
                Get it on Chrome
              </button>
              <button className="md:px-4 p-2 md:py-3 text-black bg-gray-100 rounded-md md:text-sm text-xs shadow-2xl border-transparent border-2 hover:border-grayishBlue hover:text-grayishBlue transition-all md:w-auto w-full">
                Get it on Firefox
              </button>
            </div>
          </div>
          <img className="md:w-[550px] w-[700px]" src={herofirst} alt="" />
        </div>

        {/* Features Section */}
        <div className="pb-16">
          <div className="text-center flex flex-col items-center justify-center pb-16">
            <h1 className="text-2xl text-veryDarkBlue font-bold pb-4">
              Feautures
            </h1>
            <p className="text-grayishBlue md:w-[50%] ">
              Our aim is to make it quick and easy for you to access your
              favourite websites. Your bookmarks sync between your devices so
              you can access them on the go.
            </p>
          </div>
          <Feautures />
        </div>
        {/* Download extension Section  */}
        <div className="pb-16">
          <div className="text-center flex flex-col items-center justify-center pb-16">
            <h1 className="text-2xl text-veryDarkBlue font-bold pb-4">
              Download the Extension
            </h1>
            <p className="text-grayishBlue md:w-[50%] ">
              We’ve got more browsers in the pipeline. Please do let us know if
              you’ve got a favourite you’d like us to prioritize.
            </p>
          </div>
          <Download />
        </div>
        {/* Accordion FAQ  */}
        <div className="pb-16 grid place-items-center">
          <div className="text-center flex flex-col items-center justify-center pb-16">
            <h1 className="text-2xl text-veryDarkBlue font-bold pb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-grayishBlue md:w-[60%] ">
              Here are some of our FAQs. If you have any other questions you’d
              like answered please feel free to email us.
            </p>
          </div>
          <Accordion />
          <button className="bg-softBlue px-5 py-2 border-2 border-transparent rounded-md text-white text-sm  hover:bg-white hover:text-softBlue hover:border-softBlue mt-6">
            More Info
          </button>
        </div>
      </div>
      <div>
        {/* Newsletter form section */}
        <Newsletter />
      </div>
      {/* Footer Section  */}
      <div className="px-24 py-6 bg-veryDarkBlue">
        <Footer />
      </div>
    </div>
  );
}

export default App;
