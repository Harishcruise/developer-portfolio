import React from 'react'
import { ScrollParallax } from 'react-just-parallax';
function ProjectSection() {
  return (
    <>
        <div className='flex flex-col  text-white gap-2 w-[100%]'>
        <ScrollParallax>
        <p style={{fontFamily:"barlow",fontSize:"60px",fontWeight:"600",width:"100%",lineHeight:"78px"}}>My Projects</p>
        <p style={{fontFamily:"barlow",fontSize:"24px",fontWeight:"400",width:"80%",lineHeight:"30px",color:"#B5BAC4"}}>My journey began 2018, and since then, I've been building a versatile skill set through projects. I'm all about clean code, collaboration, and keeping up with tech trends.</p>
        
        
        <div className='flex w-[100%] items-center pt-4 gap-8'>
        <div className='w-[575px] h-[380px] bg-[#373B44] rounded border border-[#444955]'>
        
        </div>
        <div className='w-[575px] h-[380px] bg-[#373B44] rounded border border-[#444955]'>
        
        </div>

        </div>
        </ScrollParallax>
     </div>
   
    </>
  )
}

export default ProjectSection