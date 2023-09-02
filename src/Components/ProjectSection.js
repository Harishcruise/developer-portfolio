import React from 'react'
import { ScrollParallax, MouseParallax } from 'react-just-parallax';
import ProjectCard from './ProjectCard';
import ScrollCarousel from 'scroll-carousel';
import 'scroll-carousel/dist/scroll.carousel.min.css'
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

function ProjectSection() {
  new ScrollCarousel(".my-carousel", {
    smartSpeed: true,
    direction: 'ltr'
  });
  return (
    <>
        <div className='flex flex-col  text-white gap-2 w-[100%]'>
        <ScrollParallax>
        <p style={{fontFamily:"barlow",fontSize:"60px",fontWeight:"600",width:"100%",lineHeight:"78px"}}>My Projects</p>
        <p style={{fontFamily:"barlow",fontSize:"24px",fontWeight:"400",width:"80%",lineHeight:"30px",color:"#B5BAC4"}}>My journey began 2018, and since then, I've been building a versatile skill set through projects. I'm all about clean code, collaboration, and keeping up with tech trends.</p>
        
        
        <div className='flex w-[100%] items-center pt-4 gap-28 overflow-x-scroll scroll-hide'>
        <FiArrowLeftCircle size={30} color='gray' className=' hover:cursor-pointer hover:scale-125 transition-transform absolute'/>
        <ProjectCard style={{marginLeft:"33px"}}/>
        <ProjectCard/>
        <ProjectCard/>
        <FiArrowRightCircle size={30} color='gray'  className=' hover:cursor-pointer hover:scale-125 transition-transform absolute left-[100%]' />

        </div>
        </ScrollParallax>
     </div>
   
    </>
  )
}

export default ProjectSection