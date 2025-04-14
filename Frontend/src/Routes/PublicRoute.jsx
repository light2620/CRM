import React from 'react'
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useUser } from '../Context/UserContext';
const PublicRoute = () => {
    const {isAuthenticate} = useUser();

    if(isAuthenticate){
        return <Navigate  to="/"  replace/>
    }

  return  <Outlet />
  
}

export default PublicRoute
