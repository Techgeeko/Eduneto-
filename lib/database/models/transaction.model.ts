import { Schema, model, Document, models } from 'mongoose';

// Step 1: Define the Transaction Schema
const TransactionSchema = new Schema(
  {
    transactionId: { 
        type: String,
        required: true, 
        unique: true 
    },
    reference: { 
        type: String, 
        required: true, 
        unique: true 
    },
    amount: { 
        type: Number, 
        required: true 
    },
    currency: { 
        type: String, 
        required: true 
    },
    status: { 
        type: String, 
        enum: ['pending', 'success', 'failed'], 
        required: true 
    },
    customerEmail: { 
        type: String, 
        required: true 
    },
    customerId: { 
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    metadata: { 
        type: Schema.Types.Mixed 
    }, // Metadata can be any type
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
    updatedAt: { 
        type: Date, 
        default: Date.now 
    },
  },
);


// Step 3: Create the Mongoose Model
const Transaction = models?.Transaction || model('Transaction', TransactionSchema);

export default Transaction;
