import React from 'react'
import { Icon } from './icon/icon';
import { WorkShop } from '../icons/WorkShop';
import { SmartClass } from '../icons/SmartClass';


export const StartTherapy = () => {
  return (
    <div className="w-screen h-screen bg-white">
      <div className="flex flex-col items-center">
        <div className="pt-20 text-2xl font-semibold">
          Start Your Therapy With
        </div>
        <div className="text-[50px] font-bold">Brain Streamliner</div>
        <div className=" w-3/5 mt-7  text-center font-medium text-xl">
          Begin your healing journey with Brainstreamliner, where every step is
          guided with care, compassion, and understanding. We believe in more
          than just therapy—we believe in truly listening, supporting, and
          empowering you to find your inner strength. Together, we&apos;ll
          create a path toward clarity, healing, and a brighter tomorrow.
        </div>
        <div className="flex w-3/4 gap-7 mt-20 text-white text-[30px] font-extrabold justify-between  px-20 ">
          <div className="w-5/12 h-56 border-[#A5B68D] border-2 text-[#A5B68D] rounded-md transform transition-transform hover:scale-105  p-2 shadow-2xl pt-5">
            <div className="flex items-center justify-center">
              In-Person Consultation
            </div>
            <div className="flex justify-between  mx-8 items-end">
              <button
                className="  px-2 w-5/12 h-fit border-2 border-[#A5B68D] rounded-md text-xl 
                transform transition-transform hover:scale-105"
              >
                Book Now
              </button>
              <Icon icon={WorkShop} className="w-24 h-24 text-[#A5B68D] " size="large">
                {/* IMAGE */}
              </Icon>
            </div>
          </div>
          <div className="w-5/12 h-56  border-2 text-[#7D8ABC] border-[#7D8ABC] rounded-md transform transition-transform hover:scale-105 p-2 shadow-2xl pt-5">
            <div className=" flex items-center justify-center">
              Virtual Consultation
            </div>
            <div className="flex justify-between  mx-8 items-end">
              <button
                className="  px-2 w-5/12 h-fit border-2 border-voilet rounded-md text-xl 
                transform transition-transform hover:scale-105"
              >
                Book Now
              </button>
              <Icon
                icon={SmartClass}
                className="w-32 h-24 text-voilet"
                size="large"
              >
                {/* IMAGE */}
              </Icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
