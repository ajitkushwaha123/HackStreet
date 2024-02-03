import React, { useState, useEffect } from 'react';
import abs from "../assets/abs.png";
import { absWork } from '../context/Context';
import { useNavigate } from 'react-router-dom';

const AbsWorkout = () => {
  const navigate = useNavigate();
  const [start , setStart] = useState(false);

  const [showDiv, setShowDiv] = useState(0);

  const divs = [
    "https://i.pinimg.com/564x/5f/de/58/5fde58f2fed3f0cdbddcc926060bf99e.jpg",
    "https://i.pinimg.com/564x/5f/de/58/5fde58f2fed3f0cdbddcc926060bf99e.jpg",
    "https://i.pinimg.com/564x/5f/de/58/5fde58f2fed3f0cdbddcc926060bf99e.jpg",
    "https://i.pinimg.com/564x/5f/de/58/5fde58f2fed3f0cdbddcc926060bf99e.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setShowDiv(prevState => prevState + 1);
    }, 2000); // 2000 milliseconds = 2 seconds

    return () => clearInterval(timer); // This will clear the timer when the component unmounts
  }, []);

  const exerciseHandler = () => {
     setStart(true);
  }

  return (
    <div className='w-full h-screen flex items-center justify-between bg-black'>
      <div className='w-[50%] flex flex-col justify-center h-screen items-center'>
       <h1 className='text-[70px] text-white text-bold'> AbsWorkout </h1>
        <img className='' src={abs}/>
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
    <div>
    <div>
      {divs.slice(0, showDiv).map((div, index) => (
        <div key={index} className='h-[90vh] py-5 pr-40 p-5 overflow-y-scroll'>
          <img width={"300px"} height={"300px"} src={div} />
        </div>
      ))}
    </div>
    </div>
    }
    </div>
  )
}

export default AbsWorkout;
