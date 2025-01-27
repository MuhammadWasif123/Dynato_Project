import React from "react";
import HeroSection from "./components/Screens/HeroSection";
import BenefitsSection from "./components/Screens/BenefitsSection";
import Services from "./components/Screens/Services";
import FAQSection from "./components/Screens/FAQSection";
import IndustriesSection from "./components/Screens/IndustriesSection";
import AboutSection from "./components/Screens/AboutSection";
import ContactSection from "./components/Screens/Contact";
import LogoSlider from "./components/Screens/LogoSlider";
import NewsSlider from "./components/Screens/NewsSlider";
import ProductSection from "./components/Screens/ProductSection";
import CustomSection from "./components/Screens/CustomSection/CustomSection";
import Map from "./components/Screens/Map/Map";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center p-12 xl:max-w-[1695px] xl:mx-auto ">
        <div>
          <HeroSection />
          <AboutSection />
          <BenefitsSection />
          <Services />
          <FAQSection />
        </div>
      </div>
      <div>
        <NewsSlider />
      </div>
      <div className="flex min-h-screen items-center justify-center p-12   xl:max-w-[1695px] xl:mx-auto">
        <div>
          <LogoSlider />
          <IndustriesSection />
          <ProductSection />
          <CustomSection />
          <ContactSection />
        </div>
      </div>

      <div className="xl:max-w-[1695px] xl:mx-auto ">
        <Map />
      </div>
    </>
  );
}
