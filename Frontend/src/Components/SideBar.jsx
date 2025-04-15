import React from 'react'
import { AiOutlineDashboard } from "react-icons/ai";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { MdOutlinePayments } from "react-icons/md";
import { AiOutlineCustomerService } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { IoStorefrontOutline } from "react-icons/io5";
import { IoPricetagOutline } from "react-icons/io5";
import { IoPricetagsOutline } from "react-icons/io5";
import { CiWallet } from "react-icons/ci";
import { TbCategoryPlus } from "react-icons/tb";
const SideBar = () => {
    const sideBarOptions = [
        {
          icon: <AiOutlineDashboard />,
          name: "Dashboard"
        },
        {
          icon: <LiaFileInvoiceSolid />,
          name: "Invoices"
        },
        {
          icon: <MdOutlinePayments />,
          name: "Payments"
        },
        {
          icon: <AiOutlineCustomerService />,
          name: "Customers"
        },
        {
            icon: <CiUser />,
            name: "Peoples"
        },
        {
            icon:<IoStorefrontOutline />,
            name: "Comapnies"
        },
        {
            icon:<IoPricetagOutline />,
            name: "Products"
        },
        {
            icon:<IoPricetagsOutline />,
            name: "Products Category"
        },
        {
            icon:<CiWallet />,
            name: "Expense"
        },
        {
            icon:<TbCategoryPlus />,
            name: "Expense Category"
        },
         

      ]
  return (
    <div className= "flex flex-col gap-2  h-full overflow-auto p-2">
      {sideBarOptions.map((item,index) => {
        return <div className= "flex  gap-2 items-center hover:bg-gray-200 dark:hover:bg-sky-900 px-6 py-1 hover:rounded-2xl text-text dark:text-text-dark">
            <div className="text-xl ">
            {item.icon}
            </div>
            <p >{item.name}</p>
        </div>
      })}
    </div>
  )
}

export default SideBar
