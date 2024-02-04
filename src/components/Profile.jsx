import React from 'react'
import { useUserAuth } from '../context/UserAuthContext'
import { useNavigate } from 'react-router-dom';
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import Heatmap from './Heatmap';

const Profile = () => {
    const {user , logout} = useUserAuth();
    console.log(user);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try{
            await logout();
            navigate('/login');
        }catch(err)
        {
            console.log(err.name);
        }
    }
  return (
    <div>
      {/* <div><img src={user.photoURL}/> Hello , welcome <br/> {user && user.displayName} {user && user.email}</div>
      <button onClick={() => {handleLogout()}}>Logout</button> */}

      <div className='w-full text-white bg-black'>
        <h2 className='text-white text-[60px] text-center pt-10'>Profile</h2>
        <div className='flex flex-col justify-center items-center pt-5'>
          <img className='w-[120px] rounded-full' src={user.photoURL} />
          <div className='mt-5 text-bold uppercase text-[22px]'>{user && user.displayName}</div>
          <div className='flex text-[20px] pt-3 text-yellow-600'><FaStar className='mr-2'/><FaStar className='mr-2'/><FaStar className='mr-2'/></div>
          <h2 className='pt-5 text-[20px]'>Max Streak : <span className='text-primary'>28 Days</span></h2>
        </div>

        <Heatmap/>
      </div>
    </div>
  )
}

export default Profile