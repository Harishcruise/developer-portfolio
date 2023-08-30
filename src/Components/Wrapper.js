import React from 'react'
import { MouseParallax, ScrollParallax } from "react-just-parallax";

function Wrapper() {
  return (
    <MouseParallax enableOnTouchDevice strength={0.05}>
    <div className='mx-32 w-5/6 h-[650px] bg-[#6767678f] rounded-xl'></div>
    </MouseParallax>
  )
}

export default Wrapper