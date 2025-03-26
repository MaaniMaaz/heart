import React from "react";
import HomeIcon from "./pictures/home.png";
import Cleaning from "./pictures/cleaning.png";
import Box from "./pictures/Box.png";

const services = [
  {
    title: "Routine Cleaning",
    description:
      "We'll fight the mess for you. Our routine weekly, biweekly or monthly cleanings will keep your home tidy.",
    icon: Cleaning,
    type: "image",
  },
  {
    title: "Deep Cleaning",
    description:
      "More than a routine cleaning, deep cleans leave dirt and grime nowhere to hide.",
    icon: HomeIcon,
    type: "image",
  },
  {
    title: "Move Out/Move In",
    description:
      "Your move is already stressful. We'll clean where you're leaving, where you're going, or both so you can enjoy your new home sooner.",
    icon: Box,
    type: "image",
  },
];

const OurServices = () => {
  return (
    <div className="bg-white px-5 py-10 sm:px-6 sm:py-8 md:px-20 md:py-12">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-6 lg:gap-4 items-start md:items-end">
        {/* Left: Heading */}
        <div className="mb-6 md:mb-0 lg:-ml-20">
          <h4 className="font-['Averia_Serif_Libre'] text-2xl mt-11 sm:text-3xl lg:text-[32px] font-bold lg:leading-[84px] text-[#A8C082] text-left lg:-mb-[15px] sm:mt-5">
            Our Services
          </h4>
          <h2 className="font-[dmSans] font-normal text-3xl sm:text-4xl lg:text-[48px] leading-tight lg:leading-[50px] text-gray-900 mt-2 text-left">
            We Work Many Fields To Clean Your Surroundings
          </h2>
        </div>

        {/* Right: Paragraph */}
        <div className="mt-2 md:mt-0 lg:ml-16">
          <p className="font-[dmSans] text-sm sm:text-[15px] font-normal leading-relaxed sm:leading-[30px] tracking-[0%] text-gray-500 text-left ">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book.
          </p>
        </div>
      </div>

      {/* Service Cards */}
      <div className="mt-10 sm:mt-8 md:mt-12 lg:mt-[90px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 md:gap-6 justify-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative w-full max-w-[320px] sm:max-w-[398px] h-auto min-h-[180px] sm:min-h-[209px] border-[4px] sm:border-[6px] rounded-[16px] sm:rounded-[20px] bg-gray-50 shadow-sm p-5 sm:p-6 mx-auto"
            style={{ borderColor: "rgba(168, 192, 130, 1)" }}
          >
            {/* Icon Circle */}
            <div
              className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white border-[4px] sm:border-[6px] rounded-full flex items-center justify-center shadow"
              style={{ borderColor: "rgba(168, 192, 130, 1)" }}
            >
              {service.type === "image" ? (
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-4 h-4 sm:w-5 sm:h-5 lg:w-10 lg:h-10 object-contain"
                />
              ) : (
                <span className="text-[#A8C082] text-lg sm:text-xl lg:text-2xl">
                  {service.icon}
                </span>
              )}
            </div>

            {/* Card Content */}
            <div className="mt-6 sm:mt-4 lg:mt-2">
              <h3 className="font-[dmSans] text-xl sm:text-2xl lg:text-[36px] font-normal leading-snug lg:leading-[50px] tracking-[0%] text-[#717171] text-justify mt-4">
                {service.title}
              </h3>
              <p className="font-[dmSans] text-xs sm:text-sm lg:text-[16px] font-normal leading-normal lg:leading-[20px] tracking-[0%] text-[#717171] mt-1 sm:mt-2 text-justify">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;