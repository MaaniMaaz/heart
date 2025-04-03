import React, { useState } from 'react';
import House from "./pictures/HeartHDbg (1).png";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import HouseSVG from "./pictures/4-cropped.svg"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[rgba(251,246,243,1)]">
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center items-center space-x-6">
          <motion.a 
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="font-['Raleway'] text-[24px] font-bold leading-[14px] tracking-[0.3px]" 
            href="#"
            whileHover={{ scale: 1.1 }}
          >
           <Link to="/">Home</Link> 
          </motion.a>
          <motion.a 
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="font-['Raleway'] text-[24px] font-bold leading-[14px] tracking-[0.3px]" 
            href="#"
            whileHover={{ scale: 1.1 }}
          >
           <Link to="/about">About </Link> 
          </motion.a>
          <div className="flex flex-col items-center">
            <motion.img
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
              alt="Logo with a house and a leaf"
              className="h-36 w-28 lg:ml-5 lg:mr-5"
              src={HouseSVG}
            />
          </div>
          <motion.a 
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="font-['Raleway'] text-[24px] font-bold leading-[14px] tracking-[0.3px]" 
            href="#"
            whileHover={{ scale: 1.1 }}
          >
            <Link to="/services"> Services </Link> 
          </motion.a>
          <motion.a 
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="font-['Raleway'] text-[24px] font-bold leading-[14px] tracking-[0.3px]" 
            href="#"
            whileHover={{ scale: 1.1 }}
          >
           <Link to="/contact">Contact </Link>
          </motion.a>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between">
          <div className="flex-1">
            <motion.img
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              alt="Logo with a house and a leaf"
              className="w-[105px] h-auto -ml-[0.25rem] mt-5"
              src={HouseSVG}
            />
          </div>
          
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[rgba(251,246,243,1)] py-4 space-y-4"
          >
            <motion.a 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="block font-['Raleway'] text-xl font-bold tracking-[0.3px] px-4 py-2" 
              href="#"
            >
             <Link to="/"> Home </Link>
            </motion.a>
            <motion.a 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="block font-['Raleway'] text-xl font-bold tracking-[0.3px] px-4 py-2" 
              href="#"
            >
             <Link to="/about">About</Link> 
            </motion.a>
            <motion.a 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="block font-['Raleway'] text-xl font-bold tracking-[0.3px] px-4 py-2" 
              href="#"
            >
             <Link to="/services"> Services </Link>
            </motion.a>
            <motion.a 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="block font-['Raleway'] text-xl font-bold tracking-[0.3px] px-4 py-2" 
              href="#"
            >
            <Link to="/contact">Contact</Link>  
            </motion.a>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;