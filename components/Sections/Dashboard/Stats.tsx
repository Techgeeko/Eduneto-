import DeliveredOrders from '@/components/Cards/DeliveredOrders'
import PendingOrders from '@/components/Cards/PendingOrders'
import TotalOrders from '@/components/Cards/TotalOrders'
import React from 'react'

const Stats = () => {
  return (
    <div className='flex justify-evenly  '>
        <TotalOrders />
        <PendingOrders />
        <DeliveredOrders />
    </div>
  )
}

export default Stats