import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2'
import { Link, useNavigate } from "react-router-dom";

import {showWarningMessage , showErrorMessage } from '../../Components/Common Components/Alerts/Alerts'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Page Heading
import PageHeading from "../../Components/Common Components/PageHeading/PageHeading";

// Image
import SignUpImg from "../../Assets/sign-bg.png";

// ICONS
import { GoKey } from "react-icons/go";
import { PiToolbox } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";
import { VscEyeClosed } from "react-icons/vsc";
import { VscEye } from "react-icons/vsc";

function SignupPage() {
  // DOM
  const NeviGatLogIn = useNavigate()
  // validFlag
  const [validFlag, setValidFlag] = useState({ email: false, password: false });
  // ERROR
  const [error, setError] = useState({ emailError: "", passwordError: "" });

  const [passwordType , setPasswordType ] = useState("password");

  const handelShowPassword =()=> {
    if(passwordType === "password"){
      setPasswordType("text")
    }else{
      setPasswordType("password")
    }
  }

  //local store data get
  const [User, setUser] = useState([]);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("nicicoUser")));
  }, []);

  //REGEX
  let Email_regex = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/;
  let strongPass_Regex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})"
  );
  let mediumPass_Regex = new RegExp(
    "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
  );

  // VALIDATION EMAIL && PASSWORD
  const EMAIL_input = (even) => {
    if (Email_regex.test(even.target.value)) {
    
      setError({
        emailError: (error.emailError = "your email is valid"),
        passwordError: error.passwordError,
      });

      setValidFlag({email: validFlag.email = true, password: validFlag.password })
    } else{
      
      setError({
        emailError: (error.emailError = "email is not valid"),
        passwordError: error.passwordError,
      });

      setValidFlag({email: validFlag.email = false, password: validFlag.password })
    }
  };
  // 
  const PASSWORD_input = (even) => {
    if (strongPass_Regex.test(even.target.value)) {
      
      setError({
        emailError: error.emailError,
        passwordError: (error.passwordError = "password is Strong"),
      });

      setValidFlag({email: validFlag.email, password: validFlag.password = true })

    } else if (mediumPass_Regex.test(even.target.value)) {
      setError({
        emailError: error.emailError,
        passwordError: (error.passwordError = "password is Medium"),
      });

      setValidFlag({email: validFlag.email, password: validFlag.password = true })

    } else {
      setError({
        emailError: error.emailError,
        passwordError: (error.passwordError = "password is not valid"),
      });

      setValidFlag({email: validFlag.email, password: validFlag.password = false })
    }
  };

  //FUNCTION SUBMIT 
  function registerNow(even) {
    
    even.preventDefault();
    
    let form = new FormData(even.target);
    let formVal = Object.fromEntries(form.entries());

    if(validFlag.email && validFlag.password){
      // LocalStorage Data 
      if(!localStorage.getItem("nicicoUser")){
        localStorage.setItem("nicicoUser",JSON.stringify([formVal]))
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Thank You For Registration",
          showConfirmButton: false,
          timer: 2000
        });
        setTimeout(() => {
          NeviGatLogIn("/login")
        },2200);
      }
      else{
        const findUser = User.find(X=>X.email === formVal.email);
        if(findUser === undefined){

          localStorage.setItem("nicicoUser",JSON.stringify([...User,formVal]))

          Swal.fire({
            position: "center",
            icon: "success",
            title: "Thank You For Registration",
            showConfirmButton: false,
            timer: 2000
          });
  
          setTimeout(() => {
            NeviGatLogIn("/login")
          },2200);
          
        }
        else{
          showWarningMessage(`user is Already Register ${findUser.email} \n ${findUser.password}`,"top-right")
        }
        setTimeout(() => {
          even.target.reset();
        }, 1500);
      }
    }
    else{
       if(error.emailError === "" || error.passwordError === ""){
          showErrorMessage('Fill Out The Email & Password fild first',"top-center");
       }
    }

  }
  // END OF SUBMIT FUNCTION
  
  //ERROR CLASSES
  let errorClasses = `w-full flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1 ${
    validFlag.email && validFlag.password ? "text-green-500" : "text-red-700"
  }`;

  return (
    <section>
      <ToastContainer/>
      <PageHeading goBackLink="Home" pageTitle="Sign up" />
      <div className="sm:container mx-auto py-9">
        <div className="Sign-Up bg-[#F6F6F6] rounded-lg hover:shadow-md max-w-[50rem] mx-auto">
          <div className="Form-Img">
            <img
              src={SignUpImg}
              alt="SignUp-Here"
              className="block rounded-t-lg w-full mx-auto object-contain"
            />
          </div>
          <div className="Form-data p-10">
            <div className="Form-Head flex justify-start items-start gap-x-3 pb-3">
              <div className="FHead-logo mt-1.5">
                <span className="bg-white inline-flex w-10 h-10 justify-center  items-center rounded-lg">
                  <PiToolbox className=" text-xl" />
                </span>
              </div>
              <div className="FHead-text ">
                <h4 className="text-xl font-medium capitalize">Sign Up</h4>
                <p className="text-sm text-slate-500 font-normal">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account.
                </p>
              </div>
            </div>
            {/* Form  */}
            <form id="Sign-Up-Form" onSubmit={registerNow}>
              {/* User Email */}
              <div className="my-3">
                <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
                  <label
                    htmlFor="input-signIn-Email"
                    className="text-xl flex items-center justify-center"
                  >
                    <HiOutlineMail />
                  </label>
                </div>
                <input
                  type="email"
                  name="email"
                  id="input-signIn-Email"
                  className="border-none p-6 text-sm rounded-lg block w-full ps-12  outline-none"
                  placeholder="Email address"
                  onChange={(even) => {
                    EMAIL_input(even);
                  }}
                />
                </div>
                {/* Error */}
                <span className={errorClasses}>{error.emailError}</span>
              </div>

              {/* Password */}
              <div>
              <div className="relative flex items-center">
                <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
                  <label
                    htmlFor="input-signIn-Password"
                    className="text-xl flex items-center justify-center"
                  >
                    <GoKey />
                  </label>
                </div>
                <input
                  type={passwordType}
                  name="password"
                  id="input-signIn-Password"
                  className="border-none p-8 text-sm rounded-lg block w-full ps-12 h-16 outline-none"
                  placeholder="Password"
                  onChange={(even) => {
                    PASSWORD_input(even);
                  }}
                />
                <button 
                  onClick={()=>handelShowPassword()}
                  type="button"
                  className="absolute inset-y-0 right-2 flex items-center cursor-pointer w-10 justify-center z-[1]"
                >
                  {passwordType === "password" ? <VscEyeClosed className="text-xl" /> :  <VscEye className="text-xl" />  } 
                </button>
              </div>
                {/* Error */}
                <span className={errorClasses}>{error.passwordError}</span>
              </div>
              <div className="validation-box flex items-center justify-between py-3.5">
                <div className="flex items-center">
                  <Link to="/login" className="flex items-center text-sm underline">
                    Already Have Account?
                  </Link>
                </div>
              </div>
              {/* Button */}
              <div className="w-full">
                <button
                  type="submit"
                  className="px-6 py-3.5 text-lg font-medium text-black bg-[#e3e3e3] hover:bg-black hover:text-white transition-all flex items-center justify-center w-full rounded-md text-center capitalize "
                >
                  Register Now
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

export default SignupPage;
