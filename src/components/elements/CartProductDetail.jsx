import React from 'react'
import { Description, Title } from '.'
import { Link } from 'react-router-dom'

export default function CartProductDetail({ product, className, detailsClassname }) {

  return (
    <div className={` w-full sm:h-56 sm:p-2 rounded-md flex justify-start sm:items-center items-start sm:px-4 p-2 sm:gap-0 ${className}`}>
      
      <div className=' w-[40%] sm:w-[20%] h-full flex justify-start sm:items-center items-start'>

        <Link to={`/product/${product.id}`}>
          <img
            src={product.imageUrl}
            alt='product image'
            className=' sm:w-56 sm:h-56 object-cover rounded-md'
            draggable='false'
          />
        </Link>

      </div>

      <div className={` w-[80%] sm:py-4 sm:pr-4 pl-4 h-full overflow-hidden flex flex-col sm:flex-row justify-end items-start gap-4 sm:gap-0 ${detailsClassname} `}>

        <div className='sm:w-[80%] w-full flex flex-col gap-4'>
          <Link to={`/product/${product.id}`} className=' max-h-[30%]'>
            <Title title={product.title} classname={` h-full overflow-hidden sm:text-xl text-base`} />
          </Link>
          <Description description={`Quantity: `+product.quantity} classname={` max-h-[30%] overflow-hidden`} />
        </div>

        <div className='sm:w-[20%] w-full flex justify-start sm:justify-center'>
          <Description description={`Price: `+product.price} classname={` max-h-[30%] overflow-hidden`} />
        </div>
        
      </div>

    </div>
  )
}
