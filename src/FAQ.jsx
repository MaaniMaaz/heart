import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Up from "./pictures/uparrow.png";
import Down from "./pictures/downarrow.png";

const faqs = [
  {
    question: "What areas do you serve?",
    answer:
      "We proudly serve Arizona West Valley, including surrounding communities",
  },
  {
    question: "Are your cleaning products safe for children and pets?",
    answer: "Yes! We use 100% eco-friendly, non-toxic products that are safe for kids, pets, and allergy-sensitive households.",
  },
  {
    question: "How do I book a cleaning?",
    answer: "You can schedule online, call/text us at (480) 999-8018, or email us at info@heartandhomegreenclean.com.",
  },
  // {
  //   question: "What is a wireframe?",
  //   answer: "UX design stands for User Experience design.",
  // },
  // {
  //   question: "What is user testing?",
  //   answer: "UX design stands for User Experience design.",
  // },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative max-w-2xl mx-auto py-10 lg:max-w-4xl px-4 sm:px-6 lg:px-8">
      {/* Background Circles */}
      <div className="absolute inset-0 -z-10 hidden lg:block max-[1590px]:hidden">
        {/* Top Left Circle */}
        <div className="absolute  top-[70px] left-[-400px] w-32 h-32 lg:w-44 lg:h-44 bg-[rgba(255,199,199,1)] rounded-full"></div>

        <div className="absolute  top-[70px] left-[-346px] w-32 h-32 lg:w-72 lg:h-72 bg-[rgba(222,127,127,0.5)] rounded-full"></div>
        {/* Top Right Circle */}
        <div className="absolute  top-[280px] right-[-160px] w-28 h-28 lg:w-36 lg:h-36 bg-[rgba(255,199,199,1)] rounded-full"></div>
        {/* Bottom Left Circle */}
        
        {/* Bottom Right Circle */}
        <div className="absolute  bottom-[-80px] right-[-160px]  w-32 h-32 lg:w-64 lg:h-64 bg-[rgba(222,127,127,0.5)] rounded-full"></div>
      </div>

      {/* FAQ Content */}
      <h2 className="font-['Raleway'] font-normal text-[24px] sm:text-[28px] lg:text-[36px] leading-[100%] tracking-[0%] text-black text-center mb-6 lg:mt-14 lg:mb-11">
        Frequently Asked Questions
      </h2>
      <div className="space-y-2 lg:space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`bg-[rgba(251,246,243,1)] p-2 lg:p-6 rounded-lg ${
              openIndex === index ? "border border-[rgba(251,246,243,1)]" : ""
            }`}
          >
            <button
              className="flex justify-between items-center w-full text-left"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-['Raleway'] font-semibold text-[16px] sm:text-[18px] lg:text-[22px]">
                {faq.question}
              </span>
              {openIndex === index ? (
                <img src={Up} alt="Up arrow" className="h-6 w-6 lg:h-8 lg:w-8" />
              ) : (
                <img src={Down} alt="Down arrow" className="h-6 w-6 lg:h-8 lg:w-8" />
              )}
            </button>
            {openIndex === index && faq.answer && (
              <p className="mt-2 font-['Raleway'] font-normal text-[14px] sm:text-[16px] lg:text-[18px] lg:mt-4 text-black">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}