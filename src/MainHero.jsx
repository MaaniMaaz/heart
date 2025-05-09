import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Cleaning from "./pictures/hero-1.jpg";
import Shield from "./pictures/Shield-Done.png";
import Activity from "./pictures/Activity.png";
import Star from "./pictures/Star.png";
import Brush from "./pictures/Brush.png";
import { useNavigate } from "react-router-dom";
import { useContent } from "./contexts/ContentContext";
import FormattedText from "./components/common/FormattedText";
import BadgeGrid from "./Badges";
import './MainHero.css';  // Import CSS file

const MainHero = () => {
  const navigate = useNavigate();
  const { content, fetchContent, isLoading } = useContent();
  const heroContent = content?.home?.hero || {};
  const badges = heroContent?.badges || [];

  useEffect(() => {
    if (!content?.home?.hero) {
      fetchContent('home', 'hero');
    }
  }, [content?.home?.hero, fetchContent]);

  // Function to handle button click and redirect to contact page
  const handleContactRedirect = () => {
    navigate('/contact'); // Redirect to contact page
  };

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
    <div className="bg-[#F9F6F3] flex flex-col items-end justify-start lg:pl-24 pr-0 relative ">
      {/* Mobile-specific content (hidden on lg) */}
      <div className="lg:hidden bg-[#F9F6F3] flex flex-col px-4 w-full pt-6">
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
            <FormattedText content={heroContent.mainTitle} />
          </motion.h1>
          <motion.p 
            className="font-['Raleway'] font-normal text-base leading-normal text-gray-600 mt-3"
            variants={fadeIn}
          >
            <FormattedText content={heroContent.description} />
          </motion.p>
          <motion.button 
            className="mt-4 w-full h-[46px] bg-[rgba(168,192,130,1)] text-white font-semibold px-6 py-3 rounded-tr-[20px] rounded-br-[10px] rounded-bl-[20px] transition hover:bg-opacity-90 pulse-btn"
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleContactRedirect}
          >
            <FormattedText content={heroContent.buttonText || "Get Your Free Estimate"} />
          </motion.button>
        </motion.div>
        
        {/* Image Content Second on Mobile */}
        <motion.div 
          className="relative w-full max-w-md mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="relative w-full h-[280px]">
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

            {/* Badges */}
            {badges.length > 0 && (
              <>
                {/* Top left badge */}
                <motion.div 
                  className="absolute -top-5 -left-3 z-20 badge-animation"
                  variants={badgeAnimation}
                >
                  <div className="bg-white p-3 rounded-[30px] shadow-md w-[70px] h-[70px] flex items-center justify-center">
                    <img src={Shield} alt="Shield Icon" className="w-9 h-10 text-[rgba(168,192,130,1)]" />
                  </div>
                </motion.div>

                {/* Show first badge if available */}
                {badges[0] && (
                  <motion.div 
                    className="absolute -top-4 right-0 z-20 badge-animation"
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
                        <p className="text-sm font-bold text-gray-800">
                          <FormattedText content={badges[0].title} />
                        </p>
                        <p className="text-xs text-gray-800">
                          <FormattedText content={badges[0].description} />
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Show second badge if available */}
                {badges[1] && (
                  <motion.div 
                    className="absolute -bottom-4 -left-2 z-20 ipad-pro:text-left text-left badge-animation"
                    variants={badgeAnimation}
                  >
                    <div className="bg-white py-3 px-3 rounded-[30px] shadow-md flex items-center">
                      <div className="relative">
                        <img src={Activity} alt="Activity Icon" className="w-12 h-12 mr-2 text-[rgba(168,192,130,1)]" />
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-[rgba(168,192,130,1)] rounded-full"></div>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-800 text-left">
                          <FormattedText content={badges[1].title} />
                        </p>
                        <p className="text-xs text-gray-800">
                          <FormattedText content={badges[1].description} />
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </>
            )}

            {/* Decorative stars */}
            <motion.img 
              src={Star} 
              alt="Star Icon" 
              className="absolute top-8 right-8 w-6 h-6 opacity-80 z-10 star-animation"
              variants={starAnimation}
              custom={0}
            />
            <motion.img 
              src={Star} 
              alt="Star Icon" 
              className="absolute top-24 left-4 w-6 h-6 opacity-80 z-10 star-animation"
              variants={starAnimation}
              custom={1}
            />
            <motion.img 
              src={Brush} 
              alt="Brush Icon" 
              className="absolute -left-3 bottom-16 w-12 h-12 opacity-80 z-10 star-animation"
              variants={starAnimation}
              custom={2}
            />
          </div>
        </motion.div>
        
        {/* Fixed space for the bottom icons */}
        <div className="h-16 w-full"></div>
      </div>

      {/* Original LG design (hidden on mobile) */}
      <div className="hidden lg:flex w-full grid lg:grid-cols-2 items-center gap-10 pt-6 min-h-screen pb-8">
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
            <FormattedText content={heroContent.mainTitle} />
          </motion.h1>
          <motion.p 
            className="font-['Raleway'] font-normal text-[20px] leading-[28px] tracking-[0%] text-gray-600 mt-4 text-left"
            variants={fadeIn}
          >
            <FormattedText content={heroContent.description} />
          </motion.p>
          <motion.button 
            className="mt-6 w-[215px] h-[46px] bg-[rgba(168,192,130,1)] text-white font-semibold px-6 py-3 rounded-tr-[20px] rounded-br-[10px] rounded-bl-[20px] transition hover:bg-opacity-90 flex pulse-btn"
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleContactRedirect}
          >
            <FormattedText content={heroContent.buttonText || "Get Your Free Estimate"} />
          </motion.button>
        </motion.div>

        {/* Right Content - Image with increased width */}
        <motion.div 
          className="relative flex justify-end ml-auto"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="relative w-[700px] h-[500px]">
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
            className="absolute top-8 left-96 w-8 h-8 opacity-80 z-10 star-animation"
            variants={starAnimation}
            custom={0}
          />
          <motion.img 
            src={Star} 
            alt="Star Icon" 
            className="absolute top-12 left-[100px] w-8 h-8 opacity-80 z-10 star-animation"
            variants={starAnimation}
            custom={1}
          />
          <motion.img 
            src={Star} 
            alt="Star Icon" 
            className="absolute top-96 right-16 w-8 h-8 opacity-80 z-10 star-animation"
            variants={starAnimation}
            custom={2}
          />
          <motion.img 
            src={Brush} 
            alt="Brush Icon" 
            className="absolute -left-12 top-52 w-24 h-24 opacity-80 z-10 star-animation"
            variants={starAnimation}
            custom={3}
          />

          {/* Badges Positioned on Image */}
          {badges.length > 0 && (
            <>
              {badges[0] && (
                <motion.div 
                  className="absolute w-full sm:w-64 md:w-72 lg:w-[284px] h-auto min-h-[95px] md:min-h-[109px] gap-2 bg-white rounded-xl md:rounded-[30px] flex items-center justify-center left-0 -translate-x-1/2 sm:-translate-x-24 md:-translate-x-28 top-8 sm:top-11 z-20 badge-animation"
                  variants={badgeAnimation}
                >
                  <img src={Shield} alt="Check Icon" className="w-10 h-12 sm:w-12 sm:h-14 text-[rgba(168,192,130,1)] ml-1 sm:ml-2" />
                  <h1 className="font-['Raleway'] font-semibold text-sm sm:text-[16px] text-gray-700 text-left">
                    <FormattedText content={badges[0].title} /> <br />
                    <span className="font-['Raleway'] font-medium text-sm sm:text-[16px] text-[#2F2F2F]">
                      <FormattedText content={badges[0].description} />
                    </span>
                  </h1>
                </motion.div>
              )}

              {badges[1] && (
                <motion.div 
                  className="absolute left-0 -translate-x-1/2 sm:-translate-x-24 md:-translate-x-28 top-60 sm:top-80 w-full sm:w-64 md:w-72 lg:w-[284px] h-auto min-h-[95px] md:min-h-[109px] bg-white rounded-xl md:rounded-[30px] flex items-center gap-2 justify-center z-20 badge-animation"
                  variants={badgeAnimation}
                >
                  <img src={Activity} alt="Check Icon" className="w-10 h-11 sm:w-12 sm:h-13 text-[rgba(168,192,130,1)] ml-1 sm:ml-2" />
                  <h1 className="font-['Raleway'] font-semibold text-sm sm:text-[16px] text-gray-700 text-left">
                    <FormattedText content={badges[1].title} /> <br />
                    <span className="font-['Raleway'] font-medium text-sm sm:text-[16px] text-[#2F2F2F]">
                      <FormattedText content={badges[1].description} />
                    </span>
                  </h1>
                </motion.div>
              )}

              {badges[2] && (
                <motion.div 
                  className="w-full sm:w-60 md:w-[250px] h-auto min-h-[95px] md:min-h-[107px] absolute bg-white rounded-tl-xl md:rounded-tl-[20px] rounded-bl-xl md:rounded-bl-[20px] flex items-center justify-center top-12 sm:top-16 right-0 sm:right-auto z-20 badge-animation"
                  variants={badgeAnimation}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg flex items-center justify-center ml-3 sm:ml-5">
                    <svg className="w-10 h-10 sm:w-12 sm:h-12 text-[rgba(168,192,130,1)]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 15.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" />
                      <path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65z" />
                    </svg>
                  </div>
                  <h1 className="font-['Raleway'] font-semibold text-sm sm:text-[16px] text-gray-700 text-left ml-3 sm:ml-5">
                    <FormattedText content={badges[2].title} /><br />
                    <span className="font-['Raleway'] font-medium text-sm sm:text-[16px] text-[#2F2F2F]">
                      <FormattedText content={badges[2].description} />
                    </span>
                  </h1>
                </motion.div>
              )}
            </>
          )}
        </motion.div>
      </div>

      {/* Bottom Icons Section - with fixed position and high z-index */}
      <div className="fixed-position-wrapper mt-8">
        <BadgeGrid/>
      </div>
    </div>
  );
};

export default MainHero;