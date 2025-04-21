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
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
const SideBar = () => {
    const sideBarOptions = [
        {
          icon: <AiOutlineDashboard />,
          name: "Dashboard",
          path : "/"
        },
        {
          icon: <LiaFileInvoiceSolid />,
          name: "Invoices",
          path : "/invoice"
        },
        {
          icon: <MdOutlinePayments />,
          name: "Payments",
          path : "/payments"
        },
        {
          icon: <AiOutlineCustomerService />,
          name: "Customers",
          path : '/customers'
        },
        {
            icon: <CiUser />,
            name: "Peoples",
            path : "/people"
        },
        {
            icon:<IoStorefrontOutline />,
            name: "Comapnies",
            path : "/companies"
        },
        {
            icon:<IoPricetagOutline />,
            name: "Products",
            path : "/products"
        },
        {
            icon:<IoPricetagsOutline />,
            name: "Products Category",
            path : "/product-category"
        },
        {
            icon:<CiWallet />,
            name: "Expense",
            path : "/expense"
        },
        {
            icon:<TbCategoryPlus />,
            name: "Expense Category",
            path : "/expense-category"
        },
         

      ]
  return (
    <div className= "flex flex-col gap-2  h-full overflow-auto p-2">
      <Link to={"/"} className="w-[67%] h-auto mt-2 ml-4  ">
            <img src={logo} alt="" className='w-full h-full object-scale-down'/>
      </Link>
      {sideBarOptions.map((item,index) => {
        return <Link to={item.path} key={index} className= "flex  gap-2 items-center hover:bg-gray-200 dark:hover:bg-sky-900 px-6 py-1 hover:rounded-2xl text-text dark:text-text-dark">
            <div className="text-xl ">
            {item.icon}
            </div>
            <p >{item.name}</p>
        </Link>
      })}
    </div>
  )
}

export default SideBar
