import { CartProductDetail, Title } from '@/components/elements';
import { cartProductAtom } from '@/store/atoms/atoms'
import React from 'react'
import { useRecoilState } from 'recoil'

export default function Cart() {
  const [cartProduct, setCartProduct] = useRecoilState(cartProductAtom);

  return (
    <div className=' w-full min-h-screen flex justify-start items-start p-4 gap-4 flex-col'>

      <Title title={`My Cart`} classname={` p-2 text-3xl`} />

      <ul className=' w-full flex flex-col gap-4'>
        {cartProduct.map((product, index) => <li key={index}>
          <CartProductDetail product={product} />
        </li>)}
      </ul>
    </div>
  )
}
