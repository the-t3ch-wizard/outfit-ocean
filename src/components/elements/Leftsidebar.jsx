import React, { useEffect } from 'react'
import { Description, Logo, Title } from '.'
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
    // <div className=' h-screen hidden md:flex flex-col border border-border justify-evenly items-center w-72 bg-secondary/10'>
    //   <Link to='/' className='w-[80%] flex justify-start items-center'>
    //     <Logo />
    //   </Link>
    //   <Link to={`/profile/${user.id}`} className=' w-[80%] flex gap-2 justify-start items-center'>
    //     <img
    //       src={ user.imageUrl || '/images/logo.svg'}
    //       alt='profile picture'
    //       className=' w-14 h-14 rounded-full'
    //     />
    //     <div>
    //       <Title title={user.name} classname=' font-medium text-xl' />
    //       <Description description={user.username} />
    //     </div>
    //   </Link>
    //   <ul className=' w-[80%] flex flex-col gap-4'>
    //     {sidebarContent.map((i) => {
    //       return (
    //         <li key={i.label} className=' flex w-full'>
    //           <Link to={i.route} className='w-full'>
    //             <Button variant='ghost' className={`w-full flex justify-start items-center gap-2 py-6 ${location.pathname === i.route ? 'bg-secondary' : ''}`}>
    //               <img
    //                 src={i.imageUrl}
    //                 alt={`${i.label} image`}
    //                 className={` w-8`}
    //               />
    //               <div className=' text-2xl'>
    //                 {i.label}
    //               </div>
    //             </Button>
    //           </Link>
    //         </li>
    //       )
    //     })}
    //   </ul>
      // <Button variant='ghost' className=' w-[80%] h-14 flex gap-2 justify-start items-center' onClick={signout}>
      //   <div>
      //     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=' w-7'><path d="M4 18H6V20H18V4H6V6H4V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V18ZM6 11H13V13H6V16L1 12L6 8V11Z"></path></svg>
      //   </div>
      //   <div className=' text-lg text-primary'>
      //     Signout
      //   </div>
      // </Button>
    // </div>

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
        <Button variant='ghost' className=' w-full h-14 flex gap-2 justify-start items-center' onClick={signout}>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=' w-7'><path d="M4 18H6V20H18V4H6V6H4V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V18ZM6 11H13V13H6V16L1 12L6 8V11Z"></path></svg>
          </div>
          <div className=' text-lg text-primary'>
            Signout
          </div>
        </Button>
      </div>

    </div>
  )
}
