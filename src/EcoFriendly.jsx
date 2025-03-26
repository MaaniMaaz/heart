import React, { useState, useRef, useEffect } from 'react';
import Ecologo from "./pictures/Ecologo.png";

const EcoFriendlyCleaning = () => {
  const containerRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  useEffect(() => {
    // Use a lightweight approach to check visibility
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const handleIntersect = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !videoLoaded) {
        // Load video background only when scrolled into view
        setVideoLoaded(true);
      }
    };
    
    const observer = new IntersectionObserver(handleIntersect, options);
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [videoLoaded]);

  return (
    <div ref={containerRef} className="bg-white flex items-center justify-center py-8 md:py-16 lg:py-0 lg:min-h-screen">
      {/* Main container with increased height for mobile */}
      <div className="relative w-full max-w-[1306px] h-[400px] sm:h-[450px] md:aspect-[1306/515] md:h-auto rounded-tl-3xl rounded-br-3xl overflow-hidden mx-4 md:mx-8">
        {/* Background option 1: Placeholder image until video loads */}
        <div className="w-full h-full bg-gray-100">
          {/* You can add a placeholder image here */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-pink-50"></div>
          
          {/* Background video (loads only when in view) - Using a custom div overlay */}
          {videoLoaded && (
            <div className="absolute inset-0 overflow-hidden">
              <div className="w-full h-full relative">
                {/* Video element instead of iframe for better control */}
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                  <iframe 
                    src="https://www.youtube-nocookie.com/embed/F8VOyX2qU4s?autoplay=1&controls=0&showinfo=0&mute=1&loop=1&playlist=F8VOyX2qU4s&modestbranding=1&iv_load_policy=3&disablekb=1&rel=0&fs=0&playsinline=1&enablejsapi=1&origin=your-domain-here&color=white"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    className="absolute w-[120%] h-[120%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                      pointerEvents: 'none',
                    }}
                    title="Background Video"
                    loading="lazy"
                    frameBorder="0"
                  ></iframe>
                </div>
                
                {/* Extra overlay to block YouTube controls/buttons */}
                <div className="absolute inset-0 w-full h-full pointer-events-none"></div>
              </div>
            </div>
          )}
          
          {/* Overlay for better text visibility and to hide YouTube controls */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        {/* Text and button container */}
        <div className="absolute inset-0 flex flex-col justify-center items-start p-4 md:p-8 lg:p-12 z-10">
          <div className="max-w-[80%] md:max-w-[70%] lg:max-w-[60%]">
            <h1 className="font-['Raleway'] font-bold text-lg sm:text-xl md:text-3xl lg:text-[54px] leading-tight md:leading-[50px] tracking-normal  text-left text-[rgba(222,157,157,1)]">
              Eco-Friendly <br /> Cleaning With A <br/>Heart.
            </h1>
            <button className="mt-2 lg:mt-4 w-[120px] sm:w-[160px] md:w-[200px] h-[28px] sm:h-[36px] md:h-[44px] rounded-tr-[20px] rounded-br-[10px] rounded-bl-[20px] 
                            bg-[rgba(168,192,130,1)] text-white 
                            font-['Poppins'] font-semibold text-[10px] sm:text-xs md:text-sm lg:text-[16px] 
                            flex justify-center items-center">
              Get Your Free Estimate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcoFriendlyCleaning;