import React, { useEffect } from 'react'
import { Button } from '../ui/button'
import { useSignoutCustomerAccount } from '@/lib/react-query/queriesAndMutations'
import { Loader } from '.';
import { useNavigate } from 'react-router-dom';

export default function SignoutButton() {

  const navigate = useNavigate();

  const { mutateAsync: signout, isPending: signingout, isSuccess: signedout } = useSignoutCustomerAccount();

  useEffect(() => {
    if (signedout) navigate('/signin');
  }, [signedout]);

  return (
    <Button variant="ghost" className='flex justify-start items-center hover:bg-transparent p-0' onClick={signout}>
      {
        signingout ? (
          <div className='flex gap-1 justify-center items-center'>
            <Loader className={` fill-foreground`} />
          </div>
        ) : (
          <div className='flex justify-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className=' fill-primary w-6'><path d="M4 18H6V20H18V4H6V6H4V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V18ZM6 11H13V13H6V16L1 12L6 8V11Z"></path></svg>
          </div>
        )
      }
    </Button>
  )
}
