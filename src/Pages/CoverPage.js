import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Video from "../assets/video.mp4";

const CoverPage = () => {
  // const [showOptions, setShowOptions] = useState(false);

  // const handleClick = () => {
  //   setShowOptions(!showOptions);
  // };

  return (
    <div className="w-screen h-[fit] sm:h-screen sm:flex bg-[#E5E4E2]  ">
      <div
        className="h-11/12  sm:w-8/12 sm:h-full  flex flex-col items-center sm:items-start justify-center sm:text-7xl text-4xl 
            font-semibold   "
      >
        <div className=" flex items-center justify-center sm:hidden">
      <img
          className="w-full sm:pb-10 animate-zoomInUp  px-10"
          src={logo}
          alt=""
          height={72}
          width={72}
        />
      </div>
        <div className=" text-[#004aad] font-bold pl-10 sm:mt-52">
          Where every mind finds its flow
        </div>

        <div className="animate-fadeinup   text-[#8dc73f] text-[20px] sm:text-[40px] font-bold sm:px-10 mt-10">
          ~Brain Streamliner
        </div>

        <div className=" flex flex-col items-center justify-center w-full">
          <a
            href="https://wa.link/89ynnj"
            className=" relative sm:p-2 border-[#8dc73f]  text-[#8dc73f] font-bold rounded-lg  border-2 sm:border-[3px] px-4 text-[20px] sm:text-2xl 
                  sm:mt-20 mb-10 transform transition-transform hover:scale-105 cursor-pointer "
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* <div className="">
      
        <video
          src={Video}
          loop
          autoPlay
          muted
          className="sm:rounded-l-full  sm:animate-fadeinright  sm:w-fit sm:h-full"
        />
      </div> */}
      <div className=" w-1/2  items-center justify-center hidden sm:flex">
      <img
          className="w-full sm:pb-10 animate-zoomInUp  px-10"
          src={logo}
          alt=""
          height={72}
          width={72}
        />
      </div>
    </div>
  );
};

export default CoverPage;




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