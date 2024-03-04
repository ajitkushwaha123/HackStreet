import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GiWeightLiftingUp } from "react-icons/gi";
import { GiBodyHeight } from "react-icons/gi";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer , toast  } from 'react-toastify';


const FormInfo = () => {
  const [ind , setInd] = useState(0);
  const [gender , setGender] = useState(0);
  const [goal , setGoal] = useState(0);
  const [level , setLevel] = useState(0);
  const [weight , setWeigth] = useState('');
  const [height , setHeight]  = useState('');
  const [mi , setMI] = useState('');

  console.log(gender);

  const nextbt = (e) => {
    e.preventDefault();
    setInd(1);
  }

  const nextbt2 = (e) => {
    e.preventDefault();
    setInd(2);
  }

  const nextbt3 = (e) => {
    console.log("called");
    e.preventDefault();
    setInd(3);
  }

  const navigate = useNavigate();
  // const nextbt4 = (e) => {
  //   // console.log("called");
  //   e.preventDefault();
  //   console.log(gender , goal , level , weight , height);
  //   // navigate('/profile');
  // }

  const nextbt4 = (e) => {
    e.preventDefault();
    const bmIndex = weight / (height*height);e
    setMI(bmIndex);

    toast.success("Loading Best Workouts", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
  });

  setTimeout(() => {
    navigate('/profile');
  } , 2000);
  }

  return (
    <div className='w-full h-screen overflow-hidden flex  px-20 bg-black'>
      <div className='w-[100%] flex flex-col justify-center items-center h-screen'>
        <form className='flex flex-col'> 

          {ind == 0  && 
            <div className='flex-col'>
            <h2 className='font-bold text-[38px] pb-5 text-white text-center z-100 -translate-y-8'>Gender</h2>
              <div className='flex'>
                <ul className='flex justify-center items-center'>
                  <li onClick={() => setGender(0)} className='-translate-y-10 '>
                    <input type="checkbox" id="myCheckbox1" />
                    <label htmlFor="myCheckbox1">
                      <img className='rounded-lg w-[120px] km:h-[280px] km:w-[auto]  shadow-md shadow-indigo-500/40' src="https://i.pinimg.com/236x/39/28/59/3928590c6abf5debc6c7ad59c974b9ad.jpg" />
                      <h2 className='text-white text-center pt-7 uppercase text-[20px] font-bold'>Male</h2>
                    </label>
                  </li>
                  <li onClick={() => setGender(1)} className='ml-10 translate-y-10 '>
                    <input type="checkbox" id="myCheckbox2" />
                    <label htmlFor="myCheckbox2">
                      <img className='rounded-lg w-[120px] km:h-[280px] km:w-[auto]  shadow-md shadow-indigo-500/40' src="https://i.pinimg.com/236x/c9/40/27/c940276c7cc6b275f44fa71dd04b557c.jpg" />
                      <h2 className='text-white text-center pt-7 uppercase text-[20px] font-bold'>Female</h2>
                    </label>
                  </li>
                </ul>
              </div>
              <div className='flex text-white flex-col justify-center items-center'>
                <button onClick={(e) => {nextbt(e)}} className='flex justify-center rounded-lg text-bold uppercase text-[20px] px-7 py-1 bg-primary mt-10 shadow-xl shadow-indigo-500/40 text-white rounder-lg items-center'>Next</button>
              </div>
            </div>
          }

          
          {ind == 1  && 
            <div>
              <div className='flex flex-col px-6'>
              <h2 className='font-bold text-[38px] pb-5 text-white text-center z-100 -translate-y-8'>Fitness Level</h2>
                <ul className='flex justify-center items-center'>
                  <li onClick={() => setLevel(0)} className='translate-y-10 '>
                    <input type="checkbox" id="myCheckbox1" />
                    <label htmlFor="myCheckbox1">
                      <img className='rounded-lg w-[120px] km:h-[280px] km:w-[auto]  shadow-md shadow-indigo-500/40' src="https://i.pinimg.com/236x/7f/91/2b/7f912b092e71134f0e7db187be68f37b.jpg" />
                      <h2 className='text-white text-center pt-7 uppercase text-[20px] font-bold'>Beginner</h2>
                    </label>
                  </li>
                  <li onClick={() => setLevel(1)}  className='ml-10 -translate-y-10'>
                    <input type="checkbox" id="myCheckbox2" />
                    <label htmlFor="myCheckbox2">
                      <img className='rounded-lg w-[120px] km:h-[280px] km:w-[auto]  shadow-md shadow-indigo-500/40' src="https://i.pinimg.com/236x/40/3a/35/403a350b2cf2032880469988baad11b2.jpg" />
                      <h2 className='text-white text-center pt-7 uppercase text-[20px] font-bold'>Advanced</h2>
                    </label>
                  </li>
                </ul>
              </div>
              <div className='flex text-white flex-col justify-center items-center'>
                <button onClick={(e) => {nextbt2(e)}} className='flex justify-center rounded-lg text-bold uppercase text-[20px] px-7 py-1 bg-primary mt-10 shadow-xl shadow-indigo-500/40 text-white rounder-lg items-center'>Next</button>
              </div>
            </div>
          }

          {ind == 2  && 
            <div>
              <div className='flex flex-col px-6'>
              <h2 className='font-bold text-[38px] pb-5 text-white text-center z-100 -translate-y-8'>Goal</h2>
                <ul className='flex justify-center items-center'>
                  <li onClick={() => setGoal(0)} className='-translate-y-10 '>
                    <input type="checkbox" id="myCheckbox1" />
                    <label htmlFor="myCheckbox1">
                      <img className='rounded-lg w-[120px] km:h-[280px] km:w-[auto]  shadow-md shadow-indigo-500/40' src="https://i.pinimg.com/474x/30/6b/85/306b852c8d0979f57fefe94a67723e08.jpg" />
                      <h2 className='text-white text-center pt-7 uppercase text-[20px] font-bold'>Weight Loss</h2>
                    </label>
                  </li>
                  <li className='ml-10 translate-y-10' onClick={() => setGoal(1)}>
                    <input type="checkbox" id="myCheckbox2" />
                    <label htmlFor="myCheckbox2">
                      <img className='rounded-lg w-[120px] km:h-[280px] km:w-[auto]  shadow-md shadow-indigo-500/40' src="https://i.pinimg.com/236x/39/28/59/3928590c6abf5debc6c7ad59c974b9ad.jpg" />
                      <h2 className='text-white text-center pt-7 uppercase text-[20px] font-bold'>Build Muscle</h2>
                    </label>
                  </li>
                </ul>
              </div>
              <div className='flex text-white flex-col justify-center items-center'>
                <button onClick={(e) => {nextbt3(e)}} className='flex justify-center rounded-lg text-bold uppercase text-[20px] px-7 py-1 bg-primary mt-10 shadow-xl shadow-indigo-500/40 text-white rounder-lg items-center'>Next</button>
              </div>
            </div>
          }

          {ind == 3  && 
            <div className='w-full flex flex-col justify-center items-center h-screen bg-black'>
                <h2 className='font-bold text-[38px] pb-5 text-white text-center z-100 -translate-y-8'>Calculate BMI</h2>
                <div className='flex-col'>
                   <div className='w-[280px] xs:w-[280px] sm:w-[350px] flex pl-6 items-center border-2 shadow-sm mt-5 border-slate-200 rounded-md'>
                     <GiWeightLiftingUp className='text-[#E0E0E0] text-[18px]' />
                     <input required onChange={(e) => setWeigth(e.target.value)} className='text-white bg-black outline-none px-2 py-2 ' type='text' placeholder='Weight in (KG)'/>
                   </div>

                   <div className='w-[280px] xs:w-[280px] sm:w-[350px] flex pl-6 items-center border-2 shadow-sm mt-5 border-slate-200 rounded-md'>
                     <GiBodyHeight className='text-[#E0E0E0] text-[18px]' />
                     <input required className='text-white bg-black outline-none px-2 py-2 ' onChange={(e) => setHeight(e.target.value)}  type='text' placeholder='Height in (m)'/>
                   </div>
                </div>

                <h3 className='text-[white]'>{mi}</h3>


              <div className='flex text-white flex-col justify-center items-center'>
                <button onClick={(e) => {nextbt4(e)}} className='flex justify-center rounded-lg text-bold uppercase text-[20px] px-7 py-1 bg-primary mt-10 shadow-xl shadow-indigo-500/40 text-white rounder-lg items-center'>Next</button>
              </div>
            </div>
          }

          <ToastContainer />
        </form>
      </div>
    </div>
  )
}

export default FormInfo;
