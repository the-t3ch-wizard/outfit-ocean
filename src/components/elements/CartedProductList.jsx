import { cartProductAtom } from '@/store/atoms/atoms'
import React from 'react'
import { useRecoilState } from 'recoil'
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import { useBuyNowProduct } from '@/lib/react-query/queriesAndMutations';
import { useToast } from '../ui/use-toast';
import { CheckoutForm, CheckoutProductDetail, NotFound } from '.';

export default function CartedProductList() {

  const [cartedProduct, setCartedProduct] = useRecoilState(cartProductAtom);

  return (
    <div className=' w-full flex flex-col gap-4'>
      
      {
        cartedProduct.length>0 ?
        <div className='w-full flex justify-start items-start'>

          <CheckoutProductDetail className={`w-[70%]`} />

          <CheckoutForm className={`w-[30%]`} />

        </div> :
        <NotFound />
      }

    </div>
  )
}
