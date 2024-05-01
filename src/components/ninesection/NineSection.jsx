import React from 'react'
import Maps from './Maps'

const NineSection = () => {
  return (
    <div className='bg-white'>
      <h1 className='text-center mt-20 sm:text-4xl text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#1B1B1D]'>NOW IT'S YOUR TURN!</h1>

      <div className='text-center mt-8 px-8'>
        <button className='text-white px-8 lg:px-12 py-2 sm:py-3 md:py-4 rounded-3xl font-bold text-base sm:text-xl md:text-2xl lg:text-3xl bg-[#EC7729]'>$ Join to increase the sales</button>

      </div>
        <Maps/>

    </div>
  )
}

export default NineSection
