import React, { useState, useEffect } from 'react';
import AboutUs from "./Pages/AboutUs";
import {useRef} from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import CoverPage from "./Pages/CoverPage";
import { StartTherapy } from "./Components/StartTherapy";

function App() {
      const home = useRef(null);
      const services = useRef(null);
      const about = useRef(null);
      const training = useRef(null);
      const blogs = useRef(null);
      const workshop = useRef(null);
      const contact = useRef(null);
      

      const scrollToSection = (elementRef) => {
        window.scrollTo({
          top: elementRef.current.offsetTop,
          behavior:"smooth",
        })
      }
      const [nav, setNav] = useState(false);
  const [navBack, setNavBack] =useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };
  const changeBackground =()=>{
    if(window.scrollY>700){
      setNavBack(true)
    }else{
      setNavBack(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  
  
  // Array containing navigation items
  const navItems = [
    
    { id: 2, text: 'About us', path:'/AboutUs', section:about },
    { id: 3, text: 'Sessions', path:'/Philosophy' , section:home },
    { id: 4, text: 'Training Programs', path:'/Workshop', section:home  },
    { id: 5, text: 'Workshop', path:'/Group', section:home  }, 
    { id: 6, text: 'Blogs', path:'/Blog', section:home  },
    { id: 7, text: 'Contact Us', path:'/ContactUs', section:home  },
    
  ];




  return (
    <div className=" ">
      <div className={navBack ? "navbar active shadow-xl z-30" : "navbar"}>
        <div className=' w-full h-full flex justify-center items-center'>

       
        <div
          to={"/"}
          className={
            navBack
              ? "w-fit text-3xl sm:text-[45px] font-bold text-[#8dc73f]   ml-4 "
              : "hidden"
          }
        >
          Brain Streamliner
        </div>

        {/* Desktop Navigation */}

        {/* ICON FOR NAVIGAYION OPEN AND CLOSE */}
        {/* <div className='hidden md:flex' onClick={handleNav}>
{nav ? <AiOutlineClose size={25}  className='cursor-pointer '/> : <AiOutlineMenu size={25} className='cursor-pointer ' />} */}

        {/* <ul
  className={
    nav
      ? navBack ? 'fixed left-0 top-20 w-full h-fit  p-2  shadow-xl bg-[#F7F7F8] animate-fadeindown  duration-500  z-20 rounded-b-2xl text-[#8dc73f] ':'hidden'
      : 'hidden fixed'
  }
> */}
        {/* Mobile Logo */}
        {/* <h1 className='w-full text-2xl font-bold text-[#FFF8DB] m-4'>Brain Streamliner</h1> */}

        {/* Mobile Navigation Items */}
        <div className={
    nav
      ? navBack ? 'sm:fixed sm:flex hidden  text-[#8dc73f] bg-black z-30':'hidden'
      : 'sm:flex hidden'
  } >
          {navItems.map((item) => (
            <div
              to={item.path}
              onClick={() => {
                handleNav();
                scrollToSection(item.section);
              }}
              key={item.id}
              className="p-4   ml-11  w-max flex rounded-xl hover:bg-[#8dc73f] font-semibold text-xl  text-[#8dc73f] duration-300 hover:text-white cursor-pointer "
            >
              {item.text}
            </div>
          ))}
        </div>
        </div>

        {/* </ul>
</div> */}

        {/* Mobile Navigation Icon */}
        <div
          onClick={handleNav}
          className={navBack ? "block md:hidden z-10 " : "hidden"}
        >
          {nav ? (
            <AiOutlineClose size={20} className="cursor-pointer" />
          ) : (
            <AiOutlineMenu size={20} className="cursor-pointer" />
          )}
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? "fixed md:hidden left-0 top-0 w-[70%] h-full  bg-white ease-in-out duration-500 z-20 shadow-xl text-center"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          {/* Mobile Navigation Items */}
          {navItems.map((item) => (
            <div
              to={item.path}
              onClick={() => {
                handleNav();
                scrollToSection(item.section);
              }}
              key={item.id}
              className="p-4  flex rounded-xl hover:bg-[#8dc73f] duration-300 text-center hover:text-[#FFF8DB] cursor-pointer "
            >
              {item.text}
            </div>
          ))}
        </ul>
      </div>
      <div ref={home}><CoverPage></CoverPage></div>
      <StartTherapy></StartTherapy>
      <div ref={about}><AboutUs></AboutUs></div>
    </div>
  );
}

export default App;
{/* <Routes>
        <Route path='AboutUs' element={<AboutUs></AboutUs>}/>
        <Route path="/" element={<Home></Home>} />
        <Route path="/Blog" element={<Blog></Blog>} />
        <Route path="/ContactUs" element={<ContactUs></ContactUs>} />
        <Route path="/Group" element={<Group></Group>} />
        <Route path="/Offer" element={<Offer></Offer>} />
        <Route path="/Workshop" element={<Workshop></Workshop>} />
        <Route path="/Philosophy" element={<Philosophy></Philosophy>} />
      </Routes> */}