import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { useGetRecentProducts } from '@/lib/react-query/queriesAndMutations';
import { Loader, ProductsCard, Title } from '.';

export default function SearchList() {

  const { data: products, isPending: isGettingProducts } = useGetRecentProducts();

  return (
    <div className=' w-full flex flex-col gap-4 justify-start items-start p-4 border border-border rounded-md'>
      
      <div className='w-full flex justify-between gap-4'>
        <Input type="text" placeholder="Search as per the filter" className={` w-[70%]`} />
        <div className=' w-[30%] flex justify-end gap-8'>
          <select className=' bg-background text-primary '>
            <option value="recent">Recently uploaded</option>
            <option value="name">Name</option>
          </select>
          <Button className="bg-background">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className=' w-6 fill-primary'><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>
          </Button>
        </div>
      </div>

      {
        isGettingProducts ?
        <div className='w-full flex justify-center items-center bg-background'>
          <Loader />
        </div> :
        <div className='min-h-96 w-[98%] flex flex-col justify-center items-center py-2 bg-background'>

          <ul className='w-full flex justify-start items-center gap-4 p-4 overflow-y-hidden scrollbar-hidden'>

            {products.documents.map((product, index) => <li key={index}>
              <ProductsCard product={product} />
            </li>)}

          </ul>
          
        </div>
      }

    </div>
  )
}
