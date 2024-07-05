import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Footer, Leftsidebar, Loader, Topbar } from '.'
import { useUserContext } from '@/context/AuthContext'

export default function RootLayout() {
  
  const isAuthenticated = true;

  return (
    <>
      {isAuthenticated ? (
        <div className=' w-full flex flex-col'>
  
          <div className='hidden md:flex w-full bg-background sticky left-0 top-0'>
            <Leftsidebar />
          </div>
          <div className=' w-full sticky -top-1 md:hidden'>
            <Topbar />
          </div>
  
          <Outlet />

          <Footer />
  
        </div>
      ) : (
        <Navigate to='/signin' />
      )}
    </>
  )

}
