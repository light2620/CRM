import React, { useEffect, useRef, useState } from 'react';
import { useUser } from '../Context/UserContext';
import { useIsMobile } from '../Hooks/useIsMobile';
import { RxHamburgerMenu } from "react-icons/rx";
import MobileSidebar from './MobileSidebar';
import UserProfileOptions from './UserProfileOptions';

const Navbar = () => {
  const { user } = useUser();
  const isMobile = useIsMobile();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [userProfileOption, setUserProfileOption] = useState(false);
  const profileRef = useRef(null); 

  useEffect(() => {
    setMobileMenu(false)
  }, [isMobile])

  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setUserProfileOption(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (!user) {
    return <div>Loading</div>
  }

  return (
    <div className="p-1 flex justify-end">
      {isMobile && (
        <div className="flex items-center dark:text-white"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          <RxHamburgerMenu size={22} />
        </div>
      )}
      
      <div className="w-full flex justify-end">
        <div 
          ref={profileRef} // <--- attach ref here
          className="relative w-10 h-10 rounded-full bg-primary dark:bg-primary-dark flex items-center justify-center drop-shadow-2xl shadow-lg shadow-neutral/50"
          onClick={() => setUserProfileOption(!userProfileOption)} // <--- toggle on click
        >
          <p className="text-xl text-white">{user.name[0].toUpperCase()}</p>
          {userProfileOption && <UserProfileOptions />}
        </div>
      </div>

      {mobileMenu && <MobileSidebar setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} />}
    </div>
  )
}

export default Navbar;
