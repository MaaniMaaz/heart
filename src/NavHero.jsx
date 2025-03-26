import React, { useState } from 'react';
import House from "./pictures/HeartHDbg.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[rgba(251,246,243,1)] py-4">
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center items-center space-x-6">
          <a className="font-averia text-[24px] font-bold leading-[14px] tracking-[0.3px] mt-12" href="#">
            Home
          </a>
          <a className="font-averia text-[24px] font-bold leading-[14px] tracking-[0.3px] mt-12" href="#">
            About
          </a>
          <div className="flex flex-col items-center">
            <img
              alt="Logo with a house and a leaf"
              className="h-48 w-48 mt-3 "
              src={House}
            />
          </div>
          <a className="font-averia text-[24px] font-bold leading-[14px] tracking-[0.3px] mt-12" href="#">
            Services
          </a>
          <a className="font-averia text-[24px] font-bold leading-[14px] tracking-[0.3px] mt-12" href="#">
            Contact
          </a>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between">
          <div className="flex-1">
            <img
              alt="Logo with a house and a leaf"
              className="w-[100px] h-auto"
              src={House}
            />
          </div>
          
          <button
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
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[rgba(251,246,243,1)] py-4 space-y-4">
            <a className="block font-averia text-xl font-bold tracking-[0.3px] px-4 py-2" href="#">
              Home
            </a>
            <a className="block font-averia text-xl font-bold tracking-[0.3px] px-4 py-2" href="#">
              About
            </a>
            <a className="block font-averia text-xl font-bold tracking-[0.3px] px-4 py-2" href="#">
              Services
            </a>
            <a className="block font-averia text-xl font-bold tracking-[0.3px] px-4 py-2" href="#">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;