// src/Steps.jsx (Updated)
import React, { useEffect } from "react";
import Dollar from "./pictures/Doll.png";
import Bad from "./pictures/bad.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBroom } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import TopArrow from "./pictures/TopArrow.png";
import BottomArrow from "./pictures/BottomArrow.png";
import { useContent } from './contexts/ContentContext';
import FormattedText from './components/common/FormattedText';

// Define default steps in case API fails
const defaultSteps = [
  {
    title: "Get Your Free Estimate",
    description: "Simply fill out our easy estimate form or call us at (480) 999-8018 to get your estimate and we will schedule your cleaning!",
    icon: "dollar"
  },
  {
    title: "Our Professionals Will Clean Your Home",
    description: "Our professional cleaners will arrive promptly to your home at the scheduled time to clean.",
    icon: "broom"
  },
  {
    title: "Relax, We've Got the Cleaning Covered",
    description: "Come back to a clean home and spend your time with those you love and doing what you love.",
    icon: "star"
  }
];

const CleanHomeSteps = () => {
  const { content, fetchContent } = useContent();
  const stepsContent = content?.home?.steps || {};
  const stepsItems = stepsContent?.items || defaultSteps;

  useEffect(() => {
    if (!content?.home?.steps) {
      fetchContent('home', 'steps');
    }
  }, [content?.home?.steps, fetchContent]);

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

  // Function to render the appropriate icon
  const renderIcon = (iconType) => {
    switch(iconType) {
      case "dollar":
        return <img src={Dollar} alt="Estimate" className="w-12 floating" />;
      case "broom":
        return <FontAwesomeIcon icon={faBroom} className="w-12 h-12 text-white floating" />;
      case "star":
      default:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="48"  
            height="48" 
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="floating"
          >
            <path d="m12 3l-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275zM5 3v4m14 10v4M3 5h4m10 14h4" />
          </svg>
        );
    }
  };

  return (
    <div className="flex flex-col items-center text-center bg-pink-50 py-12 px-4">
      {/* CSS Animations */}
      <style jsx="true">{`
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

      <h2 className="font-['Raleway'] font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-tight md:leading-[50px] tracking-normal text-center text-gray-800 mb-[80px] animate-on-scroll">
        <FormattedText content={stepsContent.title || "3 Easy Steps To A Cleaner, Healthier Home"} />
      </h2>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-20 max-w-4xl mb-3">
        {/* Always render 3 steps, using default if necessary */}
        {defaultSteps.map((step, index) => {
          // Get content data from API, fallback to default if not available
          const stepData = stepsItems[index] || step;
          
          return (
            <div key={index} className={`flex flex-col items-center max-w-xs animate-on-scroll step-${index + 1}`}>
              <div className="bg-[rgba(222,157,157,1)] w-[100px] p-6 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl mb-4 top-[237px] left-[282px] pulse-on-hover">
                {renderIcon(step.icon)}
              </div>
              <h3 className="font-['Raleway'] font-semibold text-base leading-[100%] tracking-normal text-center capitalize text-gray-500">
                <FormattedText content={stepData.title} />
              </h3>
              <p className="font-['Raleway'] font-light text-sm leading-6 tracking-normal text-[#423D3D] mt-2">
                <FormattedText content={stepData.description} />
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CleanHomeSteps;