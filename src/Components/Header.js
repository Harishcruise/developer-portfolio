import React from 'react'
import { ProgressBar } from 'react-step-progress-bar'
import git from '../Assets/Github.png'
import fig from '../Assets/Figma.png'
import linkedin from '../Assets/Linkedin.png'
import "react-step-progress-bar/styles.css";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
function Header({handleLeft,handleRight}) {
  return (
    <>
    <div className='flex flex-col items-center w-[50px] gap-[15px] fixed z-20'>
        <div className='w-[1px] h-[200px] bg-[#ABB2BF]'></div>
        <img src={git} alt='git' className=' hover:cursor-pointer hover:scale-125 transition-transform' />
        <img src={fig} alt='fig' className=' hover:cursor-pointer hover:scale-125 transition-transform' />
        <img src={linkedin} alt='linkin' className=' hover:cursor-pointer hover:scale-125 transition-transform' />
    </div>

  
    <div className='z-10 flex items-center flex-col py-4 px-32 gap-4 w-[100%] bg-[#191B1F] fixed'>
    <div className='grid grid-flow-col items-center w-[100%] justify-items-stretch'>
    <div className='w-36 h-12 text-white bg-gray-800 rounded-[40px] border border-[#444955] flex items-center justify-center justify-self-end'>
        <p style={{fontFamily:"barlow",fontSize:"20px"}}>Harish</p>
     </div> 

     <div className='flex gap-8 justify-self-end'>  
      <FiArrowLeftCircle size={30} color='gray' onClick={handleLeft} className=' hover:cursor-pointer hover:scale-125 transition-transform'/>
      <FiArrowRightCircle size={30} color='gray' onClick={handleRight} className=' hover:cursor-pointer hover:scale-125 transition-transform' />
      </div>
      </div> 
     <div className='w-[100%]'>
     <ProgressBar
        percent={25}
        filledBackground="linear-gradient(to right, #9C4BB4, #f0bb31)"
      />
     </div>
     
     </div>
    
     </>
  )
}

export default Header