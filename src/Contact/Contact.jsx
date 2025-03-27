import React from "react";
import NavHero from "../NavHero"
import Footer from "../Footer"
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Brush from "../pictures/Brush_clean.png"

const Contact =()=>{

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted');
      };
    return(
        <>
         {/* <NavHero/> */}
        <div className="bg-[rgba(251,246,243,1)] flex items-center justify-center  lg:min-h-60 min-h-5 rounded-[10px]">
        <div className="text-center">
          <p className="font-bold text-xl md:text-2xl lg:text-5xl font-averia leading-10 lg:mb-6">
          Get Your Free Estimate Now!
          </p>
          <p className="font-poppins text-[rgba(113,113,113,1)] text-[18px] mb-[20px]">
           Any question or remarks? Just write us a message!
          </p>
        </div>
      </div>
         
        <div className="max-w-5xl mx-auto p-6 lg:mt-[15px] lg:mb-[20px]">
      <div className="flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden">
        {/* Left Column - Pink Section */}
        <div className="bg-[rgba(255,174,174,1)] text-white p-8 md:w-2/5 relative m-[6px] rounded-[10px]">
          {/* Mobile-only link that covers the upper text */}
          <a href="#" className="lg:hidden absolute top-0 left-0 w-full h-1/3 z-10"></a>
          
          <div className="mb-12">
            <h2 className="text-2xl mb-1 text-left font-poppins font-[600]">Get Your Free Estimate!</h2>
            <p className="text-sm text-left font-poppins font-[400] ">Say something to start a live chat!</p>
          </div>

          <div className="space-y-6 -mt-9 mb-8">
            <div className="flex items-center">
              <FaPhone className="mr-3" />
              <span className="font-poppins font-[400] text-[16px] ">+1012 3456 789</span>
            </div>

            <div className="flex items-center">
              <FaEnvelope className="mr-3" />
              <span className="font-poppins font-[400] text-[16px] ">demo@gmail.com</span>
            </div>

            <div className="flex items-start">
              <FaMapMarkerAlt className="mr-3 mt-1" />
              <span className="font-poppins font-[400] text-[16px] text-left ">132 Dartmouth Street Boston, Massachusetts 02156 United States</span>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="absolute lg:bottom-8 bottom-4 left-8 flex space-x-4">
            <a href="#" className="bg-black bg-opacity-20 p-2 rounded-full cursor-pointer">
              <FaTwitter className="text-white" />
            </a>
            <a href="#" className="bg-black bg-opacity-20 p-2 rounded-full cursor-pointer">
              <FaInstagram className="text-white" />
            </a>
            <a href="#" className="bg-black bg-opacity-20 p-2 rounded-full cursor-pointer">
              <FaLinkedin className="text-white" />
            </a>
          </div>

          {/* Background decoration - Broom icon stylized */}

          <div className="absolute lg:bottom-12 lg:right-12 hidden lg:block">
            <div className="w-28 h-28 bg-[rgba(255,199,199,1)] bg-opacity-10 rounded-full"></div>
          </div>
          <div className="absolute lg:bottom-0 lg:right-0 hidden lg:block">
          <div className="w-28 h-28 bg-[rgba(222,127,127,0.5)] bg-opacity-10 rounded-full "></div>
          </div>
        

          <div className="absolute hidden lg:block">
          <img src={Brush} alt="" className="w-40 h-52 -mt-[250px] ml-[193px]"/>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="bg-white p-8 md:w-3/5">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="flex text-[12px] font-poppins font-[500] text-[rgba(141,141,141,1)] mb-1 ">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-500 py-2"
                  placeholder=""
                />
              </div>
              <div>
                <label htmlFor="lastName" className="flex text-[12px] font-poppins font-[500] text-[rgba(141,141,141,1)] mb-1">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-500 py-2"
                  placeholder="Doe"
                  defaultValue="Doe"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="flex text-[12px] font-poppins font-[500] text-[rgba(141,141,141,1)] mb-1">Email</label>
                <input
                  id="email"
                  type="email"
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-500 py-2"
                  placeholder=""
                />
              </div>
              <div>
                <label htmlFor="phone" className="flex text-[12px] font-poppins font-[500] text-[rgba(141,141,141,1)] mb-1">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-500 py-2"
                  placeholder="+1 012 3456 789"
                  defaultValue="+1 012 3456 789"
                />
              </div>
            </div>

            <div>
              <label className="flex text-sm font-poppins font-[600] mb-3 ">Select Subject?</label>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="general"
                    name="subject"
                    value="general"
                    className="w-4 h-4 mr-2 accent-black"
                    defaultChecked
                  />
                  <label htmlFor="general" className="text-[12px] font-poppins font-[400]">General Inquiry</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="support"
                    name="subject"
                    value="support"
                    className="w-4 h-4 mr-2 accent-black"
                  />
                  <label htmlFor="support" className="text-[12px] font-poppins font-[400]">Support</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="sales"
                    name="subject"
                    value="sales"
                    className="w-4 h-4 mr-2 accent-black"
                  />
                  <label htmlFor="sales" className="text-[12px] font-poppins font-[400]">Sales</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="other"
                    name="subject"
                    value="other"
                    className="w-4 h-4 mr-2 accent-black"
                  />
                  <label htmlFor="other" className="text-[12px] font-poppins font-[400]">Other</label>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="flex text-[12px] font-poppins font-[500] text-[rgba(141,141,141,1)] mb-1">Message</label>
              <textarea
                id="message"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-500 py-2 resize-none"
                rows={2}
                placeholder="Write your message..."
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[rgba(168,192,130,1)] hover:bg-[#95bb7e] text-white px-6 py-3 rounded-md font-medium transition-colors text-[16px] font-poppins"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    {/* <Footer/> */}
        </>
    );

}

export default Contact