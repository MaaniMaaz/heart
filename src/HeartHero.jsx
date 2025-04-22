import React, { useEffect } from 'react';
import DandS from "./pictures/D.JPG";

const HeartHero = () => {
  useEffect(() => {
    // Set up Intersection Observer to detect when elements enter viewport
    const observerOptions = {
      root: null, // use viewport as root
      rootMargin: '0px',
      threshold: 0.1 // trigger when 10% of element is visible
    };
    
    // Create observer to add animation classes when elements come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Add animation class when element enters viewport
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('image-animate')) {
            entry.target.classList.add('image-animated');
          } else if (entry.target.classList.contains('title-animate')) {
            entry.target.classList.add('title-animated');
          } else if (entry.target.classList.contains('paragraph-animate')) {
            // Get index from data attribute for staggered animation
            const index = parseInt(entry.target.dataset.index || 0);
            setTimeout(() => {
              entry.target.classList.add('paragraph-animated');
            }, 200 * index);
          }
          
          // Unobserve after animating
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Select elements to observe
    const imageContainer = document.querySelector('.image-animate');
    const title = document.querySelector('.title-animate');
    const paragraphs = document.querySelectorAll('.paragraph-animate');
    
    // Start observing elements
    if (imageContainer) observer.observe(imageContainer);
    if (title) observer.observe(title);
    paragraphs.forEach((p, index) => {
      p.dataset.index = index;
      observer.observe(p);
    });
    
    // Clean up observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
<div className="bg-[rgba(251,246,243,1)] flex justify-center px-4 sm:px-6 lg:px-8 py-20">
{/* Add animation style tags */}
      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
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
        
        .image-animate {
          opacity: 0;
        }
        
        .image-animated {
          animation: fadeInLeft 1s ease forwards;
        }
        
        .title-animate {
          opacity: 0;
        }
        
        .title-animated {
          animation: fadeInRight 1s ease forwards;
        }
        
        .paragraph-animate {
          opacity: 0;
        }
        
        .paragraph-animated {
          animation: fadeInUp 0.8s ease forwards;
        }
      `}</style>

      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-12">
        
        {/* Image Container - Fully Responsive */}
        <div className="w-full md:w-1/2 flex justify-center image-animate">
          <img
            alt="A happy couple standing in front of a beautifully carved wooden door"
            className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[672px] h-auto object-contain rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            src={DandS}
          />
        </div>

        {/* Text Content - Fully Responsive */}
        <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left">
          <h1 className="font-['Raleway'] font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-tight md:leading-[50px] tracking-normal text-gray-800 title-animate">
           {' '}
            <span className="text-[rgba(168,192,130,1)] font-bold block md:inline relative">
              Green Clean
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[rgba(168,192,130,1)] transition-all duration-1000 group-hover:w-full"></span>
            </span>{' '}
             for a Healthier Home

          </h1>
          
          <div className="space-y-4">
            <p className="font-['Raleway'] font-light text-base sm:text-lg md:text-xl lg:text-[20px] leading-relaxed md:leading-[25px] tracking-normal text-[rgba(113,113,113,1)] paragraph-animate" data-index="0">
            At Heart & Home Green Clean, we believe that a clean home shouldn’t come at the expense of your health or the environment. Our eco-conscious cleaning services provide a deep clean using plant-based, non-toxic products, ensuring a safe and chemical-free space for your family.
            </p>
            {/* <p className="font-['Raleway'] font-light text-base sm:text-lg md:text-xl lg:text-[20px] leading-relaxed md:leading-[25px] tracking-normal text-[rgba(113,113,113,1)] paragraph-animate" data-index="1">
              Our goal is to enrich the lives of our clients and their families by providing residential and commercial cleaning and organizational services.
            </p>
            <p className="font-['Raleway'] font-light text-base sm:text-lg md:text-xl lg:text-[20px] leading-relaxed md:leading-[25px] tracking-normal text-[rgba(113,113,113,1)] paragraph-animate" data-index="2">
              We believe that your time is valuable and pride ourselves on helping maximize it for you.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeartHero;