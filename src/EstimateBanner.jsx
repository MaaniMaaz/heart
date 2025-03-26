import React from 'react';

const EstimateBanner = () => {
  return (
    <div 
      className="bg-[url('./pictures/banner.jpg')] bg-no-repeat bg-cover bg-center w-full py-8 md:py-12 px-4 md:px-6 overflow-hidden min-h-[300px] md:min-h-[500px] flex items-center mt-3"
    >
      
      
      <div className="relative z-10 text-white container mx-auto px-4 md:pl-[157px]">
        <h2 className="font-['Satisfy'] font-bold text-[32px] md:text-[60px] leading-[35px] md:leading-[60px] tracking-normal mb-4 md:mb-6 text-left">
          Get Your Free Estimate <br className="hidden md:block"/> Now
        </h2>
        <button className="w-[180px] md:w-[232px] h-[40px] md:h-[46px] rounded-tr-[15px] md:rounded-tr-[20px] rounded-br-[8px] md:rounded-br-[10px] rounded-bl-[15px] md:rounded-bl-[20px] bg-white text-black hover:bg-gray-100 font-bold text-base md:text-lg transition duration-300 flex items-center justify-center mt-6 md:mt-12">
          Get Your Free Estimate
        </button>
      </div>
    </div>
  );
};

export default EstimateBanner;