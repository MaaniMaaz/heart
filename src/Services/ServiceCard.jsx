import React from "react";
import LinkArrow from "../pictures/LinkArrow.png";

const ServiceCard = ({ service, onClick }) => {
  return (
    <div
      className="relative w-full max-w-[320px] sm:max-w-[398px] h-auto min-h-[180px] sm:min-h-[209px] border-[4px] sm:border-[6px] rounded-[16px] sm:rounded-[20px] bg-gray-50 shadow-sm p-5 sm:p-6 mx-auto flex flex-col"
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
      <div className="mt-6 sm:mt-4 lg:mt-2 flex-grow">
        <h3 className="font-['Raleway']text-xl sm:text-2xl lg:text-[36px] font-normal leading-snug lg:leading-[50px] tracking-[0%] text-[#717171] text-justify mt-4">
          {service.title}
        </h3>
        <p className="font-['Raleway']text-xs sm:text-sm lg:text-[16px] font-normal leading-normal lg:leading-[20px] tracking-[0%] text-[#717171] mt-1 sm:mt-2 text-justify">
          {service.description}
        </p>
      </div>

      {/* View More Link - Bottom Left */}
      <div className="mt-auto pt-3 flex">
        <button 
          onClick={() => onClick(service)}
          className="inline-flex items-center font-['Raleway'] text-xs sm:text-sm lg:text-[16px] font-[500] text-[rgba(222,157,157,1)] hover:underline cursor-pointer"
        >
          View More
          <img 
            src={LinkArrow} 
            alt="Arrow" 
            className="ml-1 w-3 h-3 lg:w-6 lg:h-6 sm:w-4 sm:h-4 bg-[rgba(222,157,157,1)] rounded-full" 
          />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;