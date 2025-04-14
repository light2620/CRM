import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { route } from './Routes/route.jsx'
import {ApiProvider} from "./Context/ApiContext.jsx"
import { UserProvider } from './Context/UserContext.jsx'
import { Toaster } from 'react-hot-toast';
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ApiProvider>
  <UserProvider>
  <RouterProvider router={route}>
    <App />
    <Toaster />
  </RouterProvider>
  </UserProvider>
  </ApiProvider>
  </StrictMode>
)
