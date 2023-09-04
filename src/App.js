import './App.css';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import ProjectSection from './Components/ProjectSection';
import React, {useEffect, useRef, useState} from 'react';
import CustomCursor from './Assets/cursor.svg'
import WorkExperienceSection from './Components/WorkExperienceSection';
import Footer from './Components/Footer';
import loader from './Assets/Loader.gif'

function App() {

  const [showMobileWarning, setShowMobileWarning] = useState(false)
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    scrollToRef1.current.scrollIntoView({behavior:"smooth"})
    if(window.innerWidth <= 800)
      setShowMobileWarning(true)
  }, [])

  // setTimeout(()=>{
  //   setLoading(false);
  // },[1500])

  const scrollToRef1 = useRef();
  const scrollToRef2 = useRef();
  const scrollToRef3 = useRef();

  const [count,setCount] = useState(2);
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
      setCount(3);
    }else if(num >= 4){
      setCount(1);
    }else{
      setCount(num)
    }
   }

   const scrollHandleRight =()=>{
    var reft = refs[count] 
    reft.current.scrollIntoView({behavior:"smooth"})
    var num = count + 1;
    if(num <= 0){
      setCount(3);
    }else if(num >= 4){
      setCount(1);
    }else{
      setCount(num)
    }
   }

  return (
   <>
   {showMobileWarning ? <div className='flex w-[100%] h-[800px] items-center justify-center'>
    <div class=" hover:cursor-pointer relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
        <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-gradient-to-r from-[#9C4BB4] to-[#f0bb31] rounded-full group-hover:w-56 group-hover:h-56"></span>
        <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
        <p style={{fontFamily:"barlow",fontSize:"20px",position:"relative"}}>View in Desktop View</p>
        </div>
   </div> :
   <div >
   <Header handleLeft={scrollHandleLeft} handleRight={scrollHandleRight} percent={percent}/>
    <div className='flex flex-col items-center pt-4 px-32 gap-28 pb-20  overflow-scroll scroll-hide '>
    <div ref={scrollToRef1}>
    </div>
     <HeroSection/>
     
     <div ref={scrollToRef2}>
     </div>
     <ProjectSection/>
     
     <div ref={scrollToRef3}>
     </div>
     <WorkExperienceSection/>
     
    </div>

    <Footer/>
    </div>
    }
   
    </>
  );
}

export default App;
