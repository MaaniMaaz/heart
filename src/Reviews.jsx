import React, { useState } from "react";
import Left from "./pictures/LeftArrow.png";
import Right from "./pictures/RightArrow.png";

const testimonials = [
  {
    name: "Rebecca Moxie",
    review: "Consistent, friendly, and always do a thorough job. We have worked with CP Complete Care Cleaning for 3 years & they always make our home clean & refreshed. Highly recommend.",
  },
  {
    name: "Todd Gartman",
    review: "Jessica, Chelsea and their team ensures that our home is cleaned with care when they visit. We appreciate them and the service they give us.",
  },
  {
    name: "Anita Regalado-Geddes",
    review: "Jessica, Chelsea, and Mikey are amazing!My house has never been so clean.Thank you for a great job! ",
  },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-[url('./pictures/reveiws-section.jpg')] bg-cover bg-center w-full py-16 md:py-12 px-4 md:px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h3 className="font-['DM-Sans'] font-normal text-2xl sm:text-3xl md:text-4xl lg:text-[48px] tracking-normal mt-2 md:mt-4 text-left">
          {testimonials[currentIndex].name}
        </h3>
        
        {/* Fixed-height container with reduced height */}
        <div className="min-h-[100px] md:min-h-[120px] lg:min-h-[150px]">
          <p className="font-['DM-Sans'] text-base sm:text-lg md:text-xl lg:text-[28px] leading-normal md:leading-[50px] text-left text-gray-800 mt-2 md:mt-4">
            "{testimonials[currentIndex].review}"
          </p>
        </div>

        {/* Arrow Navigation Controls - Original style with darker arrows */}
        <div className="flex items-center justify-end mt-4 md:mt-6 gap-0">
          {/* Previous Arrow */}
          <button
            onClick={prevReview}
            className="p-2 hover:opacity-80 transition-opacity"
            aria-label="Previous testimonial"
          >
            <img 
              src={Left} 
              alt="Previous" 
              className="h-4 w-4 md:h-6 md:w-6 lg:h-6 lg:w-6"
              style={{ filter: 'brightness(0) invert(1) contrast(1.75)' }}
            />
          </button>

          {/* Next Arrow */}
          <button
            onClick={nextReview}
            className="p-2 hover:opacity-80 transition-opacity"
            aria-label="Next testimonial"
          >
            <img 
              src={Right}
              alt="Next" 
              className="h-4 w-4 md:h-6 md:w-6 lg:h-6 lg:w-6"
              style={{ filter: 'brightness(0) invert(1) contrast(1.75)' }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;