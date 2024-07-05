import { OrdersList, SearchList, Title } from '@/components/elements'
import React from 'react'

export default function Search() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-start gap-4 p-5">

      <Title title={`Search`} classname={` text-3xl`} />

      <SearchList />

    </div>    
  )
}
