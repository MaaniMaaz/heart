import React from 'react';
import Heart from "./pictures/Heart & Home_square.png";
import HomeBg from "./pictures/HeartHDbg (1).png"

const Footer = () => {
  return (
    <div className="bg-[#f5f5f0] text-gray-700 px-8 lg:px-12 xl:px-32">
      <div className="container mx-auto pt-0 pb-10  px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Description */}
          <div className="text-center md:text-left mb-8 md:mb-0">
            <img 
              alt="Heart & Home Green Clean logo with a house and a leaf" 
              className="w-[200px] h-[200px] top-[40px] left-0 relative" 
              src={HomeBg}
            />
            <p className="font-albertsans font-normal text-base leading-[160%] tracking-[0.3px] text-[rgba(113,113,113,1)] relative">
              We are the premier cleaning <br/> service in the West Valley, <br/>Arizona area.
            </p>
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-left mb-8 md:mb-0 font-albertsans font-normal text-base leading-[160%] tracking-[0.3px] pt-12 lg:mt-20">
            <h2 className="text-[28px] mb-4">
              Contact Us
            </h2>
            <p className="mt-2 text-[rgba(113,113,113,1)]">
              Call Us: (480) 999-8018
            </p>
            <p className='text-[rgba(113,113,113,1)]'>
              Like Us on{' '}
              <a className="text-[rgba(113,113,113,1)] hover:underline font-albertsans font-normal text-base leading-[160%] tracking-[0.3px]" href="#">
                Facebook
              </a>
            </p>
            <p className='text-[rgba(113,113,113,1)]'>
              Email Us:
            </p>
            <p>
              <a 
                className="text-[rgba(113,113,113,1)] hover:underline font-albertsans font-normal text-base leading-[160%] tracking-[0.3px]" 
                href="mailto:info@heartandhomegreenclean.com"
              >
                 info@heartandhomegreenclean.com
              </a>
            </p>
          </div>

          {/* Navigation */}
          <div className="text-center md:text-left mb-8 md:mb-0 font-albertsans font-normal text-base leading-[160%] tracking-[0.3px] pt-12 lg:mt-[70px]">
            <h2 className="text-[28px] mb-4">
              Navigation
            </h2>
            <ul className="mt-2 space-y-2">
              <li>
                <a className="text-[rgba(113,113,113,1)] hover:text-gray-900 hover:underline" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="text-[rgba(113,113,113,1)] hover:text-gray-900 hover:underline" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="text-[rgba(113,113,113,1)] hover:text-gray-900 hover:underline" href="#">
                  Services
                </a>
              </li>
              <li>
                <a className="text-[rgba(113,113,113,1)] hover:text-gray-900 hover:underline" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;