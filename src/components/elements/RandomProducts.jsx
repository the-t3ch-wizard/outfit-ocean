import { Loader, ProductsCard } from '@/components/elements';
import { useGetRandomProducts } from '@/lib/react-query/queriesAndMutations'
import React from 'react'

export default function RandomProducts() {
  const { data: products, isPending: isGettingProducts } = useGetRandomProducts();
  
  if (isGettingProducts){
    return (
      <div className=' w-full min-h-screen flex justify-center items-center'>
        <Loader />
      </div>
    )
  } else {
    return (
      <div className=' w-full p-4 flex justify-start items-start flex-wrap gap-4'>
        {products.documents.map((product, index) => <ProductsCard key={index} product={product} />)}
      </div>
    )
  }
}
