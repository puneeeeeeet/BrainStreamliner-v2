import React from 'react'
import tamana from '../assets/tamana.jpg';
import NavbarComm from '../Components/NavbarComm';
import pic from '../assets/about_pic.jpg'
const AboutUs = () => {

 
  return (
    <div className="w-full h-full bg-[#DDDDDD]">
      
      <h1 className="  ml-6 sm:ml-24  pt-36 text-white text-[75px] font-bold z-10  text-center"></h1>
      {/* First Section */}
      <div className="flex flex-col sm:flex-row justify-center items-center py-2 mb-10 bg-green text-center relative">
        <p className="z-10 absolute top-0 text-[70px] pl-20   text-[#FBFBFB] font-bold">
          About Us
        </p>
        <div className="flex flex-col items-center justify-center ">
          <div className="w-72 mx-10 h-72 flex-col flex place-content-end ">
            <img
              src={pic}
              className="h-72 w-72 px-5 absolute top-[-25px]"
            ></img>
            <div className="flex items-center justify-center gap-2 ">
            <p className=" font-semibold">
                (Psychologist)
              </p>
              <a
                href="https://www.linkedin.com/in/gayatri-ahuja7988417778/"
                className="text-2xl  font-bold  text-white "
              >
                Gayatri Ahuja
              </a>
             
            </div>
          </div>
        </div>

        <div className="w-10/12 sm:w-96 h-full  flex  justify-center text-[#304463] py-4 sm:py-0">
          <div className="">
            <p className="text-wrap text-justify  mt-5 text-black font-semibold text-[17px]">
              Welcome to "Brainstreamliner", a company dedicated to
              revolutionizing mental health and professional training in
              psychology. I am Gayatri Ahuja, MSc. in Clinical Psychology, and I
              founded Brainstreamliner with a vision to make mental processes
              more accessible and efficient.
            </p>
          </div>
        </div>
      </div>
      {/* First Section Ends */}

      {/* Second Section */}
      <div className="flex sm:flex-row flex-col justify-center items-center py-8 text-black">
        <div className="w-80 mx-10 h-96 sm:w-0 sm:h-0 ">
          <img src={tamana} className="h-full w-full"></img>
        </div>

        <div className="w-10/12 sm:w-96 h-full  flex flex-col  justify-center py-20 relative items-center">
          <h1 className="text-3xl  font-bold  underline-offset-2 text-center absolute top-3  ">
            Our Aim
          </h1>
          <p className="text-wrap text-justify font-semibold text-[17px] ">
            At Brainstreamliner, our mission is to streamline your minds. We
            believe that clarity and emotional expression are essential for
            personal and professional growth. Our programs are crafted to help
            you navigate the complexities of thought and emotion, enabling you
            to achieve mental wellness.
          </p>
          {/* <p className="text-wrap text-justify   ">
              Brainstreamliner aims to enhance mental well-being and
              professional growth through innovative and effective psychological
              services. We are committed to providing tools and techniques that
              promote mental clarity, emotional resilience, and overall
              well-being
            </p> */}
        </div>
        <div className="sm:w-72 mx-10 sm:h-80  w-0 h-0 ">
          <img src={tamana} className="h-full w-full"></img>
        </div>
      </div>
      {/* Second Section Ends*/}

      {/* Third Section Starts */}
      <div className="flex justify-center items-center  text-black relative bg-green gap-2 mb-10">
        <div className=" w-72 flex  items-center justify-center    ">
          <img src={tamana} className="h-72 w-72 absolute top-[-16px]"></img>
        </div>
        <div className=" items-center flex flex-col justify-center  py-10">
          <h1 className="text-2xl  font-semibold  underline-offset-2 text-center ">
            Our Services
          </h1>
          <div>
            <div className="flex gap-3 text-[17px]">
              <ul className="list-disc list-inside">
                Training Programs
                <li>Clinical Training</li>
                <li>Counseling Training</li>
                <li>Art Therapy Training</li>
                <li>Psychometric Testing</li>
                <li>Therapies Training</li>
              </ul>
              <ul className="list-inside list-disc">
                Session Offering
                <li>Counseling Sessions</li>
                <li> Therapy Sessions</li>
                <li> 1:1 Sessions</li>
                <li> Group Sessions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Third Section Ends */}
      <div className="flex items-center justify-center pb-3">
        <p className="text-2xl font-semibold">
          Join us at Brainstreamliner, where we turn the complexities of
          psychology into a journey of clarity and compassion.
        </p>
      </div>
      <div className="flex items-center justify-center pb-5">
        <a
          href="/ContactUs"
          className=" bg-[#ffff] rounded-md flex items-center justify-center px-4 p-2"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default AboutUs