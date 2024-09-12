import React, { useState } from "react";
import logo from "../assets/logo-bookmark.svg";
import close from "../assets/icon-close.svg";
import hamburgerMenu from "../assets/icon-hamburger.svg";

export default function NavBar() {
  const [nav, setNav] = useState(false);
  const closeNav = () => {
    setNav(false);
  };
  return (
    <div className="md:px-24 md:py-12 p-0">
      <div className="flex justify-between md:gap-12 lg:gap-0  pb-16 lg:px-8 items-center">
        <img className="m-6 md:m-0" src={logo} alt="" />
        <img
          onClick={() => setNav(true)}
          className="md:hidden m-6"
          src={hamburgerMenu}
          alt=""
        />
        <ul className="md:flex justify-center items-center gap-8 font-bold text-sm hidden ">
          <li>
            <a
              className="uppercase  text-grayishBlue hover:text-softRed transition-transform"
              href=""
            >
              Features
            </a>
          </li>
          <li>
            <a
              className="uppercase text-grayishBlue hover:text-softRed transition-transform"
              href=""
            >
              {" "}
              Pricing
            </a>
          </li>
          <li>
            <a
              className="uppercase text-grayishBlue hover:text-softRed  transition-transform"
              href=""
            >
              {" "}
              Contact
            </a>
          </li>
          <button className="bg-softRed px-5 py-2 rounded-md border-transparent border-2 text-white uppercase hover:bg-white hover:text-softRed hover:border-softRed transition-all">
            Login
          </button>
        </ul>
      </div>
      {nav && (
        <div
          className={`md:hidden fixed top-0 bg-veryDarkBlue h-screen w-screen pt-12 transform transition-transform duration-300 ease-in-out ${
            nav ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <img
            onClick={closeNav}
            className="absolute top-5 right-5"
            src={close}
            alt=""
          />
          <ul className="flex flex-col justify-center items-center w-full  font-bold text-sm p-5">
            <img src={logo} alt="" />
            <li className="border-t-[1px] border-t-grayishBlue w-[350px] text-center py-5">
              <a
                className="uppercase  text-grayishBlue hover:text-softRed transition-transform"
                href=""
              >
                Features
              </a>
            </li>
            <li className="border-t-[1px] border-t-grayishBlue w-[350px] text-center py-5">
              <a
                className="uppercase text-grayishBlue hover:text-softRed transition-transform"
                href=""
              >
                {" "}
                Pricing
              </a>
            </li>
            <li className="border-t-[1px] border-t-grayishBlue w-[350px] text-center py-5">
              <a
                className="uppercase text-grayishBlue hover:text-softRed  transition-transform"
                href=""
              >
                {" "}
                Contact
              </a>
            </li>
            <button className="bg-transparent w-[350px] px-5 py-2 rounded-md border-white border-2 text-white uppercase hover:bg-white transition-all">
              Login
            </button>
          </ul>
        </div>
      )}
    </div>
  );
}
