import React, { useEffect, useState } from 'react'
import Logo from '../../assets/mainlogo.png'
import { FaGreaterThan } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import './home.css'
const Home = () => {
    const [showHam,setShowHam]=useState(false)
    const [showServices,setShowServices]=useState(false)
    const [showVedioServices,setShowVedioservices]=useState(false)
    const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 12) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={`fixed ${isSticky ? 'top-0' : 'top-6 sm:top-8'} left-0 z-30 w-full`}>
    <div className=' relative '>
       <div  className='bg-[#0000002B] sm:pl-8 px-2  Sm:pr-8 py-2 flex justify-between items-center  '>
       
            <div className='sm:w-40 sm:h-14 w-32 h-10'>
                <img src={Logo} alt="" className='w-full h-full'/>
            </div>
            <div className='hamburger '>
                <div onClick={()=>setShowHam(prev => !prev)} className='bg-black text-white bg-opacity-20 p-2 text-lg'>
                {
    showHam ?  <ImCross /> :<GiHamburgerMenu />
}
                </div>
                
                
            </div>

            <div className='flex gap-8 mr-1 sm:mr-8 items-center'>
            <ul className='navlist flex text-white  font-semibold uppercase items-center justify-center '>
                    <li className='px-6 py-2 border-b-4 border-[#EC7729]'>Home</li>
                    <li className='px-6 py-2 cursor-pointer hover:border-b-4 border-[#EC7729] flex  relative services'>Sevices  
                    <span className='text-[10px] -mt-1    rotate-90 font-extrabold'><FaGreaterThan/>
 </span>
 <div className='absolute services-box left-0 w-[350px] text-sm capitalize -bottom-[268px] bg-white text-black '>
    <ul>
        <li className='py-3 flex items-center gap-4 pl-6 hover:text-[#EC7729] hover:bg-black relative vedio-service'>Vedios Services            <span className='text-[10px] font-extrabold'><FaGreaterThan/>
 </span>
 <div  className='vedio-service-box absolute -right-[330px] w-[350px]  text-sm capitalize top-0 bg-white text-black' >
    <ul>
    <li className='py-3 pl-6 hover:text-[#EC7729] hover:bg-black'>sass vedio services</li>
    <li className='py-3 pl-6 hover:text-[#EC7729] hover:bg-black'>factory vedio commercial</li>
    <li className='py-3 pl-6 hover:text-[#EC7729] hover:bg-black'>Animation Video</li>
    <li className='py-3 pl-6 hover:text-[#EC7729] hover:bg-black'>Ecommerce Product ads</li>
    <li className='py-3 pl-6 hover:text-[#EC7729] hover:bg-black'>Social Media Shorts Video</li>
    <li className='py-3 pl-6 hover:text-[#EC7729] hover:bg-black'>Crowdfunding Videos</li>
    <li className='py-3 pl-6 hover:text-[#EC7729] hover:bg-black'>Crowdfunding Videos</li>
    <li className='py-3 pl-6 hover:text-[#EC7729] hover:bg-black'>Mobile App Promo</li>
    
    </ul>
    </div> </li>
        <li className='py-3 pl-6 hover:text-[#EC7729] hover:bg-black'>Amazon Product Photography in Sialkot</li>
        <li className='py-3 pl-6 hover:text-[#EC7729] hover:bg-black'>Web Design And Development</li>
        <li className='py-3 pl-6 hover:text-[#EC7729] hover:bg-black'>Amazon Services</li>
        <li className='py-3 pl-6 hover:text-[#EC7729] hover:bg-black'>graphic design</li>
        <li className='py-3 pl-6 hover:text-[#EC7729] hover:bg-black'>social media markeeting</li>
    </ul>

 </div>
 
 </li>
                    <li className='px-6 py-2 cursor-pointer hover:border-b-4 border-[#EC7729]'>blog</li>
                    <li className='px-6 py-2 cursor-pointer hover:border-b-4 border-[#EC7729]'>career</li>
                    <li className='px-6 py-2 cursor-pointer hover:border-b-4 border-[#EC7729]'>contact us</li>
                </ul>
                <div><button className='uppercase py-2 bg-[#6302B3] px-3 sm:text-lg text-sm sm:px-6 rounded-3xl  text-white font-semibold '>let's start</button></div>
            </div>
       </div>

<div>
</div>



    </div>
    {showHam && (
        <div className=' w-screen absolute bg-white left-0 top-14 sm:top-20 '>
    <ul className='uppercase text-black font-semibold'>
        <li className='py-2 text-center hover:text-[#EC7729] hover:bg-black'>Home</li>
        <li className=' py-2 text-center '>
        <div onClick={()=>setShowServices(prev=>!prev)} className='hover:text-[#EC7729] hover:bg-black flex items-center justify-center gap-2 '>Services <span className='text-[10px]    rotate-90 font-extrabold'><FaGreaterThan/> </span></div>

      {showServices && (
         <div className='   capitalize   '>
         <ul>
             <li className='py-2      '>
                 <div onClick={()=>setShowVedioservices(prev=>!prev)}  className=' flex items-center gap-4 justify-center'>Vedios Services  <span className='text-[10px] font-extrabold rotate-90'><FaGreaterThan/>
      </span></div>
      {showVedioServices && (
        <div  className='   capitalize  '>
         <ul>
         <li className='py-2 hover:text-[#EC7729] hover:bg-black'>sass vedio services</li>
         <li className='py-2 hover:text-[#EC7729] hover:bg-black'>factory vedio commercial</li>
         <li className='py-2 hover:text-[#EC7729] hover:bg-black'>Animation Video</li>
         <li className='py-2 hover:text-[#EC7729] hover:bg-black'>Ecommerce Product ads</li>
         <li className='py-2 hover:text-[#EC7729] hover:bg-black'>Social Media Shorts Video</li>
         <li className='py-2 hover:text-[#EC7729] hover:bg-black'>Crowdfunding Videos</li>
         <li className='py-2 hover:text-[#EC7729] hover:bg-black'>Crowdfunding Videos</li>
         <li className='py-2 hover:text-[#EC7729] hover:bg-black'>Mobile App Promo</li>
         
         </ul>
         </div>

      )}
       </li>
             <li className='py-2  hover:text-[#EC7729] hover:bg-black'>Amazon Product Photography in Sialkot</li>
             <li className='py-2  hover:text-[#EC7729] hover:bg-black'>Web Design And Development</li>
             <li className='py-2  hover:text-[#EC7729] hover:bg-black'>Amazon Services</li>
             <li className='py-2  hover:text-[#EC7729] hover:bg-black'>graphic design</li>
             <li className='py-2  hover:text-[#EC7729] hover:bg-black'>social media markeeting</li>
         </ul>
     
      </div>
      )}  
       

        
        
        </li>
        <li className='py-2 text-center hover:text-[#EC7729] hover:bg-black'>blog</li>
        <li className='py-2 text-center hover:text-[#EC7729] hover:bg-black'>career</li>
        <li className='py-2 text-center hover:text-[#EC7729] hover:bg-black'>contact us</li>
    </ul>

</div>

    )}
    
    </div>
    
  )
}

export default Home
