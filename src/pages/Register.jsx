import React, { useState } from 'react';


import LoginPic from '../assets/Images/Rectangle162.png'

export default function Login() {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');
const [checkbox, setCheckBox] = useState(false);

  return (

<div className=''>
  <div className="flex flex-col md:flex-row w-full h-screen">

  <div className="md:w-1/2 h-screen bg-opacity-50 rounded-lg md:bg-white md:rounded-none z-10">
      <div className="md:text-start mx-10 mt-10 text-center md:mt-20">
        <h1 className="text-primaryColor font-anton md:text-5xl text-3xl">
        Register 
        </h1>
        <h1 className="text-black font-boogaloo text-2xl mt-5">
        Register with your email and password
        </h1>
      </div>
      <div className="w-10/12 py-3 mx-10">
        <form className="md:bg-transparent md:px-0 md:py-0 bg-orange-50 bg-opacity-75 px-10 py-10 rounded-xl">
          <label
            htmlFor="email"
            className="font-boogaloo text-gray-400 text-2xl"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-5 mt-2 text-black bg-white shadow-lg rounded-2xl text-2xl font-boogaloo placeholder-black"
            placeholder="jhon123@gmail.com"
          />
          <div className="mt-10">
            <label
              htmlFor="password"
              className="font-boogaloo text-gray-400 text-2xl"
            >
              Password
            </label>
          </div>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            className="w-full p-5 mt-2 rounded-2xl text-black bg-white shadow-lg placeholder-black font-bold"
            placeholder="**********"
          />
           <div className="mt-10">
            <label
              htmlFor="password"
              className="font-boogaloo text-gray-400 text-2xl"
            >
              Re enter Password
            </label>
          </div>
          <input
            type="password"
            name="password"
            value={confirmPassword}
            onChange={(e)=> setConfirmPassword(e.target.value)}
            className="w-full p-5 mt-2 rounded-2xl text-black bg-white shadow-lg placeholder-black font-bold"
            placeholder="**********"
          />
          <div className="flex justify-between mt-6">
            <div className="flex items-center">
              <input
                id="checked-checkbox"
                type="checkbox"
                checked={checkbox}
                onChange={() => setCheckBox(!checkbox)}
                    className="w-4 h-4 rounded-lg text-green-600 bg-green-600 border-green-300 focus:ring-green-600 accent-green-600"
                  />
              <label
                htmlFor="checked-checkbox"
                className="ms-2 text-xl font-boogaloo text-gray-900 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
        
          </div>
          <button
            type="submit"
            className="w-full px-20 py-5 text-white bg-primaryColor rounded-3xl mt-5 font-boogaloo md:text-2xl"
          >
            SIGN UP
          </button>
          <a
            href="/login"
            className="flex justify-start rounded-lg md:text-xl mt-5 font-boogaloo text-gray-500 text-lg"
          >
           Already have an account?&nbsp;
            <span className="hover:primaryColor hover-bg-white text-primaryColor text-2xl">
              Sign In
            </span>
          </a>
        </form>
      </div>
    </div>

    <div className="md:w-1/2 ">
      <img
        src={LoginPic}
        alt="image"
        className="w-full md:h-screen h-[940px] md:opacity-100 opacity-20 md:mt-0 -mt-[900px]"
      />

    </div>

</div>
</div>

   
    
  );
}
