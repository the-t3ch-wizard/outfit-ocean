import { Loader } from '@/components/elements';
import { useGetRecentOrders } from '@/lib/react-query/queriesAndMutations'
import React, { useEffect, useState } from 'react'

export default function OrdersList() {
  const { mutateAsync: getRecentOrder, isPending: isGettingRecentOrders } = useGetRecentOrders();

  const [order, setOrder] = useState([]);
  
  useEffect(() => {
    getRecentOrder()
    .then((orders) => setOrder(orders))
    .catch((err) => console.log(err))
  }, [])

  if (isGettingRecentOrders){
    return (
      <div className='w-full flex justify-center items-center'>
        <Loader /> 
      </div>
    )
  } else {
    return (
      <div className=' w-full flex justify-start items-start p-4 border border-border rounded-md'>
        <ul className=' w-full flex flex-col'>
          {order.map((o) => (
            <li className=' w-full flex gap-4'>
              <p className=' w-[80%] overflow-hidden'>{o.productTitle}</p>
              <p>{o.quantity}</p>
              <p>₹{o.price}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

}
