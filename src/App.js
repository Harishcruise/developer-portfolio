import './App.css';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import ProjectSection from './Components/ProjectSection';
import React, {useRef, useState} from 'react';
import WorkExperienceSection from './Components/WorkExperienceSection';

function App() {
  
   const scrollToRef1 = useRef();
   const scrollToRef2 = useRef();
   const scrollToRef3 = useRef();

   const [count,setCount] = useState(1);

   const refs = {
    1:scrollToRef1,
    2:scrollToRef2,
    3:scrollToRef3
   }

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
   <Header handleLeft={scrollHandleLeft} handleRight={scrollHandleRight}/>
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
