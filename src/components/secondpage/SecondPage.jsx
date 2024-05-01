import React from 'react'
import './secondpage.css'
import ImageCard from './ImageCard'
import Image1 from '../../assets/front1.png'
import Image2 from '../../assets/back1.png'
import Image3 from '../../assets/front2.png'
import Image4 from '../../assets/back2.png'
import Image5 from '../../assets/front3.png'
import Image6 from '../../assets/back3.png'
import Image7 from '../../assets/front4.png'
import Image8 from '../../assets/back4.png'
import Image9 from '../../assets/front5.png'
import Image10 from '../../assets/back5.png'
import Image11 from '../../assets/front6.png'
import Image12 from '../../assets/back6.png'
import Image13 from '../../assets/front7.png'
import Image14 from '../../assets/back7.png'
import Image15 from '../../assets/front8.png'
import Image16 from '../../assets/back8.png'
import Image17 from '../../assets/front9.png'
import Image18 from '../../assets/back9.png'


const SecondPage = () => {
  return (
    <div>
      <div className='bg-white px-20 py-28 flex-col  md:flex-row flex gap-20 items-center justify-center'>


        <div className='flex-1 '>
            <p className='mt-10 text-[#000000] text-xl text-center font-medium'>SOME OF THE FAMOUS CLIENTS WE HAVE WORKED WITH!</p>
            <div className='mt-8'>
                 <div className='w-48 mx-auto  bg-[#EC7729] h-1'></div>
            </div>
            <h1 className='text-[#737373] px-4 text-7xl font-extrabold mt-8 text-center'>We turn ideas into work of art.</h1>
        </div>
        <div className='flex-1 w-full  grid grid-cols-1 sm:grid-cols-3'>
          <ImageCard image1={Image1} image2={Image2}/>
          <ImageCard image1={Image3} image2={Image4}/>
          <ImageCard image1={Image5} image2={Image6}/>
          <ImageCard image1={Image7} image2={Image8}/>
          <ImageCard image1={Image9} image2={Image10}/>
          <ImageCard image1={Image11} image2={Image12}/>
          <ImageCard image1={Image13} image2={Image14}/>
          <ImageCard image1={Image15} image2={Image16}/>
          <ImageCard image1={Image17} image2={Image18}/>
          
        </div>
      </div>
    </div>
  )
}

export default SecondPage
