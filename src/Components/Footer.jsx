import React from "react";
import facebook from "../assets/icon-facebook.svg";
import twitter from "../assets/icon-twitter.svg";
import logo from "../assets/logo-bookmark.svg";
export default function Footer() {
  return (
    <div className="flex md:flex-row flex-col justify-between w-full gap-10 md:gap-0 items-center">
        <div className="flex md:flex-row flex-col justify-start gap-10 w-full items-center">
        <img src={logo} alt="" />
      <ul className="flex md:flex-row flex-col justify-center items-center gap-8 font-bold text-sm">
        <li>
          <a className="uppercase  text-grayishBlue" href="">
            Features
          </a>
        </li>
        <li>
          <a className="uppercase text-grayishBlue" href="">
            {" "}
            Pricing
          </a>
        </li>
        <li>
          <a className="uppercase text-grayishBlue" href="">
            {" "}
            Contact
          </a>
        </li>
      </ul>
        </div>
      
      <div className="flex items-center justify-center gap-6">
        <img src={facebook} alt="" />
        <img src={twitter} alt="" />
      </div>
    </div>
  );
}
