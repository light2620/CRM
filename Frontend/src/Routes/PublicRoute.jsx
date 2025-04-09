import React from 'react'
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
const PublicRoute = () => {
    const isAuthenticate = true;

    if(isAuthenticate){
        return <Navigate  to="/" />
    }

  return  <Outlet />
  
}

export default PublicRoute
