import React, { useState } from 'react'
import { Description, QuantityButton, Title } from '.';
import { Button } from '../ui/button';
import { useRecoilState } from 'recoil';
import { cartProductAtom } from '@/store/atoms/atoms';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../ui/use-toast';

export default function ProductsDetails({ product }) {

  const { toast } = useToast();

  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);

  const [cartProduct, setCartProduct] = useRecoilState(cartProductAtom);

  const addToCart = () => {
    let productData = {
      id: product.$id,
      title: product.title,
      description: product.description,
      price: product.price,
      imageUrl: product.imageUrl,
      sellerId: product.sellerId,
      stock: product.stock,
      quantity: quantity,
    }
    let currentCartProduct = cartProduct;
    if (currentCartProduct.length === 0){
      setCartProduct([productData]);
    } else {
      let newProduct = true;
      let newCartProduct = [];
      for (let index=0; index<currentCartProduct.length; index++){
        if (currentCartProduct.at(index).id === productData.id){
          newProduct = false;
          let newQuantity = quantity+currentCartProduct.at(index).quantity;
          let updatedProduct = {
            id: product.$id,
            title: product.title,
            description: product.description,
            price: product.price,
            imageUrl: product.imageUrl,
            sellerId: product.sellerId,
            stock: product.stock,
            quantity: newQuantity,
          }
          newCartProduct.push(updatedProduct);
        } else {
          newCartProduct.push(currentCartProduct.at(index));
        }
      }
      if (newProduct){
        newCartProduct.push(productData);
      }
      setCartProduct(newCartProduct);
    }

    toast({
      title: "Added to cart 👌"
    })
  }

  const BuyHandler = () => {
    addToCart();
    navigate('/checkout');
  }

  if (product){
    return (
      <div className='w-full bg-card p-4 flex justify-start items-start'>
        
        <div className='sm:hidden flex flex-col justify-center items-center'>
          <div className='w-full h-96'>
            <img
              src={product.imageUrl}
              alt='product image'
              className='rounded-sm w-full h-full object-cover'
            />
          </div>

          <div className=' w-full flex flex-col gap-2 h-96 justify-start items-start py-4'>
            <Title title={product.title} classname={` text-primary text-2xl`} />

            <div className='w-full'>
              <Description description={`M.R.P: `+`₹ `+product.price} classname={` py-4 text-primary text-2xl border-b border-border`} />
            </div>
            
            <QuantityButton quantity={quantity} setQuantity={setQuantity} />
    
            <div className=' flex flex-col gap-4 justify-between items-center w-full'>
              <Button className='w-full' onClick={addToCart}>Add to Cart</Button>
              <Button className='w-full' variant="outline" onClick={BuyHandler}>Proceed to Buy</Button>
            </div>
          </div>
        </div>

        <div className='hidden sm:flex justify-start items-start'>
          <div className=' w-[50%] min-h-96'>
            <img
              src={product.imageUrl}
              alt='product image'
              className='rounded-sm'
            />
          </div>

          <div className=' w-[50%] flex flex-col gap-2 min-h-96 justify-start items-start px-4'>
            <Title title={product.title} classname={` text-primary text-2xl`} />

            <div className='w-full'>
              <Description description={`M.R.P: `+`₹ `+product.price} classname={` py-4 text-primary text-2xl border-b border-border`} />
            </div>
            
            <QuantityButton quantity={quantity} setQuantity={setQuantity} />
    
            <div className=' flex flex-col gap-4 justify-between items-center w-full'>
              <Button className='w-full' onClick={addToCart}>Add to Cart</Button>
              <Button className='w-full' variant="outline" onClick={BuyHandler}>Proceed to Buy</Button>
            </div>
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
