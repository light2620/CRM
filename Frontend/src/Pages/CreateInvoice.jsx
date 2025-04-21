import React from 'react'
import Wrapper from '../utils/Wrapper'
import { FaArrowLeft } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import InvoiceForm from '../Components/InvoiceForm';
const CreateInvoice = () => {
  return (
    <Wrapper>
    
        <div className="flex  justify-between">
            <div className='flex w-full  gap-4 items-center '>
              <Link to="/invoice"><FaArrowLeft size={23}/></Link>
              <p className="text-xl font-semibold">New</p>
              <div className="text-[.7rem] py-0.5 px-2 border-2 border-gray-300 rounded-md bg-gray-100 font-semibold">Draft</div>
            </div>

            <div className='flex gap-3 w-full  justify-end'>
                <div className='flex gap-1 items-center border border-gray-400 shadow  rounded-lg px-3 py-1.5 justify-center '>
                <IoIosCloseCircleOutline size={15}/>
                <p className='text-sm font-medium'>Close</p>
                </div>

                <div className='flex gap-1 items-center shadow bg-primary-dark text-white rounded-lg  px-4 py-1.5 justify-center '>
                <FaPlus size={15}/>
                <p className='text-sm font-medium'>Save</p>
                </div>
            </div>


            <div>

            </div>


        </div>
        <div className='border-t-1 border-dashed border-gray-300 mt-10'></div>

         <InvoiceForm />
    </Wrapper>
  )
}

export default CreateInvoice
