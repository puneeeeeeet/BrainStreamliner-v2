import React from 'react'
import gmail from '../assets/gmail.png'
import insta from '../assets/insta.png'
import whatsapp from '../assets/whatsapp.png'
import linkedin from '../assets/linkedin.png'

const Footer = () => {

  const ContactItems = [
    {
      id:1,
      ImagePath:gmail,
      to:'mailto:brainstreamliner@gmail.com',
    },{
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
    <div className="sm:flex  h-60 sm:h-28 w-screen bg-[#E5E4E2] text-black">
      <div className="sm:w-1/2 flex flex-col items-start sm:ml-20 justify-center sm:border-r-2 ">
        <div className="flex">
          <p className="font-bold mr-7">Address: </p>
          <p>Eduworld, Block E Ansal Sushant City Panipat</p>
        </div>
        <div className="flex ">
          <p className="font-bold mr-2">Contact us: </p>
          <div className='flex flex-col sm:flex-row '>
          <div className="sm:border-r-2 sm:mr-2 pr-2"> brainstreamliner@gmail.com </div>
          <p>+91 7988417778</p>
            </div>
          
        </div>
        <div className='gap-2 h-full flex'>
            {ContactItems.map(item=>(
              
              <a key={item.id} href={item.to} className=''>
                <img src={item.ImagePath} className='w-6   h-6' alt="" />
              </a>
            ))}
          </div>
      </div>

      <div className='flex items-center justify-center sm:w-1/2'>
        @copyright -puneeeeeeet
      </div>
    </div>
  );
}

export default Footer