import React from 'react'
import { BiHomeAlt2, BiAt, BiLogoFacebookCircle, BiLogoInstagramAlt } from "react-icons/bi";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='bg-[#171717]  mt-2'>
      <div className="container flex flex-col w-full gap-4">
        <div className="flex flex-col mt-10 text-center md:flex-row md:gap-20 md:text-start">
          
          {/* content */}
          <div className="w-[400px] text-white flex flex-col">
            <h1 className='text-[23px]'>Book a Table</h1>
            <p className="mt-4">Save time with proper planing</p>
            <p className='text-primaryColor text-[52px] font-bold mt-8'>112 565 656</p>
          </div>
          
          {/* links */}
          <div className="flex flex-col items-center justify-center gap-2 text-white md:justify-start md:items-start">
              <h1 className='text-[23px] mb-6'>Quick Links</h1>
              <a href='/home' className="">Home</a>
              <a href='/about' className="">About</a>
              <a href='/menu' className="">Menu</a>
              <a href='/deals' className="">Deals & Offers</a>
              <a href='/contact' className="">Contact</a>
          </div>
          
          {/* open time */}
          <div className="text-white">
          <h1 className='text-[23px] mb-6'>Book a Table</h1>
            <div className="flex flex-col gap-2">
              <p className="">Mon-Thu: 10.00 AM - 1.00 AM</p>
              <p className="">Saturday: 11.00 AM To Midnight</p>
              <p className="">Sunday: Closed</p>
            </div>
          </div>
          
          {/* add */}
          <div className="text-white">
            <h1 className='text-[23px] mb-6'>Address</h1>
            <div className="flex flex-col items-center justify-center gap-2 md:justify-start md:items-start">
              <a href="" className='flex flex-row gap-4'>
                <BiHomeAlt2 className='w-6 h-6'/>
                <p>467 Park Avenue New York, Ny</p>
              </a>
              <a href="" className='flex flex-row gap-4'>
                <BiAt className='w-6 h-6'/>
                <p>info@crispcrust.com</p>
              </a>
              <div className="flex flex-row gap-2 md:mt-4">
                <BiLogoFacebookCircle className='w-6 h-6'/>
                <BiLogoInstagramAlt className='w-6 h-6'/>
                <AiFillTwitterCircle className='w-6 h-6'/>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-6 md:flex-row">
          <h1 className="font-bold text-white uppercase md:text-[25px] text-[20px] text-center md:text-start">Subscribe&nbsp;to&nbsp;our&nbsp;<span className='text-primaryColor'>Newsletter</span></h1>
          <div className="flex justify-end w-full gap-3">
            <input type="search" name="email" id="email" className='w-8/12 p-3 rounded-xl' placeholder='Enter Your Email Address'/>
            <button className="p-3 font-bold text-white md:w-2/12 rounded-xl percase bg-primaryColor">Send Now</button>
          </div>
        </div>
        <div className="p-4 text-center text-white">
          <p>Copyright &copy; 2023 The Pizza Hub . Designed by <a href='https://sterlinglanka.com/' className="font-bold cursor-pointer text-primaryColor">Sterling BPO Solution</a></p>
        </div>
      </div>
    </div>
  )
}

export default Footer