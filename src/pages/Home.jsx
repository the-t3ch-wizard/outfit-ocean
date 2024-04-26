import { Loader } from '@/components/elements';
import ProductsCard from '@/components/elements/ProductsCard';
import { useGetRecentProducts } from '@/lib/react-query/queriesAndMutations'
import React from 'react'

export default function Home() {

  const { data: products, isPending: isGettingProducts } = useGetRecentProducts();

  if (isGettingProducts){
    return (
      <div className=' w-full min-h-screen flex justify-center items-center'>
        <Loader />
      </div>
    )
  } else {
    return (
      <div className=' min-h-screen w-full flex justify-center items-center'>
        
        <ul className=' flex flex-wrap justify-start items-start gap-4 p-8'>
          {products.documents.map((product, index) => <li key={index}>
            <ProductsCard product={product} />
          </li>)}
        </ul>
        
      </div>
    )
  }

}
