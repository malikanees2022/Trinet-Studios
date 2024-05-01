import React from 'react'
import './foursection.css'
import { IoMdCloudDownload } from "react-icons/io";
import Logo from '../../assets/orange-logo.png'

const FourSection = () => {
  return (

    <div className='bg-white four-section pb-32 '>

      <div>
            <div className='mt-20 px-4 sm:px-12  md:px-14 lg:32'>
    <h1 className='text-xl font-bold '>One Stop Solution</h1>
    <div className='bg-black h-1 w-28 mt-1'></div>
    <div className='flex flex-col md:flex-row justify-center items-center gap-8 mt-4'>
                <h1 className='md:text-2xl lg:text-3xl sm:text-2xl text-xl font-medium w-[100%] md:w-[75%] '>Unlock a world of excellence beyond boundaries! Spearheading innovation in Europe, the Middle East, and South Asia, we are one-stop solution to meet all your needs.</h1>
                <div className=' w-[100%] md:w-[30%] flex items-center justify-center'>
                    <button className='bg-[#EC7729] flex items-center justify-center gap-2 font-semibold rounded-3xl px-4 py-3 text-xl lg:text-xl md:text-lg text-white'> <span>Company Profile</span> <span><IoMdCloudDownload /></span></button>
                </div>
            </div>
            </div>

            <div className=' w-full lg:w-[42%] md:w-[55%] md:pr-10 px-4  ml-auto mt-20 sm:mt-32 md:mt-36 lg:mt-48'>
    <h1 className='text-center  text-2xl font-bold'>ABOUT US</h1>
    <div className='mx-auto mt-4 w-64 h-16 sm:w-80 sm:h-24'>
        <img src={Logo} alt="" className='w-full h-full' />
    </div>
    <p className='mt-6 font-medium '>
    Welcome to TriNet Studios, where creativity meets precision. As a dynamic creative hub, we specialize in crafting captivating narratives through an array of services. From compelling video ads that resonate with your audience to meticulous photo editing that brings your visuals to life, we’ve mastered the art of storytelling through the lens. Our expert photographers are ready to capture your essence in every frame during our professional photoshoots.
    </p>
    <p className='mt-4 font-medium'>But we don’t stop there – our team is dedicated to shaping your digital presence. Elevate your brand with our cutting-edge web design services, where aesthetics and functionality converge seamlessly. Plus, our digital marketing strategies are tailored to amplify your online footprint and drive results.</p>
    <p className='mt-4 font-medium'>At TriNet Studios, we’re not just creators; we’re partners in your journey to success. Join us as we transform ideas into impactful visuals and narratives that leave a lasting impression.</p>

        <div className='mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 px-1 md:px-4'>
            <div className='flex flex-col items-center justify-center gap-2'>
                <h1 className='text-4xl text-[#EC7729] font-extrabold text-center'>6K+</h1>
                <h1 className='font-bold text-center'>PROJECTS</h1>
            </div>

            <div className='flex flex-col items-center justify-center gap-2'>
                <h1 className='text-4xl text-[#EC7729] font-extrabold text-center'>3.5K+</h1>
                <h1 className='font-bold text-center'>CLIENTS</h1>
            </div>

            <div className='flex flex-col items-center justify-center gap-2'>
                <h1 className='text-4xl text-[#EC7729] font-extrabold text-center'>3K+</h1>
                <h1 className='font-bold text-center'>REPEAT CLIENTS</h1>
            </div>


            
            <div className='flex flex-col items-center justify-center gap-2'>
                <h1 className='text-4xl text-[#EC7729] font-extrabold text-center'>10K+</h1>
                <h1 className='font-bold text-center'>YEARS OF EXPERIENCE</h1>
            </div>

        </div>

            </div>
            
      </div>

    </div>
  )
}

export default FourSection
