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
    <div className=' w-72 min-h-screen bg-background border-r border-border p-5 flex flex-col justify-between'>

      <div className=' flex flex-col gap-4 justify-start items-start'>
        <Link className=' p-2 bg-card hover:bg-accent rounded-md w-full' to='/'>
          <Logo />
        </Link>

        <div className=' w-full border-t border-border'></div>

        <ul className=' flex flex-col w-full gap-4'>
          {sidebarContent.map((content) => <Link to={content.route} key={content.label}>
            <li className={` flex w-full gap-2 items-center text-2xl bg-card hover:bg-accent rounded-md p-2`}>
              <img
                src={content.imageUrl}
                alt={content.label}
                className=' w-9'
              />
              {content.label}
            </li>
          </Link>)}
        </ul>
      </div>

      <div className=' w-full flex justify-center items-center'>
        <SignoutButton />
      </div>

    </div>
  )
}
