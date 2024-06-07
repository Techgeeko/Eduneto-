import { Document } from "mongodb";
import { Schema, models, model } from "mongoose"

import { ObjectId } from 'mongoose';

export interface IOrder extends Document{
    customerName: string;
    customerEmail: string;
    customerPhone?: string;
    orderDate?: Date;
    total: number;
    products: ObjectId[];
    status?: 'pending' | 'delivered' | 'cancelled';
    type: 'PDF' | 'Physical' | 'PNG';
    createdAt?: Date;
    updatedAt?: Date;
}


const OrderSchema = new Schema (
    {
        customerName: { type: String, required: true },
        customerEmail: { type: String, required: true },
        customerPhone: { type: String,},
        orderDate: { type: Date, default: Date.now },
        total: { type: Number, required: true },
        products: [
            { type: Schema.Types.ObjectId, ref: 'Product' },
        ],
        status: { type: String, enum: ['pending', 'delivered', 'cancelled'],
            default: 'pending',
        },
        type: {
            type: String, enum: ['PDF', 'Physical', 'PNG'],
            required: true,
        }, 
    },
    {
        timestamps: true,
    }
);

const Order = models?.Order || model('Order', OrderSchema);

export default Order;