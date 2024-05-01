import React from 'react'
import Image from '../../assets/testimonials.png'

const SevenSection = () => {
  return (
    <div className='bg-white'>
      <h1 className='text-center mt-4 sm:text-4xl text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#1B1B1D]'>Clients Testimonials</h1>
      <div className='w-full p-2 mt-6 h-[100vh] sm:h-[120vh] md:h-[140vh] lg:h-[160vh]'>
        <img src={Image} alt="" className='h-full w-full' />
      </div>
    </div>
  )
}

export default SevenSection
