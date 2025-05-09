import React, { useState, useEffect } from "react";
import Left from "./pictures/LeftArrow.png";
import Right from "./pictures/RightArrow.png";
import { useContent } from './contexts/ContentContext';
import FormattedText from './components/common/FormattedText';

const Reviews = () => {
  const { content, fetchContent } = useContent();
  const testimonials = content?.home?.testimonials || [];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!content?.home?.testimonials) {
      fetchContent('home', 'testimonials');
    }
  }, [content?.home?.testimonials, fetchContent]);

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

  // Fallback if testimonials aren't loaded yet
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <div className="bg-[url('./pictures/reveiws-section.jpg')] bg-cover bg-center w-full py-16 md:py-12 px-4 md:px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h3 className="font-['Raleway'] font-normal text-2xl sm:text-3xl md:text-4xl lg:text-[48px] tracking-normal mt-2 md:mt-4 text-left">
          <FormattedText content={testimonials[currentIndex]?.name || "Customer Review"} />
        </h3>
        
        {/* Fixed-height container with reduced height */}
        <div className="min-h-[100px] md:min-h-[120px] lg:min-h-[150px]">
          <p className="font-['Raleway'] text-base sm:text-lg md:text-xl lg:text-[28px] leading-normal md:leading-[50px] text-left text-gray-800 mt-2 md:mt-4">
            "<FormattedText content={testimonials[currentIndex]?.text || ""} />"
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