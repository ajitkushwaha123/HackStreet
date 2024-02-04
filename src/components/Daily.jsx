import React, { useState, useEffect } from 'react';
import daily from "../assets/dialy.png";
import { absWork } from '../context/Context';
import { useNavigate } from 'react-router-dom';

const Daily = () => {
  const [seconds, setSeconds] = useState(20);
  const [isActive, setIsActive] = useState(false);
  const [changeText , setChangeText] = useState("Rest In");
  const n = absWork.length;

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(20);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);

      if(seconds == 0)
      {
        reset();
        setIsActive(true);
        setChangeText("Ready to Start In");
        //writehere
      }
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  
  const navigate = useNavigate();
  const [start , setStart] = useState(false);

  const [showDiv, setShowDiv] = useState(0);

  const nextExer = () => {
     setShowDiv(prevState => prevState + 1);
  }

  const exerciseHandler = () => {
     setStart(true);
     setIsActive(true);
  }

  const returnHome = () => {
    navigate('/');
  }

  const profileVisit = () => {
    navigate('/profile')
  }
  return (
    <div className='w-full h-screen flex items-center justify-between bg-black'>
      <div className='w-[50%] flex flex-col justify-center h-screen items-center'>
       <h1 className='text-[60px] text-white top-10 absolute text-bold'> Daily Task</h1>
        <img width={"380px"} className='absolute bottom-0' src={daily}/>
      </div>

    {!start &&
      <div className='h-[90vh] py-5 pr-40 p-5 overflow-y-scroll'>
      {absWork.map((absExer , index) => {
        return (
          <div key={index} className='w-[400px] border-b-2 border-[#bdbdbdd0]  flex items-center px-2 shadow-lg mt-4 rounded-sm bg-white h-[120px]'>
            <img className='h-[100px] rounded-sm' src={absExer.imgGif} />
            <div className='pl-4 ml-10'>
              <h2 className='font-bold font-sans text-black uppercase text-[20px]'>{absExer.title}</h2>
              <h3 className='font-semibold text-[#7E7C7C]'>{absExer.time}</h3>
            </div>
          </div>
        )
      })}

      <div onClick={() => {exerciseHandler()}} className='bg-white border-t-2 border-[#bdbdbdd0] h-[60px] flex justify-center items-center  w-[400px] fixed absolute py-2 bottom-8'><button className='text-[white] w-[80%] rounded-lg font-bold text-[20px] bg-primary px-10 py-2'>Start</button></div>
      </div>
    }
    {start &&
    <div className='h-[90vh] py-5 mr-40 w-[400px] absolute right-10 flex flex-col items-center overflow-hidden rounded-lg bg-white p-5'>
    {absWork.map((next , index) => {
      if(index === showDiv) {
      return (
      <div key={index} className='h-[90vh]'>
       <div className='h-[90vh]'>
       <div className=''>
        <img className='h-[200px] w-auto' src={next.imgGif}/>
      </div>

      <h2 className='text-primary text-center mt-20 font-bold text-[30px]'>{changeText}</h2>
      <h1 className='mt-4 text-center font-bold uppercase text-[20px]'>{next.title}</h1>

      <div className="font-bold text-center text-[40px] flex justify-center items-center mt-5 text-black ">
        00 : {seconds}
      </div>

      
      {/* <div className="bg-white w-[400px] border-t-2 border-[#bdbdbdd0] h-[60px] flex justify-center items-center fixed absolute py-2 bottom-0 top-[150%]"> */}
      <div className="white border-t-2 border-[#bdbdbdd0] h-[60px] flex justify-center items-center  w-[400px] fixed absolute py-2 bottom-0 left-0">
        <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'} text-[white] w-[40%] rounded-lg font-bold text-[20px] bg-primary px-10 py-2`} onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        {index < n-1 && <button className="text-[white] ml-4 w-[40%] rounded-lg font-bold text-[20px] bg-primary px-10 py-2" onClick={nextExer}>
         Next
        </button>
        }
        {index == n-1 && <button className="text-[white] ml-4 w-[40%] rounded-lg font-bold text-[20px] bg-primary px-10 py-2" onClick={() => {profileVisit()}}>
         Submit
        </button>
        }
      </div>
    {/* </div> */}

     </div>
    </div>    
      ) }
    })}

    </div>
    }
    </div>
  )
}

export default Daily;
