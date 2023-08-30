import React from 'react'
import { ScrollParallax } from 'react-just-parallax';

function WorkExperienceSection() {
  return (
    <>
    <div className='flex flex-col pt-20 text-white gap-2 w-[100%]'>
    <ScrollParallax>
    <p style={{fontFamily:"barlow",fontSize:"60px",fontWeight:"600",width:"100%",lineHeight:"78px"}}>Work Experience</p>
    <p style={{fontFamily:"barlow",fontSize:"24px",fontWeight:"400",width:"90%",lineHeight:"30px",color:"#B5BAC4"}}>Crafting digital experiences, pixel by pixel and line by line. Experience is the compass guiding us through the ever-evolving landscape of technology, lighting the path to innovative solutions.</p>
    
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

export default WorkExperienceSection