"use client"
/* eslint-disable @next/next/no-img-element */
import "./LogoSlider.css"


const Logo1='/logo1.png';
const Logo2='/logo4.png';
const Logo3='/logo2.png';
const Logo4='/logo5.png';
const Logo5='/logo6.png';
const Logo6='/logo7.png';


const LogoSlider = () => {
  return (
    <div className="logo-slider hidden sm:block lg:mt-16 xl:mt-16 xl:mb-4">
      <h2 className=" mb-6 md:text-5xl lg:text-4xl text-xl font-bold text-center">Our Digital Partners</h2>
      <div className="marquee">
        <div className="marquee-content">
          <img src={Logo1} alt="logo1" className="mr-6 md:h-[81px] h-[51px]" />
          <img src={Logo2} alt="logo2" className="md:h-[81px] h-[51px] mx-6"/>
          <img src={Logo3} alt="logo3" className="md:h-[81px] h-[51px] mx-6" />
          <img src={Logo4} alt="logo4" className="md:h-[81px] h-[51px] mx-6" />
          <img src={Logo5} alt="logo5" className="md:h-[81px] h-[51px] mx-6" /> 
          <img src={Logo6} alt="logo6" className="md:h-[81px] h-[51px] mx-6" />
          {/* Duplicate the logos for continuous effect */}
          <img src={Logo1} alt="logo1" className="md:h-[81px] h-[51px] mx-6" />
          <img src={Logo2} alt="logo2" className="md:h-[81px] h-[51px] mx-6"/>
          <img src={Logo3} alt="logo3" className="md:h-[81px] h-[51px] mx-6" />
          <img src={Logo4} alt="logo4" className="md:h-[81px] h-[51px] mx-6" />
          <img src={Logo5} alt="logo5" className="md:h-[81px] h-[51px] mx-6" />
          <img src={Logo6} alt="logo6" className="md:h-[81px] h-[51px] mx-6" />
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
