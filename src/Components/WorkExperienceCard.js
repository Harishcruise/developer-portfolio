import React from 'react'

function WorkExperienceCard({name,title,desc,logo}) {
  console.log(logo)
  return (
    <div className='w-[575px] p-4 h-[380px] bg-[#191B1F] rounded flex flex-col justify-between border border-gray-400'>
    
    <div className='flex flex-col gap-4'>

    <div className="flex-col justify-start items-start gap-3 inline-flex">
    <div style={{fontFamily:"barlow",fontSize:"24px",fontWeight:"500",lineHeight:"31.2px"}} className="text-white">{name}</div>
    <div style={{fontFamily:"barlow",fontSize:"16px",fontWeight:"600",lineHeight:"19.8px"}} className="text-fuchsia-700">{title}</div>
    </div>

    <div className='w-[100%] border-b border-b-gray-700 border-dashed'></div>

    <div style={{fontFamily:"barlow",}} className="text-gray-400 text-base font-normal leading-snug tracking-tight">{desc}</div>
    </div>

    

    <div className='flex flex-col gap-2'>
    <div style={{fontFamily:"barlow",}} className="text-white text-xl font-medium leading-relaxed tracking-tight">Skills and Frameworks</div>
    <div className='flex gap-4'>
    {logo.map((item)=> <img src={item} alt='linkin' className='w-7 h-7 rounded hover:cursor-pointer hover:scale-125 transition-transform' />)}
    </div>
    </div>


    </div>
  )
}

export default WorkExperienceCard