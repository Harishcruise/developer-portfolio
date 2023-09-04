import React from 'react'
import git from '../Assets/Github.png'
import mail from '../Assets/Email.svg'
import linkedin from '../Assets/Linkedin.png'
function Footer() {
  return (
    <div className='flex pb-8 flex-col items-center text-white'>
    <div  className='flex w-[100%] h-[160px] border-t border-t-[gray] items-center justify-evenly text-white'>
    <div >
      <div style={{display:"flex",flexDirection:"row",gap:"100px"}}>
      <p style={{fontFamily:"barlow"}}>Harish </p> <p style={{color:"gray",fontFamily:"barlow"}}>kumarav3@uwindsor.ca</p>
      </div>
      <div>
      <p style={{wordSpacing:"5px",}}>Software engineer and Full-stack developer </p>
      </div>
    </div>

    <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
      <div>
<p style={{fontSize:"24px",fontFamily:"barlow"}}>Media</p>
      </div>
      <div className='flex gap-4'>
      <img src={git} alt='git' onClick={()=>{window.open("https://github.com/Harishcruise",'_blank')}}  className=' hover:cursor-pointer hover:scale-125 transition-transform' />
        <img src={mail} alt='fig' onClick={()=>{window.open("mailto:kumarav3@windsor.ca")}}  className=' hover:cursor-pointer hover:scale-125 transition-transform' />
        <img src={linkedin} alt='linkin' onClick={()=>{window.open("https://www.linkedin.com/in/harish-kumaravel/",'_blank')}} className=' hover:cursor-pointer hover:scale-125 transition-transform' />
      </div>
    </div>

   

    </div>
    <p style={{fontFamily:"barlow"}}>© Harish Kumaravel All rigths reserved 2023</p>
    </div>
  )
}

export default Footer