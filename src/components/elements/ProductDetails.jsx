import React, { useState } from 'react'
import { Description, QuantityButton, Title } from '.';
import { Button } from '../ui/button';
import { useRecoilState } from 'recoil';
import { cartProductAtom } from '@/store/atoms/atoms';
import { useNavigate } from 'react-router-dom';

export default function ProductsDetails({ product }) {

  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);

  const [cartProduct, setCartProduct] = useRecoilState(cartProductAtom);

  const addToCart = () => {
    const productData = {
      id: product.$id,
      title: product.title,
      description: product.description,
      price: product.price,
      imageUrl: product.imageUrl,
      sellerId: product.sellerId,
      stock: product.stock,
      quantity: quantity,
    }
    console.log(productData);
    setCartProduct([...cartProduct, productData]);
  }

  const BuyHandler = () => {
    addToCart();
    navigate('/checkout');
  }

  if (product){
    return (
      <div className=' w-full bg-card border p-4 border-border flex justify-start items-start rounded-md'>
        
        <div className=' w-[50%] min-h-96'>
          <img
            src={product.imageUrl}
            alt='product image'
            className=' rounded-md '
          />
        </div>
        <div className=' w-[50%] flex flex-col gap-2 min-h-96 justify-start items-start p-4'>
          <Description description={product.title} classname={` text-primary text-2xl`} />
          <Description description={`₹ `+product.price+` M.R.P.`} classname={` text-primary text-xl`} />
          <Description description={`(incl. of all taxes)`} classname={` text-primary`} />
          
          <div className=' w-full flex justify-center items-center'>
            <div className=' w-[90%] border-b border-border'></div>
          </div>
          
          <QuantityButton quantity={quantity} setQuantity={setQuantity} />
  
          <div className=' flex flex-col gap-4 justify-between items-center w-full'>
            <Button className='w-full' onClick={addToCart}>Add to Cart</Button>
            <Button className='w-full' variant="outline" onClick={BuyHandler}>Proceed to Buy</Button>
          </div>
        </div>
  
      </div>
    )
  } else {
    return (
      null
    )
  }

}
