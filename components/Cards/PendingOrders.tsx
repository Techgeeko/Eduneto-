import React from 'react'
import { Card, CardContent } from '../ui/card'

const PendingOrders = () => {
  return (
    <div>
        <Card>
            <CardContent className='flex justify-center items-center h-full'>
                <p>Pending Orders</p>
            </CardContent>
        </Card>
    </div>
  )
}

export default PendingOrders