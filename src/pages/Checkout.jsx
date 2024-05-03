import { Title } from '@/components/elements';
import CartedProductList from '@/components/elements/CartedProductList';
import { cartProductAtom } from '@/store/atoms/atoms';
import React from 'react'
import { useRecoilState } from 'recoil'

export default function Checkout() {

  const [cartProduct, setCartProduct] = useRecoilState(cartProductAtom);

  return (
    <div className=' w-full min-h-screen p-5'>
      
      <div className=' w-full flex flex-col gap-4'>

        <Title title={`Checkout`} classname={`p-2 text-3xl`} />

        <CartedProductList />

      </div>

    </div>
  )
}
