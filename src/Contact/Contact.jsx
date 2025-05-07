import React from "react";
import NavHero from "../NavHero";
import Footer from "../Footer";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook } from 'react-icons/fa';
import Brush from "../pictures/Brush_clean.png";
import EmbeddedForm from "./EmbeddedForm"; // Adjust the path as necessary

const Contact = () => {
    return (
        
        <>
            {/* <NavHero/> */}
            <div className="bg-[rgba(251,246,243,1)] flex items-center justify-center lg:min-h-60 min-h-5 rounded-[10px]">
                <div className="text-center">
                    <p className="font-bold text-xl md:text-2xl lg:text-5xl font-['Raleway'] leading-10 lg:mb-6 mt-5">
                        Let's Make Your Space <span className="text-[rgba(168,192,130,1)]">Shine!</span> <br></br>Get a <span className="text-[rgba(255,174,174,1)]">Free</span>  Quote Today!
                    </p>
                    <p className="font-['Raleway'] text-[rgba(113,113,113,1)] text-[18px] mb-[20px]">
                        Have questions? Need a custom cleaning plan? We're here to help!
                    </p>
                </div>
            </div>

           
         
            <div className="max-w-5xl mx-auto p-6 lg:mt-[15px] lg:mb-[20px]">
                <div className="flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden">
                    {/* Left Column - Pink Section */}
                    <div className="bg-[rgba(255,174,174,1)] text-white p-8 md:w-2/5 relative m-[6px] rounded-[10px]">
                        <a href="#" className="lg:hidden absolute top-0 left-0 w-full h-1/3 z-10"></a>
                        <div className="mb-12">
                            <h2 className="text-2xl mb-1 text-left font-['Raleway'] font-[600]">
                                Get Your Free Estimate!
                            </h2>
                            <p className="text-sm text-left font-['Raleway'] font-[400]">
                            
                            </p>
                        </div>
                        <div className="space-y-6 -mt-9 mb-8">
                            <div className="flex items-center">
                                <FaPhone className="mr-3" />
                                <span className="font-['Raleway'] font-[400] text-[16px]">(480) 999-8018</span>
                            </div>
                            <div className="flex items-center">
                                <FaEnvelope className="mr-3" />
                                <span className="font-['Raleway'] font-[400] text-[16px]">info@heartandhomegreenclean.com</span>
                            </div>
                            {/* <div className="flex items-start">
                                <FaMapMarkerAlt className="mr-3 mt-1" />
                                <span className="font-['Raleway'] font-[400] text-[16px] text-left ">
                                    15000 W Gelding Dr<br />
                                    Surprise, AZ 85379<br />
                                    United States
                                </span>
                            </div> */}
                        </div>
                        <div className="absolute lg:bottom-8 bottom-4 left-8 flex space-x-4">
                            <a href="https://www.facebook.com/heartandhomegreenclean" className="bg-black bg-opacity-20 p-2 rounded-full cursor-pointer">
                                <FaFacebook className="text-white" />
                            </a>
                        </div>
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
                    {/* Right Column - Embedded Form */}
                    <div className="bg-white p-8 md:w-3/5" >
                        <EmbeddedForm />
                    </div>
                </div>
                {/* Map Section */}
                <div className="mt-10 mb-6">
                    <h2 className="text-4xl font-bold mb-8 font-['Raleway'] text-center">Our Location</h2>
                    <div className="shadow-lg rounded-lg overflow-hidden">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106436.53376880511!2d-112.49098539443102!3d33.63149252948698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b47b3b1521017%3A0x1b69777343630542!2sSurprise%2C%20AZ!5e0!3m2!1sen!2sus!4v1712347695080!5m2!1sen!2sus"
                            width="100%" 
                            height="450" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Heart & Home Green Clean service area map"
                            className="w-full h-96 rounded-lg"
                            aria-label="Map showing Surprise, AZ, service area for Heart & Home Green Clean"
                        ></iframe>
                    </div>
                </div>
            </div>
            {/* <Footer/> */}
        </>
    );
};

export default Contact;