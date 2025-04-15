import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Spinner from '../Components/Loading/spinner'
import { Spin } from 'antd'
import { useIsMobile } from '../Hooks/useIsMobile'
import logo from "../assets/logo.png";
import SideBar from '../Components/SideBar'
const MainLayout = () => {
  const isMoblie = useIsMobile();
  
  return (
    <Suspense fallback={<Spinner />}>
      <div className="flex bg-foreground dark:bg-foreground-dark">
       <aside className="overflow-auto h-[100vh] w-[256px] max-w-[256px] min-w-[256px] py-4 pl-2 flex flex-col gap-5 ">
          <div className="w-[67%] h-auto mt-2 ml-4  ">
            <img src={logo} alt="" className='w-full h-full object-scale-down'/>
          </div>
          <SideBar/>
       </aside>
 


        <div className="flex flex-col w-full border-2 p-7">
          <div className="">
            Navbar
          </div>
          <div>
             <Outlet />
          </div>
        </div>
      </div>


    </Suspense>
  )
}

export default MainLayout
