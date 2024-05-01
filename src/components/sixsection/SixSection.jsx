import React from 'react'
import Categories from './Categories'

const SixSection = () => {
  return (
    <div className='bg-white pb-20'>
        <div className='md:p-8 lg:p-16 p-4'>
        <div className='md:mt-8 lg:mt-10 mt-4 px-4 sm:px-12  md:px-4 lg:px-16'>
    <h1 className='text-xl font-bold '>Portfolio</h1>
    <div className='bg-black h-1 w-28 mt-1'></div>
    <div className='flex flex-col md:flex-row justify-center items-center gap-8 mt-4'>
                <h1 className='md:text-3xl lg:text-5xl sm:text-3xl text-3xl font-extrabold w-[100%] md:w-[75%] '> <span className='text-[#EC7729]'>Projects</span> We have <br />
Completed </h1>
                <div className=' w-[100%] md:w-[30%] flex items-center justify-center'>
                    <button className='bg-[#EC7729] flex items-center justify-center gap-2 font-semibold rounded-3xl px-6 py-2 sm:py-2 md:py-3 text-lg lg:text-xl md:text-lg text-white'> <span>Our Portfolio</span> </button>
                </div>
            </div>
            </div>

            <div className=' px-4 sm:px-12  md:px-4 lg:px-16'>
               <Categories/>
            </div>
        </div>
      
    </div>
  )
}

export default SixSection
