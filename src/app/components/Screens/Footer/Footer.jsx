/* eslint-disable @next/next/no-img-element */
import React from 'react'
import ItemsContainer from '../../FooterItems/ItemsContainer'
import { sociallinks } from '../../../../app/data/index'


const Footer = () => {
  return (
    
       <footer className="footer-toggle text-white xl:max-w-[1695px] xl:mx-auto">
      <div className="md:flex md:justify-center md:items-center sm:px-12 px-4 bg-[#209ff1] py-7">
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-full text-center"
        >
          <span className="text-[#4b505e]">Free</span> until you are ready to
          launch
        </h1>

      </div>
      <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-[#fff] text-sm pb-8"
      >
        <span>© 2024 Dynato . All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <div className="flex items-center justify-center gap-x-4 ">
              {sociallinks?.map((val,i)=>(
               <img key={i} src={val.icon} alt="Error Loading Image" className="w-5 h-5 cursor-pointer" />

              ))}
            </div>
      </div>
    </footer>
  )
}

export default Footer
