import React from 'react';
import { Outlet } from 'react-router-dom';
import logo from "../assets/logo.png";

const AuthScreen = () => {
  return (
    <div className='flex min-h-screen'>
      {/* Left Section */}
      <div className='hidden lg:flex w-1/2 flex-col items-center bg-foreground text-white px-8 py-12'>
        {/* Logo */}
        <div className='w-40 sm:w-52 md:w-64 lg:w-72 xl:w-80'>
          <img src={logo} alt="logo" className='w-full h-full object-contain' />
        </div>

        {/* Text Content */}
        <div className='text-muted w-full max-w-md space-y-8'>
          <h3 className='font-semibold text-xl'>Manage Your Company With:</h3>

          <div className='space-y-6 ml-3'>
            {/* Point 1 */}
            <div className="flex items-start">
              <span className="mr-3 mt-1">✔</span>
              <div>
                <p>All In One Tool</p>
                <p>Run and scale your ERP & CRM apps easily.</p>
              </div>
            </div>

            {/* Point 2 */}
            <div className="flex items-start">
              <span className="mr-3 mt-1">✔</span>
              <div>
                <p>Easily Add And Manage Your Services</p>
                <p>It brings together your invoices, clients, and leads.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className='w-full lg:w-1/2 flex items-center justify-center px-8 '>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthScreen;
