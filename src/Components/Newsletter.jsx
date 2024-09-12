import React from "react";

export default function Newsletter() {
  return (
    <div className="bg-softBlue grid place-items-center text-white py-12 text-center px-6 md:px-0">
      <div className="flex flex-col items-center gap-4">
        <h3 className="uppercase text-xs tracking-wider">
          35,000+ already joined
        </h3>
        <h1 className="text-2xl font-bold w-[70%]">
          Stay up-to-date with what we’re doing
        </h1>
        <form className="flex md:flex-row flex-col w-full md:w-auto items-center justify-center gap-2">
          <input
            className="bg-white p-2 rounded-md placeholder:text-sm md:w-[250px] w-full"
            type="email"
            placeholder="Enter your email address"
          />
          <button className="bg-softRed px-5 py-2 border-2 border-transparent rounded-md text-white text-sm hover:bg-white hover:text-softRed hover:border-softRed w-full md:w-auto">
            Contact Us
          </button>
        </form>
      </div>
    </div>
  );
}
