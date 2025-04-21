import React from 'react'
import { useUser } from '../Context/UserContext'
import { FiUser } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosPower } from "react-icons/io";
const UserProfileOptions = () => {
    const {user} = useUser();
    console.log(user);
  return (
    <div className="absolute  min-w-[300px]  bg-white  top-12 right-5 rounded-lg shadow flex flex-col gap-2 p-3">
       <div className="flex gap-5 hover:bg-gray-100 p-2 hover:rounded">
           <div className="relative w-10 h-10 rounded-full bg-primary dark:bg-primary-dark flex items-center justify-center shadow-xl ">
                     <p className="text-xl text-white">{user.name[0].toUpperCase()}</p>
            </div>
            <div className="flex flex-col gap-1 ">
              <p className="text-text text-sm font-semibold">{user.name}</p>
              <p className="text-text text-sm font-semibold">{user.email}</p>
            </div>  
       </div>
       <div className="border-1 border-gray-200"></div>

         <div className="flex gap-2 hover:bg-gray-100 p-2 hover:rounded">
         <FiUser />
         <p className="text-text text-sm font-semibold">Profile Setting</p>
         </div>

         <div className="flex gap-2 hover:bg-gray-100 p-2 hover:rounded">
         <IoSettingsOutline />
         <p className="text-text text-sm font-semibold">App Setting</p>
         </div>

       <div className="border-1 border-gray-200"></div>
       <div className="flex gap-2 hover:bg-gray-100 p-2 hover:rounded">
          <IoIosPower />
         <p className="text-text text-sm font-semibold">Logout</p>
         </div>
    </div>
  )
}

export default UserProfileOptions
