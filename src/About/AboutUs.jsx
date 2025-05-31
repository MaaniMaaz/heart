// src/About/AboutUs.jsx (Updated)
import React, { useEffect } from "react";
import Navbar from "../NavHero";
import Footer from "../Footer";
import DandS from "../pictures/D.JPG";
import Review from "../Reviews";
import { useContent } from '../contexts/ContentContext';
import FormattedText from '../components/common/FormattedText';

const About = () => {
  const { content, fetchContent } = useContent();
  const aboutContent = content?.about || {};

  useEffect(() => {
    if (!content?.about) {
      fetchContent('about');
    }
  }, [content?.about, fetchContent]);
  
  // Get content or use fallbacks
  const headerContent = aboutContent?.header || {};
  const introContent = aboutContent?.intro || {};
  const missionContent = aboutContent?.mission || {};
  const valuesContent = aboutContent?.values || {};

  return (
    <> 
      {/* Header Section */}
      <div className="bg-[rgba(251,246,243,1)] flex items-center justify-center lg:min-h-60 min-h-5">
        <div className="text-center">
          <p className="font-bold text-xl md:text-2xl lg:text-5xl font-['Raleway'] lg:leading-[60px] mt-5">
            <FormattedText content={headerContent.title || "Where Clean Meets Green"} />
          </p>
        
          <p className="font-bold text-xl md:text-2xl lg:text-5xl font-['Raleway'] lg:leading-[60px] lg:mb-14">
            <FormattedText content={headerContent.subtitle || "Our Commitment to You"} />
          </p>
        </div>
      </div>

      {/* Intro Section with Image */}
      <div className="bg-[rgba(255,255,255,0.08)] flex justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-8 md:min-h-[50vh]">
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-12">
          {/* Image Container */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              alt="A happy couple standing in front of a beautifully carved wooden door"
              className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[672px] h-auto object-contain rounded-lg"
              src={DandS}
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left">
            <h1 className="font-['Raleway'] font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-tight md:leading-[50px] tracking-normal text-gray-800">
              <FormattedText content={introContent.title || "Heart & Home Green Clean is here for you."} />
            </h1>
            
            {/* Map through paragraphs if available, otherwise use fallbacks */}
            <div className="space-y-4">
              {introContent.paragraphs ? 
                introContent.paragraphs.map((paragraph, index) => (
                  <p key={index} className="font-['Raleway'] font-light text-base sm:text-lg md:text-xl lg:text-[20px] leading-relaxed md:leading-[25px] tracking-normal text-[rgba(113,113,113,1)]">
                    <FormattedText content={paragraph} />
                  </p>
                )) :
                <>
                  <p className="font-['Raleway'] font-light text-base sm:text-lg md:text-xl lg:text-[20px] leading-relaxed md:leading-[25px] tracking-normal text-[rgba(113,113,113,1)]">
                    To us, cleaning is more than just a service we provide physically. It is also a gift of time.
                  </p>
                  <p className="font-['Raleway'] font-light text-base sm:text-lg md:text-xl lg:text-[20px] leading-relaxed md:leading-[25px] tracking-normal text-[rgba(113,113,113,1)]">
                    Our goal is to enrich the lives of our clients and their families by providing residential and commercial cleaning and organizational services.
                  </p>
                  <p className="font-['Raleway'] font-light text-base sm:text-lg md:text-xl lg:text-[20px] leading-relaxed md:leading-[25px] tracking-normal text-[rgba(113,113,113,1)]">
                    We believe that your time is valuable and pride ourselves on helping maximize it for you.
                  </p>
                </>
              }
            </div>
          </div>
        </div>
      </div>

      {/* Mission and Core Values Section */}
      <div className="bg-[rgba(251,246,243,1)] py-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto">
          {/* Mission Section */}
            <div className="text-center mb-20">
              <h2 className="font-['Raleway'] font-bold text-3xl sm:text-4xl md:text-5xl mb-8 text-gray-800">
                <FormattedText content={missionContent.title || "Our Mission"} />
              </h2>
              <p className="font-['Raleway'] text-xl md:text-2xl text-[rgba(113,113,113,1)] max-w-3xl mx-auto">
                <FormattedText content={missionContent.content || "Our mission is to deliver exceptional green cleaning services that promote healthier homes and a cleaner planet."} />
              </p>
            </div>

            {/* Core Purpose Section
            <div className="text-center mb-14">
              <h2 className="font-['Raleway'] font-bold text-3xl sm:text-4xl md:text-5xl mb-8 text-gray-800">
                <FormattedText content={aboutContent?.purpose?.title || "Our Core Purpose"} />
              </h2>
              <p className="font-['Raleway'] text-xl md:text-2xl text-[rgba(113,113,113,1)] max-w-3xl mx-auto font-medium">
                <FormattedText content={aboutContent?.purpose?.content || "To give people back their time and provide peace of mind."} />
              </p>
            </div> */}

          {/* Core Values Section */}
          <div className="relative py-20">
            {/* Background Pattern Element */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -right-10 top-20 w-64 h-64 rounded-full bg-[rgba(168,192,130,0.1)]"></div>
              <div className="absolute left-10 bottom-20 w-40 h-40 rounded-full bg-[rgba(255,174,174,0.1)]"></div>
            </div>
            
            <div className="relative max-w-5xl mx-auto px-4">
              <h2 className="font-['Raleway'] font-bold text-3xl sm:text-4xl md:text-5xl mb-16 text-center text-gray-800">
                <FormattedText content={valuesContent.title || "Our Core Values"} />
              </h2>
              
              <div className="flex flex-col gap-16">
                {/* Map through value items if available, otherwise use fallbacks */}
                {valuesContent.items ? 
                  valuesContent.items.map((item, index) => (
                    <div key={index} className="relative">
                      {/* Floating Number */}
                      <div className="absolute -left-4 -top-4 md:-left-8 md:-top-8 flex items-center justify-center w-16 h-16 text-4xl font-bold text-white" 
                          style={{ 
                            background: item.color === 'pink' 
                              ? 'linear-gradient(135deg, rgba(255,174,174,1) 0%, rgba(255,204,204,1) 100%)' 
                              : 'linear-gradient(135deg, rgba(168,192,130,1) 0%, rgba(198,222,160,1) 100%)', 
                            borderRadius: item.color === 'pink' ? '1.5rem 0.5rem 1.5rem 0.5rem' : '0.5rem 1.5rem 0.5rem 1.5rem' 
                          }}>
                        {item.number}
                      </div>
                      
                      {/* Main Content Card */}
                      <div className={`group ml-6 md:ml-8 pl-4 md:pl-8 pt-10 pb-6 pr-6 bg-white rounded-tr-3xl rounded-bl-3xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border-t border-l ${
                        item.color === 'pink' ? 'border-[rgba(255,174,174,0.3)]' : 'border-[rgba(168,192,130,0.3)]'
                      } transition-all duration-500 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)]`}>
                        <div className={`mt-2 mb-4 w-16 h-1 ${
                          item.color === 'pink' ? 'bg-[rgba(255,174,174,1)]' : 'bg-[rgba(168,192,130,1)]'
                        }`}></div>
                        <h3 className="font-['Raleway'] font-bold text-2xl mb-4 transition-all duration-300 group-hover:translate-x-1">
                          <FormattedText content={item.title} />
                        </h3>
                        <p className="font-['Raleway'] text-[rgba(113,113,113,1)] leading-relaxed">
                          <FormattedText content={item.description} />
                        </p>
                      </div>
                    </div>
                  )) :
                  // Fallback hardcoded values if no data available
                  [
                    { number: "01", color: "green", title: "Expertise, Focus, & Growth Mindset", description: "We are experts in our field, committed to continuous learning and improvement. We approach challenges with a problem-solving mindset, think critically, and always look for ways to grow and deliver the best solutions for our clients." },
                    { number: "02", color: "pink", title: "Reliability & Work Ethic", description: "We take pride in our work, show up on time, follow through on commitments, and do what it takes to get the job done right." },
                    { number: "03", color: "green", title: "Initiative & Problem-Solving", description: "We ask the right questions, think independently, and take proactive steps to solve problems. We don't wait for instructions—we take ownership and find solutions." },
                    { number: "04", color: "pink", title: "Fun & Professional", description: "We maintain a can-do attitude, ensuring we are easy to work with and adaptable to the needs of our clients and team. We approach every job with professionalism and without complaints." }
                  ].map((item, index) => (
                    <div key={index} className="relative">
                      {/* Floating Number */}
                      <div className="absolute -left-4 -top-4 md:-left-8 md:-top-8 flex items-center justify-center w-16 h-16 text-4xl font-bold text-white" 
                          style={{ 
                            background: item.color === 'pink' 
                              ? 'linear-gradient(135deg, rgba(255,174,174,1) 0%, rgba(255,204,204,1) 100%)' 
                              : 'linear-gradient(135deg, rgba(168,192,130,1) 0%, rgba(198,222,160,1) 100%)', 
                            borderRadius: item.color === 'pink' ? '1.5rem 0.5rem 1.5rem 0.5rem' : '0.5rem 1.5rem 0.5rem 1.5rem' 
                          }}>
                        {item.number}
                      </div>
                      
                      {/* Main Content Card */}
                      <div className={`group ml-6 md:ml-8 pl-4 md:pl-8 pt-10 pb-6 pr-6 bg-white rounded-tr-3xl rounded-bl-3xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border-t border-l ${
                        item.color === 'pink' ? 'border-[rgba(255,174,174,0.3)]' : 'border-[rgba(168,192,130,0.3)]'
                      } transition-all duration-500 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)]`}>
                        <div className={`mt-2 mb-4 w-16 h-1 ${
                          item.color === 'pink' ? 'bg-[rgba(255,174,174,1)]' : 'bg-[rgba(168,192,130,1)]'
                        }`}></div>
                        <h3 className="font-['Raleway'] font-bold text-2xl mb-4 transition-all duration-300 group-hover:translate-x-1">
                          {item.title}
                        </h3>
                        <p className="font-['Raleway'] text-[rgba(113,113,113,1)] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      <Review/>
    </>
  );
};

export default About;