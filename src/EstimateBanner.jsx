import React, { useEffect } from 'react';

const EstimateBanner = () => {
  useEffect(() => {
    // Set up Intersection Observer to trigger animations when element is visible
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add animation classes when element is visible
          if (entry.target.classList.contains('banner-title')) {
            entry.target.classList.add('animate-title');
          } else if (entry.target.classList.contains('banner-button')) {
            entry.target.classList.add('animate-button');
          }
          
          // Stop observing after animation is triggered
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Observe elements
    const bannerTitle = document.querySelector('.banner-title');
    const bannerButton = document.querySelector('.banner-button');
    
    if (bannerTitle) observer.observe(bannerTitle);
    if (bannerButton) observer.observe(bannerButton);
    
    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <div 
      className="bg-[url('./pictures/banner.jpg')] bg-no-repeat bg-cover bg-center w-full py-8 md:py-12 px-4 md:px-6 overflow-hidden min-h-[300px] md:min-h-[500px] flex items-center mt-3"
    >
      {/* CSS Animations */}
      <style jsx>{`
        /* Title animation */
        .banner-title {
          opacity: 0;
        }
        
        .animate-title {
          animation: slideInRight 0.8s ease forwards;
        }
        
        /* Button animation */
        .banner-button {
          opacity: 0;
        }
        
        .animate-button {
          animation: fadeInUp 0.8s 0.3s ease forwards;
        }
        
        /* Simple button hover effect */
        .banner-button:hover {
          transform: scale(1.03);
          transition: transform 0.3s ease;
        }
        
        /* Keyframes */
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      
      <div className="relative z-10 text-white container mx-auto px-4 md:pl-[157px]">
        <h2 className="font-['Raleway'] font-bold text-[32px] md:text-[60px] leading-[35px] md:leading-[60px] tracking-normal mb-4 md:mb-6 text-left banner-title">
          Get Your Free Estimate <br className="hidden md:block"/> Now
        </h2>
        <button className="w-[190px] md:w-[232px] h-[40px] md:h-[46px] rounded-tr-[15px] md:rounded-tr-[20px] rounded-br-[8px] md:rounded-br-[10px] rounded-bl-[15px] md:rounded-bl-[20px] bg-white text-black hover:bg-gray-100 font-bold text-base md:text-lg transition duration-300 flex items-center justify-center mt-6 md:mt-12 banner-button">
          Get Your Free Estimate
        </button>
      </div>
    </div>
  );
};

export default EstimateBanner;