import React from 'react'

export const StartTherapy = () => {
  return (
    <div className="w-screen h-screen bg-white">
      <div className="flex flex-col items-center">
        <div className="pt-20 text-2xl font-semibold">
          Start Your Therapy With
        </div>
        <div className="pt-10 text-[50px] font-bold">Brain Streamliner</div>
        <div className=" w-3/5 mt-20  text-center font-medium text-xl">
          Begin your healing journey with Brainstreamliner, where every step is
          guided with care, compassion, and understanding. We believe in more
          than just therapy—we believe in truly listening, supporting, and
          empowering you to find your inner strength. Together, we&apos;ll
          create a path toward clarity, healing, and a brighter tomorrow.
        </div>
        <div className='flex w-1/2 gap-3 mt-20 text-white text-[30px] font-extrabold'>
          <div className='w-1/2 h-56 bg-black rounded-md transform transition-transform hover:scale-105 p-2'>
              In-Person Consultation
           </div>
          <div className='w-1/2 h-56 bg-blue rounded-md transform transition-transform hover:scale-105 p-2'>
              Virtual Consultation
          </div>
        </div>
      </div>
    </div>
  );
}
