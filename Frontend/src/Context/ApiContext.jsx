import React, { Children, createContext, useContext, useState } from 'react'
import { axiosInstance } from '../Api/axiosInstance';

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {

   const [isLoading, setIsLoading] = useState(false);


   const requestWrapper = async (apiCall) => {
      setIsLoading(true);

      try {
         const response = await apiCall();
         return response;
      } catch (err) {
         console.log(err)

         throw err;
      } finally {
         setIsLoading(false);
      }
   }
   const get = (url, config = {}) => requestWrapper(() => axiosInstance.get(url, config));

   const post = (url, data, config = {}) => requestWrapper(() => axiosInstance.post(url, data)) 

   const put = (url, data, config = {}) => requestWrapper(() => axiosInstance.put(url, data))

   const del = (url, data, config = {}) => requestWrapper(() => axiosInstance.delete(url, { data }))

   return (
      <ApiContext.Provider value={{ get, post, put, del ,isLoading }}>
         {children}
      </ApiContext.Provider>
   )
}



export const useApi = () => useContext(ApiContext)
