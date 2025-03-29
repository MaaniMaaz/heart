import React from "react";
import Insured from './pictures/insuredresize.png';
import LocallyOwned from './pictures/locallyresize.png';
import Satisfaction from './pictures/satisfactionresize.png';
import Ssa from './pictures/ssaresize.png';

const BadgeGrid = () => {
  const imageData = [
    {
      id: 1,
      src: Insured,
      alt: "Bonded Satisfaction Guaranteed",
    },
    {
      id: 2,
      src: LocallyOwned,
      alt: "100% Locally Owned",
    },
    {
      id: 3,
      src: Satisfaction,
      alt: "Surprise",
    },
    {
      id: 4,
      src: Ssa,
      alt: "Featured on AZ Mom Podcast",
    },
  ];

  return (
    <div className="container px-4 mx-auto">
      <div className="flex lg:flex-wrap justify-center gap-[2px] md:gap-6 lg:gap-8 px-4 sm:px-8 md:px-12 lg:px-20 pb-8 lg:-mt-[65px] -mt-[36px] md:-mt-14">
        {imageData.map((image) => (
          <div 
            key={image.id} 
            className="group overflow-hidden rounded-lg aspect-square flex items-center justify-center"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BadgeGrid;