import React from "react";
import Dollar from "./pictures/Doll.png";
import Pro from "./pictures/Pro.png";
import Bad from "./pictures/bad.png";
import TopArrow from "./pictures/TopArrow.png";
import BottomArrow from "./pictures/BottomArrow.png";

const CleanHomeSteps = () => {
  return (
    <div className="flex flex-col items-center text-center bg-pink-50 py-12 px-4">
      <h2 className="font-[dmSans] font-normal text-4xl leading-[50px] tracking-normal text-center text-gray-800 mb-[80px]">
        3 Easy Steps To A <span className="text-green-600">Clean Home</span>
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-20 max-w-4xl mb-3">
        {/* Step 1 */}
        <div className="flex flex-col items-center max-w-xs">
          <div className="bg-[rgba(222,157,157,1)] w-[100px]  p-6 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl mb-4 top-[237px] left-[282px]">
            <img src={Dollar} alt="Estimate" className="w-12" />
          </div>
          <h3 className="font-dm-sans font-semibold text-base leading-[100%] tracking-normal text-center capitalize text-gray-500">Get Your Free Estimate</h3>
          <p className="font-roboto font-light text-sm leading-6 tracking-normal text-[#423D3D] mt-2">
            Simply fill out our easy estimate form or call us at 
            <a href="tel:4809998018" className="text-[#DE9D9D] font-medium"> (480) 999-8018 </a> 
             to get your estimate and we will schedule your cleaning!
          </p>
        </div>
        
        
        {/* Step 2 */}
        <div className="flex flex-col items-center max-w-xs ">
          <div className="bg-[rgba(222,157,157,1)] w-[100px]  p-6 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl mb-4  top-[237px] left-[282px]">
            <img src={Pro} alt="Professional Cleaning" className="w-12 " />
          </div>
          <h3 className="font-dm-sans font-semibold text-base leading-[100%] tracking-normal capitalize text-gray-500">Our Professionals Will Clean Your Home</h3>
          <p className="font-roboto font-light text-sm leading-6 tracking-normal  text-[#423D3D] mt-2">
            Our professional cleaners will arrive promptly to your home at the scheduled time to clean.
          </p>
        </div>
        
        {/* Step 3 */}
        <div className="flex flex-col items-center max-w-xs">
          <div className="bg-[rgba(222,157,157,1)] w-[100px]  p-6 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl mb-4 top-[237px] left-[282px]">
            <img src={Bad} alt="Relax" className="w-12 h-12" />
          </div>
          <h3 className="font-dm-sans font-semibold text-base leading-[100%] tracking-normal  capitalize text-gray-500">Your Sit Back And Relax Goes Here</h3>
          <p className="font-roboto font-light text-sm leading-6 tracking-normal  text-[#423D3D] mt-2">
            Come back to a clean home and spend your time with those you love and doing what you love.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CleanHomeSteps;
