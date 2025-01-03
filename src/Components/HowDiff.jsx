import React from 'react'
import nature from '../assets/nature.mp4'

const HowDiff = () => {
  return (
    <div className='w-screen h-fit sm:h-fit '>
        <div className='z-20 absolute'>
        <div className='flex items-center justify-center text-center text-[30px] sm:text-[60px] pt-10 font-extrabold text-white'>
        How Therapy Is Different With Us?
        </div>
        <div className='flex items-center justify-center flex-col'>
        <div className='w-7/12 text-center mt-10 text-xl font-semibold'>
        At Brainstreamliner, we don’t just offer psychology training or therapy sessions—we create a safe, nurturing space where minds can heal and grow. What sets us apart is our deep commitment to personalized care. Every individual is unique, and we tailor our sessions to meet their specific emotional and psychological needs. 
        
        </div>
        <div className='w-7/12 text-center mt-20 text-xl font-semibold'>
        Our approach blends compassion with expertise, ensuring that each client feels truly heard, understood, and supported throughout their journey. Whether it’s training future psychologists or providing therapy, we emphasize quality, empathy, and lasting change. At Brainstreamliner, healing isn’t just a process—it’s a partnership.  
        </div>
        
        </div>
        </div>
        <div className='z-10  relative'>
        <video src={nature} autoPlay muted loop className='w-screen h-1/2'/>

        </div>
        
     </div>
  )
}

export default HowDiff