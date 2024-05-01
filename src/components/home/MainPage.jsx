import React from 'react'

import './home.css'
import { FaPlay } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import Slider from './Slider';
import Home from './Home';

const MainPage = () => {
  return (
    <div className='bg-gradient-to-br from-purple-900 to-orange-500 pt-20 pb-32'>
  <Home/>
    
    <div className='flex justify-center lg:px-16 px-4 lg:flex-row items-center text-white flex-col '>
        <div className='flex-1  mt-20 pl-4 md:pl-8'>
            <h1 className='md:text-5xl text-3xl font-semibold pr-4 leading-tight '>We are Producing Scroll-Stopping Creatives All Day, Every Day for:</h1>
            <div className="animated-text">
  <div id="ani-container">
    
    <div id="flip">
      <div><div>Product Shoot</div></div>
      <div><div>Vedio Commercials</div></div>
      <div><div>Web Design</div></div>
      
    </div>
  
  </div>
</div>
            <h1 className='text-lg font-semibold mt-8'>Convert More. Spend Less.</h1>
            <button className='text-lg font-semibold mt-4 px-8 py-2 rounded-2xl bg-[#EC7729] flex gap-2 items-center'>Start my Video <span><FaPlay /></span> </button>
            <div className='mt-8 flex gap-2 items-center font-semibold'> <span className='text-3xl'><FaRegCalendarAlt /></span>
            <span className='text-base '>Current Delivery Time: 6 - 7+ Business Days
    </span>
            </div>
        </div>
        <div className='flex-1  overflow-hidden mt-16'>
            <Slider/>
            
        </div>

    </div>
    <div className='flex items-center justify-end group fixed z-20 right-4 md:right-8 md:bottom-6 bottom-4 gap-1 '>
      <p className='bg-white rounded-2xl py-1 px-4 cursor-pointer text-sm sm:text-base'>
        <span className='hidden group-hover:inline'>Whatsapp</span>
        <span className='group-hover:hidden'>Hy! How can we assist you?</span>
      </p>
      <div className='text-white bg-green-500 cursor-pointer p-2 rounded-full text-4xl'>
        <FaWhatsapp />
</div>
    </div>
    
    </div>
  )
}

export default MainPage
