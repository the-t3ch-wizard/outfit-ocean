import React, { useEffect } from 'react'
import { Description, Logo, SignoutButton, Title } from '.'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useUserContext } from '@/context/AuthContext'
import { Button } from '../ui/button';
import { useSignoutCustomerAccount } from '@/lib/react-query/queriesAndMutations';
import { sidebarContent } from '@/constants';

export default function Leftsidebar() {
  
  const navigate = useNavigate();

  const location = useLocation();

  const { user } = useUserContext();
  
  const { mutate: signout, isSuccess } = useSignoutCustomerAccount();

  useEffect(() => {
    if (isSuccess) navigate('/signin');
  }, [isSuccess])

  return (
    <div className=' w-full h-40 bg-background border-b border-border flex flex-col justify-center items-center px-4'>

      <div className=' w-full h-[50%] flex justify-between items-center'>

        <div>
          <Link className=' p-2 rounded-md flex gap-3' to='/search'>
            <img
              src='/images/search.svg'
              alt='Search'
              className='w-6'
            />
            Search
          </Link>
        </div>

        <div>
          <Link className=' p-2 rounded-md' to='/'>
            <Logo />
          </Link>
        </div>

        <div className=' flex'>
          <SignoutButton />
          <Link className=' p-2 rounded-md flex gap-1' to='/my-cart'>
            <img
              src='/images/cart.svg'
              alt='Cart'
              className='w-6'
            />
          </Link>
        </div>

      </div>

      <div className="border-t border-foreground h-[1px] w-[80%]"></div>

      <div className=' w-full h-[50%] flex justify-center items-center'>

        <ul className=' flex justify-center items-center w-full gap-4'>
          {sidebarContent.map((content) => <Link to={content.route} key={content.label}>
            <li className={` flex w-full gap-2 items-center text-lg rounded-md p-2`}>
              {content.label}
            </li>
          </Link>)}
        </ul>

      </div>

    </div>
  )
}
