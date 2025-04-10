import { createBrowserRouter } from "react-router-dom";
import React from "react";

// Lazy load pages
const Home = React.lazy(() => import("../Pages/Dashboard"));
const Login = React.lazy(() => import("../Pages/Login"));
const AuthScreen = React.lazy(() => import("../Layouts/AuthScreen"));
const Register = React.lazy(() => import("../Pages/Register"));
const PublicRoute = React.lazy(() => import("./PublicRoute"));
const ProtectedRoute = React.lazy(() => import("./ProtectedRoute"));
const MainLayout = React.lazy(() => import("../Layouts/MainLayout"));
const Dashboard = React.lazy(() => import("../Pages/Dashboard"));

const route = createBrowserRouter([
  {
    element: <PublicRoute />,
    children: [
      {
        element: <AuthScreen />,
        children: [
          { path: "/login", element: <Login /> },
          { path: "/register", element: <Register /> },
        ],
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <MainLayout />,
        children: [
          { path: "/dashboard", element: <Dashboard /> },
          { path: "/", element: <Dashboard /> },
        ],
      },
    ],
  },
]);

export { route };
