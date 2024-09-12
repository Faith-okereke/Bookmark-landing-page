import React from "react";
import logo from "../assets/logo-bookmark.svg";

export default function NavBar() {
  return (
    <div className="flex justify-between w-full pb-16 md:px-8 items-center">
      <img src={logo} alt="" />
      <ul className="md:flex justify-center items-center gap-8 font-bold text-sm hidden ">
        <li>
          <a className="uppercase  text-grayishBlue hover:text-softRed transition-transform" href="">Features</a>
        </li>
        <li>
          <a className="uppercase text-grayishBlue hover:text-softRed transition-transform" href=""> Pricing</a>
        </li>
        <li>
          <a className="uppercase text-grayishBlue hover:text-softRed  transition-transform" href=""> Contact</a>
        </li>
        <button className="bg-softRed px-5 py-2 rounded-md border-transparent border-2 text-white uppercase hover:bg-white hover:text-softRed hover:border-softRed transition-all">Login</button>
      </ul>
    </div>
  );
}
