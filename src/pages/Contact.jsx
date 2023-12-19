import React from 'react'
import dark  from "../assets/Images/dark.png";
import lucide  from "../assets/Images/lucide_move-left.png";
import tinysliced  from "../assets/Images/tiny-sliced.png";
import Kola  from "../assets/Images/Kola Deka.png";


export const Contact = () => {

const containerstyle = {
  backgroundImage: `url(${dark})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  justifyContent: "start",
  dispay: "flex",
  alignItems: "center",

};

const containerstyle2 = {
  backgroundImage: `url(${tinysliced})`,
  height: '100%',
  width: '100%',
  backgroundPosition: 'right 10px top -10px',
  objectFit: 'cover',
  backgroundSize: '400px 600px',
  backgroundRepeat: 'no-repeat',
};


  return (
    <div>


{/* {{-- MAIN COVER --}} */}

<div style={containerstyle} className="w-full md:h-[550px] h-[250px] ">
    <div className="container">
        <h1 className="text-3xl font-bold text-white md:text-5xl font-boogaloo">Contact Us</h1>
        <div className="flex flex-col md:mt-3 md:flex-row text-start">
            <h1 className="flex flex-row items-center text-xl font-bold text-white md:text-3xl">
                Home
                <span class="md:mt-0"><img src={lucide}
                        alt="Arrow"/></span>
                Contact Us
            </h1>
        </div>
    </div>
</div>

{/* {{-- MAIN COVER --}} */}


{/* {{-- content part --}} */}
<div class="img" style={containerstyle2}>


<div class="hidden md:block">
                <img src={Kola} alt="Image" class="absolute"/>
            </div>

   <div className="flex flex-col items-center justify-center w-full md:mt-20">
      <div className="container">
        <h1 className="text-primaryColor font-anton text-[40px] justify-center items-center flex">
          Get <span className="text-black">&nbsp;in touch with us</span>
        </h1>
        <p className="flex mx-auto text-center font-boogaloo md:w-1/2 md:mt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s Lorem Ipsum is simply
        </p>
        <form
          action=""
          className="flex flex-col md:w-4/5 w-3/4 mx-auto md:mt-8 font-boogaloo text-[20px] mt-4"
        >
                      <div class="flex flex-row gap-4 md:gap-8">
                            <input type="text" placeholder="Contact" class="w-7/12 p-2 border border-gray-800 rounded-lg opacity-60"/>
                            <input type="email" placeholder="Email" class="w-7/12 p-2 border border-gray-800 rounded-lg opacity-60"/>
                        </div>
                        <div class="flex flex-row gap-4 mt-4 md:gap-8 md:mt-8">
                            <input type="text" placeholder="Phone" class="w-7/12 p-2 border border-gray-800 rounded-lg opacity-60"/>
                            <input type="email" placeholder="Address" class="w-7/12 p-2 border border-gray-800 rounded-lg opacity-60"/>
                        </div>
                        <div class="flex flex-row mt-4 md:gap-8 md:mt-8">
                            <textarea type="text" placeholder="Your Message" class="w-full p-2 border border-gray-800 rounded-lg opacity-60 md:h-36"></textarea>
                        </div>
                        <button type="submit" class="mt-4 p-2 bg-primaryColor flex justify-start md:w-[11%] w-[120px] rounded-lg text-white md:mt-4">Send Message</button>
        </form>

        <div className="bg-[#171717] rounded-t-[40px] md:mt-24 mt-32">
          <div className="flex flex-col items-center justify-center p-6 md:flex-row md:gap-20">
          <div className="flex flex-col items-center justify-center font-boogaloo text-primaryColor w-44">
                                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
                                    </svg>
                                </div>                                                        
                                <p className="text-white text-[20px]">Contact</p>
                                <p className="text-white">011 234 5678</p>
                            </div>
                            <div className="flex flex-col items-center justify-center mt-4 font-boogaloo text-primaryColor w-44 md:mt-0">
                                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                    </svg>                                      
                                </div>                                                        
                                <p className="text-white text-[20px]">Email</p>
                                <p className="text-white">info@crispcrust.com</p>
                            </div>
                            <div className="flex flex-col items-center justify-center mt-4 font-boogaloo text-primaryColor w-44 md:mt-0">
                                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                                    </svg>
                                </div>                                                        
                                <p className="text-white text-[20px]">Location</p>
                                <p className="text-white">467 Park Avenue New York, Ny</p>
                            </div>
          </div>
        </div>
      </div>

      <section className="relative w-full mx-auto -mt-10 text-gray-600 body-font md:-mt-20">
        <iframe
          width="100%"
          height="600px"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="map"
          scrolling="no"
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=colombo&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          style={{}}
        ></iframe>
      </section>
    </div>




</div>


{/* {{-- content part --}} */}



    </div>
  )
}
