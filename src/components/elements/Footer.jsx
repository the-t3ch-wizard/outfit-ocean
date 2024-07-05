import React from 'react'

export default function Footer() {
  return (
    <div className=' w-full h-40 flex justify-between items-start px-20'>
      
      <div className='flex flex-col gap-2'>
        <a>
          Home
        </a>
        <a>
          Explore
        </a>
        <a>
          Trending
        </a>
        <a>
          Sale
        </a>
      </div>

      <div className='flex flex-col gap-2'>
        <a>
          Return Your Order
        </a>
        <a>
          Shipping Policy
        </a>
        <a>
          Return, Refund, and Cancellation
        </a>
        <a>
          Fraud Protection
        </a>
      </div>

      <div className='flex flex-col gap-2'>
        <a>
          Privacy policy
        </a>
        <a>
          Terms and conditions
        </a>
      </div>


      <div className='flex flex-col gap-2'>
        <a>
          Github
        </a>
      </div>

    </div>
  )
}
