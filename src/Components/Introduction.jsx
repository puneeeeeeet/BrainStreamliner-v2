import React from 'react'
import tamana from '../assets/tamana.jpg';


const Intro = () => {
  return (
    <div className='items-center  flex-col flex sm:flex-row justify-center gap-5 py-14 sm:h-screen '>
      {/* Image */}
        <div className='w-10/12 mx-10 h-96 sm:w-96 sm:h-full '>
            <img src={tamana} className='w-full h-full'>
            </img>
        </div>
        {/* Intro */}
        <div className='w-10/12 sm:w-96 h-full bg-[#7D8ABC] flex p-4 justify-center text-[#304463]'>

          <div className='bg-[#EEEEEE]'>
            <h1 className='text-2xl flex items-center justify-center font-bold'>
            We Are Psychopedia
            </h1>
            <p className='text-wrap text-justify px-3 mt-2 '>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been  e the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been  e the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
            Lorem Ipsum is simply dummy text of the printing and typesetting industr
              </p>
            
          </div>

        </div>
    </div>
  )
}

export default Intro;