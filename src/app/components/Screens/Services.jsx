"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import "./Services.css";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import { services } from "../../data/index";



const Services = ({ index }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="mb-[80px] md:mb-[20px] xl:max-w-[1695px] xl:mx-auto flex flex-col items-center justify-center">
     <h1 className="heading text-center text-3xl sm:text-4xl  md:text-5xl lg:text-4xl font-bold text-white mb-2 md:mt-18 mt-0">Our Services</h1>
      <div className="mx-[8px]  mt-10 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:relative  xl:flex  xl:gap-8">
       
        {services.map((item,index) => (
          <Tilt  key={index}>
            <motion.div
              variants={fadeIn("right", "spring", index * 0.5, 0.75)}
              animate="show"
              initial="hidden"
              className=" xs:w-[250px] w-full green-pink-gradient pb-[4.5px] px-[1px] rounded-[20px] shadow-card"
            >
              <div
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
                className="bg-toggle-mode relative top-[2px] rounded-[20px] py-5 px-12 lg:min-w-[250px] lg:max-w-[250px] lg:min-h-[300px] h-50 flex justify-evenly items-center flex-col mt-8 "
              >
                <div className="flex flex-col items-center">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-16 h-22 object-contain mb-4"
                  />
                  <h3 className="text-center text-white text-[20px] font-bold">
                    {item.title}
                  </h3>
                  <p className="text-center mt-4 text-secondary line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default Services;
