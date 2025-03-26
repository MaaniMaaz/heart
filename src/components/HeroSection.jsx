import React from 'react';
import homeImg from '../assets/home.png';
import { Icon } from '@iconify/react';

const HeroSection = () => {
  return (
    <section className="bg-[#FBF6F3] w-full h-[875px] flex items-start justify-center relative">
      {/* Text Block */}
      <div className="absolute left-[74px] top-[130px] max-w-[698px] h-[218px] space-y-6">
        <h1 className="text-[60px] font-bold font-raleway leading-[1.2] text-[#1d1d1d]">
          <span className="text-[#A8C082]">Eco-Friendly</span> Cleaning<br />
          for your <span className="text-[#1d1d1d]">Home</span>
        </h1>

        <p className="text-[#5b5b5b] text-[20px] font-normal font-dmsans w-[468px]">
          We are the premier cleaning service in the West Valley, Arizona area.
        </p>
      </div>

      {/* CTA Button */}
      <div className="absolute left-[74px] top-[380px]">
        <button className="bg-[#A8C082] text-white text-[16px] font-semibold font-poppins px-6 py-2 w-[215px] h-[46px]
          rounded-bl-[20px] rounded-tr-[20px] hover:bg-[#96b26c] transition shadow">
          Get Your Free Estimate
        </button>
      </div>
      
      {/* Hero Image */}
      <div className="absolute left-[935px] top-[80px] w-[578px] h-[529px]">
        <img
          src={homeImg}
          alt="cleaning tools"
          className="w-full h-full object-cover rounded-tl-[199px] rounded-br-[199px]"
        />
      </div>

      {/* Shield Icon (rectangle) */}
<div className="absolute left-[860px] top-[120px] w-[114px] h-[114px] bg-white rounded-[30px] flex items-center justify-center shadow-md">
  <Icon icon="mdi:shield-check" className="text-[#A8C082]" width="51" height="57" />
</div>

      {/* Best Box (rectangle) */}
<div className="absolute left-[853px] top-[470px] w-[284px] h-[109px] bg-white rounded-[30px] shadow-md p-4 flex items-center space-x-4">
  <Icon icon="mdi:chart-line" className="text-[#A8C082]" width="50" height="54.62" />
  <div>
    <p className="text-[36px] font-semibold font-poppins text-[#373737] leading-none">Best</p>
    <p className="text-[16px] font-medium font-poppins text-[#373737]">Insured & Bonded</p>
  </div>
</div>

      {/* Qualified Box (rectangle) */}
<div className="absolute left-[1310px] top-[170px] w-[256px] h-[107px] bg-white rounded-[30px] shadow-md p-4 flex items-center space-x-4">
  <Icon icon="mdi:cog" className="text-[#A8C082]" width="42.75" height="42.75" />
  <div className="leading-snug">
    <p className="text-[24px] font-semibold font-poppins text-[#373737] w-[113px] h-[32px]">Qualified</p>
    <p className="text-[15px] font-medium font-poppins text-[#373737] w-[119px] h-[36px]">Locally Owned & Operated</p>
  </div>
</div>

      {/* Sparkle Icons */}
<Icon icon="fluent:sparkle-48-regular" width="60" height="60"
  className="absolute top-[133px] left-[1020px] text-[#DE9D9D] p-2 rounded-full" />

<Icon icon="fluent:sparkle-48-regular" width="60" height="60"
  className="absolute top-[120px] left-[1380px] text-[#DE9D9D] p-2 rounded-full" />

<Icon icon="fluent:sparkle-48-regular" width="60" height="60"
  className="absolute top-[520px] left-[1400px] text-[#DE9D9D] p-2 rounded-full" />

      {/* Clean Activity Icon */}
<div className="absolute top-[300px] left-[880px] w-[95px] h-[95px] rounded-full flex items-center justify-center rotate-[15deg]">
  <Icon icon="carbon:clean" className="text-[#DE9D9D]" width="90" height="90" />
</div>
    </section>
  );
};

export default HeroSection;
