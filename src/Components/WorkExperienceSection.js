import React from 'react'
import { ScrollParallax } from 'react-just-parallax';
import WorkExperienceCard from './WorkExperienceCard';
import react from '../Assets/react.png'
import redux from '../Assets/redux.svg'
import figma from '../Assets/figma2.png'
import nest from '../Assets/nest.png'
import mongoDB from '../Assets/mongodb.png'
import js from '../Assets/js.png'
import angular from '../Assets/angular.png'
import ts from '../Assets/ts.png'
import node from '../Assets/node.png'
import express from '../Assets/express.png'
import tailwind from '../Assets/tailwind.png'
import azure from '../Assets/azure.jpg'
import aws from '../Assets/aws.jpg'
import elastic from '../Assets/elasticsearch.png'
import fastapi from '../Assets/fastapi.svg'
import flask from '../Assets/flask.png'
import docker from '../Assets/docker.png'
import c from '../Assets/C.png'
import unity from '../Assets/unity.png'
import three from '../Assets/three.png'
import stripe from '../Assets/stripe.png'

const data = [
  {
    name:"Trainee",
    title:"Kaar Technologies Private Limited",
    desc:"Built a centralized master portal for all SAP modules, providing a unified and user-friendly interface for efficient data management across multiple modules. Led the development of a robust backend for an SAP chatbot with Python and Flask API, catalyzing seamless integration with SAP systems and enhancing user interactions. Leveraged Docker and Azure to deploy the chatbot, ensuring high availability and scalability. ",
    logo:[js,ts,angular,react,tailwind,azure,aws,elastic,node,fastapi,flask,docker]
  },
  {
    name:"Software Engineer Intern",
    title:"Centered of Sponsored Research and Consultancy",
    desc:"Worked In DST(Department Of Science And Technology) Projects. Developed AR/VR Applications for products created by Tanjore Artisans and Crafts. Created an augmented reality application for artisans with Unity and Firebase, acting as an E-marketing tool to present products in 3D and provides consumer an accurate price. By accomplishing an e-marketing platform driven by AR, the company was able to increase sales by 20% by streamlining the advertising and sales process by cutting down the client's wait times by 15%.",
    logo:[c,js,react,mongoDB,node,unity,three]
  },
  {
    name:"Web Developer Intern",
    title:"RC Diamonds",
    desc:"Developed a robust e-commerce project using React.js, Node.js, and Stripe API, resulting in a seamless online shopping experience. Led and collaborated with a team of 6 members, ensuring project completion within the specified timeline.",
    logo:[js,react,node,mongoDB,stripe]
  },
]

function WorkExperienceSection() {
  return (
    <>
    <div className='flex flex-col text-white gap-2 w-[100%] pb-10'>
    <ScrollParallax>
    <p style={{fontFamily:"barlow",fontSize:"60px",fontWeight:"600",width:"100%",lineHeight:"78px"}}>Work Experience</p>
    <p style={{fontFamily:"barlow",fontSize:"24px",fontWeight:"400",width:"90%",lineHeight:"30px",color:"#B5BAC4"}}>Crafting digital experiences, pixel by pixel and line by line. Experience is the compass guiding us through the ever-evolving landscape of technology, lighting the path to innovative solutions.</p>
    
    <div className='flex flex-wrap w-[100%] items-center pt-4 gap-28'>
     
    {data.map((data)=><WorkExperienceCard name={data.name} desc={data.desc} title={data.title} logo={data.logo} />)}

    </div>
    </ScrollParallax>
 </div>

</>
  )
}

export default WorkExperienceSection