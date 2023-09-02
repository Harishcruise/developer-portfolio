import React from 'react'
import dp from '../Assets/dp.jpg'

function HeroSection() {
  function previewFile() {
    window.open("https://drive.google.com/file/d/12HMDFl9glxw76xlKTVNpUQgBbv-wVGR0/view?usp=sharing");
  }
  return (
    <>
        <div className='flex flex-col text-white gap-2 w-[100%]'>
        <p style={{fontFamily:"barlow",fontSize:"60px",fontWeight:"600",width:"80%",lineHeight:"78px"}}>Hi, Iam Harish. Software Engineer & Full Stack developer</p>
        <p style={{fontFamily:"barlow",fontSize:"24px",fontWeight:"400",width:"90%",lineHeight:"30px",color:"#B5BAC4"}}>With a passion for crafting seamless digital solutions, I love turning ideas into functional, user-friendly applications.</p>
        
        <div className='flex w-[100%] items-center justify-between'>
        <div  className='w-[625px]   bg-[#373B44] rounded border border-[#444955]'>
        <img alt='' src={dp}  className=' rounded ' />
        </div>

        <div onClick={previewFile} class=" mr-60 hover:cursor-pointer relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
        <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-gradient-to-r from-[#9C4BB4] to-[#f0bb31] rounded-full group-hover:w-56 group-hover:h-56"></span>
        <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
        <p style={{fontFamily:"barlow",fontSize:"20px",position:"relative"}}>Get My Resume</p>
        </div>
        </div>
     </div>
   
    </>
  )
}

export default HeroSection