import { useUserContext } from '@/context/AuthContext';
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Loader } from '.';

export default function AuthLayout() {
  const isAuthenticated = false;
  
  return (
    <>
      {isAuthenticated ? (
        <Navigate to='/' />
      ) : (
        <div className=' w-full h-screen flex justify-center items-center bg-background'>
          <Outlet />
          <img
            src='/images/collection-of-pictures.jpeg'
            alt='auth layout image'
            className='w-[0px] opacity-0 md:opacity-100 md:w-[50%] transition-all h-screen object-cover bg-no-repeat select-none'
            draggable='false'
          />
        </div>
      )}
    </>
  )

}
