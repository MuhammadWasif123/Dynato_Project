"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { navLinks } from "../../data/index";
import DarkMode from "../DarkMode/DarkMode";


const Logo = '/logo.png';
const Menu='/menu.svg';
const Close='/close.svg';



const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sm:px-16 px-6 w-full flex items-center py-5 relative top-0 z-20 xl:max-w-[1695px] xl:mx-auto  ${
        scrolled && 'nav-sticky-style'  }` }
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <a
          href='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={Logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            <span id="nav_id"  className='sm:block hidden'>  Technical Services</span>
          </p>
        </a>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
        <DarkMode/>
          {navLinks.map((nav) => (
            
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-[#626FA7] text-[18px] font-semibold cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? Close : Menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 blue-gradient absolute top-12 right-6 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
         
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
            <DarkMode/>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className='font-poppins cursor-pointer text-[16px] text-[#fff] font-bold'
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
