import React, { useState, useEffect } from 'react';
import anxious from '../assets/anxious.gif'
import ocd from '../assets/ocd.gif'
import depression from '../assets/depression.gif'
import stress from '../assets/stress.gif'
import ptsd from '../assets/ptsd.gif'
import personality from '../assets/personalityy.gif'
import anger from '../assets/anger.gif'
import sleep from '../assets/sleep.gif'
import last from '../assets/last.gif'

const WhatWeDo = () => {
  const [scrollIndex, setScrollIndex] = useState(0);  

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const index = Math.min(Math.floor(scrollY / window.innerHeight), 2); // Adjust the divisor for more precise control
    setScrollIndex(index);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const data = [
    { blackBoxText: 'Anxiety', sideBoxText: 'There is a lot happening in the world. Somehow, there’s more happening in your mind. We can help.' ,source:anxious},
    { blackBoxText: 'Depression', sideBoxText: 'Sometimes, getting out of bed is an ordeal. We can help.',source:depression },
    { blackBoxText: 'OCD', sideBoxText: 'Where the mind insists on a replay, even when the heart wants to move forward',source:ocd },
    { blackBoxText: 'PTSD', sideBoxText: 'A past echo that disrupts today’s melody.',source:ptsd },
    { blackBoxText: 'Sleep Disorder', sideBoxText: 'Contrary to pop culture wisdom, love is not always easy. And that’s okay.We can help.',source:sleep },
    { blackBoxText: 'Stress', sideBoxText: 'Today’s hustle culture has normalized constant stress. That’s not the way it needs to be. We can help' ,source:stress},
    { blackBoxText: 'Anger Issues', sideBoxText: 'A fleeting spark that can burn bridges.',source:anger },
    { blackBoxText: 'Personality Disorder', sideBoxText: 'A complex dance of traits, where understanding and support lead the way.' ,source:personality},
    { blackBoxText: 'Substance Dependence', sideBoxText: 'When the chains are invisible, but the struggle is real.' ,source:last}
  ];

  return (
    <>
      <div className='w-screen h-fit sm:h-fit flex sm:flex-row flex-col text-blue bg-[#F5F7F8] relative pb-44'>
        <div className='sm:w-1/2 w-full sm:flex sm:items-center flex-col gap-5'>
          <div className='sticky top-0 sm:top-56 sm:ml-40 sm:pb-40 mt-56 sm:w-full w-11/12 ml-4'>
            <div className='flex flex-col sm:w-1/2 w-3/4 text-xl font-customFont'>
              <p className='text-2xl '>What do we</p>
              <p className='text-4xl font-semibold mb-3 '>help with?</p> 
            </div>
            <p className='sm:w-1/2 sm:11/12 text-black text-lg text-justify'>
              Over 180 million Indians, or 14 per cent of the population, live with mental health issues. Many more suffer silently. Some are ashamed of seeking help. Some are afraid. Some cannot access the help they need.
            </p>
          </div>
        </div>
        {/* Right container */}
        <div className='sm:w-1/2 h-full flex items-center justify-center flex-col text-white mt-20 relative'>

          {/* Define a base top position and increment for overlap */}
          {data.map((item, index) => (
            <div
            key={index}
            className='flex sticky w-full mb-24 items-end justify-center  sm:transform sm:transition-transform sm:hover:scale-105 '
            style={{ top: `${150 + index * 0}px` }}  // Adjust this value for overlap
          >
           
              
            <div className='w-4/5 px-2 sm:h-fit h-64 p-4 gap-2  rounded-xl flex flex-col sm:flex-row  text-left items-center sm:items-start text-black text-lg font-semibold   shadow-lg bg-white'>
            <img src={item.source} alt=""  className='w-20 h-20 bg-white rounded-full'/>
            
            <div className='flex flex-col items-center sm:items-start'>
            <p className=' text-left font-extrabold'>{item.blackBoxText}</p>
            <p>{item.sideBoxText}</p>
              </div>
            </div>
          </div>
          ))}

        </div>
      </div>
    </>
  );
}

export default WhatWeDo;