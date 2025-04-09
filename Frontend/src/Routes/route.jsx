import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Dashboard";
import Login from "../Pages/Login";
import AuthScreen from "../Layouts/AuthScreen";
import Register from "../Pages/Register";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "../Layouts/MainLayout";
import Dashboard from "../Pages/Dashboard";


const route = createBrowserRouter([
{
    element : <PublicRoute />,
    children : [
        {
            element : <AuthScreen/>,
            children : [
                { path : "/login" , element : <Login />},
                { path : "/register" , element : <Register />},
            ]
        },
        
    ]
},
{
    element : <ProtectedRoute />,
    children : [
          {
            element : <MainLayout />,
            children : [
                {path : "/dashboard" ,element : <Dashboard />},
                { path : "/" , element : <Dashboard/>}
            ]
          }
    ]
}
])



export {route}