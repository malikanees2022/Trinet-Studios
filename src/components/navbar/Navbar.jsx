import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import './navbar.css'

const Navbar = () => {
  return (
    <div>
      <div className='bg-[#723896] py-1 sm:px-8   px-3 flex justify-between items-center text-white'>
        <div className='flex sm:gap-3 gap-1 items-center'>
        <FaPhone className='text-sm sm:text-lg'/>
            <h1 className='font-semibold text-xs sm:text-base'>+92 (326)-157-5000</h1>
        </div>
        <div className='flex gap-20 items-center justify-between'>
          <div  className='flex sm:gap-3 gap-1 items-center'>
          <TfiEmail className='text-sm sm:text-lg'/>
            <h1 className='font-semibold text-xs sm:text-base'>info@trinetstudios.com</h1>
          </div>
          <div className='flex gap-4 flags'>
          <span>
            <img alt="PK" src="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/us.svg" className='block w-6 h-6'/>
            </span>
            <span>
            <img alt="PK" src="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/pk.svg" className='block w-6 h-6'/>
            </span>
            <span>
            <img alt="NZ" src="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/nz.svg" className='block w-6 h-6'/>
            </span>
           
            <span>
            <img alt="IND" src="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/sd.svg" className='block w-6 h-6'/>
            </span>
           
          </div>
        </div>
      </div>

     
    </div>
  )
}

export default Navbar
