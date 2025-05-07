import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

const CleaningModal = ({ service, onClose }) => {
  const navigate = useNavigate();

  const handleContactRedirect = () => {
    navigate('/contact'); // Redirect to contact page
    window.scrollTo(0, 0); // Scroll to top of the page
  };
  if (!service || !service.details) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-[rgba(251,246,243,1)] rounded-lg w-full max-w-[629px] max-h-[90vh] overflow-y-auto mx-4 md:mx-0">
        <div className="p-4 md:p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl md:text-[36px] font-normal font-dmSans">
              {service.title}
            </h3>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-lg md:text-xl"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          
          <div className="text-gray-700">
            {service.details.sections.map((section, index) => (
              <div key={index} className="mb-4">
                <p className="text-base md:text-[16px] font-semibold text-black font-inter flex">
                  {section.title}
                </p>
                <ul className="list-none pl-0">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start mb-2">
                      <FontAwesomeIcon 
                        icon={faCheckCircle} 
                        className="text-[rgba(255,174,174,1)] mr-2 mt-1 text-sm md:text-base" 
                      />
                      <span className="font-semibold text-[rgba(153,153,153,1)] font-inter text-sm md:text-[16px] text-left">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <button className="w-full md:w-[232px] h-[46px] rounded-tr-[20px] rounded-br-[10px] rounded-bl-[20px] bg-[rgba(168,192,130,1)] text-white font-semibold mt-4 hover:bg-[rgba(140,170,110,1)] transition-colors"  onClick={handleContactRedirect} // Add this line
          >
            Get Your Free Estimate
          </button>
        </div>
      </div>
    </div>
  );
};

export default CleaningModal;