import React from 'react';
import Achieve from './Achieve.jsx';
import ach from './ach.jpg';
import ach1 from './ach (1).jpeg';
import ach2 from './ach (2).jpeg';
import ach3 from './ach (3).jpeg';

function Achievements() {
  return (
    <div className='flex flex-col items-center mt-16 pt-16'>
      <h1 className='text-3xl sm:text-4xl md:text-[4vw] font-bold text-sky-300 text-center drop-shadow-[2px_2px_2px_rgba(0,0,0,1)]'>Achievements</h1>
      
      <div className='w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] mx-auto mt-8 space-y-8'>
        <Achieve img={ach} text={"IIT Delhi Hackathon (HackXtream): Under top 15%, competing among 120+ teams."} index={0}/>
        <Achieve img={ach1} text={"1st Runner-Up in BIET Jhansi Hackathon"} index={1}/>
        <Achieve img={ach3} text={"Won Robotics Events in RGIPT"} index={2}/>
        <Achieve img={ach2} text={"Won IIT Guwahati Zonals & Mentor in Robotics Club"} index={3}/>
      </div>
    </div>
  )
}

export default Achievements;
