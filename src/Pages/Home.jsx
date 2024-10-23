import React from 'react'
import WhyChoose from '../Components/WhyChoose';
import CoverPage from './CoverPage';
// import Philosophy from '../Components/Philosophy';
import WhatWeDo from '../Components/WhatWeDo';
import About from '../Components/About';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { StartTherapy } from '../Components/StartTherapy';

        
const Home = () => {
  return (
    <div>
      <Navbar  /> 
      <CoverPage />
      {/* <Philosophy /> */}
      <StartTherapy></StartTherapy>
      <WhyChoose />
      <WhatWeDo />
      <About />
      <Footer/>
      {/* <Testing /> */}
      
    
    </div>
  )
}

export default Home
