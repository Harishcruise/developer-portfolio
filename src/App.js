import './App.css';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import ProjectSection from './Components/ProjectSection';
import React, {useEffect, useRef, useState} from 'react';
import WorkExperienceSection from './Components/WorkExperienceSection';

function App() {

  const scrollToRef1 = useRef();
  const scrollToRef2 = useRef();
  const scrollToRef3 = useRef();

  const [count,setCount] = useState(1);
  const [percent, setPercent] = useState(0);

  const refs = {
   1:scrollToRef1,
   2:scrollToRef2,
   3:scrollToRef3
  }

  const listenToScrollEvent = () => {
    document.addEventListener("scroll", () => {
      requestAnimationFrame(() => {
        calculateScrollDistance();
      });
    });
  }

  const calculateScrollDistance = () => {
    const scrollTop = window.pageYOffset; // how much the user has scrolled by
    const winHeight = window.innerHeight;
    const docHeight = getDocHeight();

    const totalDocScrollLength = docHeight - winHeight;
    const scrollPostion = Math.floor(scrollTop / totalDocScrollLength * 100)

    setPercent(scrollPostion);
  }

  const getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
  }

  useEffect(()=>{
    listenToScrollEvent();
  })




   const scrollHandleLeft =()=>{
    var reft = refs[count] 
    reft.current.scrollIntoView({behavior:"smooth"})
    setCount(count-1)
    var num = count - 1;
    if(num <= 0){
      setCount(1);
    }else if(num >= 4){
      setCount(3);
    }else{
      setCount(num)
    }
   }

   const scrollHandleRight =()=>{
    var reft = refs[count] 
    reft.current.scrollIntoView({behavior:"smooth"})
    var num = count + 1;
    if(num <= 0){
      setCount(1);
    }else if(num >= 4){
      setCount(3);
    }else{
      setCount(num)
    }
   }

  return (
   <>
   <div className="cursor" />
   <Header handleLeft={scrollHandleLeft} handleRight={scrollHandleRight} percent={percent}/>
    <div className='flex flex-col items-center pt-4 px-32 gap-28 pb-20  overflow-scroll scroll-hide '>
    <div ref={scrollToRef1}>
    </div>
     <HeroSection/>
     
     <div ref={scrollToRef2}>
     </div>
     <ProjectSection/>
     
     <div ref={scrollToRef3}>
     <WorkExperienceSection/>
     </div>
    </div>
    </>
  );
}

export default App;
