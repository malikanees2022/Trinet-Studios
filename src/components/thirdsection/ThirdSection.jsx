import React from 'react'
import "./thirdsection.css"
import Box from './Box'
import { FaVideo } from "react-icons/fa6";
import { FaCamera } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { FaWordpressSimple } from "react-icons/fa";
import { TbSocial } from "react-icons/tb";

const ThirdSection = () => {
  return (
    <div className='bg-[#1B1B1D] p-4 md:p-6 lg:p-24 sm:p-10 text-white third-section '>
        <h1 className='text-center font-bold text-xl'>Our Services</h1>
        <div className='mt-3'>
                 <div className='w-20 mx-auto  bg-[#EC7729] h-1'></div>
            </div>
            <h1 className='text-center font-medium text-lg mt-6'>Elevate your brand with TriNet Studios! – our services are tailored to amplify your business success</h1>
            <div className='md:px-8 sm:px-8 lg:px-16  px-4 mt-8'>
                <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4'>
                    <Box icon={<FaVideo />} title={"VIDEO COMMERCIALS"} desc={"Captivate your audience with compelling narratives. Our video commercials turn stories into unforgettable visual experiences."}/>
                    <Box icon={<FaCamera />} title={"PRODUCT SHOOT"} desc={"Elevate your products with our expert lens. Precision and creativity meet in every shot, showcasing excellence."}/>

                    <Box icon={<FaAmazon />} title={"AMAZON & LLC SERVICE"} desc={"Optimize your Amazon presence. Our listing service boosts visibility and drives sales for your products."}/>

                    <Box icon={<MdDesignServices />} title={"GRAPHICS DESIGN"} desc={"Transform ideas into eye-catching visuals. Our graphics design service brings creativity and impact to your brand."}/>

                    <Box icon={<FaWordpressSimple />} title={"WEBSITE DESIGNING"} desc={"Crafting digital experiences. Our website service merges aesthetics with functionality, ensuring a standout online presence."}/>
                    <Box icon={<TbSocial />} title={"SOCIAL MEDIA MARKETING"} desc={"Amplify your brand. Our social media service creates engaging strategies for impactful online presence and growth."}/>
                    

                    
                </div>
            </div>
            <h1 className='text-center font-bold text-xl mt-8'>Creative Solutions, Seamless Impact</h1>
      
    </div>
  )
}

export default ThirdSection
