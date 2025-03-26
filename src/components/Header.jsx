import React from 'react';
import logo from '../assets/logo.png'; // Ensure this has text baked into the image

const Header = () => {
  return (
    <header className="bg-[#FBF6F3] w-full h-[132px] flex items-center">
      <div className="max-w-[1440px] w-full mx-auto flex items-center justify-center gap-24 px-10">
        
        {/* Left Nav */}
        <nav className="flex space-x-10 text-[#2e2e2e] font-raleway font-bold text-[24px]">
          <a href="#" className="hover:text-green-700">Home</a>
          <a href="#" className="hover:text-green-700">About</a>
        </nav>

        {/* Center Logo (image already includes text) */}
        <div className="flex justify-center items-center">
          <img
            src={logo}
            alt="Heart & Home Logo"
            className="w-[187.38px] h-[153px] object-contain"
          />
        </div>

        {/* Right Nav */}
        <nav className="flex space-x-10 text-[#2e2e2e] font-raleway font-bold text-[24px]">
          <a href="#" className="hover:text-green-700">Services</a>
          <a href="#" className="hover:text-green-700">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
