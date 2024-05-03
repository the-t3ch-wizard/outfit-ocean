import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Leftsidebar, Loader } from '.'
import { useUserContext } from '@/context/AuthContext'

export default function RootLayout() {
  const isAuthenticated = true;

  return (
    <>
      {isAuthenticated ? (
        <div className=' w-full flex flex-col md:flex-row'>
  
          <div className='hidden md:flex h-screen sticky left-0 top-0'>
            <Leftsidebar />
          </div>
          <div className=' w-full sticky top-0 md:hidden'>
            {/* <Topbar /> */}
          </div>
  
          <Outlet />
  
          <div className=' w-full sticky bottom-0 md:hidden'>
            {/* <Bottombar /> */}
          </div>
  
        </div>
      ) : (
        <Navigate to='/signin' />
      )}
    </>
  )

}
