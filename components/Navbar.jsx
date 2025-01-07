'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  // Check the scroll position to add a background color to navbar after Hero
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-black' : 'bg-transparent'}`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
       
        <img
          src="/fclogo.png" // Replace with your image path
          alt="Logo"
          className="w-[100px] lg:w-[120px] h-[auto] object-contain" // Adjust size as needed
        />

        {/* Show menu items on large screens */}
        <div className="hidden lg:flex items-center gap-[24px]">
          <ul className="flex gap-12 text-lg mont text-white">
            <li className="hover:text-red-500 cursor-pointer mont transition duration-300 ease-in-out transform hover:scale-105">HOME</li>
            <li className="hover:text-red-500 cursor-pointer mont transition duration-300 ease-in-out transform hover:scale-105">ABOUT</li>
            <li className="hover:text-red-500 cursor-pointer mont transition duration-300 ease-in-out transform hover:scale-105">WHAT WE DO</li>
            <li className="hover:text-red-500 cursor-pointer mont transition duration-300 ease-in-out transform hover:scale-105">TEAM</li>
            <li className="hover:text-red-500 cursor-pointer mont transition duration-300 ease-in-out transform hover:scale-105">CONTACT</li>
          </ul>
        </div>

        <div className="hidden lg:flex items-center gap-[24px]">
          <img
            src="/rec3.png"
            alt="menu"
            className="hidden w-[70px] h-[70px] object-contain cursor-pointer lg:flex"
            onClick={toggleSidebar}
          />
        </div>

        {/* Show the menu icon on smaller screens */}
        <img
          src="/menu.svg"
          alt="menu"
          className="w-[24px] h-[24px] object-contain cursor-pointer lg:hidden"
          onClick={toggleSidebar}
        />
      </div>

      {/* Sidebar */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isSidebarOpen ? '0%' : '100%' }}
        transition={{ type: 'tween', duration: 0.4 }}
        className="fixed top-0 right-0 h-full w-[70%] md:w-[30%] bg-black text-white z-50 shadow-lg"
      >
        <div className="p-4 flex flex-col gap-4">
          <button
            className="text-right text-xl font-bold"
            onClick={toggleSidebar}
          >
            &times;
          </button>
          <ul className="flex flex-col gap-6 text-lg font-medium">
            <li className="hover:text-red-500 cursor-pointer">Home</li>
            <li className="hover:text-red-500 cursor-pointer">About</li>
            <li className="hover:text-red-500 cursor-pointer">What we do</li>
            <li className="hover:text-red-500 cursor-pointer">Contact</li>
          </ul>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
