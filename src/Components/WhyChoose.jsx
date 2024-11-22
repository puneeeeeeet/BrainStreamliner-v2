import React from "react";
import { Icon } from "./icon/icon";
// import { Guideance } from "../icons/Guideance";
// import { Girl } from "../icons/Girl";
// import { WorkShop } from "../icons/WorkShop";
// import { SmartClass } from "../icons/SmartClass";
import counseling from "../assets/goals3.jpg";
import brain from "../assets/Aboutuss.jpg"
import therapy from '../assets/therapy3.jpg'
import group from '../assets/groups.jpg'

const WhyChoose = () => {
  return (
    <div className="bg-[#E5E4E2] pb-10 text-[#543310]">
      <div
        className="flex items-center justify-center text-3xl sm:text-[70px]
        sm:pt-32 pt-20 font-bold text-[#808080] "
      >
        Join us through sessions
      </div>

      <div className="flex items-center justify-center p-20 ">
        <div className="text-xl  text-center w-72 font-semibold text-black">
          Streamlining the path to mental well-being while shaping the next
          generation of psychology professionals.
        </div>
      </div>

      <div className="flex items-center justify-center flex-col mt-14 sm:flex-row px-8 gap-6 sm:mb-8 ">
        <div className="session">
          <div className="sessionCircle">
            {/* <Icon icon={Guideance} color="blue" className="w-24 h-24"></Icon> */}
            <img src={brain} className="rounded-full w-40 h-40 transform transition-transform hover:scale-110" alt="" />
          </div>

          <div className="text-2xl py-5  font-semibold  ">
            
            Counseling Session
            {/* HEADING */}
          </div>
          <div className="text-xl text-center px-2 hover:text ">
            Learn from seasoned professionals with extensive experience in
            various fields of psychology.
          </div>
        </div>

        <div className="session">
          <div className="sessionCircle">
            {/* <Icon icon={Guideance} color="blue" className="w-24 h-24"></Icon> */}
            <img src={therapy} className="rounded-full w-40 h-40 transform transition-transform hover:scale-110" alt="" />
          </div>
          <div className="text-2xl py-5  font-semibold text-black">
            Therapy Session
            {/* HEADING */}
          </div>
          <div className="text-xl text-center px-2 ">
            Learn from seasoned professionals with extensive experience in
            various fields of psychology.
          </div>
        </div>

        <div className="session">
          <div className="sessionCircle">
            {/* <Icon icon={Guideance} color="blue" className="w-24 h-24"></Icon> */}
            <img src={counseling} className="rounded-full transform transition-transform hover:scale-110" alt="" />
          </div>
          <div className="text-2xl py-5  font-semibold text-black">
            1:1 Session
            {/* HEADING */}
          </div>
          <div className="text-xl text-center px-2">
            We believe in a well-rounded education, combining theoretical
            knowledge with practical skills.
          </div>
        </div>

        <div className="session">
          <div className="sessionCircle">
            {/* <Icon icon={Guideance} color="blue" className="w-24 h-24"></Icon> */}
            <img src={group} className="rounded-full transform transition-transform hover:scale-110" alt="" />
          </div>
          <div className="text-2xl py-5  font-semibold text-black">
            Group Session
            {/* HEADING */}
          </div>
          <div className="text-xl text-center px-2">
            Join a network of like-minded individuals, with opportunities for
            collaboration, networking, and support.
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
