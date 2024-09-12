import React from "react";
import chrome from "../assets/logo-chrome.svg"
import firefox from "../assets/logo-firefox.svg"
import opera from "../assets/logo-opera.svg"
export default function Download() {
  const downloadElements = [
    {
      img: chrome,
      heading: "Add to Chrome",
      version: "Minimum version 62",
      add: "Add & Install Extension",
    },
    {
      img: firefox,
      heading: "Add to Firefox",
      version: "Minimum version 55",
      add: "Add & Install Extension",
    },
    {
      img: opera,
      heading: "Add to Opera",
      version: "Minimum version 46",
      add: "Add & Install Extension",
    },
  ];
  return (
    <div className="flex md:flex-row flex-col items-center justify-center gap-5 text-center px-6 md:px-0">
      {downloadElements.map((item,index) => (
        <div key={index} className="rounded-lg shadow-lg md:p-4 p-6 flex flex-col gap-3 bg-white items-center justify-center">
          <div className=" flex flex-col items-center gap-1">
            <img className="w-2/3" src={item.img} alt="" />
            <h2 className="text-lg text-black font-bold">{item.heading}</h2>
            <p className="text-grayishBlue text-sm">{item.version}</p>
          </div>
          <div className="border-dotted border-t-4 border-t-grayishBlue w-full mt-3"></div>
          <button className="bg-softBlue md:px-5 p-3 md:py-2 border-2 border-transparent rounded-md text-white text-sm mt-2 hover:bg-white hover:text-softBlue hover:border-softBlue">
            {item.add}
          </button>
        </div>
      ))}
    </div>
  );
}
