import React from 'react'
import { BsCart } from "react-icons/bs";
import sideImg from '../assets/Images/content.jpeg'
import KEBAB from '../assets/Images/BBQ_Dark_Grey.png'
import PIZZA from '../assets/Images/Pizza_Dark_Grey.png'
import spaghetti from '../assets/Images/spaghetti_Dark_Grey.png'
import DESSERT from '../assets/Images/Desert_Dark_Grey.png'
import SHAWARMA from '../assets/Images/Shawarma_Dark_Grey.png'


export const Home = () => {
  return (
    <div className='container w-full'>
      {/* ==== Content section ===== */}
      <div className="flex flex-row">
        <div className="flex flex-col text-center md:w-2/3 md:text-start">
          <h1 className="text-3xl font-black md:text-6xl md:w-full md:mt-16">
            Stay Healthy and <br />
            <span className="text-primaryColor">Choose Your taste</span>
          </h1>
          <p className="text-xl md:w-full md:mt-8">Feel free to customize these suggestions based on the personality. Explore our menu, place your order, and let the pizza party begin.</p>
          <button type="button" className='flex flex-row items-center justify-center gap-2 p-3 font-bold text-white uppercase w-44 rounded-2xl bg-primaryColor md:mt-6'>Order Now <BsCart className='w-6 h-6'/></button>
        </div>
        <div className="w-11/12">
          <img src={sideImg} alt="image" className='' />
        </div>
      </div>
      
      
      {/* ==== Category section ===== */}
      <div className="text-center md:h-[600px] flex flex-col items-center">
        <div className="flex flex-col md:mt-32">
          <h1 className="text-5xl font-black">Our <span className="text-primaryColor">Categories</span></h1>
          <p className="font-bold text-gray-600 md:mt-8 md:text-xl">Feel free to customize these suggestions based on the personality</p>
        </div>
        
        {/* category list */}
        <div className="flex flex-row md:gap-32 md:mt-16 md:p-2">
          <div className="group">
            <img src={KEBAB} alt="" className='w-40 h-40 md:mb-8 hover:bg-red'/>
            <label htmlFor="" className='font-extrabold text-primaryColor hover:text-red-500'>KEBAB</label>
          </div>
          <div className="group">
            <img src={PIZZA} alt="" className='w-40 h-40 md:mb-8 hover:bg-red'/>
            <label htmlFor="" className='font-extrabold text-primaryColor hover:text-red-500'>PIZZA</label>
          </div>
          <div className="group">
            <img src={spaghetti} alt="" className='w-40 h-40 md:mb-8 hover:bg-red'/>
            <label htmlFor="" className='font-extrabold text-primaryColor hover:text-red-500'>SPAGHETTI</label>
          </div>
          <div className="group">
            <img src={DESSERT} alt="" className='w-40 h-40 md:mb-8 hover:bg-red'/>
            <label htmlFor="" className='font-extrabold text-primaryColor hover:text-red-500'>DESSERT</label>
          </div>
          <div className="group">
            <img src={SHAWARMA} alt="" className='w-40 h-40 md:mb-8 hover:bg-red'/>
            <label htmlFor="" className='font-extrabold text-primaryColor hover:text-red-500'>SHAWARMA</label>
          </div>
        </div>

        {/* mebu list */}
        <div className="">
          
        </div>
      </div>

      {/* ==== Menu section ===== */}
      <div className="text-center md:h-[600px] flex flex-col items-center">
        <div className="flex flex-col md:mt-32">
          <h1 className="text-5xl font-black">Our <span className="text-primaryColor">Menu</span></h1>
          <p className="font-bold text-gray-600 md:mt-8 md:text-xl">Where our irresistible pizza offers are waiting to leave your dining experience</p>
        </div>
        
        {/* category list */}
        <div className="flex flex-row md:gap-32 md:mt-16 md:p-2">
          <div className="group">
            <img src={KEBAB} alt="" className='w-40 h-40 md:mb-8 hover:bg-red'/>
            <label htmlFor="" className='font-extrabold text-primaryColor hover:text-red-500'>KEBAB</label>
          </div>
          <div className="group">
            <img src={PIZZA} alt="" className='w-40 h-40 md:mb-8 hover:bg-red'/>
            <label htmlFor="" className='font-extrabold text-primaryColor hover:text-red-500'>PIZZA</label>
          </div>
          <div className="group">
            <img src={spaghetti} alt="" className='w-40 h-40 md:mb-8 hover:bg-red'/>
            <label htmlFor="" className='font-extrabold text-primaryColor hover:text-red-500'>SPAGHETTI</label>
          </div>
          <div className="group">
            <img src={DESSERT} alt="" className='w-40 h-40 md:mb-8 hover:bg-red'/>
            <label htmlFor="" className='font-extrabold text-primaryColor hover:text-red-500'>DESSERT</label>
          </div>
          <div className="group">
            <img src={SHAWARMA} alt="" className='w-40 h-40 md:mb-8 hover:bg-red'/>
            <label htmlFor="" className='font-extrabold text-primaryColor hover:text-red-500'>SHAWARMA</label>
          </div>
        </div>

        {/* mebu list */}
        <div className="">
          
        </div>
      </div>
    </div>
  )
}
