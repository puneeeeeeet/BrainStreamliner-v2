import React from "react";
import { Icon } from "./icon/icon";
import { Guideance } from "../icons/Guideance";
import { Girl } from "../icons/Girl";
import { WorkShop } from "../icons/WorkShop";
import { SmartClass } from "../icons/SmartClass";

const WhyChoose = () => {
  return (
    <div className="bg-gray-100 pb-20 text-[#543310] h-screen">
      {/* Header */}
      <div className="flex items-center justify-center text-4xl sm:text-5xl text-gray-800 pt-20 font-bold">
        What Do We Help With?
      </div>

      {/* Description */}
      <div className="flex items-center justify-center mt-6 sm:mt-10">
        <div className="text-lg sm:text-xl text-center w-11/12 sm:w-4/12 font-medium text-gray-700 ">
          Streamlining the path to mental well-being while shaping the next generation of psychology professionals.
        </div>
      </div>

      {/* Service Cards */}
      <div className="flex items-center justify-center flex-col sm:flex-row px-6 sm:px-10 gap-8 sm:mt-28">
        
        {/* Card 1 */}
        <div className="w-full sm:w-80 h-full flex flex-col items-center bg-white rounded-lg shadow-md border-t-4 border-blue-500 p-8 hover:scale-105 transition-transform duration-300 ease-out">
          <Icon icon={Guideance} className="w-20 h-20 text-blue-500" />
          <div className="text-2xl py-4 font-semibold text-gray-800">
            Expert-Led Training
          </div>
          <div className="text-center text-gray-600">
            Learn from seasoned professionals with extensive experience in various fields of psychology.
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full sm:w-80 h-auto flex flex-col items-center bg-white rounded-lg shadow-md border-t-4 border-green-500 p-8 hover:scale-105 transition-transform duration-300 ease-out">
          <Icon icon={SmartClass} className="w-20 h-20 text-green-500" />
          <div className="text-2xl py-4 font-semibold text-gray-800">
            Holistic Approach
          </div>
          <div className="text-center text-gray-600">
            We believe in a well-rounded education, combining theoretical knowledge with practical skills.
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full sm:w-80 h-auto flex flex-col items-center bg-white rounded-lg shadow-md border-t-4 border-purple-500 p-5 hover:scale-105 transition-transform duration-300 ease-out">
          <Icon icon={WorkShop} className="w-20 h-20 text-purple-500" />
          <div className="text-2xl py-4 font-semibold text-gray-800">
            Community & Support
          </div>
          <div className="text-center text-gray-600">
            Join a network of like-minded individuals, with opportunities for collaboration, networking, and support.
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
