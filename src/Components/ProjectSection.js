import React from 'react'
import { ScrollParallax, MouseParallax } from 'react-just-parallax';
import ProjectCard from './ProjectCard';
import ScrollCarousel from 'scroll-carousel';
import 'scroll-carousel/dist/scroll.carousel.min.css'
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import upscale from '../Assets/upscale.png'
import portal from '../Assets/portal.png'
import junglii from '../Assets/junglie.png'

const data = [
  {
  name:"Upscale",
  desc:"Built a react native mobile application with Nest Js, to provide Course road map to the customer in the field of Information technology.",
  link:"https://github.com/Harishcruise/Upscale",
  img:upscale
  },
  {
    name:"SAP Master Portal",
    desc:"Constructed and maintained a comprehensive SAP portal with Angular JS and REST APIs, enabling seamless data updates on the SAP master database.",
    link:"https://github.com/Harishcruise/customerPortal-master",
    img:portal
    },
    {
      name:"Merge Music (Music API)",
      desc:"Created a backEnd system to convert music libraries from one platform to another like importing libraries form youtube music library to spotify using Node js.",
      link:"https://github.com/Harishcruise/mergemusic",
      img:"https://nordicapis.com/wp-content/uploads/7-Music-Streaming-APIs.png"
      },
      {
        name:"The Junglii",
        desc:"Developed a booking system using react for a Indoor petting zone concept along with exotic pets and consulting.",
        link:"https://github.com/Harishcruise/thejunglii",
        img:junglii
        },
]

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
        
        
        <div className='flex flex-wrap w-[100%] items-center pt-4 gap-28 overflow-x-scroll scroll-hide'>
        {/* <FiArrowLeftCircle size={30} color='gray' className=' hover:cursor-pointer hover:scale-125 transition-transform absolute'/> */}
        {data.map((item)=>
        <ProjectCard name={item.name} desc={item.desc} link={item.link} img={item.img}/>
        )}
        {/* <FiArrowRightCircle size={30} color='gray'  className=' hover:cursor-pointer hover:scale-125 transition-transform absolute left-[100%]' /> */}

        </div>
        </ScrollParallax>
     </div>
   
    </>
  )
}

export default ProjectSection