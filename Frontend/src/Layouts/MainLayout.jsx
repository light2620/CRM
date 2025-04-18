import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Spinner from '../Components/Loading/spinner'
import { Spin } from 'antd'
import { useIsMobile } from '../Hooks/useIsMobile'
import logo from "../assets/logo.png";
import SideBar from '../Components/SideBar'
import Navbar from '../Components/Navbar'
import MobileSidebar from '../Components/MobileSidebar'
const MainLayout = () => {
  const isMoblie = useIsMobile();
  
  return (
   
      <div className="flex bg-foreground dark:bg-foreground-dark">
      
      
      {
        !isMoblie &&  <aside className="overflow-auto h-[100vh] w-[256px] max-w-[256px] min-w-[256px] py-4 pl-2 flex flex-col gap-5 ">

        <SideBar />
      </aside>
      }
 


        <div className="flex flex-col w-full p-5 h-screen gap-2">
          <div className="">
            <Navbar />
          </div>
          <di className="border-2 h-screen px-7">
             <Outlet />
          </di>
        </div>
      </div>


   
  )
}

export default MainLayout
