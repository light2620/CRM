import { useState } from "react";
import "./App.css";
import MainLayout from "../src/Layouts/MainLayout.jsx"
import { UserProvider } from "./Context/UserContext.jsx";
import { ApiProvider } from "./Context/ApiContext.jsx";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
function App() {
 

  return (
    <ApiProvider>
    <UserProvider>
      <Outlet/>
      <Toaster />
    </UserProvider>
    </ApiProvider>
  );
}

export default App;
