import React from 'react';
import { FaHeart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link , NavLink } from 'react-router-dom';
import { FaFireAlt } from "react-icons/fa";
import { useUserAuth } from '../context/UserAuthContext'
import { useNavigate } from 'react-router-dom';

// import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {

  const {user , logout} = useUserAuth();
    console.log(user);
    const navigate = useNavigate();

  //   const handleLogout = async () => {
  //     try{
  //         await logout();
  //         navigate('/login');
  //     }catch(err)
  //     {
  //         console.log(err.name);
  //     }
  // }

    const navIcons = [
        // {
        //     id: "wishlist",
        //     link:"/whislist",
        //     icons : <FaHeart />,
        // },
        // {
        //     id: "login",
        //     link:"/login",
        //     icons : <FaUser />,
        // },
        {
            id: "daily",
            link:"/daily-task",
            icons : <FaFireAlt />,
        },
    ]

    const navItems = [
        {
            id: "home",
            link : "/",
            title : "Home",
          },
          {
            id: "exercise",
            title: "Exercises",
            link : "#exercise",
          },
          // {
          //   id: "menut",
          //   title: "Menu",
          //   link : "/register",
          // },
          {
            id: "pages",
            title: "Daily Challenges",
            link : "/daily-task"
          },
          // {
          //   id: "contact",
          //   title: "Fitness Tracker",
          //   link : "/about",
          // },
    ];

  return (
    <div className='w-full as:h-[60px] ss:h-[80px] bg-black flex justify-between items-center align-middle px-7 md:px-12 lg:px-16'>
      <div className='xs:w-[100px] as:w-[90px] md:w-[120px] as:h-[60px] xs:h-[80px]  py-3'>
        {/* <img className='flex justify-center mt-[10px] align-middle' src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_120,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/vman-and-white-cult-text.png" alt="" /> */}
        <h3 className='text-white font-semibold text-[28px] mt-2'>LifeSync</h3>
      </div>

      <nav className='hidden md:block h-[80px] md:flex justify-center items-center align-middle'>
        <ul className='flex text-[15px] font-regular uppercase text-white'>
          {navItems.map((nav , index) => (
            <li key={nav.id} className={`font-poppins  hover:text-primary cursor-pointer text-[14px] ${index === navItems.length - 1 ? 'pr-0' : 'pr-10'}`}>
               <NavLink to={nav.link}>
                  {nav.title}
               </NavLink>
               {/* {(index === 0 || index === 3 || index === 4) && <IoIosArrowDown />} */}
            </li>
          ))}
        </ul>
      </nav>

      <div className=''>
        <ul className='flex text-white as:text-[15px] xs:text-[18px] justify-center '>
            {navIcons.map((icons , index) => (
                <li key = {icons.id} className='xs:mr-4 as:mr-2 as:w-[28px] as:h-[28px] xs:w-[40px] xs:h-[40px] border flex justify-center items-center rounded-lg px-2 hover:text-primary hover:bg-black hover:border hover:border-primary'>
                    <NavLink className='flex px-3 justify-center items-center' to={icons.link}>
                      {icons.icons}
                      {user &&
                        <p className='ml-1'>6</p>
                      }
                    </NavLink>
                </li>
            ))}

            <NavLink to={"/login"} >
            {!user && 
              <button className='xs:px-9  as:px-4 xs:py-2 md:ml-10 ss:ml-2 bg-primary hover:bg-black hover:text-primary hover:border-primary hover:border rounded-lg text-[] font-semibold'>
             Login
             </button>
            }
            </NavLink>
            <NavLink to={"/profile"} >
            {user &&
              <div className='flex justify-center items-center'><img className='rounded-full w-[40px] h-[40px]' src={user.photoURL}/></div>
            }
           </NavLink>
        </ul>

        <div>
          
        </div>
      </div>
    </div>
  )
}

export default Navbar