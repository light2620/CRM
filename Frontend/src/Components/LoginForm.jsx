import React, { useRef } from 'react'
import { Link } from "react-router-dom"
import { LuUserRound } from "react-icons/lu";
import { CiLock } from "react-icons/ci";
import { useState } from 'react';
import { useUser } from '../Context/UserContext';
import { LuEye } from "react-icons/lu";
import { LuEyeClosed } from "react-icons/lu";
const LoginForm = () => {

  const [loginCredentials, setLoginCredentials] = useState({ email: "", password: "" })
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const { login } = useUser();
  const emailRef = useRef()
  const passwordRef = useRef()


  function handleChange(e) {
    const name = e.target.name
    const value = e.target.value
    setLoginCredentials((prev) => {
      return {
        ...prev,
        [name]: value
      }
    });
    if (name === 'email') setEmailError(false);
    if (name === 'password') setPasswordError(false);
  }

  function handleSubmit(e) {
    e.preventDefault();

    let isValid = true;

    if (loginCredentials.email.trim() === "") {
      setEmailError(true);
      isValid = false;
    }

    if (loginCredentials.password.trim() === "") {
      setPasswordError(true);
      isValid = false;
    }

    if (!isValid) return;
    console.log('login')
    login(loginCredentials);
  }




  return (
    <div className="flex flex-col max-w-[400px] w-[400px]  p-8 gap-8">
      <h1 className="font-medium text-4xl">Sign In</h1>
      <hr className='text-gray-200' />
      <form className='flex flex-col gap-5' onSubmit={handleSubmit}  >
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className='flex items-center space-x-1 font-semibold text-sm'><span className='text-red-500 mt-1 mr-1'>*</span>Email</label>
          <div className="relative ">
            <input
              id="email"
              ref={emailRef}
              onChange={handleChange}
              name="email"
              className={`border-[2px] rounded-lg py-1 px-8 w-full border-gray-200 focus-within:outline-none ${emailError ? "focus-within:border-red-500 border-red-500" : "focus-within:border-primary hover:border-primary"} `}
              placeholder='Email'
              type="text" />
            <div className={`absolute top-2 left-2 ${emailError ? "text-red-800" : "text-black"}`}>
              <LuUserRound size={18} />
            </div>
            {emailError && <p className="text-red-500 text-sm mt-1">Email is required</p>}
          </div>

        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="password" className='flex items-center space-x-1 font-semibold text-sm'><span className='text-red-500 mt-1 mr-1'>*</span>Password</label>
          <div className="relative ">
            <input
              id="password"
              ref={passwordRef}
              onChange={handleChange}
              name="password"
              className={`border-[2px] rounded-lg py-1 px-8 border-gray-200 focus-within:outline-none w-full ${passwordError ? "focus-within:border-red-500 border-red-500" : "focus-within:border-primary hover:border-primary"}`}
              placeholder='Password'
              type={showPassword ? "text" : "password"} />
            <div className={`absolute top-2 left-2 ${passwordError ? "text-red-800" : "text-black"}`}>
              <CiLock size={18} />
            </div>
            <div
              className={`absolute top-2 right-2 ${passwordError ? "text-red-800" : "text-black"}`}>
              {showPassword ?
                <div onClick={() => setShowPassword(false)}>
                  <LuEye size={18} />
                </div> :
                <div onClick={() => setShowPassword(true)}>
                  <LuEyeClosed size={18} />
                </div>
              }
            </div>
          </div>
          {passwordError && <p className="text-red-500 text-sm mt-1">Password is required</p>}
        </div>

        <button type="submit" className='w-full bg-primary-dark hover:bg-primary text-white py-1 text-base font-medium rounded-lg cursor-pointer'>Log In</button>
        <div>
          <Link to={"/register"} className='font-medium text-sm'>Or <span className='text-primary-dark text-sm font-medium '>Register Now!</span></Link>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
