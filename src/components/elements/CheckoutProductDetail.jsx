import React from 'react'
import { CartProductDetail } from '.';
import { buyNowAvailableAtom, cartProductAtom } from '@/store/atoms/atoms'
import { useRecoilState, useRecoilValue } from 'recoil'
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import { useBuyNowProduct } from '@/lib/react-query/queriesAndMutations';
import { useToast } from '../ui/use-toast';
import { CheckoutForm, NotFound } from '.';

export default function CheckoutProductDetail({ className }) {

  const navigate = useNavigate();

  const { toast } = useToast();

  const [cartedProduct, setCartedProduct] = useRecoilState(cartProductAtom);

  const buynowAvailable = useRecoilValue(buyNowAvailableAtom);

  const { mutateAsync: buyNowProduct, isPending: buyingProduct } = useBuyNowProduct();

  async function buyNow(){
    const orderPlaced = await buyNowProduct(cartedProduct);
    if (!orderPlaced){
      toast({
        title: `Unable to place order! ❌`
      })
    } else {
      setCartedProduct([]);
      if (orderPlaced===1){
        toast({
          title: `${orderPlaced} order placed successfully! ✅`
        })
      } else {
        toast({
          title: `${orderPlaced} orders placed successfully! ✅`
        })
      }
      navigate('/orders');
    }
  }

  function disabledClick(){
    toast({
      title: `Make sure to fill all the details! ❌`
    })
  }

  return (
    <div className={`flex flex-col gap-6 ${className}`}>

      {
        cartedProduct.map((product, index) => <li key={index} className=' w-full list-none'>
          <CartProductDetail product={product} className={` w-full `} detailsClassname={` pl-8`} />
        </li>)
      }

      {
        buynowAvailable ?
        <Button onClick={buyNow} className={` w-40 p-5 mx-4`}>Buy Now</Button> :
        <Button onClick={disabledClick} className={` w-40 p-5 mx-4 bg-primary/50 hover:bg-primary/40`}>Buy Now</Button>
      }

    </div>
  )
}
