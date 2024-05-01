import React from 'react'


const Box = ({icon,title,desc}) => {
  return (
    <div className='w-full px-4 border border-white rounded-2xl pb-16 hover:bg-[#8e4b1e86]'>
       <div className='p-2 w-fit mx-auto text-4xl text-[#EC7729] rounded-xl border-2 border-[#EC7729] mt-10'>
       {icon}
       </div>
       <h1 className='text-center font-medium text-lg mt-6'>{title}</h1>
       <p className='text-center mt-6'>{desc}</p>
    </div>
  )
}

export default Box
