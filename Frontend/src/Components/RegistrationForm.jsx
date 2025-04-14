import React, { useState } from 'react'
import { useRef } from 'react'
import { LuUserRound } from "react-icons/lu";
import { CiLock } from "react-icons/ci";
import { Link } from "react-router-dom"
import { MdOutlineMailOutline } from "react-icons/md";
import { useUser } from '../Context/UserContext';
import { LuEye } from "react-icons/lu";
import { LuEyeClosed } from "react-icons/lu";
const RegistrationForm = () => {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: ""
    })
    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const { register } = useUser()
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    function handleChange(e) {
        const { name, value } = e.target
        setUserData((prev) => {
            return { ...prev, [name]: value }
        })
        if (name === "name") setNameError(false);
        if (name === 'email') setEmailError(false);
        if (name === 'password') setPasswordError(false);
    }
    async function handleSubmit(e) {
        e.preventDefault();
        let isValid = true;

        if (userData.name.trim() === "") {
            setNameError(true);
            isValid = false;
        }
        if (userData.email.trim() === "") {
            setEmailError(true);
            isValid = false;
        }

        if (userData.password.trim() === "") {
            setPasswordError(true);
            isValid = false;
        }
        if (!isValid) return;

        const response = await register(userData);
        console.log(response)
    }

    return (
        <div className="flex flex-col max-w-[400px] w-[400px]  p-8 gap-8">
            <h1 className="font-medium text-4xl">Register Here</h1>
            <hr className='text-gray-200' />
            <form className='flex flex-col gap-5' onSubmit={handleSubmit}  >
                <div className="flex flex-col gap-1">
                    <label htmlFor="name" className='flex items-center space-x-1 font-semibold text-sm'><span className='text-red-500 mt-1 mr-1'>*</span>Name</label>
                    <div className="relative ">
                        <input
                            id="name"
                            ref={nameRef}
                            onChange={handleChange}
                            name="name"
                            className={`border-[2px] rounded-lg py-1 px-8 w-full border-gray-200 focus-within:outline-none ${nameError ? "focus-within:border-red-500 border-red-500 " : "focus-within:border-primary hover:border-primary"} `}
                            placeholder='Name'
                            type="text" />
                        <div className={`absolute top-2 left-2 ${emailError ? "text-red-800" : "text-black"}`}>
                            <LuUserRound size={18} />
                        </div>
                        {nameError && <p className="text-red-500 text-sm mt-1">Name  is required</p>}
                    </div>

                </div>

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
                            <MdOutlineMailOutline size={18} />
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
                            type="password" />
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

                <button type="submit" className='w-full bg-primary-dark hover:bg-primary text-white py-1 text-base font-medium rounded-lg cursor-pointer'>Sign Up</button>
                <div>
                    <Link to={"/login"} className='font-medium text-sm'>Or <span className='text-primary-dark text-sm font-medium '>Already have an Account?</span></Link>
                </div>
            </form>
        </div>
    )
}

export default RegistrationForm
