import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Cleaning from "./pictures/Rectangle 36.png";
import Clock from "./pictures/clock.png";
import Spray from "./pictures/spray.png";
import Secure from "./pictures/secure.png";
import Shield from "./pictures/Shield-Done.png";
import Activity from "./pictures/Activity.png";
import Star from "./pictures/Star.png";
import Brush from "./pictures/Brush.png";

const MainHero = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };

  const slideInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.7 } }
  };

  const slideInRight = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.7 } }
  };

  const slideUp = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } }
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
  };

  const badgeAnimation = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5, delay: 0.3 } }
  };

  const starAnimation = {
    hidden: { scale: 0, opacity: 0, rotate: -30 },
    visible: (i) => ({ 
      scale: 1, 
      opacity: 0.8, 
      rotate: 0,
      transition: { 
        duration: 0.5, 
        delay: 0.8 + (i * 0.2),
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 5,
        duration: 1
      }
    })
  };

  return (
    <div className="bg-[#F9F6F3] lg:min-h-screen min-h-[100vh] iphone-se:min-h-[120vh] iphone-xr:min-h-[95vh] iphone-12-pro:min-h-[100vh] galaxy-s8-plus:min-h-[110vh] ipad-air:min-h-[80vh] sm:min-h-[70vh] md:min-h-[100vh] flex flex-col items-end justify-start lg:pl-24 pr-0 py-0 relative pb-14">
      {/* Mobile-specific overlay (hidden on lg) */}
      <div className="lg:hidden absolute inset-0 bg-[#F9F6F3] z-10 flex flex-col px-4 pb-24">
        {/* Text Content First on Mobile */}
        <motion.div 
          className="text-center mb-6"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <motion.h1 
            className="font-['Raleway'] font-bold text-3xl leading-tight text-black"
            variants={slideInLeft}
          >
            <span className="text-[rgba(168,192,130,1)]">Eco-Friendly</span><br />
            Cleaning Services in<br />
            Arizona West Valley
          </motion.h1>
          <motion.p 
            className="font-['dmSans'] font-normal text-base leading-normal text-gray-600 mt-3"
            variants={fadeIn}
          >
            Welcome to Heart & Home Green Clean, your trusted provider of eco-friendly house cleaning services in Arizona West Valley. We specialize in non-toxic, sustainable cleaning solutions that keep your home fresh, safe, and spotless. Whether you need routine cleaning, deep cleaning, or move-in/move-out services, we're here to help
          </motion.p>
          <motion.button 
            className="mt-4 w-full h-[46px] bg-[rgba(168,192,130,1)] text-white font-semibold px-6 py-3 rounded-tr-[20px] rounded-br-[10px] rounded-bl-[20px] transition hover:bg-opacity-90"
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Your Free Estimate
          </motion.button>
        </motion.div>
        
        {/* Image Content Second on Mobile - Full coverage with badges */}
        <motion.div 
          className="relative w-full max-w-md mx-auto mt-4 mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="relative w-full h-[350px]">
            {/* Pink background with rounded corners */}
            <div className="absolute inset-0 rounded-tl-[60px] rounded-br-[60px]"></div>
            
            {/* Image positioned absolutely to fill the container */}
            <motion.div 
              className="absolute inset-0 rounded-tl-[60px] rounded-br-[60px] overflow-hidden"
              variants={scaleIn}
            >
              <img 
                src={Cleaning} 
                alt="Cleaning Supplies" 
                className="w-full h-full object-cover" 
              />
            </motion.div>

            {/* Top left badge */}
            <motion.div 
              className="absolute -top-5 -left-3 z-20"
              variants={badgeAnimation}
            >
              <div className="bg-white p-3 rounded-[30px] shadow-md w-[70px] h-[70px] flex items-center justify-center">
                <img src={Shield} alt="Shield Icon" className="w-9 h-10 text-[rgba(168,192,130,1)]" />
              </div>
            </motion.div>

            {/* Top right badge - Qualified with Gear icon */}
            <motion.div 
              className="absolute -top-4 right-0 z-20"
              variants={badgeAnimation}
            >
              <div className="bg-white py-3 px-3 rounded-2xl shadow-md flex items-center">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-2">
                  <svg className="w-6 h-6 text-[rgba(168,192,130,1)]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 15.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" />
                    <path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">Qualified</p>
                  <p className="text-xs text-gray-800">Locally Owned &</p>
                  <p className="text-xs text-gray-800">Operated</p>
                </div>
              </div>
            </motion.div>

            {/* Bottom left badge - Best Insured */}
            <motion.div 
              className="absolute -bottom-4 -left-2 z-20"
              variants={badgeAnimation}
            >
              <div className="bg-white py-3 px-3 rounded-[30px] shadow-md flex items-center">
                <div className="relative">
                  <img src={Activity} alt="Activity Icon" className="w-12 h-12 mr-2 text-[rgba(168,192,130,1)]" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-[rgba(168,192,130,1)] rounded-full"></div>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">Best</p>
                  <p className="text-xs text-gray-800">Insured & Bonded</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative stars */}
            <motion.img 
              src={Star} 
              alt="Star Icon" 
              className="absolute top-8 right-8 w-6 h-6 opacity-80 z-10"
              variants={starAnimation}
              custom={0}
            />
            <motion.img 
              src={Star} 
              alt="Star Icon" 
              className="absolute top-24 left-4 w-6 h-6 opacity-80 z-10"
              variants={starAnimation}
              custom={1}
            />
            <motion.img 
              src={Brush} 
              alt="Brush Icon" 
              className="absolute -left-3 bottom-16 w-12 h-12 opacity-80 z-10"
              variants={starAnimation}
              custom={2}
            />
          </div>
        </motion.div>
      </div>

      {/* Original LG design (hidden on mobile) */}
      <div className="hidden lg:flex w-full grid lg:grid-cols-2 items-center gap-10 pt-0 mt-0">
        {/* Left Content */}
        <motion.div 
          className="max-w-[720px]"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <motion.h1 
            className="font-['Raleway'] font-bold text-[60px] leading-[73px] tracking-[0%] text-black text-left max-w-[600px]"
            variants={slideInLeft}
          >
            <span className="text-[rgba(168,192,130,1)]">Eco-Friendly</span><br />
            Cleaning Services in<br />
            Arizona West Valley
          </motion.h1>
          <motion.p 
            className="font-['dmSans'] font-normal text-[20px] leading-[28px] tracking-[0%] text-gray-600 mt-4 text-left"
            variants={fadeIn}
          >
            Welcome to <strong> Heart & Home Green Clean</strong>, your trusted provider of eco-friendly house cleaning services in Arizona West Valley. We specialize in non-toxic, sustainable cleaning solutions that keep your home fresh, safe, and spotless. Whether you need routine cleaning, deep cleaning, or move-in/move-out services, we're here to help
          </motion.p>
          <motion.button 
            className="mt-6 w-[215px] h-[46px] bg-[rgba(168,192,130,1)] text-white font-semibold px-6 py-3 rounded-tr-[20px] rounded-br-[10px] rounded-bl-[20px] transition hover:bg-opacity-90 flex"
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Your Free Estimate
          </motion.button>
        </motion.div>

        {/* Right Content - Image pushed to the right-most with proper image coverage */}
        <motion.div 
          className="relative flex justify-end ml-auto"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="relative w-[578px] h-[529px]">
            {/* Pink background with rounded corners */}
            <div className="absolute inset-0 rounded-tl-[100px] rounded-br-[100px]"></div>
            
            {/* Image positioned absolutely to cover the entire container */}
            <motion.div 
              className="absolute inset-0 rounded-tl-[100px] rounded-br-[100px] overflow-hidden"
              variants={slideInRight}
            >
              <img 
                src={Cleaning} 
                alt="Cleaning Supplies" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
          
          <motion.img 
            src={Star} 
            alt="Star Icon" 
            className="absolute top-8 left-96 w-8 h-8 opacity-80 z-10"
            variants={starAnimation}
            custom={0}
          />
          <motion.img 
            src={Star} 
            alt="Star Icon" 
            className="absolute top-12 left-[100px] w-8 h-8 opacity-80 z-10"
            variants={starAnimation}
            custom={1}
          />
          <motion.img 
            src={Star} 
            alt="Star Icon" 
            className="absolute top-96 right-16 w-8 h-8 opacity-80 z-10"
            variants={starAnimation}
            custom={2}
          />
          <motion.img 
            src={Brush} 
            alt="Brush Icon" 
            className="absolute -left-12 top-52 w-24 h-24 opacity-80 z-10"
            variants={starAnimation}
            custom={3}
          />

          {/* Badges Positioned on Image */}
          <motion.div 
            className="w-[114px] h-[114px] absolute bg-white rounded-[30px] flex items-center justify-center -left-11 top-11 z-20"
            variants={badgeAnimation}
          >
            <img src={Shield} alt="Check Icon" className="w-12 h-14 text-[rgba(168,192,130,1)]" />
          </motion.div>

          <motion.div 
            className="absolute -left-28 top-80 w-[284px] h-[109px] bg-white rounded-[30px] flex items-center gap-2 justify-center z-20"
            variants={badgeAnimation}
          >
            <img src={Activity} alt="Check Icon" className="w-12 h-13 text-[rgba(168,192,130,1)]" />
            <h1 className="font-poppins font-semibold text-[16px] text-gray-700 text-left">Best <br /><span className="font-poppins font-medium text-[16px] text-[#2F2F2F]">Insured & Bonded</span></h1>
          </motion.div>

          <motion.div 
            className="w-[250px] h-[107px] absolute bg-white rounded-tl-[20px] rounded-bl-[20px] flex items-center justify-center top-16 z-20"
            variants={badgeAnimation}
          >
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center ml-5">
              <svg className="w-12 h-12 text-[rgba(168,192,130,1)]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 15.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" />
                <path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65z" />
              </svg>
            </div>
            <h1 className="font-poppins font-semibold text-[16px] text-gray-700 text-left ml-5">Qualified<br /><span className="font-poppins font-medium text-[16px] text-[#2F2F2F]">Locally Owned & Operated</span></h1>
          </motion.div>
        </motion.div>
      </div>

      {/* Fixed Bottom Icons Section */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-8 
                    border-white border-[1.5px] bg-[#F9F6F3] 
                    h-12 lg:h-16 rounded-[15px] lg:rounded-[25px] 
                    w-[90%] lg:w-[785px] px-3 lg:px-6 py-2 lg:py-3 
                    flex items-center justify-between gap-1 lg:gap-2 z-50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-1 lg:gap-2 text-gray-600"
        >
          <img 
            src={Clock} 
            alt="Clock" 
            className="w-5 h-5 lg:w-7 lg:h-7" 
          />
          <span className="font-inter font-semibold text-xs lg:text-[20px] text-black">
            24/4 Support
          </span>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center gap-1 lg:gap-2 text-gray-600"
        >
          <img 
            src={Spray} 
            alt="Spray" 
            className="w-4 h-5 lg:w-5 lg:h-7" 
          />
          <span className="font-inter font-semibold text-xs lg:text-[18px] text-black">
            Top-Notch Service
          </span>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center gap-1 lg:gap-2 text-gray-600"
        >
          <img 
            src={Secure} 
            alt="Secure" 
            className="w-5 h-4 lg:w-7 lg:h-6" 
          />
          <span className="font-inter font-semibold text-xs lg:text-[20px] text-black">
            Secure Payment
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default MainHero;