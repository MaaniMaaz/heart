import React from "react";
import { motion } from "framer-motion";
import HomeIcon from "./pictures/home.png";
import Cleaning from "./pictures/cleaning.png";
import Box from "./pictures/Box.png";

const services = [
  {
    title: "Routine Cleaning",
    description:
      "Keep your home fresh with our weekly, bi-weekly, or monthly cleaning plans.",
    icon: Cleaning,
    type: "image",
  },
  {
    title: "Deep Cleaning",
    description:
      " A top-to-bottom clean, perfect for seasonal refreshes.",
    icon: HomeIcon,
    type: "image",
  },
  {
    title: "Move In/Move Out",
    description:
      "Get your home ready for the next chapter.",
    icon: Box,
    type: "image",
  },
  {
    title: "Commercial Cleaning ",
    description:
      "Maintain a healthy and spotless workspace.",
    icon: Box,
    type: "image",
  },
];

const OurServices = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const iconAnimation = {
    hidden: { scale: 0, rotate: -45 },
    visible: { 
      scale: 1, 
      rotate: 0, 
      transition: { 
        type: "spring", 
        stiffness: 200, 
        damping: 20, 
        delay: 0.2 
      } 
    }
  };

  return (
    <div className="bg-white px-5 py-10 sm:px-6 sm:py-8 md:px-20 md:py-12">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-7 lg:gap-4 items-start md:items-end">
        {/* Left: Heading */}
        <motion.div 
          className="mb-6 ipad-pro:mb-0 lg:-ml-20 xl:-ml-20 ipad-pro:-ml-8 ipad-air::mb-12 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <motion.h4 
            className="font-['Raleway'] font-bold text-2xl mt-11 sm:text-3xl lg:text-[32px] lg:leading-[84px] text-[#A8C082] text-left lg:-mb-[15px] sm:mt-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h4>
          <motion.h2 
            className="font-['Raleway'] font-normal text-3xl sm:text-4xl lg:text-[48px] leading-tight lg:leading-[50px] text-gray-900 mt-2 text-left lg:mb-20 ipad-pro:text-[40px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We Work Many Fields To Clean Your Surroundings
          </motion.h2>
        </motion.div>

        {/* Right: Why Choose Us - IMPROVED ALIGNMENT */}
        <motion.div 
          className="mt-6 md:mt-20 lg:ml-0 xl:ml-16 bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-100 w-full max-w-none"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true, amount: 0.6 }}
        >
          <h3 className="font-['Raleway'] font-semibold text-xl mb-5 text-gray-800 border-b border-gray-200 pb-2">Why Choose Us?</h3>
          <ul className="font-['Raleway'] text-sm sm:text-[15px] font-normal space-y-4">
            <li className="flex items-start">
              <span className="text-[#A8C082] mr-3 mt-1 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </span>
              <span className="text-gray-700 leading-tight">100% Eco-Friendly & Non-Toxic Products</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#A8C082] mr-3 mt-1 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                </svg>
              </span>
              <span className="text-gray-700 leading-tight">Safe for Kids & Pets</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#A8C082] mr-3 mt-1 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 7h-9"/>
                  <path d="M14 17H5"/>
                  <circle cx="17" cy="17" r="3"/>
                  <circle cx="7" cy="7" r="3"/>
                </svg>
              </span>
              <span className="text-gray-700 leading-tight">Trusted Local Cleaning Professionals</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#A8C082] mr-3 mt-1 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="18" x="3" y="3" rx="2"/>
                  <path d="M3 9h18"/>
                  <path d="M9 21V9"/>
                </svg>
              </span>
              <span className="text-gray-700 leading-tight">Flexible Scheduling & Competitive Pricing</span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Service Cards */}
      <motion.div 
        className="mt-10 lg:flex sm:mt-8 md:mt-12 lg:mt-[90px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 md:gap-6 justify-center lg:gap-8 ipad-pro:flex ipad-pro:flex-wrap"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative w-full max-w-[320px] sm:max-w-[398px] h-auto min-h-[180px] sm:min-h-[209px] border-[4px] sm:border-[6px] rounded-[16px] sm:rounded-[20px] bg-gray-50 shadow-sm p-5 sm:p-6 mx-auto"
            style={{ borderColor: "rgba(168, 192, 130, 1)" }}
            variants={fadeInUp}
            whileHover={{ 
              y: -10,
              boxShadow: "0 10px 25px rgba(255, 255, 255, 0.3)",
              transition: { duration: 0.3 }
            }}
          >
            {/* Icon Circle */}
            <motion.div
              className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white border-[4px] sm:border-[6px] rounded-full flex items-center justify-center shadow"
              style={{ borderColor: "rgba(168, 192, 130, 1)" }}
              variants={iconAnimation}
            >
              {service.type === "image" ? (
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-4 h-4 sm:w-5 sm:h-5 lg:w-10 lg:h-10 object-contain"
                />
              ) : (
                <span className="text-[#A8C082] text-lg sm:text-xl lg:text-2xl">
                  {service.icon}
                </span>
              )}
            </motion.div>

            {/* Card Content */}
            <div className="mt-6 sm:mt-4 lg:mt-2">
              <motion.h3 
                className="font-['Raleway'] text-xl sm:text-2xl lg:text-[29px]  font-normal leading-snug lg:leading-[50px] tracking-[0%] text-[#717171] text-left mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              >
                {service.title}
              </motion.h3>
              <motion.p 
                className="font-['Raleway'] text-xs sm:text-sm lg:text-[20px] font-normal leading-normal lg:leading-[20px] tracking-[0%] text-[#717171] mt-1 sm:mt-2 text-left"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
              >
                {service.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <button 
          className="bg-[rgba(168,192,130,1)] hover:bg-[#94a871] text-white font-['Raleway']font-bold py-4 px-8 rounded-tr-[20px] rounded-br-[10px] rounded-bl-[20px] text-sm sm:text-xl transition-colors duration-300 hover:shadow-xl"
        >
          Book Your Eco-Friendly Cleaning Now
        </button>
      </motion.div>
    </div>
  );
};

export default OurServices;