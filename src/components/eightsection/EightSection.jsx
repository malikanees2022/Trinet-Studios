import React from 'react'
import './eightsection.css'
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

const EightSection = () => {
  return (
    <div className='bg-white'>
      <h1 className='text-center mt-4 sm:text-4xl text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#1B1B1D]'>Hear from our Happy Customers</h1>
        <div className='  px-10 sm:px-20 md:px-32 lg:px-36  flex flex-col lg:flex-row lg:gap-8 gap-10 items-center justify-center mt-12'>
            <div className='flex-1 h-[500px] md:h-[650px] w-full bg-black shadow-left-bottom'>
            <iframe className='md:h-[650px] h-[500px]'
      width="100%"
      
      src={`https://player.vimeo.com/video/899020279?color&autopause=0&loop=0&muted=0&title=0&portrait=0&byline=0#t=`}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
            </div>
            <div className='flex-1 bg-white  py-8  rounded-2xl shadow-right-bottom'>
        <h1 className='sm:px-12 px-6 text-[#8929BF] sm:text-3xl text-lg font-extrabold'>Jacob Metzger, Founder of Living Leadership</h1>
        <p className=' sm:px-12 px-6 mt-4 sm:text-lg text-sm'> <span className='inline-block'><FaQuoteLeft /></span> <span>Jacob Metzgor, the visionary founder of Living Leadership, radiates enthusiasm as he expresses his satisfaction with the collaboration with TriNet Studios. With genuine excitement, Metzgor declares his happiness in working with TriNet Studios and commends the impeccable service they have provided. In his own words, he envisions a continued partnership where TriNet Studios will be the primary platform for amplifying his voice, emphasizing the profound trust and confidence he places in the studio's capabilities.</span> <span className='inline-block'><FaQuoteRight /></span> </p>
            </div>
        </div>




        <div className='  px-10 sm:px-20 md:px-32 lg:px-36  flex flex-col lg:flex-row lg:gap-8 gap-10 items-center justify-center mt-16'>

        <div className='flex-1 bg-white  py-8  rounded-2xl shadow-right-bottom'>
        <h1 className='sm:px-12 px-6 text-[#8929BF] sm:text-3xl text-lg font-extrabold'>Nate Ross, MD of Sani Concept.</h1>
        <p className=' sm:px-12 px-6 mt-4 sm:text-lg text-sm'> <span className='inline-block'><FaQuoteLeft /></span> <span> Shares his positive views of working with us. SaniConcept was straggling with high competitive market and overrated cost of video ads. Finally he found us, and wanted to promote and advertise his business to increase sales. We have created different business  <span className='text-red-400'>promotional video</span> for him to advertise his products and services. With right marketing strategies and our hooker videos, his sales grew by a healthy percentage. He has shown complete satisfaction on our final work and looks very eager to work with us in future too. </span> <span className='inline-block'><FaQuoteRight /></span> </p>
            </div>
            <div className='flex-1 h-[500px] md:h-[650px] w-full bg-black shadow-left-bottom'>
            <iframe className='md:h-[650px] h-[500px]'
      width="100%"
      
      src={`https://player.vimeo.com/video/519474372`}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
            </div>
           
        </div>




        <div className='  px-10 sm:px-20 md:px-32 lg:px-36  flex flex-col lg:flex-row lg:gap-8 gap-10 items-center justify-center mt-16'>
            <div className='flex-1 h-[500px] md:h-[650px] w-full bg-black shadow-left-bottom'>
            <iframe className='md:h-[650px] h-[500px]'
      width="100%"
      
      src={`https://player.vimeo.com/video/519476091`}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
            </div>
            <div className='flex-1 bg-white  py-8  rounded-2xl shadow-right-bottom'>
        <h1 className='sm:px-12 px-6 text-[#8929BF] sm:text-3xl text-lg font-extrabold'>Talal Khan, CEO of Telen Media.</h1>
        <p className=' sm:px-12 px-6 mt-4 sm:text-lg text-sm'> <span className='inline-block'><FaQuoteLeft /></span> <span>Talal Khan at Talan Media (USA) shared his experience as he approached us for our services. After healthy communication and requirement gathering, we started working on his project. We made sure that the work was done with 100% accuracy and within given deadline. Talal has been so happy and impressed by the dedication and communication of us. He has shown full trust and satisfaction on our work. TriNet Studios is now working as a partner agency with Talan Media for all their video ads and editing jobs.
Talan Media is one of many agencies we are working with.</span> <span className='inline-block'><FaQuoteRight /></span> </p>
            </div>
        </div>


    </div>
  )
}

export default EightSection
