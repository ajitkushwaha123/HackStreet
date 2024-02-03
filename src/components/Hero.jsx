import React from 'react'
import hero from '../assets/hero.mp4';
import { useNavigate } from 'react-router-dom';
const Hero = () => {

  const navigate = useNavigate();
    
    const getStarted = () => {
      navigate('/register')
    }
    
  return (
    <>

    <div className='w-full h-screen bg-white overflow-hidden'>
       <div className='w-full h-screen absolute'>
         <video height={"100vh"} width={"100%"} autoPlay loop muted src="https://cdn-images.cure.fit/www-curefit-com/video/upload/c_fill,w_1400,ar_1.77,q_auto:eco,dpr_2,vc_auto,f_auto/video/test/we-are-cult-web.mp4"> </video>
       </div>

       <div className='bg-[#00001087] top-0 w-[100%] h-screen relative z-100'>
          <div className='flex justify-center flex-col items-center'>
            <h1 className='text-white font-bold text-[168px] font-serif mt-[200px]'>LifeSync</h1>
            <p className='text-white text-[28px]'>A fitness movement that is worth breaking a sweat for</p>
            <button onClick={() => {getStarted()}} className='bg-white mt-5 px-4 py-1 text-[20px] rounded-lg items-center uppercase font-semibold text-[#F06055] hover:text-[#111]'>Get Started</button>
          </div>
       </div>
    </div>
    </>
  )
}

export default Hero


// import React from 'react'
// import hero from '../assets/hero.mp4';

// const Hero = () => {
//   return (
//     <div className='w-full h-screen'>
//        <div>
//        <video autoplay="" loop="" playsinline="" 
//        poster="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_1400,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/we-are-cult-logo/promo-video-poster.jpg" preload="metadata"
//         muted="" class="style-prefix-16i193b e1o2qubs0">
//         <source src={hero} type="video/mp4">
//         Your browser does not support the video tag.
//        </video>
//        </div>
//     </div>
//   )
// }

// export default Hero
