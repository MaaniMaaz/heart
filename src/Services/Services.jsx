// src/Services/Services.jsx (Updated)
import React, { useState, useEffect } from "react";
import ServiceCard from "./ServiceCard";
import CleaningModal from "./CleaningModal";
import HomeIcon from "../pictures/home.png";
import Cleaning from "../pictures/cleaning.png";
import Box from "../pictures/Box.png";
import './Services.css';
import InteriorImage from "../pictures/service.jpg"; 
import { useNavigate } from "react-router-dom";
import { useContent } from "../contexts/ContentContext";
import FormattedText from "../components/common/FormattedText";

// Add Laptop Icon SVG Component
const LaptopIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-10 lg:h-10 text-[#A8C082]">
    <rect width="18" height="12" x="3" y="4" rx="2" ry="2" />
    <line x1="2" y1="20" x2="22" y2="20" />
    <line x1="12" y1="20" x2="12" y2="16" />
  </svg>
);

// Default services data (fallback if API fails)
const defaultServices = [
  {
    id: "routine",
    title: "Routine Cleaning",
    description: "We'll fight the mess for you. Our routine weekly, biweekly or monthly cleanings will keep your home tidy.",
    icon: Cleaning,
    type: "image",
    details: {
      sections: [
        {
          title: "All rooms include:",
          items: [
            "Light dusting - furniture, fixtures, and appliances",
            "Light tidy - bed, side tables, dresser",
            "Wipe down and polish - furniture, fixtures, appliances",
            "Vacuum/mop - vacuum and/or mop all areas",
            "Garbage removal - bag replaced"
          ]
        },
        {
          title: "Bathrooms:",
          items: [
            "ALL THINGS LISTED ABOVE +",
            "Clean/disinfect - shower, tub, and toilets",
            "Wipe down - counters, mirrors, and sink"
          ]
        }
      ]
    }
  },
  {
    id: "office",
    title: "Office Cleaning",
    description: "Maintain a healthy and spotless workspace.",
    icon: <LaptopIcon />,
    type: "svg"
  },
  {
    id: "deep",
    title: "Deep Cleaning",
    description: "More than a routine cleaning, deep cleans leave dirt and grime nowhere to hide.",
    icon: HomeIcon,
    type: "image"
  },
  {
    id: "moveinout",
    title: "Move In/Move Out",
    description: "Your move is already stressful. We'll clean where you're leaving, where you're going, or both so you can enjoy your new home sooner.",
    icon: Box,
    type: "image"
  }
];

const Services = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();
  const { content, fetchContent } = useContent();
  const servicesContent = content?.services || {};

  useEffect(() => {
    if (!content?.services) {
      fetchContent('services');
    }
  }, [content?.services, fetchContent]);

  const handleCardClick = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedService(null);
  };

  // Get content sections or use fallbacks
  const headerContent = servicesContent?.header || {};
  const subheaderContent = servicesContent?.subheader || {};
  const experienceContent = servicesContent?.experienceSection || {};
  const servicesSectionContent = servicesContent?.servicesSection || {};

  // Get the services items from API or use defaults
  const services = servicesSectionContent?.items || defaultServices;

  // Map icon types to actual icons
  const getIconForService = (service) => {
    if (service.type === "svg" || service.icon === "computer") {
      return <LaptopIcon />;
    }
    
    switch(service.icon) {
      case "spray":
        return Cleaning;
      case "home":
        return HomeIcon;
      case "box":
        return Box;
      default:
        return Cleaning;
    }
  };

  const handleContactRedirect = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* Header Section */}
      <div className="bg-[rgba(251,246,243,1)] flex items-center justify-center lg:min-h-60 min-h-5">
      <div className="text-center">
        <p className="font-bold text-xl md:text-2xl lg:text-5xl font-['Raleway'] leading-tight mb-8"> {/* Added mb-4 for spacing */}
          <FormattedText content={headerContent.mainHeading || "From Homes to Businesses,"} />
        </p>
        <p className="font-bold text-xl md:text-2xl lg:text-4xl font-['Raleway'] leading-tight lg:mb-14">
          <FormattedText content={headerContent.subHeading || "We Clean with Care—<green>Naturally!</green>"} />
        </p>
      </div>
    </div>

      {/* Subheader Section */}
      <div className="bg-white px-5 py-10 sm:px-6 sm:py-8 md:px-10 lg:px-20 text-center">
        <h2 className="font-['Raleway'] font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-4xl mb-8">
          <FormattedText content={subheaderContent.title || "Your All In One Destination For Green Clean"} />
        </h2>
      </div>

      {/* Experience the Difference Section */}
      <div className="bg-white px-5 py-8 sm:px-6 sm:py-8 md:px-20 md:py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left side: Image */}
          <div className="w-full rounded-lg overflow-hidden shadow-lg">
            <img 
              src={InteriorImage} 
              alt="Clean, natural interior space" 
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Right side: Text content */}
          <div className="w-full">
            <h3 className="font-['Raleway'] font-bold text-2xl sm:text-3xl text-gray-900 mb-4">
              <FormattedText content={experienceContent.title || "Experience the Difference"} />
            </h3>
            
            {experienceContent.paragraphs ? 
              experienceContent.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-4">
                  <FormattedText content={paragraph} />
                </p>
              )) :
              <>
                <p className="text-gray-700 mb-4">
                  Our eco-friendly approach doesn't just clean your space—It transforms it. We believe that a truly clean environment should feel fresh and natural, without harsh chemicals or artificial fragrances.
                </p>
                <p className="text-gray-700 mb-6">
                  Using environmentally conscious products and methods, we create spaces that are not only spotless but also healthier for you, your family, your employees, and our planet.
                </p>
              </>
            }
            
            <div className="flex flex-wrap gap-4">
              {experienceContent.features ? 
                experienceContent.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[rgba(168,192,130,1)]"></div>
                    <span className="text-gray-700 font-medium">
                      <FormattedText content={feature} />
                    </span>
                  </div>
                )) :
                <>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[rgba(168,192,130,1)]"></div>
                    <span className="text-gray-700 font-medium">Eco-friendly Products</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[rgba(168,192,130,1)]"></div>
                    <span className="text-gray-700 font-medium">Allergen Reduction</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[rgba(168,192,130,1)]"></div>
                    <span className="text-gray-700 font-medium">Sustainable Practices</span>
                  </div>
                </>
              }
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white px-5 py-16 sm:px-6 sm:py-12 md:px-20 md:py-16">
        <h3 className="font-['Raleway'] font-bold text-2xl sm:text-3xl text-gray-900 mb-8 text-center">
          <FormattedText content={servicesSectionContent.title || "Our Services"} />
        </h3>
          
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-y-9 md:gap-x-6 laptop-padding">
          {services.map((service, index) => {
            // Map API service structure to ServiceCard props format
            const cardService = {
              title: service.title,
              description: service.description,
              icon: getIconForService(service),
              type: service.type || "image",
              details: service.details
            };
            
            return (
              <ServiceCard 
                key={service.id || index} 
                service={cardService} 
                onClick={handleCardClick}
              />
            );
          })}
        </div>
      </div>

      {modalOpen && selectedService && (
        <CleaningModal 
          service={selectedService}
          onClose={closeModal} 
        />
      )}
    </>
  );
};

export default Services;