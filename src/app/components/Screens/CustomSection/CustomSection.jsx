"use client";
import React, { useState } from "react";
import "./CustomSection.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const CustomSection = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <>
    <div className="flex flex-col items-center mb-12 sm:mb-4 mt-20 mx-4  sm:mx-0 ">
     <h1 className="text-center mx-2 text-2xl md:text-3xl lg:text-4xl lg:mb-2 xl:text-4xl xl:mb-4 sm:text-2xl xs:text-md font-bold heading-2 px-2 ">Completed  <span className="text-[#209ff1]"> Over 1500+ work </span> & Still counting.</h1>
      <div className="container mx-4">
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div className="drop box-shadow-1 mb-4">
            <div className="content ">
              {counterOn && (
                <h2 className="mt-[24px] text-[#15b2ec] lg:text-4xl text-3xl font-bold">
                  <CountUp start={0} end={150} duration={3} delay={1} /> +
                </h2>
               
              )}
               <h2 className="text-[#6a7695] text-3xl font-semibold">
                Happy Clients
            </h2>
            </div>
          </div>
        </ScrollTrigger>
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div className="drop box-shadow-1 mb-4">
            <div className="content ">
              {counterOn && (
                <h2 className="mt-[24px] text-[#f5a416] lg:text-5xl text-3xl font-bold">
                  <CountUp start={0} end={650} duration={3} delay={1} /> +
                </h2>
               
              )}
               <h2 className="text-[#6a7695] text-3xl font-semibold">
                Projects
            </h2>
            </div>
          </div>
        </ScrollTrigger>
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div className="drop box-shadow-1 mb-4">
            <div className="content ">
              {counterOn && (
                <h2 className="mt-[24px] text-[#E3354B] lg:text-5xl text-3xl font-bold">
                  <CountUp start={0} end={10} duration={3} delay={1} /> +
                </h2>
               
              )}
               <h2 className="text-[#6a7695] text-3xl font-semibold text-center">
               Years of Experience
            </h2>
            </div>
          </div>
        </ScrollTrigger>
      </div>
      </div>
    </>
  );
};

export default CustomSection;
