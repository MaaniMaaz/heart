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
    title: "Move Out/Move In",
    description:
      "Get your home ready for the next chapter.",
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
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-6 lg:gap-4 items-start md:items-end">
        {/* Left: Heading */}
        <motion.div 
          className="mb-6 md:mb-0 lg:-ml-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <motion.h4 
            className="font-['Raleway'] font-bold text-2xl mt-11 sm:text-3xl lg:text-[32px] font-bold lg:leading-[84px] text-[#A8C082] text-left lg:-mb-[15px] sm:mt-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h4>
          <motion.h2 
            className="font-[dmSans] font-normal text-3xl sm:text-4xl lg:text-[48px] leading-tight lg:leading-[50px] text-gray-900 mt-2 text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We Work Many Fields To Clean Your Surroundings
          </motion.h2>
        </motion.div>

        {/* Right: Paragraph */}
        <motion.div 
          className="mt-2 md:mt-0 lg:ml-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true, amount: 0.6 }}
        >
          <p className="font-[dmSans] text-sm sm:text-[15px] font-normal leading-relaxed sm:leading-[30px] tracking-[0%] text-gray-500 text-left ">
          At Heart & Home Green Clean, we believe that a clean home shouldn’t come at the expense of your health or the environment. Our eco-conscious cleaning services provide a deep clean using plant-based, non-toxic products, ensuring a safe and chemical-free space for your family.
          </p>
        </motion.div>
      </div>

      {/* Service Cards */}
      <motion.div 
        className="mt-10 sm:mt-8 md:mt-12 lg:mt-[90px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 md:gap-6 justify-center"
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
              boxShadow: "0 10px 25px rgba(168, 192, 130, 0.3)",
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
                className="font-[dmSans] text-xl sm:text-2xl lg:text-[36px] font-normal leading-snug lg:leading-[50px] tracking-[0%] text-[#717171] text-justify mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              >
                {service.title}
              </motion.h3>
              <motion.p 
                className="font-[dmSans] text-xs sm:text-sm lg:text-[16px] font-normal leading-normal lg:leading-[20px] tracking-[0%] text-[#717171] mt-1 sm:mt-2 text-justify"
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
    </div>
  );
};

export default OurServices;