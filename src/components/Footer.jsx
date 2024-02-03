import React from 'react';
import { IoSendSharp } from "react-icons/io5";

const Footer = () => {

    const footerData = [
        {
            title : "Address",
            discription : "570 8th Ave,New York, NY 10018 United States",
            btn : "View Google Map",
        },
        {
            title : "Explore Exercise",
            discription : "Get daily exercises task and Updates Explore more",
            btn : "View Exercies",
        },
        {
            title : "Daily Challenges",
            discription : `Monday-Friday: 8am - 4pm Saturday: 9am - 5pm`,
            btn : "Explore Challenges",
        },
        {
            title : "Newsletter",
            discription : "Subscribe Us for more Updates",
            btn : "Subscribe Now",
        },
    ]

  return (
    <div className='lg:px-24 sm:px-10 py-10 w-[100%] h-auto relative bg-black'>

        {/* <div className='absolute'>
            <img className='h-[400px] top-0' src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/30.png" alt="" />
        </div>

        <div className='absolute right-10'>
        <img className='top-0 animate-bounce' src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/3.png" alt="" />
        </div>

        <div className='absolute top-0 left-0'>
            <img width={"90px"} src="	https://html.softtechitltd.com/khadyo/khadyo/assets/images/gallery/26.png
" alt="" />
        </div>

        <div className='absolute bottom-0 right-0'>
            <img src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/22.png" alt="" srcset="" />
        </div> */}

        {/* UPPER FOOTER */}

      <div className=''>
        <div className='flex as:flex-col sm:flex-row sm:justify-between items-center border-primary border-b-2 pb-10'>
            <div>
                {/* <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_120,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/vman-and-white-cult-text.png" alt="" /> */}
                <h2 className='font-bold text-[35px] text-white'> LifeSync </h2>
            </div>

            <h1 className='as:text-[22px] as:pt-6 sm:pt-0 text-center sm:text-[28px] font-black text-white'>
            
A fitness movement that is worth<span className='text-textSpan'> breaking a sweat for.</span>
            </h1>

            <button className='bg-primary as:mt-6 sm:mt-0 text-white px-4 py-2 rounded-lg'>Login</button>
        </div>

        {/* Middle Footer */}

        <div className='text-white flex as:flex-col items-center sm:flex-row pt-10'>

            {footerData.map((footer , index) => (
               <div className='lg:px-9 flex flex-col as:items-center sm:items-start sm:px-2'>
                 <h2 className='text-white font-black mt-4 text-[18px]'>{footer.title}</h2>

                 {(index === 3) ?
                 <div className='flex'>
                   <input className='mt-4 py-2 px-2 rounded-lg' placeholder='Enter Your Email' type="text" />
                   <button className='mt-4 px-2 py-2 rounded-sm bg-primary text-[18px]'><IoSendSharp /></button> 
                 </div>
                 : <p className='pt-4 as:px-5 sm:px-0 align-middle as:text-center sm:text-start text-[16px]'>{footer.discription}</p>}

                 <h3 className='pt-4 text-textSpan'>{footer.btn}</h3>
               </div>
            ))}
            
        </div>

        {/* Lower Footer */}

        <div className='text-white text-center pt-12 pb-4'>Copyright © 2023 <span className='text-textSpan'>LifeSync</span> </div>    
      </div>
    </div>
  )
}

export default Footer