import React from 'react'
import { Title } from '.'

export default function NotFound({ label }) {

  return (
    <div className=' w-full flex flex-col justify-center items-center'>
      <img
        src='/images/notFound.png'
        alt='not found image'
        className=''
      />
      <Title title={label || `The cart is empty`} classname={` font-medium text-3xl`} />
    </div>
  )
}
