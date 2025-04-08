import React from "react";
import Navbar from "../NavHero";
import Footer from "../Footer";
import DandS from "../pictures/D.JPG";
import Review from "../Reviews";


const About = () => {
  return (
    <> 
      {/* <Navbar/> */}
      <div className="bg-[rgba(251,246,243,1)] flex items-center justify-center lg:min-h-60 min-h-5">
        <div className="text-center">
          <p className="font-bold text-xl md:text-2xl lg:text-5xl font-['Raleway'] lg:leading-[60px] mt-5">
          Where Clean Meets <span className="text-[rgba(168,192,130,1)] ">Green</span>
          </p>
        
          <p className="font-bold text-xl md:text-2xl lg:text-5xl font-['Raleway'] lg:leading-[60px] lg:mb-14">
          Our <span className="text-[rgba(255,174,174,1)]">Commitment</span>  to You
          </p>
         
        </div>
      </div>

      <div className="bg-[rgba(255,255,255,0.08)] flex justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-8 md:min-h-[50vh]">
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
            <h1 className="font-['Raleway'] font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-tight md:leading-[50px] tracking-normal text-gray-800">
              Heart & Home{' '}
              <span className="text-[rgba(168,192,130,1)] font-bold block md:inline">Green Clean</span>{' '}
              is here for you.
            </h1>
            <div className="space-y-4">
              <p className="font-['Raleway'] font-light text-base sm:text-lg md:text-xl lg:text-[20px] leading-relaxed md:leading-[25px] tracking-normal text-[rgba(113,113,113,1)]">
                To us, cleaning is more than just a service we provide physically. It is also a gift of time.
              </p>
              <p className="font-['Raleway'] font-light text-base sm:text-lg md:text-xl lg:text-[20px] leading-relaxed md:leading-[25px] tracking-normal text-[rgba(113,113,113,1)]">
                Our goal is to enrich the lives of our clients and their families by providing residential and commercial cleaning and organizational services.
              </p>
              <p className="font-['Raleway'] font-light text-base sm:text-lg md:text-xl lg:text-[20px] leading-relaxed md:leading-[25px] tracking-normal text-[rgba(113,113,113,1)]">
                We believe that your time is valuable and pride ourselves on helping maximize it for you.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* New Mission and Core Values Section */}
      <div className="bg-[rgba(251,246,243,1)] py-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto">
          {/* Mission Section */}
          <div className="text-center mb-14">
            <h2 className="font-['Raleway'] font-bold text-3xl sm:text-4xl md:text-5xl mb-8 text-gray-800">
              Our Mission
            </h2>
            <p className="font-['Raleway'] text-xl md:text-2xl text-[rgba(113,113,113,1)] max-w-3xl mx-auto">
              Our mission is to <span className="font-bold text-[rgba(168,192,130,1)]">deliver exceptional green cleaning services</span> that promote healthier homes and a cleaner planet. <span className="font-bold">Our Core Purpose: To give people back their time and provide peace of mind.</span>
            </p>
          </div>

          {/* Core Values Section - Innovative Design */}
          <div className="relative py-20">
            {/* Background Pattern Element */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -right-10 top-20 w-64 h-64 rounded-full bg-[rgba(168,192,130,0.1)]"></div>
              <div className="absolute left-10 bottom-20 w-40 h-40 rounded-full bg-[rgba(255,174,174,0.1)]"></div>
            </div>
            
            <div className="relative max-w-5xl mx-auto px-4">
              <h2 className="font-['Raleway'] font-bold text-3xl sm:text-4xl md:text-5xl mb-16 text-center text-gray-800">
                Our Core Values
              </h2>
              
              <div className="flex flex-col gap-16">
                {/* Value 1 - Innovative Card */}
                <div className="relative">
                  {/* Floating Number */}
                  <div className="absolute -left-4 -top-4 md:-left-8 md:-top-8 flex items-center justify-center w-16 h-16 text-4xl font-bold text-white" style={{ background: 'linear-gradient(135deg, rgba(168,192,130,1) 0%, rgba(198,222,160,1) 100%)', borderRadius: '0.5rem 1.5rem 0.5rem 1.5rem' }}>
                    01
                  </div>
                  
                  {/* Main Content Card */}
                  <div className="group ml-6 md:ml-8 pl-4 md:pl-8 pt-10 pb-6 pr-6 bg-white rounded-tr-3xl rounded-bl-3xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border-t border-l border-[rgba(168,192,130,0.3)] transition-all duration-500 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)]">
                    <div className="mt-2 mb-4 w-16 h-1 bg-[rgba(168,192,130,1)]"></div>
                    <h3 className="font-['Raleway'] font-bold text-2xl mb-4 transition-all duration-300 group-hover:translate-x-1">
                      Expertise, Focus, & Growth Mindset
                    </h3>
                    <p className="font-['Raleway'] text-[rgba(113,113,113,1)] leading-relaxed">
                      We are experts in our field, committed to continuous learning and improvement. We approach challenges with a problem-solving mindset, think critically, and always look for ways to grow and deliver the best solutions for our clients.
                    </p>
                  </div>
                </div>
                
                {/* Value 2 - Innovative Card */}
                <div className="relative">
                  <div className="absolute -left-4 -top-4 md:-left-8 md:-top-8 flex items-center justify-center w-16 h-16 text-4xl font-bold text-white" style={{ background: 'linear-gradient(135deg, rgba(255,174,174,1) 0%, rgba(255,204,204,1) 100%)', borderRadius: '1.5rem 0.5rem 1.5rem 0.5rem' }}>
                    02
                  </div>
                  <div className="group ml-6 md:ml-8 pl-4 md:pl-8 pt-10 pb-6 pr-6 bg-white rounded-tr-3xl rounded-bl-3xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border-t border-l border-[rgba(255,174,174,0.3)] transition-all duration-500 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)]">
                    <div className="mt-2 mb-4 w-16 h-1 bg-[rgba(255,174,174,1)]"></div>
                    <h3 className="font-['Raleway'] font-bold text-2xl mb-4 transition-all duration-300 group-hover:translate-x-1">
                      Reliability & Work Ethic
                    </h3>
                    <p className="font-['Raleway'] text-[rgba(113,113,113,1)] leading-relaxed">
                      We take pride in our work, show up on time, follow through on commitments, and do what it takes to get the job done right.
                    </p>
                  </div>
                </div>
                
                {/* Value 3 - Innovative Card */}
                <div className="relative">
                  <div className="absolute -left-4 -top-4 md:-left-8 md:-top-8 flex items-center justify-center w-16 h-16 text-4xl font-bold text-white" style={{ background: 'linear-gradient(135deg, rgba(168,192,130,1) 0%, rgba(198,222,160,1) 100%)', borderRadius: '0.5rem 1.5rem 0.5rem 1.5rem' }}>
                    03
                  </div>
                  <div className="group ml-6 md:ml-8 pl-4 md:pl-8 pt-10 pb-6 pr-6 bg-white rounded-tr-3xl rounded-bl-3xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border-t border-l border-[rgba(168,192,130,0.3)] transition-all duration-500 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)]">
                    <div className="mt-2 mb-4 w-16 h-1 bg-[rgba(168,192,130,1)]"></div>
                    <h3 className="font-['Raleway'] font-bold text-2xl mb-4 transition-all duration-300 group-hover:translate-x-1">
                      Initiative & Problem-Solving
                    </h3>
                    <p className="font-['Raleway'] text-[rgba(113,113,113,1)] leading-relaxed">
                      We ask the right questions, think independently, and take proactive steps to solve problems. We don't wait for instructions—we take ownership and find solutions.
                    </p>
                  </div>
                </div>
                
                {/* Value 4 - Innovative Card */}
                <div className="relative">
                  <div className="absolute -left-4 -top-4 md:-left-8 md:-top-8 flex items-center justify-center w-16 h-16 text-4xl font-bold text-white" style={{ background: 'linear-gradient(135deg, rgba(255,174,174,1) 0%, rgba(255,204,204,1) 100%)', borderRadius: '1.5rem 0.5rem 1.5rem 0.5rem' }}>
                    04
                  </div>
                  <div className="group ml-6 md:ml-8 pl-4 md:pl-8 pt-10 pb-6 pr-6 bg-white rounded-tr-3xl rounded-bl-3xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border-t border-l border-[rgba(255,174,174,0.3)] transition-all duration-500 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)]">
                    <div className="mt-2 mb-4 w-16 h-1 bg-[rgba(255,174,174,1)]"></div>
                    <h3 className="font-['Raleway'] font-bold text-2xl mb-4 transition-all duration-300 group-hover:translate-x-1">
                      Fun & Professional
                    </h3>
                    <p className="font-['Raleway'] text-[rgba(113,113,113,1)] leading-relaxed">
                      We maintain a can-do attitude, ensuring we are easy to work with and adaptable to the needs of our clients and team. We approach every job with professionalism and without complaints.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Review/>
      {/* <Footer/> */}
    </>
  );
};

export default About;