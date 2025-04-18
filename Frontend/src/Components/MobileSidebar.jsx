import React from 'react'
import SideBar from './SideBar'

const MobileSidebar = ({mobileMenu,setMobileMenu}) => {
    const handleSidebarClick = (e) => {
        e.stopPropagation(); // This stops the event from bubbling up
      };
  return (
    <div 
    onClick={() => setMobileMenu(!mobileMenu)}
    className="w-full fixed top-0 bottom-0 left-0 right-0 bg-black/75 dark:bg-white/25 dark:shadow-2xl ">
     <div 
      onClick={handleSidebarClick}
     className='bg-white dark:bg-background-dark w-[250px] h-screen'>
       <SideBar />
     </div>
     
    </div>
  )
}

export default MobileSidebar
