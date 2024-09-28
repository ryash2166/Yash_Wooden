import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2'
//Page heading
import PageHeading from "../../Components/Common Components/PageHeading/PageHeading";
// IMAGES
import LoginImg from "../../Assets/login-bg.png";

import {showWarningMessage , showErrorMessage } from '../../Components/Common Components/Alerts/Alerts'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ICONS
import { GoLock } from "react-icons/go";
import { GoKey } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { VscEyeClosed } from "react-icons/vsc";
import { VscEye } from "react-icons/vsc";

// DOM
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const NavigateHome = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  //local store data get
  const [prevUsers,setPrevUsers]=useState([]);

  useEffect(()=>{
    setPrevUsers(localStorage.getItem("nicicoUser")!==null ? JSON.parse(localStorage.getItem("nicicoUser")) : [])
    
    if(localStorage.getItem("nicicoUser") === null){
      localStorage.setItem('nicicoUser',JSON.stringify([{email: "admin@gmail.com", password: "admin1234"}]))
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Bot Id and Password",
        text: `email : admin@gmail.com & password : admin1234`,
        showConfirmButton: true,
        timer: 3600
      });
    }
  },[])

  const [passwordType , setPasswordType ] = useState("password");

  const handelShowPassword =()=> {
    if(passwordType === "password"){
      setPasswordType("text")
    }else{
      setPasswordType("password")
    }
  }

  // FUNCTION
  function loginNow(even) {
    even.preventDefault();
    console.log(prevUsers);
    if(email === "" || password === ""){
      showErrorMessage("fil Out the Email & Password Fild",'top-center')
    }else{
      const findUser = prevUsers.find(X=>X.email === email && X.password === password)
      console.log("local User",findUser);
      if(findUser !== undefined){
        Swal.fire({
          icon: "success",
          title: "Welcome To Ninico E Commerce",
          text: "LogIn Was Success Full",
          showConfirmButton: false,
          timer: 2000
        });
        setTimeout(() => {
          NavigateHome("/")
        }, 2200);
        even.target.reset();
      }else{
        showWarningMessage("Email Or Password Is Invalid")
      }
    }
  }

  return (
    <section>
      <ToastContainer/>
      <PageHeading goBackLink="Home" pageTitle="Log in" />
      <div className="sm:container mx-auto py-9">
        {/* LOGIN FROM */}
        <div className="Login-Here bg-[#F6F6F6] rounded-lg hover:shadow-md mb-11 lg:mb-0 max-w-[50rem] mx-auto">
          <div className="Form-Img">
            <img
              src={LoginImg}
              alt="Login-Here"
              className="block rounded-t-lg w-full mx-auto object-contain"
            />
          </div>
          <div className="Form-data p-10">
            {/* Form Heading */}
            <div className="Form-Head flex justify-start items-start gap-x-3 pb-3">
              <div className="FHead-logo mt-1.5">
                <span className="bg-white inline-flex w-10 h-10 justify-center  items-center rounded-lg">
                  <GoLock className=" text-xl" />
                </span>
              </div>
              <div className="FHead-text ">
                <h4 className="text-xl font-medium capitalize">Login Here</h4>
                <p className="text-sm text-slate-500 font-normal">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account.
                </p>
              </div>
            </div>
            {/* Form  */}
            <form id="Login-Form" onSubmit={loginNow} className="">
              {/* User Email */}
              <div className="relative my-3">
                <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
                  <label
                    htmlFor="input-Login-email"
                    className="text-lg flex items-center justify-center"
                  >
                    <FaRegUser />
                  </label>
                </div>
                <input
                  type="email"
                  id="input-Login-email"
                  onChange={(even) => {
                    setEmail(even.target.value);
                  }}
                  className="border-none p-6 text-sm rounded-lg block w-full ps-12  outline-none"
                  placeholder="Username / email address"
                />
              </div>
              {/* Password */}
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
                  <label
                    htmlFor="input-Login-Password"
                    className="text-lg flex items-center justify-center"
                  >
                    <GoKey />
                  </label>
                </div>
                <input
                  type={passwordType}
                  id="input-Login-Password"
                  onChange={(even) => {
                    setPassword(even.target.value);
                  }}
                  className="border-none p-6 text-sm rounded-lg block w-full ps-12  outline-none"
                  placeholder="Password"
                />
                <button 
                  onClick={()=>handelShowPassword()}
                  type="button"
                  className="absolute inset-y-0 right-2 flex items-center cursor-pointer w-10 justify-center z-[1]"
                >
                  {passwordType === "password" ? <VscEyeClosed className="text-xl" /> :  <VscEye className="text-xl" />  } 
                </button>
              </div>
              <div className="validation-box flex items-center justify-between py-3.5">
                <div className="flex items-center">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 rounded border-none  bg-[#D51243] outline-none  transition-all"
                  />
                  <label htmlFor="default-checkbox" className="ms-2 text-sm ">
                    Remember me
                  </label>
                </div>
                <div className="validation-box flex items-center justify-between py-3.5">
                <div className="flex items-center">
                  <Link to="/sign-in" className="flex items-center text-sm underline">
                    Do Not Have Account?
                  </Link>
                </div>
              </div>
              </div>
              {/* Button */}
              <div className="w-full">
                <button
                  type="submit"
                  className="px-6 py-3.5 text-lg font-medium text-white bg-[#d51243f5] hover:bg-[#D51243] flex items-center justify-center w-full rounded-md text-center capitalize "
                >
                  Login Now
                  <BsArrowRight className="text-2xl ms-8 " />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
