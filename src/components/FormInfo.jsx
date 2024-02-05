import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormInfo = () => {
  const [ind , setInd] = useState(0);
  const [gender , setGender] = useState('');
  const [purpose , setPurpose] = useState(0);
  const [level , setLevel] = useState(0);

  console.log(gender);

  const nextbt = (e) => {
    e.preventDefault();
    setInd(1);
  }

  const nextbt2 = (e) => {
    e.preventDefault();
    setInd(2);
  }

  const navigate = useNavigate();

  const nextbt3 = () => {
    navigate('/abs-workout')
  }

  return (
    <div className='w-full h-screen overflow-hidden flex  px-20 bg-black'>
      <div className='w-[100%] flex flex-col justify-center items-center h-screen'>
        <form className='flex flex-col'> 

          {ind == 0  && 
            <div className='flex flex-col'>
              <div className='flex'>
                <ul className='flex justify-center items-center'>
                  <li onClick={() => setGender(0)} >
                    <input type="checkbox" id="myCheckbox1" />
                    <label htmlFor="myCheckbox1">
                      <img className='rounded-lg shadow-lg shadow-indigo-500/40' src="https://i.pinimg.com/236x/39/28/59/3928590c6abf5debc6c7ad59c974b9ad.jpg" />
                      <h2 className='text-white text-center pt-7 uppercase text-[20px] font-bold'>Male</h2>
                    </label>
                  </li>
                  <li onClick={() => setGender(1)} className='ml-10'>
                    <input type="checkbox" id="myCheckbox2" />
                    <label htmlFor="myCheckbox2">
                      <img className='rounded-lg shadow-lg shadow-indigo-500/40' src="https://i.pinimg.com/236x/c9/40/27/c940276c7cc6b275f44fa71dd04b557c.jpg" />
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
              <div className='flex'>
                <ul>
                  <li>
                    <input type="checkbox" id="myCheckbox1" />
                    <label htmlFor="myCheckbox1">
                      <img className='rounded-lg shadow-lg shadow-indigo-500/40' src="https://i.pinimg.com/236x/7f/91/2b/7f912b092e71134f0e7db187be68f37b.jpg" />
                      <h2 className='text-white text-center pt-7 uppercase text-[20px] font-bold'>Beginners</h2>
                    </label>
                  </li>
                  <li className='ml-10'>
                    <input type="checkbox" id="myCheckbox2" />
                    <label htmlFor="myCheckbox2">
                      <img className='rounded-lg shadow-lg shadow-indigo-500/40' src="https://i.pinimg.com/236x/40/3a/35/403a350b2cf2032880469988baad11b2.jpg" />
                      <h2 className='text-white text-center pt-7 uppercase text-[20px] font-bold'>Intermediate</h2>
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
              <div className='flex'>
                <ul>
                  <li>
                    <input type="checkbox" id="myCheckbox1" />
                    <label htmlFor="myCheckbox1">
                      <img className='rounded-lg shadow-lg shadow-indigo-500/40' src="https://i.pinimg.com/236x/7f/91/2b/7f912b092e71134f0e7db187be68f37b.jpg" />
                      <h2 className='text-white text-center pt-7 uppercase text-[20px] font-bold'>Weight Loss</h2>
                    </label>
                  </li>
                  <li className='ml-10' onClick={() => setPurpose(1)}>
                    <input type="checkbox" id="myCheckbox2" />
                    <label htmlFor="myCheckbox2">
                      <img className='rounded-lg shadow-lg shadow-indigo-500/40' src="https://i.pinimg.com/236x/40/3a/35/403a350b2cf2032880469988baad11b2.jpg" />
                      <h2 className='text-white text-center pt-7 uppercase text-[20px] font-bold'>Weight Gain</h2>
                    </label>
                  </li>
                </ul>
              </div>
              <div className='flex text-white flex-col justify-center items-center'>
                <button onClick={(e) => {nextbt3(e)}} className='flex justify-center rounded-lg text-bold uppercase text-[20px] px-7 py-1 bg-primary mt-10 shadow-xl shadow-indigo-500/40 text-white rounder-lg items-center'>Next</button>
              </div>
            </div>
          }
        </form>
      </div>
    </div>
  )
}

export default FormInfo;
