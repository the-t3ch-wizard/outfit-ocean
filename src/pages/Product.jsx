import { Loader, ProductsDetails } from '@/components/elements'
import { useGetProductById } from '@/lib/react-query/queriesAndMutations';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Product() {
  const id = useParams();

  const [product, setProduct] = useState(undefined);

  const { mutateAsync: getProductById, isPending: isGettingProduct } = useGetProductById();

  useEffect(() => {
    getProductById(id)
    .then((prod) => setProduct(prod))
    .catch((err) => console.log(err))
  }, [id])

  if (isGettingProduct){
    return (
      <div className=' w-full min-h-screen flex justify-center items-center'>
        <Loader />
      </div>
    )
  } else {
    return (
      <div className=' w-full min-h-screen justify-center items-center'>
  
        <ProductsDetails product={product} />
  
      </div>
    )
  }

}
