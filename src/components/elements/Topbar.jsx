import React, { useEffect, useState } from 'react'
import { Description, Logo, SignoutButton, Title } from '.'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useUserContext } from '@/context/AuthContext'
import { useSignoutCustomerAccount } from '@/lib/react-query/queriesAndMutations';
import { sidebarContent } from '@/constants';

export default function Topbar() {
   
  const navigate = useNavigate();

  const location = useLocation();

  const { user } = useUserContext();
  
  const { mutate: signout, isSuccess } = useSignoutCustomerAccount();

  useEffect(() => {
    if (isSuccess) navigate('/signin');
  }, [isSuccess])

  const [navigationVisible, setNavigationVisible] = useState(false);

  return (
    <div className='relative w-full border-b bg-background border-border'>

      <div className='px-4 w-full h-20 flex justify-between items-center'>

        <div className='flex gap-3'>
          <img
            src='/images/menu.svg'
            alt='Menu'
            className='w-6'
            onClick={() => {
              setNavigationVisible(true);
            }}
          />
          <Link className='flex gap-1' to='/search'>
            <img
              src='/images/search.svg'
              alt='Search'
              className='w-6'
            />
          </Link>
        </div>

        <div className='flex justify-center items-center'>
          <Link className='rounded-md' to='/'>
            <Logo />
          </Link>
        </div>

        <div className='flex'>
          <SignoutButton />
          <Link className='flex gap-1' to='/my-cart'>
            <img
              src='/images/cart.svg'
              alt='Cart'
              className='w-6'
            />
          </Link>
        </div>

      </div>

      <div className={`absolute w-full h-screen top-0 bg-background z-10 flex flex-col justify-start items-start gap-8 p-6 transition-all ${navigationVisible ? "left-0" : "-left-full"}`}>

        <img
          src='/images/close.svg'
          alt='Menu'
          className='w-8'
          onClick={() => {
            setNavigationVisible(false);
          }}
        />

        <ul className=' w-full flex flex-col justify-center items-center gap-4'>
          {sidebarContent.map((content) => <Link to={content.route} key={content.label} className='w-full' onClick={() => {
            setNavigationVisible(false);
          }}>
            <li className={` w-full text-foreground text-lg p-2 border-b border-border`}>
              {content.label}
            </li>
          </Link>)}
        </ul>

      </div>

    </div>
  )
}
