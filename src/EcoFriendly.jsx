// src/EcoFriendly.jsx (Updated)
import React, { useState, useRef, useEffect } from 'react';
import Ecologo from "./pictures/Ecologo.png";
import { useNavigate } from "react-router-dom";
import { useContent } from './contexts/ContentContext';
import FormattedText from './components/common/FormattedText';

const EcoFriendlyCleaning = () => {
  const navigate = useNavigate();
  const { content, fetchContent } = useContent();
  const ecoFriendlyContent = content?.home?.ecoFriendly || {};
  const [videoLoaded, setVideoLoaded] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!content?.home?.ecoFriendly) {
      fetchContent('home', 'ecoFriendly');
    }
  }, [content?.home?.ecoFriendly, fetchContent]);

  const handleContactRedirect = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  return (
    <div ref={containerRef} className="bg-white flex items-center justify-center py-8 md:py-16 lg:py-0 lg:min-h-screen ipad-pro:min-h-[55vh]">
      {/* Main container with asymmetric rounded corners exactly matching the image */}
      <div className="relative w-full max-w-[1500px] h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden mx-4 md:mx-8" 
           style={{
             borderTopLeftRadius: '40px',
             borderBottomRightRadius: '40px',
             borderTopRightRadius: '0',
             borderBottomLeftRadius: '0'
           }}>
        {/* Background option 1: Placeholder image until video loads */}
        <div className="w-full h-full bg-gray-100">
          {/* You can add a placeholder image here */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-pink-50"></div>
          
          {/* Background video - now loads immediately */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="w-full h-full relative">
              {/* Video element instead of iframe for better control */}
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <iframe 
                  src="https://www.youtube-nocookie.com/embed/F8VOyX2qU4s?autoplay=1&controls=0&showinfo=0&mute=1&loop=1&playlist=F8VOyX2qU4s&modestbranding=1&iv_load_policy=3&disablekb=1&rel=0&fs=0&playsinline=1&enablejsapi=1&origin=your-domain-here&color=white"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  className="absolute w-[140%] h-[140%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    pointerEvents: 'none',
                  }}
                  title="Background Video"
                  loading="eager"
                  frameBorder="0"
                ></iframe>
              </div>
              
              {/* Extra overlay to block YouTube controls/buttons */}
              <div className="absolute inset-0 w-full h-full pointer-events-none"></div>
            </div>
          </div>
          
          {/* Overlay for better text visibility and to hide YouTube controls */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        {/* Fixed position for text content - IMPROVED ALIGNMENT */}
        <div className="absolute top-1/2 left-[15%] sm:left-[15%] transform -translate-y-1/2 z-10">
          <div className="text-left max-w-[450px]">
            <h1 className="font-['Raleway'] font-bold text-[28px] sm:text-3xl md:text-[2.5rem] lg:text-5xl leading-tight tracking-normal text-[#f5b7b7]" 
                style={{ 
                  textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                  letterSpacing: '0.5px'
                }}>
              <FormattedText content={ecoFriendlyContent.title || "ECO-FRIENDLY\nCLEANING WITH\nHEART."} />
            </h1>
            <div className="mt-4 sm:mt-6">
              <button 
                className="w-[180px] h-[45px] sm:w-[200px] sm:h-[46px] md:w-[220px] md:h-[48px] rounded-tr-[20px] rounded-br-[10px] rounded-bl-[20px] 
                bg-[rgba(168,192,130,1)] text-white 
                font-['Raleway'] font-semibold text-[14px] sm:text-[16px] md:text-[16px] lg:text-[18px] 
                flex justify-center items-center hover:bg-[rgba(145,170,105,1)] transition-colors duration-300"
                onClick={handleContactRedirect}
              >
                <FormattedText content={ecoFriendlyContent.buttonText || "Get Your Free Estimate"} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcoFriendlyCleaning;