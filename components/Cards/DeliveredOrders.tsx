import React from 'react'
import { Card, CardContent } from '../ui/card'

const DeliveredOrders = () => {
  return (
    <div>
        <Card className='flex justify-center items-center h-full'>
            <CardContent className='flex justify-center items-center h-full'>
                <p>Delivered Orders</p>
            </CardContent>
        </Card>
    </div>
  )
}

export default DeliveredOrders