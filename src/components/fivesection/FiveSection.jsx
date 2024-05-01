import React from 'react'

const FiveSection = () => {
  return (
    <div className='bg-[#1B1B1D] p-10'>
        <div className='w-full md:h-screen sm:h-96  h-60 rounded-3xl overflow-hidden'>
        <iframe
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/wB0bNwJU9wI`}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>

        </div>
        <h1 className='text-white mt-6 text-xl font-bold text-center'>See how our hardworking team makes things possible for you</h1>
      
    </div>
  )
}

export default FiveSection
