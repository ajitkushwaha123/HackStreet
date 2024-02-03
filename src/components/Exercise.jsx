import React from 'react'

const Exercise = () => {
  return (
        <div className='w-full h-screen z-[100] bg-black'>
          <h2 className='text-white font-serif font-bold text-[60px] pt-[200px] text-center'>Explore Categories</h2>
          <div className='flex w-full px-[100px] justify-between mt-[60px]'>
            <div className='ml-5'>
               <img className='rounded-lg absolute' width={"300px"} height={"270px"} src='https://tse4.mm.bing.net/th?id=OIP.pC4E70L2uurZPraJ74eAvgHaEo&pid=Api&P=0&h=180'/>
               <div className='relative bg-[#00001087] w-[300px] flex justify-center items-center h-[250px]'>
                <h3 className='text-white font-semibold uppercase font-serif text-[22px]'>Chest Workout</h3>
               </div>
            </div>
            <div className=''>
            {/* https://tse2.mm.bing.net/th?id=OIP.c3JivJLxuiqX_Dym4xdIMQHaEK&pid=Api&P=0&h=180 */}
            <img className='rounded-lg absolute' width={"300px"} height={"270px"} src='https://tse4.mm.bing.net/th?id=OIP.5yL3Ryzb1cdpV-d-H49gKwHaEu&pid=Api&P=0&h=180'/>
               <div className='relative bg-[#00001087] w-[300px] flex justify-center items-center h-[250px]'>
                <h3 className='text-white font-semibold uppercase font-serif text-[22px]'>Abs Workout</h3>
               </div>
            </div>
            <div className=''>
               <img className='rounded-lg absolute' width={"300px"} height={"250px"} src='https://tse1.mm.bing.net/th?id=OIP.gJz-XowTJyAyRi93sDYtqwHaEt&pid=Api&P=0&h=180'/>
               <div className='relative bg-[#00001087] w-[300px] flex justify-center items-center h-[250px]'>
                <h3 className='text-white font-semibold uppercase font-serif text-[22px]'>Abs Workout</h3>
               </div>
            </div>
            <div className=''>
               <img className='rounded-lg absolute' width={"300px"} height={"250px"} src='https://tse3.mm.bing.net/th?id=OIP.A4Z5pFcs6B0Gnp6bdso47AHaE3&pid=Api&P=0&h=180'/>
               <div className='relative bg-[#00001087] w-[300px] flex justify-center items-center h-[250px]'>
                <h3 className='text-white font-semibold uppercase font-serif text-[22px]'>Arm Workout</h3>
               </div>
            </div>
          </div>
        </div>
  )
}

export default Exercise
