import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import {Link } from 'react-router-dom'

const NavbarComm = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);
  // const [navBack, setNavBack] =useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };
  // const changeBackground =()=>{
  //   console.log(navBack)
  //   if(window.scrollY>0){
  //     setNavBack(true)
  //   }else{
  //     setNavBack(false)
  //   }
  // }
  // useEffect(() => {
  //   window.addEventListener('scroll', changeBackground);
  //   return () => {
  //     window.removeEventListener('scroll', changeBackground);
  //   };
  // }, []);
  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home', path:'/' },
    { id: 2, text: 'About us', path:'/AboutUs' },
    { id: 3, text: 'Sessions', path:'/Philosophy' },
    { id: 4, text: 'Training Programs', path:'/Workshop' },
    { id: 5, text: 'Workshop', path:'/Group' }, 
    { id: 6, text: 'Blogs', path:'/Blog' },
    { id: 7, text: 'Contact Us', path:'/Offer' },
    
  ];

  return (
    <div className={'navbar active shadow-xl' }>

      <Link to={'/'} className={ 'w-full text-[45px] font-bold text-[#8dc73f]   ml-4'}>Brain Streamliner</Link >

      {/* Desktop Navigation */}
      {/* <ul className='hidden md:flex'> */}

      {/* ICON FOR NAVIGAYION OPEN AND CLOSE */}
      <div className='hidden md:flex' onClick={handleNav}>
      {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      {/* */}
      <ul
        className={
          nav
            ? 'fixed left-0 top-20 w-full h-fit  p-2   bg-[#F7F7F8] animate-fadeindown  duration-500  z-20 rounded-b-2xl text-[#8dc73f] font-semibold text-xl'
            : 'hidden fixed'
        }
      >
        {/* Mobile Logo */}
        {/* <h1 className='w-full text-2xl font-bold text-[#FFF8DB] m-4'>Brain Streamliner</h1> */}

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <Link to={item.path}
          onClick={handleNav}
            key={item.id}
            className='p-4   ml-11 w-fit  gap-y-2 flex rounded-xl hover:bg-[#8dc73f] duration-300 hover:text-white cursor-pointer '>
            {item.text}
          </Link>
        ))}
      </ul>
      </div>
      
      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className={ "block md:hidden z-10 "}>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[70%] h-full  bg-[#8dc73f] ease-in-out duration-500 z-20'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
      
        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <Link to={item.path}
          onClick={handleNav}
            key={item.id}
            className='p-4  flex rounded-xl hover:bg-[#8dc73f] duration-300 hover:text-[#FFF8DB] cursor-pointer '>
            {item.text}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default NavbarComm;