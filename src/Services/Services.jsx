import React, { useState } from "react";
import NavHero from "../NavHero";
import Footer from "../Footer";
import ServiceCard from "./ServiceCard";
import CleaningModal from "./CleaningModal";
import HomeIcon from "../pictures/home.png";
import Cleaning from "../pictures/cleaning.png";
import Box from "../pictures/Box.png";
import './Services.css';
import InteriorImage from "../pictures/hero-1.jpg"; 
// Add Laptop Icon SVG Component
const LaptopIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-10 lg:h-10 text-[#A8C082]">
    <rect width="18" height="12" x="3" y="4" rx="2" ry="2" />
    <line x1="2" y1="20" x2="22" y2="20" />
    <line x1="12" y1="20" x2="12" y2="16" />
  </svg>
);

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
        },
        {
          title: "Kitchen:",
          items: [
            "ALL THINGS LISTED ABOVE +",
            "Wipe down - stove top, oven door, sink, refrigerator door, dishwasher door, cabinets (as needed), microwave (inside and out)"
          ]
        },
        {
          title: "Rotating/As needed:",
          items: [
            "Dusting/wiping vents, fans, baseboards, and inside of oven"
          ]
        },
        {
          title: "Add-ons (additional fee):",
          items: [
            "Dishes",
            "Extra tidying",
            "Laundry"
          ]
        }
      ]
    }
  },
  {
    title: "Office Cleaning",
    description: "Maintain a healthy and spotless workspace.",
    icon: <LaptopIcon />,
    type: "svg",
    details: {
      description: "Professional cleaning solutions tailored for your business environment.",
      sections: [
        {
          title: "Office Cleaning Services:",
          items: [
            "Dusting & Surface Cleaning – Wipe down desks, tables, shelves, and other surfaces to remove dust and debris",
            "Trash & Recycling Removal – Empty all wastebaskets and recycling bins and replace liners",
            "Vacuuming & Floor Care – Vacuum carpets, rugs, and hard floors; mop as needed",
            "Restroom Sanitization – Clean and disinfect sinks, toilets, mirrors, and countertops; refill soap, paper towels, and toilet paper",
            "Kitchen/Break Room Cleaning – Sanitize countertops, sinks, and appliances; wipe down tables and chairs; restock paper towels and dish soap",
            "Glass & Mirror Cleaning – Spot-clean windows, glass partitions, and mirrors for a streak-free shine",
            "High-Touch Surface Disinfection – Disinfect doorknobs, light switches, elevator buttons, and shared equipment to reduce germ spread",
            "Reception & Common Area Cleaning – Ensure lobbies and meeting areas are clean, organized, and welcoming"
          ]
        }
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
          title: "All rooms:",
          items: [
            "Heavy dusting - furniture, fixtures, appliances, ceiling fans, vents, window sills, and blinds",
            "Wipe down - baseboards, walls (touch-up), doors, door handles, furniture, fixtures, appliances, and window sills",
            "Vacuum/mop - vacuum and/or mop all areas"
          ]
        },
        {
          title: "Bathrooms:",
          items: [
            "ALL THINGS LISTED ABOVE +",
            "Clean/disinfect - shower, tub, and toilets",
            "Wipe down - counters, mirrors, cabinet doors (inside and out), and sink"
          ]
        },
        {
          title: "Kitchen:",
          items: [
            "ALL THINGS LISTED ABOVE +",
            "Wipe down - oven and microwave (inside and out), stove top, cabinet doors (inside and out), sinks, outside of refrigerator, outside of dishwasher"
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
          title: "All rooms:",
          items: [
            "Heavy dusting - furniture, fixtures, appliances, ceiling fans, vents, window sills, and blinds",
            "Wipe down - baseboards, walls (touch-up), doors, door handles, furniture, fixtures, appliances, and window sills",
            "Vacuum/mop - vacuum and/or mop all areas"
          ]
        },
        {
          title: "Bathrooms:",
          items: [
            "ALL THINGS LISTED ABOVE +",
            "Clean/disinfect - shower, tub, and toilets",
            "Wipe down - counters, mirrors, cabinet doors (inside and out), and sink"
          ]
        },
        {
          title: "Kitchen:",
          items: [
            "ALL THINGS LISTED ABOVE +",
            "Appliances - clean out refrigerator, oven, and microwave",
            "Wipe down - counters, sink, cabinets, drawers, outside of appliances, behind and under appliances"
          ]
        }
      ]
    }
  },
];

// Import the interior image
// Note: You'll need to add this image to your project files


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
      <div className="bg-[rgba(251,246,243,1)] flex items-center justify-center lg:min-h-60 min-h-5">
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

        {/* New Section: Our Approach with the Image */}
        <div className="mt-12 lg:mt-16">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
            {/* Left side: Image */}
            <div className="w-full md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={InteriorImage} 
                  alt="Clean, natural interior space" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            {/* Right side: Text content */}
            <div className="w-full md:w-1/2">
              <h3 className="font-['Raleway'] font-bold text-2xl sm:text-3xl text-gray-900 mb-4">
                Experience the <span className="text-[rgba(168,192,130,1)]">Difference</span>
              </h3>
              <p className="text-gray-700 mb-4">
                Our eco-friendly approach doesn't just clean your space—it transforms it. We believe that a truly clean environment should feel fresh and natural, without harsh chemicals or artificial fragrances.
              </p>
              <p className="text-gray-700 mb-6">
                Using environmentally conscious products and methods, we create spaces that are not only spotless but also healthier for you, your family, your employees, and our planet.
              </p>
              <div className="flex flex-wrap gap-4">
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
              </div>
            </div>
          </div>
        </div>

        {/* Service Cards - 2x2 Grid Layout with reduced column spacing */}
        <div className="mt-16 sm:mt-16 md:mt-20 lg:mt-24">
        <h3 className="font-['Raleway'] font-bold text-2xl sm:text-3xl text-gray-900 mb-4 mt-[-10px] text-center">            Our <span className="text-[rgba(168,192,130,1)]">Services</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-y-9 md:gap-x-6 laptop-padding">
            {/* First row */}
            <ServiceCard 
              key={0} 
              service={services[0]} 
              onClick={handleCardClick}
            />
            
            <ServiceCard 
              key={1} 
              service={services[1]} 
              onClick={handleCardClick}
            />
            
            {/* Second row */}
            <ServiceCard 
              key={2} 
              service={services[2]} 
              onClick={handleCardClick}
            />
            
            <ServiceCard 
              key={3} 
              service={services[3]} 
              onClick={handleCardClick}
            />
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