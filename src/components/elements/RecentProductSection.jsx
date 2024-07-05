import { Loader, Title } from '@/components/elements';
import ProductsCard from '@/components/elements/ProductsCard';
import { useGetRecentProducts } from '@/lib/react-query/queriesAndMutations'
import React from 'react'

export default function RecentProductSection() {

  const { data: products, isPending: isGettingProducts } = useGetRecentProducts();

  if (isGettingProducts){
    return (
      <div className='w-full flex justify-center items-center bg-background'>
        <Loader />
      </div>
    )
  } else {
    return (
      <div className='min-h-96 w-[98%] flex flex-col justify-center items-center py-2 bg-background'>

        <Title title='RECENT' />

        <ul className='w-full flex justify-start items-center gap-4 p-4 overflow-y-hidden scrollbar-hidden'>

          {products.documents.map((product, index) => <li key={index}>
            <ProductsCard product={product} />
          </li>)}

        </ul>
        
      </div>
    )
  }
}
