import React, { useState } from "react";
import NavHero from "../NavHero";
import Footer from "../Footer";
import ServiceCard from "./ServiceCard";
import CleaningModal from "./CleaningModal";
import HomeIcon from "../pictures/home.png";
import Cleaning from "../pictures/cleaning.png";
import Box from "../pictures/Box.png";

const services = [
  {
    title: "Routine Cleaning",
    description: "We'll fight the mess for you. Our routine weekly, biweekly or monthly cleanings will keep your home tidy.",
    icon: Cleaning,
    type: "image",
    details: {
      description: "Our comprehensive routine cleaning service covers all essential areas of your home.",
      sections: [
        {
          title: "Regular cleaning to keep your home consistently spotless. Services include:",
          items: [
            "Dusting & vacuuming",
            "Mopping & surface sanitization",
            "Bathroom & kitchen cleaning",
          ]
        },
    
      ]
    }
  },
  {
    title: "Deep Cleaning",
    description: "More than a routine cleaning, deep cleans leave dirt and grime nowhere to hide.",
    icon: HomeIcon,
    type: "image",
    details: {
      description: "Our intensive deep cleaning service reaches every corner of your home for a thorough refresh.",
      sections: [
        {
          title: "A thorough cleaning service for hard-to-reach areas:",
          items: [
            "Baseboards, ceiling fans & vents",
            "Interior windows & blinds",
            "Appliance deep cleaning",
          ]
        }
      ]
    }
  },
  {
    title: "Move In/Move Out",
    description: "Your move is already stressful. We'll clean where you're leaving, where you're going, or both so you can enjoy your new home sooner.",
    icon: Box,
    type: "image",
    details: {
      description: "We specialize in making transitions smooth with comprehensive cleaning for moving situations.",
      sections: [
        {
          title: "Perfect for renters, homeowners, and property managers:",
          items: [
            "Floor-to-ceiling deep clean",
            "Cabinet & appliance sanitization",
            "Spotless kitchens & bathrooms",
          ]
        }
      ]
    }
  },
  {
    title: "Commercial Cleaning",
    description: "Maintain a healthy and spotless workspace.",
    icon: Cleaning,
    type: "image",
    details: {
      description: "Our comprehensive routine cleaning service covers all essential areas of your home.",
      sections: [
        {
          title: "Tailored cleaning solutions for offices and businesses:",
          items: [
            "Workstation & breakroom sanitization",
            "Carpet & floor care",
            "Green cleaning for a healthier workspace",
          ]
        },
    
      ]
    }
  },
  {
    title: "Deep Cleaning",
    description: "More than a routine cleaning, deep cleans leave dirt and grime nowhere to hide.",
    icon: HomeIcon,
    type: "image",
    details: {
      description: "Our intensive deep cleaning service reaches every corner of your home for a thorough refresh.",
      sections: [
        {
          title: "A thorough cleaning service for hard-to-reach areas:",
          items: [
            "Baseboards, ceiling fans & vents",
            "Interior windows & blinds",
            "Appliance deep cleaning",
          ]
        }
      ]
    }
  },
];

const Services = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleCardClick = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedService(null);
  };

  return (
    <>
      {/* <NavHero /> */}
      <div className="bg-[rgba(251,246,243,1)] flex items-center justify-center  lg:min-h-60 min-h-5">
        <div className="text-center">
          <p className="font-bold text-xl md:text-2xl lg:text-5xl font-['Raleway'] leading-10 lg:mb-14">
            From Homes to Businesses, We<br />
            Clean with Care—<span className="text-[rgba(168,192,130,1)]">Naturally!</span>
          </p>
        </div>
      </div>

      <div className="bg-white px-5 py-10 sm:px-6 sm:py-8 md:px-20 md:py-12">
        {/* Header Section */}
        <div className="">
          <div className="mb-6 md:mb-0">
            <h2 className="font-['Raleway'] font-bold text-3xl sm:text-4xl lg:text-[48px] leading-tight lg:leading-[100%] text-gray-900 mt-2">
              Your All In One Destination <br/> For{" "}
              <span className="text-[rgba(168,192,130,1)]">Green Clean</span>
            </h2>
          </div>
        </div>

        {/* Service Cards */}
        <div className="mt-10 sm:mt-8 md:mt-12 lg:mt-[90px]">
          {/* First row with 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 md:gap-6 justify-center">
            {services.slice(0, 3).map((service, index) => (
              <ServiceCard 
                key={index} 
                service={service} 
                onClick={handleCardClick}
              />
            ))}
          </div>

          {/* Second row with 2 centered cards */}
          <div className="flex justify-center mt-6 sm:mt-4 md:mt-6 lg:mt-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-4 md:gap-6 lg:max-w-[50rem] lg:gap-[2.5rem]">
              {services.slice(3, 5).map((service, index) => (
                <ServiceCard 
                  key={index + 3} 
                  service={service} 
                  onClick={handleCardClick}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {modalOpen && selectedService && (
        <CleaningModal 
          service={selectedService}
          onClose={closeModal} 
        />
      )}

      {/* <Footer /> */}
    </>
  );
};

export default Services;