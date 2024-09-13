import React, { useState } from "react";
import arrowdown from "../assets/icon-arrow-down.svg";
export default function Accordion() {
  const accordionQA = [
    {
      question: "What is Bookmark?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
    },
    {
      question: "How can I request a new browser?",
      answer:
        "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
    },
    {
      question: "Is there a mobile app?",
      answer:
        "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
    },
    {
      question: "What about other Chromium browsers?",
      answer:
        "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
    },
  ];
  const [accordion, setAccordion] = useState(false);
  const toggleAccordion = (index) => {
    setAccordion(accordion === index ? null : index);
  };
  return (
    <div className="flex justify-center flex-col border-b-2 border-b-grayishBlue">
      {accordionQA.map((item, index) => (
        <div  key={index}>
          <div
            className="py-3 border-t-2 border-t-grayishBlue flex items-center justify-between px-2 gap-24 cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <p className="hover:text-softRed text-black flex-nowrap md:flex-wrap">{item.question}</p>
            <img
              className={`transition-transform duration-300 ${
                accordion===index ? `flip` : ``
              }`}
              src={arrowdown}
              alt=""
            />
          </div>
          {accordion === index && (
            <p className="py-3 px-2 max-w-[350px]">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}
