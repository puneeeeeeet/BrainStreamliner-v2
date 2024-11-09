import React from 'react'
import gmail from '../assets/gmail.png'
import insta from '../assets/insta.png'
import whatsapp from '../assets/whatsapp.png'
import linkedin from '../assets/linkedin.png'

const Footer = () => {

  const ContactItems = [
    {
      id:2,
      ImagePath:whatsapp,
      to:'https://api.whatsapp.com/send?phone=918708992663',
    },{
      id:3,
      ImagePath:insta,
      to:'https://www.instagram.com/brainstreamliner/',
    },{
      id:4,
      ImagePath:linkedin,
      to:'https://www.linkedin.com/in/gayatri-ahuja7988417778/'
    }
  ]


  return (
    <div className="w-full h-56 px-20 flex ">
      <div className="px-20 mt-4 ">
        <div className="">
          <div className="font-extrabold text-[30px]  w-fit">
            Get in touch!
          </div>
          <div className="flex  mt-5">
            <div>
              <div className="font-extrabold text-blue text-xl mb-4 ">Email</div>
              <div>-brainstreamliner@gmail.com</div>
            </div>
            <div className='mx-32'>
              <div className="font-extrabold text-blue text-xl mb-4">Social Media</div>
              <div className="flex  justify-between gap-2 ">
                {ContactItems.map((item) => (
                  <a key={item.id} href={item.to} className="">
                    <img src={item.ImagePath} className="w-6   h-6" alt="" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-4 px-10">
      <div>
        <div className='font-extrabold text-[30px]  w-fit'>
          Where we are
        </div>
        <div className='mt-5 '>
          <div className='font-extrabold text-blue text-xl mb-4'>
            Address
          </div>
          <div className='flex gap-4'>
          <div className='flex-col'>
          <p>Sector-13</p>
          <p>Rohini, New Delhi</p>
          <p className='font-semibold'>
          +91 7988417778
          </p>
          </div> 
          <div className='items-center justify-center flex text-center'>or</div>
          <div>
            <p>Eduworld</p>
            <p>Block E,Ansal Sushant City</p>
            <p>Panipat, 132103, Haryana</p>
          </div>
          </div>
          
        </div>
      </div>
      
      </div>
    </div>
  );
}

export default Footer



// {
//   id:1,
//   ImagePath:gmail,
//   to:'mailto:brainstreamliner@gmail.com',
// },