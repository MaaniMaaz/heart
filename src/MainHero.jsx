import React from "react";
import Cleaning from "./pictures/herocleaning.png";
import Clock from "./pictures/clock.png";
import Spray from "./pictures/spray.png";
import Secure from "./pictures/secure.png";
import Shield from "./pictures/Shield-Done.png";
import Activity from "./pictures/Activity.png";
import Star from "./pictures/Star.png";
import Brush from "./pictures/Brush.png";

const MainHero = () => {
  return (
    <div className="bg-[#F9F6F3] min-h-screen flex flex-col items-end justify-start pl-24 pr-0 py-0 relative">
      {/* Mobile-specific overlay (hidden on lg) */}
      <div className="lg:hidden absolute inset-0 bg-[#F9F6F3] z-10 flex flex-col px-4 pt-4">
        {/* Text Content First on Mobile */}
        <div className="text-center mb-6">
          <h1 className="font-['Averia_Serif_Libre'] font-bold text-4xl leading-[1.1] text-black">
            <span className="text-[rgba(168,192,130,1)]">Eco-Friendly</span> Cleaning
          </h1>
          <p className="font-['dmSans'] font-normal text-base leading-normal text-gray-600 mt-3">
            We are the premier cleaning service in the West Valley, Arizona area.
          </p>
          <button className="mt-4 w-full h-[46px] bg-[rgba(168,192,130,1)] text-white font-semibold px-6 py-3 rounded-tr-[20px] rounded-br-[10px] rounded-bl-[20px] transition hover:bg-opacity-90">
            Get Your Free Estimate
          </button>
        </div>
        
        {/* Image Content Second on Mobile */}
        <div className="relative w-full max-w-md mx-auto">
          <div className="relative bg-[rgba(255,226,226,1)] p-6 rounded-tl-[60px] rounded-br-[60px] w-full h-[350px]">
            <img 
              src={Cleaning} 
              alt="Cleaning Supplies" 
              className="rounded-lg w-full h-[250px] mt-8 object-cover" 
            />
          </div>
        </div>
      </div>

      {/* Original LG design (hidden on mobile) */}
      <div className="hidden lg:flex w-full grid lg:grid-cols-2 items-center gap-10 pt-0 mt-0">
        {/* Left Content */}
        <div className="max-w-lg">
          <h1 className="font-['Averia_Serif_Libre'] font-bold text-[60px] leading-[60px] tracking-[0%] text-black text-left">
            <span className="text-[rgba(168,192,130,1)]">Eco-Friendly</span> Cleaning for your Home
          </h1>
          <p className="font-['dmSans'] font-normal text-[20px] leading-[28px] tracking-[0%] text-gray-600 mt-4 text-left">
            We are the premier cleaning service in the West Valley, Arizona area.
          </p>
          <button className="mt-6 w-[215px] h-[46px] bg-[rgba(168,192,130,1)] text-white font-semibold px-6 py-3 rounded-tr-[20px] rounded-br-[10px] rounded-bl-[20px] transition hover:bg-opacity-90 flex">
            Get Your Free Estimate
          </button>
        </div>

        {/* Right Content - Image pushed to the right-most */}
        <div className="relative flex justify-end ml-auto">
          <div className="relative bg-[rgba(255,226,226,1)] p-6 rounded-tl-[100px] rounded-br-[100px] w-[578px] h-[529px]">
            <img src={Cleaning} alt="Cleaning Supplies" className="rounded-lg w-[534px] h-[425px] mt-16" />
          </div>
          <img 
            src={Star} 
            alt="Star Icon" 
            className="absolute top-8 left-96 w-8 h-8 opacity-80"
          />
          <img 
            src={Star} 
            alt="Star Icon" 
            className="absolute top-12 left-[100px] w-8 h-8 opacity-80"
          />
          <img 
            src={Star} 
            alt="Star Icon" 
            className="absolute top-96 right-16 w-8 h-8 opacity-80"
          />
          <img 
            src={Brush} 
            alt="Brush Icon" 
            className="absolute -left-12 top-52 w-24 h-24 opacity-80"
          />

          {/* Badges Positioned on Image */}
          <div className="w-[114px] h-[114px] absolute bg-white rounded-[30px] flex items-center justify-center -left-11 top-11">
            <img src={Shield} alt="Check Icon" className="w-12 h-14" />
          </div>

          <div className="absolute -left-28 top-80 w-[284px] h-[109px] bg-white rounded-[30px] flex items-center gap-2 justify-center">
            <img src={Activity} alt="Check Icon" className="w-12 h-13" />
            <h1 className="font-poppins font-semibold text-[16px] text-gray-700 text-left">Best <br /><span className="font-poppins font-medium text-[16px] text-[#2F2F2F]">Insured & Bonded</span></h1>
          </div>

          <div className="w-[250px] h-[107px] absolute bg-white rounded-tl-[20px] rounded-bl-[20px] flex items-center justify-center top-16">
            <img src={Shield} alt="Check Icon" className="w-12 h-14 ml-5" />
            <h1 className="font-poppins font-semibold text-[16px] text-gray-700 text-left ml-5">Qualified<br /><span className="font-poppins font-medium text-[16px] text-[#2F2F2F]">Locally Owned & Operated</span></h1>
          </div>
        </div>
      </div>

      {/* Bottom Icons Section */}
      <div className="absolute -bottom-[0.5rem] border-white border-[1.5px] bg-[rgba(251,246,243,1)] left-1/2 transform -translate-x-1/2 h-12 lg:h-16 rounded-[15px] lg:rounded-[25px] w-[90%] lg:w-[785px] px-3 lg:px-6 py-2 lg:py-3 flex items-center justify-between gap-1 lg:gap-2">
        <div className="flex items-center gap-1 lg:gap-2 text-gray-600">
          <img 
            src={Clock} 
            alt="Clock" 
            className="w-5 h-5 lg:w-7 lg:h-7" 
          />
          <span className="font-inter font-semibold text-xs lg:text-[20px] text-black">
            24/4 Support
          </span>
        </div>
        <div className="flex items-center gap-1 lg:gap-2 text-gray-600">
          <img 
            src={Spray} 
            alt="Spray" 
            className="w-4 h-5 lg:w-5 lg:h-7" 
          />
          <span className="font-inter font-semibold text-xs lg:text-[18px] text-black">
            Top-Notch Service
          </span>
        </div>
        <div className="flex items-center gap-1 lg:gap-2 text-gray-600">
          <img 
            src={Secure} 
            alt="Secure" 
            className="w-5 h-4 lg:w-7 lg:h-6" 
          />
          <span className="font-inter font-semibold text-xs lg:text-[20px] text-black">
            Secure Payment
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainHero;