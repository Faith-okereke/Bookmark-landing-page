import React, { useState } from "react";
import firstTabImage from "../assets/illustration-features-tab-1.svg";
import secondTabImage from "../assets/illustration-features-tab-2.svg";
import thirdTabImage from "../assets/illustration-features-tab-3.svg";
export default function Feautures() {
  const [activeTab, setActiveTab] = useState(0);
  const featureData = [
    {
      title: "Simple Bookmarking",
      heading: "Bookmark in one click",
      description:
        "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
      image: firstTabImage,
    },
    {
      title: "Speedy Searching",
      heading: "Intelligent search",
      description:
        "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
      image: secondTabImage,
    },
    {
      title: "Easy Sharing",
      heading: "Share your bookmarks",
      description:
        "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
      image: thirdTabImage,
    },
  ];
  return (
    <>
      <div className="flex md:flex-row flex-col justify-center items-center md:gap-16 gap-5 text-veryDarkBlue border-b-[1px] border-b-grayishBlue">
        {featureData.map((feature, index) => (
          <div key={index}>
            <h3
              onClick={() => setActiveTab(index)}
              className={`pb-4 w-[200px] text-center cursor-pointer font-bold hover:text-softRed ${
                activeTab === index
                  ? `border-b-softRed border-b-2 text-grayishBlue`
                  : `border-b-2 border-b-transparent`
              }`}
            >
              {feature.title}
            </h3>
          </div>
        ))}
      </div>
      <div className="flex lg:flex-row flex-col items-center justify-center gap-16 py-16">
        <img className="w-[400px]" src={featureData[activeTab].image} alt="" />
        <div className="flex flex-col gap-5 items-start">
          <h2 className="text-2xl text-veryDarkBlue font-bold ">
            {featureData[activeTab].heading}
          </h2>
          <p className="text-grayishBlue md:w-[500px]">
            {featureData[activeTab].description}
          </p>
          <button className="bg-softBlue px-5 py-2 rounded-md text-white  text-sm">
            More Info
          </button>
        </div>
      </div>
    </>

    // {/* first feature */}
  );
}
