import React, { useState, useEffect } from "react";
import AboutUs from "./Pages/AboutUs";
import { useRef } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import CoverPage from "./Pages/CoverPage";
import { StartTherapy } from "./Components/StartTherapy";
import Footer from "./Components/Footer";
import WhatWeDo from "./Components/WhatWeDo";
import WhyChoose from "./Components/WhyChoose";
import HowDiff from "./Components/HowDiff";
import Training from "./Components/Training";

function App() {
  const home = useRef(null);
  const session = useRef(null);
  const about = useRef(null);
  const training = useRef(null);
  const blogs = useRef(null);
  const workshop = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  const [nav, setNav] = useState(false);
  const [navBack, setNavBack] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };
  const changeBackground = () => {
    if (window.scrollY > 700) {
      setNavBack(true);
    } else {
      setNavBack(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  // Array containing navigation items
  const navItems = [
    { id: 2, text: "About us", path: "/AboutUs", section: about },
    { id: 3, text: "Sessions", path: "/Philosophy", section: session },
    { id: 4, text: "Reviews", path: "/Workshop", section: training },
    // { id: 5, text: "Workshop", path: "/Group", section: home },
    // { id: 6, text: "Blogs", path: "/Blog", section: home },
    { id: 7, text: "Contact Us", path: "/ContactUs", section: contact },
  ];

  return (
    <div className=" ">
      <div className={navBack ? "navbar active shadow-xl z-30" : "hidden"}>
        <div className=" w-full h-full flex justify-between items-center">
          <div
            ref={home}
            onClick={() => scrollToSection(home)}
            className={
              navBack
                ? "w-fit text-3xl sm:text-[45px] font-bold text-[#8dc73f]   ml-4 cursor-pointer"
                : "hidden"
            }
          >
            Brain Streamliner
          </div>
          {/* Desktop Navigation */}
          <div
            className={
              nav
                ? navBack
                  ? " sm:flex hidden z-30"
                  : "hidden"
                : "sm:flex hidden"
            }
          >
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

        {/* Mobile Navigation Icon */}
        <div
          onClick={handleNav}
          className={navBack ? "block sm:hidden z-10 " : "hidden"}
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
              ? "fixed sm:hidden left-0 top-0 w-[70%] h-full text-[#8dc73f] bg-white ease-in-out duration-500 z-30 shadow-xl text-center"
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
      {/* PAGES */}

      <div ref={home}>
        <CoverPage></CoverPage>
      </div>
      <StartTherapy></StartTherapy>
      <div ref={about}>
        <AboutUs></AboutUs>
      </div>
      <div>
        <WhatWeDo></WhatWeDo>
      </div>
      <div ref={session}>
        <WhyChoose> </WhyChoose>
      </div>
      
      <div>
        <HowDiff></HowDiff>
      </div>
      <div ref={training}>
        <Training></Training>
      </div>
      <div ref={contact}>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
