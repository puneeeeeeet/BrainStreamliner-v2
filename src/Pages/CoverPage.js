import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Video from "../assets/video.mp4";

const CoverPage = () => {
  const [showOptions, setShowOptions] = useState(false);

  const handleClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="w-screen h-[130vh] sm:h-screen sm:flex bg-[#E5E4E2]    ">
      <div
        className="h-11/12  sm:w-8/12 sm:h-full  flex flex-col items-center justify-center sm:text-7xl text-4xl 
            font-semibold  text-[#004aad] bg-[#E5E4E2]  "
      >
        <img
          className="w-72 sm:pb-10 animate-zoomInUp mt-24 "
          src={logo}
          alt=""
          height={80}
          width={75}
        />

        <div className="animate-fadeinup   text-white text-[80px] font-extrabold">
          BrainStreamliner
        </div>

{/*  */}


        
<div className=" flex flex-col items-center justify-center">
        <a
          href="https://wa.link/89ynnj"
          className=" relative p-2 border-white  text-white font-bold rounded-lg border-4 px-4 text-2xl 
                  mt-20 mb-10 transform transition-transform hover:scale-105 cursor-pointer "
          >
          Contact Us
        </a>

        {/* Left (Signup) Option */}
        {/* <div
          className={`relative left-[-200px]  transition-all duration-300 transform ${
            showOptions ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
          }`}
        >
          <button className="bg-green-500 text-white px-4  rounded-full transition-transform hover:scale-105">
            Signup
          </button>
        </div> */}

        {/* Right (Register) Option */}
        {/* <div
          className={`relative right-[-200px] top-[-68px] transition-all duration-300 transform ${
            showOptions ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
          }`}
        >
          <button className="bg-red-500 text-white px-4  rounded-full transition-transform hover:scale-105">
            Register
          </button>
        </div> */}
      </div>

          
      
      </div>

      <div className="">
        <video
          src={Video}
          loop
          autoPlay
          muted
          className="sm:rounded-l-full  sm:animate-fadeinright  sm:w-fit sm:h-full"
        />
      </div>
    </div>
  );
};

export default CoverPage;
