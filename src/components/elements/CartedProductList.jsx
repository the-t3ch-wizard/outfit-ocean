import { cartProductAtom } from '@/store/atoms/atoms'
import React from 'react'
import { useRecoilState } from 'recoil'
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import { useBuyNowProduct } from '@/lib/react-query/queriesAndMutations';
import { useToast } from '../ui/use-toast';

export default function CartedProductList() {
  const navigate = useNavigate();

  const { toast } = useToast();

  const [cartedProduct, setCartedProduct] = useRecoilState(cartProductAtom);

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

  return (
    <div className=' w-full flex flex-col gap-4'>
      <div className=' w-full flex flex-col gap-4 p-4 border border-border rounded-md'>

        <div className=' w-full flex justify-between text-2xl'>
          <p>Product Title</p>
          <p>Product Price</p>
        </div>
        
        <ul className=' w-full'>
          {cartedProduct.map((product, index) => (
            <li key={index} className=' w-full flex justify-between'>
              <div className=' flex gap-2'>
                <p>{index+1}.</p>
                <p>{product.title}</p>
              </div>
              <div className=' flex gap-1'>
                <p>{product.price}</p>
                <p>x</p>
                <p>{product.quantity}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className=' w-full flex justify-between text-xl'>
          <p>Total Products: {cartedProduct.reduce((totalProduct, product) => { return totalProduct+(product.quantity) }, 0)}</p>
          <p>Total Price: {cartedProduct.reduce((totalPrice, product) => { return totalPrice+(product.price*product.quantity)}, 0)}</p>
        </div>
      </div>

      {cartedProduct.length>0 ? <Button onClick={buyNow} className=' w-40 p-5'>Buy Now</Button> : null}
    </div>
  )
}
