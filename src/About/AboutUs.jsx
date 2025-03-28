import React from "react";
import Navbar from "../NavHero";
import Footer from "../Footer";
import DandS from "../pictures/D&S.png";
import Review from "../Reviews";


const About=()=>{
    return(
        <> 
        {/* <Navbar/> */}
        <div className="bg-[rgba(251,246,243,1)]  flex items-center justify-center  lg:min-h-60 min-h-5">
        <div className="text-center">
         
          <p className="font-bold text-xl md:text-2xl lg:text-5xl font-averia lg:leading-[60px] ">
          Transforming <span className="text-[rgba(255,174,174,1)]"> Heart & Homes,</span>
          </p>
          <p className="font-bold text-xl md:text-2xl lg:text-5xl font-averia lg:leading-[60px] ">
          Protecting the Planet
          </p>
          <p className="font-bold text-xl md:text-2xl lg:text-5xl font-averia lg:leading-[60px] lg:mb-14">
            One <span className="text-[rgba(168,192,130,1)]"> Eco-Friendly </span> Shine at a Time!
          </p>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0.08)]  flex justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-8 md:min-h-[50vh]">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-12">
        
        {/* Image Container - Fully Responsive */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            alt="A happy couple standing in front of a beautifully carved wooden door"
            className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[672px] h-auto object-contain rounded-lg"
            src={DandS}
          />
        </div>

        {/* Text Content - Fully Responsive */}
        <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left">
          <h1 className="font-dmSans font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-tight md:leading-[50px] tracking-normal text-gray-800">
            Heart & Home{' '}
            <span className="text-[rgba(168,192,130,1)] font-bold block md:inline">Green Clean</span>{' '}
            is here for you.
          </h1>
          <div className="space-y-4">
            <p className="font-dm-sans font-light text-base sm:text-lg md:text-xl lg:text-[20px] leading-relaxed md:leading-[25px] tracking-normal text-[rgba(113,113,113,1)]">
              To us, cleaning is more than just a service we provide physically. It is also a gift of time.
            </p>
            <p className="font-dm-sans font-light text-base sm:text-lg md:text-xl lg:text-[20px] leading-relaxed md:leading-[25px] tracking-normal text-[rgba(113,113,113,1)]">
              Our goal is to enrich the lives of our clients and their families by providing residential and commercial cleaning and organizational services.
            </p>
            <p className="font-dm-sans font-light text-base sm:text-lg md:text-xl lg:text-[20px] leading-relaxed md:leading-[25px] tracking-normal text-[rgba(113,113,113,1)]">
              We believe that your time is valuable and pride ourselves on helping maximize it for you.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Review/>

        {/* <Footer/> */}
        </>

    );


}

export default About;