import { createBrowserRouter } from "react-router-dom";
import React from "react";
import EmailVerification from "../Pages/EmailVerification.jsx";

// Lazy load pages
const Home = React.lazy(() => import("../Pages/Dashboard"));
const Login = React.lazy(() => import("../Pages/Login"));
const AuthScreen = React.lazy(() => import("../Layouts/AuthScreen"));
const Register = React.lazy(() => import("../Pages/Register"));
const PublicRoute = React.lazy(() => import("./PublicRoute"));
const ProtectedRoute = React.lazy(() => import("./ProtectedRoute"));
const Dashboard = React.lazy(() => import("../Pages/Dashboard"));
const App = React.lazy(() => import("../App.jsx"))

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
        element: <App />,
        children: [
          { path: "/dashboard", element: <Dashboard /> },
          { path: "/", element: <Dashboard /> },
        ],
      },
    ],
  },
  {
    path : "/verify-email",
    element : <EmailVerification />
  }
]);

export { route };
