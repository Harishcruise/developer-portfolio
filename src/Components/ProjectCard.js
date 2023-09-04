import React from 'react'

function ProjectCard({style,name,desc,link,img,logo}) {
  return (
    <div style={style} className='w-[575px] h-[430px] bg-gray-800 rounded border border-[#444955] hover:animate-pulse'>
         <img alt='' src={img} className='w-[100%] h-[60%] rounded border border-[#444955]'/>
         
         <div className='w-[100%]'>

         <div className='flex items-center justify-between p-2'>
         <div style={{fontFamily:"barlow"}} className="text-white text-xl font-medium" >{name}</div>
         <div className='flex gap-3'> 

         {logo.map((item)=><img alt='' className='w-6 h-6 hover:scale-110 transition-transform rounded hover:cursor-pointer' src={item} />)}
        </div>
         </div>

         <div className="p-2 w-[564px] text-gray-400 text-base font-normal leading-snug tracking-tight">{desc}</div>

         <div className='flex p-2'>

         <a href={link} target='_blank' class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium rounded-full group">
         <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
         <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
         <span style={{fontFamily:"barlow"}} class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">Github 🔗</span>
         <span class="absolute inset-0 border-2 border-white rounded-full"></span>
         </a>

         </div>
         </div>

        </div>
  )
}

export default ProjectCard