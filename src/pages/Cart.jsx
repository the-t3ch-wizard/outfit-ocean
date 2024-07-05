import { CartProductDetail, NotFound, Title } from '@/components/elements';
import { Button } from '@/components/ui/button';
import { cartProductAtom } from '@/store/atoms/atoms'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil'

export default function Cart() {

  const navigate = useNavigate();

  const [cartProduct, setCartProduct] = useRecoilState(cartProductAtom);

  const BuyHandler = () => {
    navigate('/checkout');
  }

  return (
    <div className=' w-full min-h-screen flex justify-start items-start p-4 gap-8 flex-col'>

      <Title title={`My Cart`} classname={` p-2 text-3xl`} />

      <ul className=' w-full flex flex-col gap-2 sm:gap-6'>
        {
          cartProduct.length===0 ? 
          <NotFound /> :
          cartProduct.map((product, index) => <li key={index}>
            <CartProductDetail product={product} />
          </li>)
        }
      </ul>

      {cartProduct.length>0 ? <Button onClick={BuyHandler} className=' w-40 ml-4'>Proceed to Buy</Button> : null}

    </div>
  )
}
