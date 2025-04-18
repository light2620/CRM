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
   
      <div className="flex w-full min-h-screen bg-foreground dark:bg-foreground-dark border-2">
      
      
      {
        !isMoblie &&  <aside className="overflow-auto h-[100vh] w-[256px] max-w-[256px] min-w-[256px] py-4 pl-2 flex flex-col gap-5 ">

        <SideBar />
      </aside>
      }
 


        <div className="flex flex-col w-full py-5 h-screen gap-6">
          <div className="px-4 ">
            <Navbar />
          </div>
          <di className=" h-screen px-4 lg:px-20">
             <Outlet />
          </di>
        </div>
      </div>


   
  )
}

export default MainLayout
