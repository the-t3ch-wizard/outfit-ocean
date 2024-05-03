import React from 'react'
import { Description, Title } from '.'
import { Link } from 'react-router-dom'

export default function CartProductDetail({ product }) {

  return (
    <div className=' w-full h-56 p-2 rounded-md flex justify-start items-center border border-border'>
      
      <div className=' w-[20%] h-full flex justify-start items-center'>
        <Link to={`/product/${product.id}`}>
          <img
            src={product.imageUrl}
            alt='product image'
            className=' w-52 h-52 object-cover rounded-md'
          />
        </Link>
      </div>

      <div className=' w-[80%] py-4 pr-4 h-full overflow-hidden flex flex-col gap-2 justify-start items-start'>
        <Link to={`/product/${product.id}`} className=' max-h-[30%]'>
          <Title title={product.title} classname={` h-full overflow-hidden text-xl`} />
        </Link>
        <Description description={product.title} classname={` max-h-[30%] overflow-hidden`} />
        <Description description={`Quantity: `+product.quantity} classname={` max-h-[30%] overflow-hidden`} />
        <Description description={`Price: `+product.price} classname={` max-h-[30%] overflow-hidden`} />
      </div>

    </div>
  )
}
