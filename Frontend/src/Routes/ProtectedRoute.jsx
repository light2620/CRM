import React from 'react'
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useUser } from '../Context/UserContext';
import Spinner from '../Components/Loading/spinner';
const ProtectedRoute = () => {
    const {isAuthenticate,loading} = useUser();
    console.log("protectedRoute", isAuthenticate)
    if(loading){
      return <Spinner />
    }
    if (!isAuthenticate) {
      return <Navigate to="/login"  replace/>;
    }
  
    return <Outlet />
}

export default ProtectedRoute
