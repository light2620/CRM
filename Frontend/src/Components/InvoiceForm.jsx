import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
const InvoiceForm = () => {
    const [numberOfFields,setNumberOfFields] = useState(1);
    const requiredFileds = [
        "Client",
        "Number",
        "Year",
        "Currency",
        "Date",
        'ExpiryDate'
    ]
    function field() {
        return Array.from({ length: numberOfFields }).map((_, index) => (
          <div key={index} className="flex  text-text gap-3 text-[.8rem] mt-3 font-semibold ">
            <input type="text" name="" placeholder="item name" className="border w-[200px] rounded-lg border-gray-400 px-2 py-1  focus-within:outline-none focus-within:border-primary-dark hover:border-primary-dark" />
            <input type="text" name="" placeholder="item decription"  className="border w-[400px] rounded-lg border-gray-400 px-2 py-1  focus-within:outline-none focus-within:border-primary-dark hover:border-primary-dark" />
            <input type="text" name="" className="border w-[120px] rounded-lg border-gray-400 px-2 py-1  focus-within:outline-none focus-within:border-primary-dark hover:border-primary-dark" />
            <input type="text" name="" className="border w-[120px] rounded-lg border-gray-400 px-2 py-1  focus-within:outline-none focus-within:border-primary-dark hover:border-primary-dark" />
            <input type="text" name="" className="border w-[140px] rounded-lg border-gray-400 px-2 py-1 focus-within:outline-none focus-within:border-primary-dark hover:border-primary-dark" />
          </div>
        ));
      }
    console.log(numberOfFields)

  return (
    <div>
        <div className="flex flex-wrap gap-4">
             <div className="flex flex-col w-[400px] gap-2">
                <label htmlFor='client' className='text-sm font-semibold'>{requiredFileds.includes("Client") && <span className="text-red-700 mr-0.5 text-lg">*</span>}Client</label>
                <input 
                type="text" 
                name="client" 
                id="client"
                placeholder='search'
                className='border rounded border-gray-400 px-2 py-1 text-sm focus-within:outline-none focus-within:border-primary-dark hover:border-primary-dark'
                 />
             </div> 

             <div className="flex flex-col w-[130px] gap-2">
                <label htmlFor='number' className='text-sm font-semibold'>{requiredFileds.includes("Number") && <span className="text-red-700 mr-0.5 text-lg">*</span>}Number</label>
                <input 
                type="number" 
                name="number" 
                id="number"
                defaultValue={1}
                className='border rounded border-gray-400 font-semibold px-2 py-1 text-sm focus-within:outline-none focus-within:border-primary-dark hover:border-primary-dark'
                 />
             </div> 

             <div className="flex flex-col w-[130px] gap-2">
                <label htmlFor='year' className='text-sm font-semibold' >{requiredFileds.includes("Year") && <span className="text-red-700 mr-0.5 text-lg">*</span>}Year</label>
                <input 
                type="number" 
                name="year" 
                id="year"
                defaultValue={new Date().getFullYear()}
                className='border rounded border-gray-400 font-semibold px-2 py-1 text-sm focus-within:outline-none focus-within:border-primary-dark hover:border-primary-dark'
                 />
             </div> 

             <div className="flex flex-col w-[220px] gap-2">
                <label htmlFor='currency' className='text-sm font-semibold'>{requiredFileds.includes("Currency") && <span className="text-red-700 mr-0.5 text-lg">*</span>}Currency</label>
                <input 
                type="text" 
                name="currency" 
                id="currency"
                placeholder='Currency'
                className='border rounded border-gray-400 px-2 py-1 text-sm focus-within:outline-none focus-within:border-primary-dark hover:border-primary-dark'
                 />
             </div> 

             <div className="flex flex-col w-[400px] gap-2 ">
                <label htmlFor='date' className='text-sm font-semibold' >{requiredFileds.includes("Date") && <span className="text-red-700 mr-0.5 text-lg">*</span>}Date</label>
                <input 
                type="date" 
                name="date" 
                id="date"
                value={new Date().toISOString().split("T")[0]}
                className='border rounded border-gray-400 px-2 py-1 text-sm focus-within:outline-none focus-within:border-primary-dark hover:border-primary-dark'
                 />
             </div> 

             <div className="flex flex-col w-[200px] gap-2 ">
                <label htmlFor='Expirydate' className='text-sm font-semibold'>{requiredFileds.includes("ExpiryDate") && <span className="text-red-700 mr-0.5 text-lg">*</span>}Expiry Date</label>
                <input 
                type="date" 
                name="'Expirydate" 
                id="'Expirydate"
                value={new Date().toISOString().split("T")[0]}
                className='border rounded border-gray-400 px-2 py-1 text-sm focus-within:outline-none focus-within:border-primary-dark hover:border-primary-dark'
                 />
             </div> 

             <div className="flex flex-col w-[300px] mt-[.44rem] gap-2 ">
                <label htmlFor='Note' className='text-sm font-semibold'>{requiredFileds.includes("Note") && <span className="text-red-700 mr-0.5 text-lg">*</span>}Note</label>
                <input 
                type="text" 
                name="Note" 
                id="Note"
                className='border rounded border-gray-400 px-2 py-1 text-sm focus-within:outline-none focus-within:border-primary-dark hover:border-primary-dark'
                 />
             </div> 
        </div>

        <div className='border-t-1 border-dashed border-gray-300 mt-10 mb-7'></div>


        <div>
            <div className="flex  font-semibold text-text gap-3 text-sm">
               <p className="w-[200px]">Item</p>
               <p className=" w-[400px]">Description</p>
               <p className="w-[120px] ">Quantity</p>
               <p className="w-[120px]">Price</p>
               <p className="w-[140px]">Total</p>
            </div>
           {field()}
           <div 
           onClick={() => setNumberOfFields(prev  => prev+1)}
           className="w-full cursor-pointer border-dashed border py-1 flex rounded-lg mt-5 items-center justify-center gap-2 hover:text-primary-dark hover:border-primary-dark">
           <FaPlus size={12} />
           <p className="text-sm font-medium">Add Field</p>
           </div>


           <div className='border-t-1 border-dashed border-gray-300 mt-10 mb-7'></div>


           <div className="flex justify-between">
        
            <div className="flex justify-center items-center px-20 py-1 self-start bg-primary-dark text-white text-sm rounded-lg hover:bg-primary gap-1 cursor-pointer">
                <FaPlus />
                <p>Save</p>
            </div>

            <div className="flex flex-col  w-full place-items-end gap-6">
                <div className="flex gap-2 items-center">
                    <p className="font-semibold text-sm">Sub Total : </p>
                    <input 
                       type="number" 
                       name="subTotal" 
                       defaultValue={'00.00'}
                       className='border rounded-lg border-gray-400 font-semibold px-2 py-1 text-sm focus-within:outline-none focus-within:border-primary-dark hover:border-primary-dark'
                 />
                </div>

                <div className="flex gap-2">
                   <input 
                       type="number" 
                       name="subTotal" 
                       placeholder= 'Select Tax Value'
                       className='border rounded-lg border-gray-400 font-semibold px-2 py-1 text-sm focus-within:outline-none focus-within:border-primary-dark hover:border-primary-dark'
                     />
                     <input 
                       type="number" 
                       name="subTotal" 
                       defaultValue={'00.00'}
                       className='border rounded-lg border-gray-400 font-semibold px-2 py-1 text-sm focus-within:outline-none focus-within:border-primary-dark hover:border-primary-dark'
                     />
                </div>

                <div className="flex gap-2 items-center">
                    <p className="font-semibold text-sm">Total : </p>
                    <input 
                       type="number" 
                       name="subTotal" 
                       defaultValue={'00.00'}
                       className='border rounded-lg border-gray-400 font-semibold px-2 py-1 text-sm focus-within:outline-none focus-within:border-primary-dark hover:border-primary-dark'
                 />
                </div>
            </div>
           </div>
        </div>
    </div>
  )
}

export default InvoiceForm
