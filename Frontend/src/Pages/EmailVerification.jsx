import React, { useEffect } from 'react'
import { PiSmileyStickerFill } from "react-icons/pi";
import { useApi } from '../Context/ApiContext';
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Spin } from 'antd';
const EmailVerification = () => {
    const {isLoading,post} = useApi();
    const [searchParams] = useSearchParams();
    const [errorMessage,setErrorMessage] = useState("")
    const [isAlreadyVerified,setIsAlreadyVerified] = useState(false);
    const userId = searchParams.get('code');
    console.log(userId)
    const navigate = useNavigate();
    console.log(userId)
    useEffect(() => {
        
         ( async function() {
            try{
                
                const response = await post(`/auth/verify-email`,{code :userId});
                if(response.data.success){ 
                    console.log(response);
                    setTimeout(() => {
                        navigate('/dashboard'); 
                     }, 3000);
                }  
            }catch(err){
                console.log(err);
                if(err?.response?.data?.message){
                    if(err?.response?.data?.alReadyVerified){
                        setIsAlreadyVerified(true);
                        setTimeout(()=> {
                            navigate("/dashboard")
                          },3000)
                           
                    }else{
                        setErrorMessage(err.response.data.message ||  "Something Went Wrong")
                        setTimeout(()=> {
                            navigate("/register")
                          },3000)
                    }
                }
                
            }

        })(); 

    },[])

if(isLoading){
    return <div className='w-full gap-5 h-screen flex flex-col items-center mt-20
    '>
        <Spin  />
        <h3>Verifying Email....</h3>
    </div>
}
if (isAlreadyVerified) {
    return (
        <div className='w-full h-screen flex flex-col pt-20 items-center'>
            <PiSmileyStickerFill size={100} color='green' />
            <h3>You are already verified!</h3>
            <p>Redirecting.....</p>
        </div>
    );
}

if(errorMessage){
    return <div className='w-full h-screen flex flex-col mt-10 items-center
    '>
            <h2>{errorMessage}</h2>
            <p>Redirecting.....</p> 
    </div>
 }

  return (
     <div className='w-full h-screen flex flex-col pt-20 items-center
      '> 
       <PiSmileyStickerFill size={100} color='green' />
       <h3>Verified Successfully</h3>
     </div>
  )
}

export default EmailVerification
