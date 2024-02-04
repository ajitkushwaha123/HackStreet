import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Exercise = () => {
   const navigate = useNavigate();
   const [gender , setGender] = useState(0);
   const chestWorkout  = () => {
      navigate('/abs-workout')
   }

   const female = () => {
      setGender(1);
   }

   const male = () => {
      setGender(0);
   }

   
  return (
   <div className='bg-black w-full'>
       <div className='text-white pt-60 flex justify-center items-center '>
         <button onClick={() => {male()}} className='text-[white]  rounded-lg font-bold text-[20px] bg-primary px-10 py-2'>Male</button>
         <button onClick={() => {female()}} className='text-[white] ml-8 rounded-lg font-bold text-[20px] bg-primary px-10 py-2'>Female</button>
       </div>
       {gender == 0 && <div className='w-full bg-black'>
        <div className='w-full pb-10 z-[100] bg-black'>
          <h2 className='text-white font-serif font-bold text-[60px] pt-[50px] text-center'>With Equipment</h2>
          <div className='flex w-full px-[100px] justify-between mt-[60px]'>
            <div className='ml-5' onClick={chestWorkout}>
               <img className='rounded-lg absolute' width={"300px"} height={"270px"} src='https://tse4.mm.bing.net/th?id=OIP.ZVlIw-lVx0A8P2j29MAXKwHaE8&pid=Api&P=0&h=180'/>
               <div className='relative bg-[#00001087] w-[300px] flex justify-center items-center h-[250px]'>
                <h3 className='text-white font-semibold uppercase font-serif text-[22px]'>Chest Workout</h3>
               </div>
            </div>
            <div className='' onClick={chestWorkout}>
            {/* https://tse2.mm.bing.net/th?id=OIP.c3JivJLxuiqX_Dym4xdIMQHaEK&pid=Api&P=0&h=180 */}
            <img className='rounded-lg absolute' width={"300px"} height={"270px"} src='https://media.istockphoto.com/photos/heavy-workout-at-the-gym-picture-id623587028?k=6&m=623587028&s=612x612&w=0&h=dAp4S_rHuWI4fq5YTLZAqDvwWBQQsaan7n__6YUg2Gw='/>
               <div className='relative bg-[#00001087] w-[300px] flex justify-center items-center h-[250px]'>
                <h3 className='text-white font-semibold uppercase font-serif text-[22px]'>Leg Workout</h3>
               </div>
            </div>
            <div className='' onClick={chestWorkout}>
               <img className='rounded-lg absolute' width={"300px"} height={"250px"} src='https://tse1.mm.bing.net/th?id=OIP.gJz-XowTJyAyRi93sDYtqwHaEt&pid=Api&P=0&h=180'/>
               <div className='relative bg-[#00001087] w-[300px] flex justify-center items-center h-[250px]'>
                <h3 className='text-white font-semibold uppercase font-serif text-[22px]'>Abs Workout</h3>
               </div>
            </div>
            <div className='' onClick={chestWorkout}>
               <img className='rounded-lg absolute' width={"300px"} height={"250px"} src='https://tse4.mm.bing.net/th?id=OIP.hNVXz111OG8sSx11315cggHaE8&pid=Api&P=0&h=180'/>
               <div className='relative bg-[#00001087] w-[300px] flex justify-center items-center h-[250px]'>
                <h3 className='text-white font-semibold uppercase font-serif text-[22px]'>Arm Workout</h3>
               </div>
            </div>
          </div>
        </div>

        <div className='w-full z-[100] bg-black'>
          <h2 className='text-white font-serif font-bold text-[60px] py-20 text-center'>Without Equipment</h2>
          <div className='flex w-full px-[100px] justify-between mt-[60px]'>
            <div className='ml-5' onClick={chestWorkout}>
               <img className='rounded-lg absolute' width={"300px"} height={"270px"} src='https://tse4.mm.bing.net/th?id=OIP.pC4E70L2uurZPraJ74eAvgHaEo&pid=Api&P=0&h=180'/>
               <div className='relative bg-[#00001087] w-[300px] flex justify-center items-center h-[250px]'>
                <h3 className='text-white font-semibold uppercase font-serif text-[22px]'>Chest Workout</h3>
               </div>
            </div>
            <div className='' onClick={chestWorkout}>
            {/* https://tse2.mm.bing.net/th?id=OIP.c3JivJLxuiqX_Dym4xdIMQHaEK&pid=Api&P=0&h=180 */}
            <img className='rounded-lg absolute' width={"300px"} height={"270px"} src='https://tse4.mm.bing.net/th?id=OIP.5yL3Ryzb1cdpV-d-H49gKwHaEu&pid=Api&P=0&h=180'/>
               <div className='relative bg-[#00001087] w-[300px] flex justify-center items-center h-[250px]'>
                <h3 className='text-white font-semibold uppercase font-serif text-[22px]'>Leg Workout</h3>
               </div>
            </div>
            <div className='' onClick={chestWorkout}>
               <img className='rounded-lg absolute' width={"300px"} height={"250px"} src='https://tse2.mm.bing.net/th?id=OIP.5xjX4uoEki70IugALNjIXAHaEp&pid=Api&P=0&h=180'/>
               <div className='relative bg-[#00001087] w-[300px] flex justify-center items-center h-[250px]'>
                <h3 className='text-white font-semibold uppercase font-serif text-[22px]'>Abs Workout</h3>
               </div>
            </div>
            <div className='' onClick={chestWorkout}>
               <img className='rounded-lg absolute' width={"300px"} height={"250px"} src='https://img5.goodfon.com/wallpaper/nbig/2/67/arms-muscles-bodybuilder.jpg'/>
               <div className='relative bg-[#00001087] w-[300px] flex justify-center items-center h-[250px]'>
                <h3 className='text-white font-semibold uppercase font-serif text-[22px]'>Arm Workout</h3>
               </div>
            </div>
          </div>
        </div>
      </div>  
      }

      {gender == 1 && <div className='w-full bg-black'>
        <div className='w-full pb-10 z-[100] bg-black'>
          <h2 className='text-white font-serif font-bold text-[60px] pt-[50px] text-center'>With Equipment</h2>
          <div className='flex w-full px-[100px] justify-between mt-[60px]'>
            <div className='ml-5' onClick={chestWorkout}>
               <img className='rounded-lg absolute' width={"300px"} height={"270px"} src='https://tse3.mm.bing.net/th?id=OIP.9qF1U6-yNZFoYfEWPHCWVAHaE7&pid=Api&P=0&h=180'/>
               <div className='relative bg-[#00001087] w-[300px] flex justify-center items-center h-[250px]'>
                <h3 className='text-white font-semibold uppercase font-serif text-[22px]'>Chest Workout</h3>
               </div>
            </div>
            <div className='' onClick={chestWorkout}>
            {/* https://tse2.mm.bing.net/th?id=OIP.c3JivJLxuiqX_Dym4xdIMQHaEK&pid=Api&P=0&h=180 */}
            <img className='rounded-lg absolute' width={"300px"} height={"270px"} src='https://tse3.mm.bing.net/th?id=OIP.6kLGIMSAv_KXdlM0tbRXsgHaEq&pid=Api&P=0&h=180'/>
               <div className='relative bg-[#00001087] w-[300px] flex justify-center items-center h-[250px]'>
                <h3 className='text-white font-semibold uppercase font-serif text-[22px]'>Leg Workout</h3>
               </div>
            </div>
            <div className='' onClick={chestWorkout}>
               <img className='rounded-lg absolute' width={"300px"} height={"250px"} src='https://tse1.mm.bing.net/th?id=OIP.8k2YlVlTB2c43H9VfBbDBQHaE8&pid=Api&P=0&h=180'/>
               <div className='relative bg-[#00001087] w-[300px] flex justify-center items-center h-[250px]'>
                <h3 className='text-white font-semibold uppercase font-serif text-[22px]'>Abs Workout</h3>
               </div>
            </div>
            <div className='' onClick={chestWorkout}>
               <img className='rounded-lg absolute' width={"300px"} height={"250px"} src='https://tse4.mm.bing.net/th?id=OIP.aCODBm1wpCYX6ssitzJK9gHaEo&pid=Api&P=0&h=180'/>
               <div className='relative bg-[#00001087] w-[300px] flex justify-center items-center h-[250px]'>
                <h3 className='text-white font-semibold uppercase font-serif text-[22px]'>Arm Workout</h3>
               </div>
            </div>
          </div>
        </div>

        <div className='w-full z-[100] bg-black'>
          <h2 className='text-white font-serif font-bold text-[60px] py-20 text-center'>Without Equipment</h2>
          <div className='flex w-full px-[100px] justify-between mt-[60px]'>
            <div className='ml-5' onClick={chestWorkout}>
               <img className='rounded-lg absolute' width={"300px"} height={"270px"} src='https://tse1.mm.bing.net/th?id=OIP.kcUfgZTJECKeA1Ok0WIjTgHaEu&pid=Api&P=0&h=180'/>
               <div className='relative bg-[#00001087] w-[300px] flex justify-center items-center h-[250px]'>
                <h3 className='text-white font-semibold uppercase font-serif text-[22px]'>Chest Workout</h3>
               </div>
            </div>
            <div className='' onClick={chestWorkout}>
            {/* https://tse2.mm.bing.net/th?id=OIP.c3JivJLxuiqX_Dym4xdIMQHaEK&pid=Api&P=0&h=180 */}
            <img className='rounded-lg absolute' width={"300px"} height={"270px"} src='https://tse3.mm.bing.net/th?id=OIP.F_yYAA874qUoNKzuDm1beAHaEK&pid=Api&P=0&h=180'/>
               <div className='relative bg-[#00001087] w-[300px] flex justify-center items-center h-[250px]'>
                <h3 className='text-white font-semibold uppercase font-serif text-[22px]'>Leg Workout</h3>
               </div>
            </div>
            <div className='' onClick={chestWorkout}>
               <img className='rounded-lg absolute' width={"300px"} height={"250px"} src='https://tse1.mm.bing.net/th?id=OIP.u6vXvWqGKsOw1NZxeo3aawHaEK&pid=Api&P=0&h=180'/>
               <div className='relative bg-[#00001087] w-[300px] flex justify-center items-center h-[250px]'>
                <h3 className='text-white font-semibold uppercase font-serif text-[22px]'>Abs Workout</h3>
               </div>
            </div>
            <div className='' onClick={chestWorkout}>
               <img className='rounded-lg absolute' width={"300px"} height={"250px"} src='https://tse1.mm.bing.net/th?id=OIP.FtxhVy7PaFUkke5TnhzxpgHaE7&pid=Api&P=0&h=180'/>
               <div className='relative bg-[#00001087] w-[300px] flex justify-center items-center h-[250px]'>
                <h3 className='text-white font-semibold uppercase font-serif text-[22px]'>Arm Workout</h3>
               </div>
            </div>
          </div>
        </div>
      </div>  
      }
   </div>
  )
}

export default Exercise
