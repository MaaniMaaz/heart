import React, { useEffect } from "react";
import Dollar from "./pictures/Doll.png";
import Bad from "./pictures/bad.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBroom } from '@fortawesome/free-solid-svg-icons';
import { faBed } from '@fortawesome/free-regular-svg-icons'
import TopArrow from "./pictures/TopArrow.png";
import BottomArrow from "./pictures/BottomArrow.png";

const CleanHomeSteps = () => {
  useEffect(() => {
    // Set up Intersection Observer to trigger animations when elements are visible
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add animation classes when element is visible
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Observe all elements that need animation
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
    
    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col items-center text-center bg-pink-50 py-12 px-4">
      {/* CSS Animations */}
      <style jsx>{`
        /* Animation classes */
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .animate {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Add delay for each step */
        .step-1 {
          transition-delay: 0.1s;
        }
        
        .step-2 {
          transition-delay: 0.3s;
        }
        
        .step-3 {
          transition-delay: 0.5s;
        }
        
        /* Floating animation for icons */
        .floating {
          animation: floating 3s ease-in-out infinite;
        }
        
        @keyframes floating {
          0% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0); }
        }
        
        /* Pulse animation for the icon containers */
        .pulse-on-hover:hover {
          animation: pulse 1.5s ease infinite;
        }
        
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(222, 157, 157, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(222, 157, 157, 0); }
          100% { box-shadow: 0 0 0 0 rgba(222, 157, 157, 0); }
        }
      `}</style>

      <h2 className="font-[dmSans] font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-tight md:leading-[50px] tracking-normal text-center text-gray-800 mb-[80px] animate-on-scroll">
        3 Easy Steps To A <span className="text-green-600">Clean Home</span>
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-20 max-w-4xl mb-3">
        {/* Step 1 */}
        <div className="flex flex-col items-center max-w-xs animate-on-scroll step-1">
          <div className="bg-[rgba(222,157,157,1)] w-[100px] p-6 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl mb-4 top-[237px] left-[282px] pulse-on-hover">
            <img src={Dollar} alt="Estimate" className="w-12 floating" />
          </div>
          <h3 className="font-[dmSans] font-semibold text-base leading-[100%] tracking-normal text-center capitalize text-gray-500">Get Your Free Estimate</h3>
          <p className="font-roboto font-light text-sm leading-6 tracking-normal text-[#423D3D] mt-2">
            Simply fill out our easy estimate form or call us at 
            <a href="tel:4809998018" className="text-[#DE9D9D] font-medium transition-colors duration-300 hover:text-[#c77e7e]"> (480) 999-8018 </a> 
             to get your estimate and we will schedule your cleaning!
          </p>
        </div>
        
        {/* Step 2 */}
        <div className="flex flex-col items-center max-w-xs animate-on-scroll step-2">
          <div className="bg-[rgba(222,157,157,1)] w-[100px] p-6 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl mb-4 top-[237px] left-[282px] pulse-on-hover">
            <FontAwesomeIcon icon={faBroom} className="w-12 h-12 text-white floating" />
          </div>
          <h3 className="font-dm-sans font-semibold text-base leading-[100%] tracking-normal capitalize text-gray-500">Our Professionals Will Clean Your Home</h3>
          <p className="font-roboto font-light text-sm leading-6 tracking-normal text-[#423D3D] mt-2">
            Our professional cleaners will arrive promptly to your home at the scheduled time to clean.
          </p>
        </div>
        
        {/* Step 3 */}
        <div className="flex flex-col items-center max-w-xs animate-on-scroll step-3">
          <div className="bg-[rgba(222,157,157,1)] w-[100px] p-6 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl mb-4 top-[237px] left-[282px] pulse-on-hover">
            <img src={Bad} alt="Relax" className="w-12 h-12 floating" />
          </div>
          <h3 className="font-dm-sans font-semibold text-base leading-[100%] tracking-normal capitalize text-gray-500">Your Sit Back And Relax Goes Here</h3>
          <p className="font-roboto font-light text-sm leading-6 tracking-normal text-[#423D3D] mt-2">
            Come back to a clean home and spend your time with those you love and doing what you love.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CleanHomeSteps;