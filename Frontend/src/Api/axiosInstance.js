import axios from "axios";

const token = localStorage.getItem('Authorization');

const axiosInstance = axios.create({
    baseURL : import.meta.env.VITE_BACKEND_URL,
    headers : {
        Authorization : token ? token : ""
    }
}) 


export {axiosInstance};