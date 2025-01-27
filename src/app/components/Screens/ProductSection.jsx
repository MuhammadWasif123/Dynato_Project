/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Product1='/product1.svg';
const Product2='/product2.svg';
const Product3='/product3.svg';
const Product4='/product4.svg';
const Product5='/product5.png';
const Product6='/Product666.svg';
const Product7='/777.svg';
const Product8='/product88.png';
const Product9='/Product9.svg';
const Product10='/Product10.svg';
const Product11='/product11.svg';
const Product12='/product4.svg';
const Product13='/product4.svg';
const Product14='/product3.svg';  
const Product15='/Product666.svg';  
const Product16='/777.svg';  



const products = [
  Product1, Product2, Product3, Product4,
  Product5, Product6, Product7, Product8,
  Product9, Product10, Product11, Product12,
  Product13, Product14, Product15, Product16
]

const ProductSection = () => {
  return (
    <div className="container mx-auto px-2 py-8">
      <div className='flex flex-col'>
      <h1 className='heading text-[#000] text-center font-bold text-3xl sm:text-4xl  md:text-5xl lg:text-4xl mb-6'>
        Our Products
      </h1>
      <h2 className='heading-2 text-2xl  mx-[14px] sm:mx-[7px] sm:text-xl md:text-3xl font-bold text-center leading-tight sm:leading-[50px] md:leading-[71px] mb-6 sm:mb-[27px]'>
        Innovate with Our Technology <span className='text-[#209ff1]'>Partners</span>
      </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div key={index} className=" bg-white flex justify-center items-center p-1 border rounded-lg shadow-md">
            <img src={product} alt={`Product ${index + 1}`} className="md:w-[89%] md:h-[42%] w-[80%] h-[35%]" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductSection

