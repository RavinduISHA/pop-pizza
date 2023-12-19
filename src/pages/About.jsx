import React, {useEffect, useRef}  from "react";
import Lucide from "../assets/Images/lucide_move-left.png";
import darkImage from "../assets/Images/dark.png";
import vegImage  from "../assets/Images/veg.png";
import pizza2  from "../assets/Images/pizza2.png";
import success  from "../assets/Images/success.png";
import icon1  from "../assets/Images/Group69.png";
import icon2  from "../assets/Images/Group70.png";
import icon3  from "../assets/Images/Group71.png";
import icon4  from "../assets/Images/Group72.png";
import group74  from "../assets/Images/Group74.png";
import caro1  from "../assets/Images/Group76.png";
import caro2  from "../assets/Images/Group.2.png";
import caro3  from "../assets/Images/Vector.png";
import caro4  from "../assets/Images/Vector.1.png";
import 'flickity/css/flickity.css';
import Flickity from 'flickity';
import "../App.css";

export const About = () => {
  const containerStyle = {
    backgroundImage: `url(${darkImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "550px", // You can adjust the height as needed
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    color: "white", // Text color
  };

  const container2Style = {
    backgroundImage: `url(${vegImage})`,
    height: '500px',
    width: '100%',
    backgroundPosition: 'right 10px top 50px',
    objectFit: 'cover',
    backgroundSize: '200px 250px',
    backgroundRepeat: 'no-repeat',
  }

  const container3style = {
    backgroundImage: `url(${success})`,
    backgroundSize: "cover",
    backgroundPosition: ""
  }

  const container4style ={
    backgroundImage: `url(${group74})`,
    backgroundSize: "cover",
    backgroundPosition: "center"

  }



  const reviewItems = Array.from({ length: 3 }, (_, index) => index + 1);
  const flickityRef = useRef(null);

  useEffect(() => {
    // Initialize Flickity when the component mounts
    flickityRef.current = new Flickity('.main-carousel', {
      cellAlign: 'left',
      wrapAround: true,
      pageDots: true,
      draggable: true,
    });
 // Destroy Flickity when the component unmounts
 return () => {
  flickityRef.current.destroy();
};
}, []);


  return (
    
    <div>
      {/* MAIN COVER */}
      <div style={containerStyle}>
        <div className="container">
          <h1 className="text-3xl font-bold md:text-5xl font-boogaloo">
            About Us
          </h1>
          <div className="flex flex-col md:mt-3 md:flex-row text-start">
            <h1 className="flex flex-row items-center text-xl font-bold md:text-3xl">
              Home
              <span className="md:mt-0">
                <img src={Lucide} alt="Arrow" />
              </span>
              About
            </h1>
          </div>
        </div>
      </div>
      {/* MAIN COVER */}

 
      <div className="md:flex" style={container2Style}>
            <div className="container flex flex-col md:flex-row">

                <div className="w-full md:w-5/12">
                    <img src={pizza2} className="h-[400px] md:h-[500px] w-full"/>
                </div>

                <div className="container flex w-full h-full md:w-6/12">
                    <div className="flex flex-col justify-center gap-10 p-5 align-middle">
                        <h1 className="text-2xl font-bold text-center text-primaryColor md:text-5xl md:text-start font-anton">Crisp Crust
                            <span className="text-gray-700">Heritage</span>
                        </h1>

                        <h1 className="font-bold text-center text-gray-700 md:text-3xl md:text-start">Serving Pizzas By The Slice
                            1987 </h1>

                        <p className="text-sm font-bold text-center text-gray-500 md:text-base md:text-start">Serving Pizzas By The
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry..</p>

                        <p className="text-sm font-bold text-center text-gray-500 md:text-base md:text-start">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>


                        <div className="flex justify-center mt-4 md:justify-start md:mt-0">
                            <button type="button"
                                className='flex flex-row items-center justify-center gap-2 p-3 font-bold text-white uppercase w-44 rounded-2xl bg-primaryColor md:mt-6'>Order
                                Now <a className='w-6 h-6 text-white'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                        stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>
                                </a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        {/* {{-- Success Story Part --}} */}
         <div style={container3style} className="w-full h-full md:h-[550px] flex flex-col items-center gap-5 md:mt-0 mt-[400px]">
     

            <h1 className="mt-5 text-2xl text-white font-anton md:text-5xl">Our Success Story</h1>

            <div className="flex items-center justify-center mt-3 text-2xl text-center align-middle">
                <h1 className="justify-center w-7/12 text-xl text-white font-boogaloo md:text-3xl ">Lorem Ipsum is simply dummy
                    text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</h1>
            </div>

            <div className="justify-between w-11/12 mx-auto md:flex md:mt-10 md:w-6/12">
                <div className="flex flex-col items-center gap-3 mt-5 text-center text-white font-boogaloo md:mt-0">
                    <img src={icon1}/>
                    <h1 className="text-lg md:text-3xl">24,983</h1>
                    <h1 className="text-lg md:text-3xl">Happy Customers</h1>
                </div>
                <div className="flex flex-col items-center gap-3 mt-5 text-center text-white font-boogaloo md:mt-0">
                    <img src={icon2}/>
                    <h1 className="text-lg md:text-3xl">50</h1>
                    <h1 className="text-lg md:text-3xl">Pizza Category</h1>
                </div>
                <div className="flex flex-col items-center gap-3 mt-5 text-center text-white font-boogaloo md:mt-0">
                <img src={icon3}/>
                    <h1 className="text-lg md:text-3xl">100</h1>
                    <h1 className="text-lg md:text-3xl">Fast Delivery</h1>
                </div>
                <div className="flex flex-col items-center gap-3 mt-5 text-center text-white font-boogaloo md:mt-0">
                <img src={icon4}/>
                    <h1 className="text-lg md:text-3xl">28,546</h1>
                    <h1 className="text-lg md:text-3xl">Any Place</h1>
                </div>
            </div>

        </div>
        {/* {{-- Success Story Part --}} */}


        {/* {{-- Car histort Carousol --}} */}

<div className="container">
    <div className="container">
        <div className="px-5 py-10">
            <div className="">
                <div className="flex justify-center">
                    <h1 className="text-3xl font-bold text-primaryColor md:text-5xl">Customer <span
                            className="text-black">Reviews</span>
                    </h1>
                </div>
                <p className="flex justify-center text-2xl font-bold text-gray-700">
                    Lorem Ipsum is simply dummy text of the printing
                </p>
  {/* FLICKITY CAROUSEL */}
  <div className="main-carousel h-[410px] mt-10" ref={flickityRef}>
              {reviewItems.map((i) => (
                <div key={i} className="carousel-cell">
                  <div className="carasoul_width w-full h-full px-5 md:w-[459px] md:h-[400px] flex flex-col justify-center md:gap-4">
                    <div style={container4style} className="test w-full p-2 py-10 mx-auto mt-10  rounded-3xl md:h-[440px] h-[320px]">
                      <div className="w-full rounded-3xl md:h-[200px] md:mt-10">
                        <p className="text-[12px] font-bold text-center text-black md:text-md w-full">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply
                        </p>
                        <div className="flex items-center justify-center md:mt-8 2xl:mt-12">
                          <img src={caro1} alt="" />
                        </div>
                        <p className="text-xl font-bold text-center text-white md:text-2xl">Sam Perera</p>
                        <p className="text-xl font-bold text-center text-white md:text-md">Driver</p>
                        <div className="flex justify-center gap-2">
                        <img src={caro2} alt="" />
                        <img src={caro3} alt="" />
                        <img src={caro4} alt="" />
        
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


    </div>
    </div>

    
  );
};
