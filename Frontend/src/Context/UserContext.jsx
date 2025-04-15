import React, { createContext, useContext, useState } from "react";
import { useApi } from "./ApiContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { post } = useApi();
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
        async function checkAuthentication(){
             try{
                const response = await post("/auth/is-auth");
                if(response.data.success){
                  setIsAuthenticate(true);
                }
             }catch(err){
                setIsAuthenticate(false);
             }
        } 
        checkAuthentication();
  },[])
  const login = async (credentials) => {
    try {
      console.log("login02")
      const response =  await post("/auth/login", credentials);
      if (response.data.success) {
        localStorage.setItem('Authorization', response.data.token);
        setIsAuthenticate(true);
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  const logout = () => {
    localStorage.removeItem('Authorization');
    setIsAuthenticate(false);
    console.log("Logged out");
  };

  const register = async(credentials) => {
    try{
         const response = await post("/auth/register", credentials);
         return response
    }catch(err){
      console.log(err)
      throw err
    }
  }
  return (
    <UserContext.Provider value={{ isAuthenticate, login, logout, register}}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook
export const useUser = () => useContext(UserContext);
