import React from 'react'
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
const PublicRoute = () => {
    const isAuthenticate = false;

    if(isAuthenticate){
        return <Navigate  to="/"  replace/>
    }

  return  <Outlet />
  
}

export default PublicRoute
