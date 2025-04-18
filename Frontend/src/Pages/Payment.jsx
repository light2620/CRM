import React from 'react'
import Wrapper from '../utils/Wrapper'
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoRefresh } from "react-icons/io5";
import { Link } from 'react-router-dom';
const Payment = () => {
  return (
   <Wrapper>
      <div className="w-full flex flex-col gap-3">
          <div className='flex flex-col lg:flex-row gap-2 justify-between '>
              <Link 
              to = {"/"}
              className="flex gap-4 items-center dark:text-white">
                  <div><FaArrowLeftLong size={22}/></div>
                  <p className="text-lg font-semibold">Payment List</p>
              </Link>

              <div className="flex items-center gap-3 overflow-hidden">
                  <input 
                  placeholder='search'
                  className="border dark:bg-white rounded-lg text-sm border-gray-500 focus-within:outline-none focus-within:border-primary-dark p-1" type="text" />
                  <button className="flex gap-2 border border-gray-400 cursor-pointer bg-white rounded-lg items-center px-3 py-1 font-semibold text-text shadow">
                  <IoRefresh />
                    <p className='text-sm'>Refresh</p>
                    
                  </button>
              </div>
          </div>



      </div>
   </Wrapper>
  )
}

export default Payment
