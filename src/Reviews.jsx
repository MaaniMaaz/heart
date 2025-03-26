import React, { useState } from "react";
import Left from "./pictures/LeftArrow.png";
import Right from "./pictures/RightArrow.png";

const testimonials = [
  {
    name: "Julie L.",
    review: "Pink's Window Services is by far the BEST! Not only do they do an amazing job on ALL services, but their staff is top-notch—the most professional and kind humans! I thank you all for your service and will always recommend you as my window cleaners.",
  },
  {
    name: "Michael R.",
    review: "I've used several cleaning services before, but nothing compares to Pink's! They are professional, detail-oriented, and extremely reliable. I highly recommend them!",
  },
  {
    name: "Samantha K.",
    review: "Absolutely love their eco-friendly approach! My home is spotless, and I feel great knowing that no harmful chemicals were used. Best cleaning service ever!",
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
        
        <p className="font-['DM-Sans'] text-base sm:text-lg md:text-xl lg:text-[28px] leading-normal md:leading-[50px] text-left text-gray-800 mt-2 md:mt-4">
          "{testimonials[currentIndex].review}"
        </p>

        {/* Arrow Navigation Controls */}
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
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;