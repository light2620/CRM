import React, { useEffect } from 'react'
import { useUser } from '../Context/UserContext'
import { useIsMobile } from '../Hooks/useIsMobile';
import { RxHamburgerMenu } from "react-icons/rx";
import MobileSidebar from './MobileSidebar';
import { useState } from 'react';
const Navbar = () => {
    const {user} = useUser();
      const isMobile = useIsMobile();
      const [mobileMenu, setMobileMenu] = useState(false);
     if(!user){
        return <div>Loading</div>
     }
     useEffect(() => {
      setMobileMenu(false)
     },[isMobile])
     
  return (
    <div className="p-1 flex justify-end">
      {
         isMobile && (
         <div className=" flex items-center dark:text-white"
               onClick={() => setMobileMenu(!mobileMenu)}
         >
           <RxHamburgerMenu size={22} />
         </div>)
      }
      
      <div className="w-full flex justify-end">
      <div className="w-10 h-10 rounded-full bg-primary dark:bg-primary-dark flex items-center justify-center drop-shadow-2xl shadow-lg shadow-neutral/50">
          <p className="text-xl text-white">{user.name[0].toUpperCase()}</p>
       </div>
      </div>
      {mobileMenu && <MobileSidebar setMobileMenu = {setMobileMenu} mobileMenu={mobileMenu} />}
    </div>
  )
}

export default Navbar
