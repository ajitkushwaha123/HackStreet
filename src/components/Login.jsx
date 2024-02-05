import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { IoKeySharp } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaPhone } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';
import { ToastContainer , toast  } from 'react-toastify';
import { FaExclamationCircle } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaSkull } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const {login , googleSignIn} = useUserAuth();
    const navigate = useNavigate();
    const [password , setPassword] = useState("");
    const [email , setEmail] = useState("");
    const [error , setError] = useState("");
    const [correct  , setCorrect] = useState(-1);




    const loginbtn = () => {
        navigate('/register')
    }

    const validator = (e) => {
        const emailOnChange = e.target.value;
        setEmail(emailOnChange);

      const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

      if(email.match(pattern))
        {
            console.log("true");
            setCorrect(1);
        }
        else
        {
            console.log("false");
            setCorrect(0);
        }

    }

    const submitHandler = async (e) => {
      e.preventDefault();
      console.log(email , password);
      setError("");

    const emailValue = e.target.value;
    setEmail(emailValue);

      try {
        await login(email, password);
        toast.success("Login Success", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    
        // Set a timeout to navigate to the home page after 2 seconds
        setTimeout(() => {
            navigate("/");
        }, 1000);
    } 
    catch(err)
      {

         setError(err.message);
        //  toast(err.message);
        toast.error(err.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
         // transition: "Bounce",
          });
      }
    }

    const handlegoogleSignIn = async (e) => 
    {
      e.preventDefault();
      try{
        await googleSignIn();
        toast.success("Login Success", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
      });
  
      // Set a timeout to navigate to the home page after 2 seconds
      setTimeout(() => {
          navigate("/");
      }, 1000);
        navigate('/');
      }catch(err)
      {
        setError(err.message);

        toast.error(err.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
         // transition: "Bounce",
          });
      }
    }

  return (
    <div className='w-full h-screen text-white overflow-hidden bg-black flex justify-center items-center'>
    
        <ToastContainer />

      <div className='bg-black h-[85%] sm:h-[90%] w-[90%] km:flex rounded-md shadow-red-500/40 '>

        <div className='md:w-[50%] flex flex-col justify-center items-center h-full p-10'>
        <form onSubmit={submitHandler}>
          <h1 className='text-[#EE4F63] text-[35px] text-center font-bold font-poppins'>Login</h1>
          {/* <div>{error}</div> */}
          <div className='text-center flex flex-col py-3 pr-1 items-center justify-center mt-5'>
          <div className={`w-[280px] xs:w-[280px] sm:w-[350px] flex justify-normal sm:justify-between pl-6 items-center border-2 shadow-sm mt-5 ${correct == 1 ? 'border-green-500' : correct == 0 ? 'border-red-500' : ''} rounded-md`}>
              <MdMarkEmailUnread className='text-[#7E7C7C] w-[15px] text-[15px] h-[15px]' />
              <input className='text-white bg-black outline-none py-2 px-2 sm:mr-[70px] text-[15px] ' onChange={(e) => {validator(e)}} type='email' placeholder='Email'/>
              {correct == '-1' && <FaExclamationCircle className='sm:mr-5 w-[15px] h-[15px] text-[15px]' />}
              {correct == '0' && <FaSkull className='sm:mr-5 text-primary w-[15px] text-[15px] h-[15px]' />}
              {correct == '1' && <BsCheckCircleFill className='sm:mr-5 text-green-500 w-[15px] h-[15px]'/>}
            </div>
            <div className='w-[280px] xs:w-[280px] sm:w-[350px] flex pl-6 items-center border-2 shadow-sm mt-5 border-slate-200 rounded-md'>
              <IoKeySharp className='text-[#E0E0E0] text-[15px]' />
              <input className='text-white bg-black outline-none px-2 py-2 ' onChange={(e) => setPassword(e.target.value)}  type='password' placeholder='Password'/>
            </div>

            <div className='flex w-[250px] xs:w-[280px] sm:w-[350px] px-2 py-3 justify-between decoration-none'>
                <div><input className='text-white bg-black list-none' type='checkbox'/>Remember</div>
                <div><h3>Forgot <span className='text-[#227eff]'>Password ?</span></h3></div>
            </div>

            <div><button className='bg-[#EE4F63] w-[250px] xs:w-[280px] sm:w-[350px] py-2 mt-4 rounded-md text-white text-bold text-[20px]'>Login</button></div>

            <h3 className='pt-5 font-bold text-[20px] text-[#E0E0E0]'>Login with</h3>
            <div className='flex mt-4 text-[20px]'>
               <div onClick={handlegoogleSignIn} className='p-2 border-2 hover:scale-125 transition-all duration-200 ease-in-out delay-200 border-slate-200 rounded-md'><FcGoogle /></div>
               <div className='p-2 border-2 text-[#0087FE] hover:scale-125 transition-all duration-200 ease-in-out delay-200 ml-4 hover:border-green-500 border-slate-200 rounded-md'><FaPhone /></div>
               <div className='p-2 border-2 text-[#25D366] hover:scale-125 transition-all duration-200 ease-in-out delay-200 ml-4 hover:border-green-500 border-slate-200 rounded-md'><FaWhatsapp /></div>
            </div>

            <div className='mt-6'>
                    New Here ? <span onClick={() => {loginbtn()}} className='cursor-pointer text-[#227eff]'>Create a new Account .</span>
            </div>
          </div>
          </form>
        </div>
      
        
        <div className='hidden bg-black km:block sm:flex justify-center items-center w-[50%] h-screen'>
           <img src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_700,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/246641e8-00d7-42f7-ac92-3207665e35f7.svg'/>
        </div>
      </div>
    </div>
  )
}

export default Login